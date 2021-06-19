// import dB from '../../common/inMemoryDb';
import { getRepository } from 'typeorm';
import IRepository from '../Interfaces/IRepository';
import User from './user.entity';
// import Task from '../tasks/task.model';

class UserRepository implements IRepository<User> {
  getAll = async (): Promise<User[]> => {
    const repo = getRepository(User);
    return repo.find();
  };

  get = async (id: string): Promise<User | undefined> => {
    const repo = getRepository(User);
    return repo.findOne({ id });
  };

  create = async (user: User): Promise<User | undefined> => {
    const repo = getRepository(User);
    await repo.insert(user);
    return user;
  };

  remove = async (id: string): Promise<void> => {
    const repo = getRepository(User);
    // const taskRepo = getRepository(Task);
    repo.delete(id);
    // taskRepo.update({ userId: id }, { userId: null });
  };

  update = async (user: User): Promise<User | undefined> => {
    const repo = getRepository(User);
    repo.update({ id: user.id }, { ...user });
    return user;
  };
}

export const userRepo = new UserRepository();
