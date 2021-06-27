import { IServiceBasic } from '../Interfaces/IService';
import { userRepo } from './user.repository';
import User, { IUserDTO } from './user.entity';

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
    const createdUser = await userRepo.create(userData);
    if (createdUser) return User.toResponse(createdUser);
    return undefined;
  };

  update = async (userData: User): Promise<IUserDTO | undefined> => {
    const updatedUser = await userRepo.update(userData);
    if (updatedUser) return User.toResponse(updatedUser);
    return undefined;
  };

  remove = async (id: string): Promise<void> => userRepo.remove(id);
}

export const userService = new UserService();
