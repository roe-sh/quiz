import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
  import { User } from '../../users/user.entity';
  import { Quiz } from '../quizzes/quiz.entity'; 
  import { Question } from '../questions/question.entity'; 
  import { Option } from '../options/option.entity'; 
  
  
@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })  
  user: User;

  @ManyToOne(() => Quiz)
  @JoinColumn({ name: 'quiz_id' })  
  quiz: Quiz;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })  
  question: Question;

  @ManyToOne(() => Option)
  @JoinColumn({ name: 'selected_option_id' })  
  selected_option: Option;
}