import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Quiz } from '../quizzes/quiz.entity'; 

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question_text: string;

  @Column({ type: 'enum', enum: ['multiple_choice', 'true_false'] })
  question_type: 'multiple_choice' | 'true_false';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Quiz)
  @JoinColumn({ name: 'quiz_id' })  
  quiz: Quiz;
}
