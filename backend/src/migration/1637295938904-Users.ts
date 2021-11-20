import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1637205938904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(255)",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar(180)",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
