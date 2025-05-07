import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // In a real app, we would use a database
  // For this MVP, we'll use an in-memory store
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...createUserDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return undefined;
    
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: new Date().toISOString(),
    };
    
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: string): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return undefined;
    
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }
}