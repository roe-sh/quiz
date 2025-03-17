import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Question } from '../questions/question.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  option_text: string;

  @Column({ default: false })
  is_correct: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })  
  question: Question;
}
