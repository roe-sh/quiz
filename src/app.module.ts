import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { OptionsModule } from './modules/options/options.module';
import { ResponsesModule } from './modules/responses/responses.module';
import { ScoresModule } from './modules/scores/scores.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '828828',
      database: 'quiz_system',
      autoLoadEntities: true,
      synchronize: false, 
    }),
    UsersModule,
    QuizzesModule,
    QuestionsModule,
    OptionsModule,
    ResponsesModule,
    ScoresModule,
    AuthModule,
  ],
})
export class AppModule {}
