import {
    MigrationInterface,
    QueryRunner,
    Table
} from "typeorm";

export class createImages1602641884556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise < void > {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [{
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }, {
                name: 'path',
                type: 'varchar'
            }, {
                name: 'blood_donation_id',
                type: 'integer'
            }],
            foreignKeys: [
                {
                    name: 'ImageBloodDonation',
                    columnNames: ['blood_donation_id'],
                    referencedTableName: 'blood_donations',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise < void > {
        await queryRunner.dropTable('images');
    }

}