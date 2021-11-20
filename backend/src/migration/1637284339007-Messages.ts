import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Messages1637284339007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
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
            name: "description",
            type: "text",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
            onUpdate: "CASCADE",
          },
          {
            name: "room_id",
            type: "uuid",
            isNullable: false,
            onUpdate: "CASCADE",
          },
        ],
      })
    );

    await queryRunner.createForeignKeys("messages", [
      new TableForeignKey({
        columnNames: ["room_id"],
        referencedTableName: "rooms",
        referencedColumnNames: ["id"],
      }),
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
