import Lesson from '@modules/lesson/infra/typeorm/entities/Lesson';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Category from './Category';

@Entity('courses')
class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  categoryId: string;

  @OneToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @Column()
  image: string;

  @OneToMany(() => Lesson, lesson => lesson.course)
  lessons: Lesson[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Course;
