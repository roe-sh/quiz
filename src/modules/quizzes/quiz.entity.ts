import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/user.entity';

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })  
  created_by: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by' }) 
  updated_by: User;
}
