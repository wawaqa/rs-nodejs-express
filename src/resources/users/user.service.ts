import {IServiceBasic} from '../Interfaces/IService.js';
import { userRepo } from './user.memory.repository.js';
import User, { IUserDTO } from './user.model.js';

class UserService implements IServiceBasic<IUserDTO> {
  getAll = async (): Promise<IUserDTO[]> => {
    const users = await userRepo.getAll();
    return users.map(User.toResponse);
  };

  get = async (id: string): Promise<IUserDTO | undefined> => {
    const user = await userRepo.get(id);
    if (user) return User.toResponse(user);
    return undefined;
  };

  create = async (userData: User): Promise<IUserDTO | undefined> => {
    const { name, login, password } = userData;
    const newUser = new User({ name, login, password });
    const createdUser = await userRepo.create(newUser);
    if (createdUser) return User.toResponse(createdUser);
    return undefined;
  };

  update = async (userData: User): Promise<IUserDTO | undefined> => {
    const { name, login, password, id } = userData;
    const user = new User({ name, login, password, id });
    const updatedUser = await userRepo.update(user);
    if (updatedUser) return User.toResponse(updatedUser);
    return undefined;
  };

  remove = async (id: string): Promise<void> => userRepo.remove(id);
}

export const userService = new UserService();
