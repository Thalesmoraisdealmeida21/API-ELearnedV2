import Category from '../infra/typeorm/entities/Category';

export default interface ICreateCourseDTO {
  name: string;
  image: string;
  category: Category;
}
