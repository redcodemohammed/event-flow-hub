import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { AccountsService } from './services/accounts/accounts.service';
import { SessionsService } from './services/sessions/sessions.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [UsersService, AccountsService, SessionsService],
  controllers: [AuthController],
})
export class AuthModule {}
