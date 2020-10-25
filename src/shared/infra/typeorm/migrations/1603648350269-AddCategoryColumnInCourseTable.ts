import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddCategoryColumnInCourseTable1603648350269
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses',
      new TableColumn({
        name: 'categoryId',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'courses',
      new TableForeignKey({
        name: 'categoryId',
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
        columnNames: ['categoryId'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses', 'categoryId');
    await queryRunner.dropColumn('courses', 'categoryId');
  }
}
