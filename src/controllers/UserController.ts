import { Request, Response } from 'express';
import argon2 from 'argon2';
import { addMinutes, isBefore, parseISO, formatDistanceToNow } from 'date-fns';
import {
  addNewUser,
  getUserById,
  getUserByUsername,
} from '../models/UserModel';
import { parseDatabaseError } from '../utils/db-utils';

async function registerUser(req: Request, res: Response): Promise<void> {
    // TODO: Implement the registration code
    // Make sure to check if the user with the given username exists before attempting to add the account
    // Make sure to hash the password before adding it to the database
    // Wrap the call to `addNewUser` in a try/catch like in the sample code
    const { username, password } = req.body as AuthRequest;

    // IMPORTANT: Hash the password
    const passwordHash = await argon2.hash(password);

    try {
      // IMPORTANT: Store the `passwordHash` and NOT the plaintext password
      const newUser = await addNewUser(username, passwordHash);
      console.log(newUser);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      const databaseErrorMessage = parseDatabaseError(err);
      res.status(500).json(databaseErrorMessage);
    }
}

export {registerUser};
