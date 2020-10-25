import Course from '@modules/course/infra/typeorm/entities/Course';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('lessons')
class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  courseId: string;

  @OneToMany(() => Course, course => course.lessons)
  @JoinColumn({
    name: 'courseId',
  })
  course: Course;

  @Column()
  video: string;

  @Column()
  duration: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Lesson;
