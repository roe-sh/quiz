import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn,
  } from 'typeorm';
  import { User } from '../../users/user.entity';
  import { Quiz } from '../quizzes/quiz.entity'; 
  
  @Entity('scores')
  export class Score {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User)
    user: User;
  
    @ManyToOne(() => Quiz)
    quiz: Quiz;
  
    @Column()
    score: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  