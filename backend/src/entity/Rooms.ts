import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column("text")
  public name!: string;

  @CreateDateColumn()
  public createdAt!: Date;
}
