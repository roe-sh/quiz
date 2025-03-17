import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    username: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ type: 'enum', enum: ['student', 'admin'] })
    role: 'student' | 'admin';
  
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
  