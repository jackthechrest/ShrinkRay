import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

async function addNewUser(username: string, passwordHash: string): Promise<User>  {
   // Create the new user object
  let newUser = new User();
  newUser.username = username;
  newUser.passwordHash = passwordHash;
  
  newUser = await userRepository.save(newUser);

  return newUser;
}

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
    const queriedUser = await userRepository.findOne({
    select: {
      userId: true,
      username: true,
      isPro: true,
      isAdmin: true,
      links: true,
    },
    where: { username },
    });
    return queriedUser;
}

export {addNewUser, getUserById, getUserByUsername};
