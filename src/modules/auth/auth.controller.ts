import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    if (!body) {
      return { error: 'No data provided' }; 
    }
  
    const { username, email, password } = body;
    return this.authService.register(username, email, password);
  }
  
  @Post('logout')
logout() {
  return { message: 'Logged out successfully.' };
}


  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }
}
