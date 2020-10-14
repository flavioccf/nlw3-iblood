import {
  MigrationInterface,
  QueryRunner,
  Table
} from "typeorm";

export class createBloodDonations1602639375051 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise < void > {
    await queryRunner.createTable(new Table({
      name: 'blood_donations',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'work_hours',
          type: 'text',
          default: null
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise < void > {
    await queryRunner.dropTable('blood_donations');
  }

}