import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTags1624455968564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
