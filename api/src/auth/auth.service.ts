import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // In a real application, we would hash passwords and compare them
    // For this MVP, we'll simulate password validation
    const isPasswordValid = await this.comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Strip password before returning user
    const { password: _, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    // Check if the user already exists
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }
    
    // Hash the password
    const hashedPassword = await this.hashPassword(registerDto.password);
    
    // Create a new user
    const newUser = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });
    
    // Generate avatar URL
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(registerDto.name)}&background=4F46E5&color=fff`;
    
    // Return user without password
    const { password, ...result } = newUser;
    
    // Generate token
    const payload = { email: newUser.email, sub: newUser.id };
    return {
      user: { ...result, avatar },
      token: this.jwtService.sign(payload),
    };
  }

  async getProfile(userId: string) {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    
    // Strip password
    const { password, ...result } = user;
    return result;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  private async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    // For demo purposes, we'll just compare the raw passwords
    // In a real app, we would use bcrypt.compare
    return password === 'password123';
  }
}