import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

async function getUserById(userId: string): Promise<User | null> {
  const queriedUser = await userRepository.findOne({
    select: {
      userId: true,
      username: true,
      isPro: true,
      isAdmin: true,
      links: true,
    },
    where: { userId },
  });
  return queriedUser;
}

async function getUserByUsername(username: string): Promise<User | null> {
    // TODO: Get the user by where the username matches the parameter
    // This should also retrieve the `links` relation
}

async function addNewUser(username: string, passwordHash: string): Promise<User | null> {
    // TODO: Add the new user to the database
}

export {};
