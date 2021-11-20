import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column("varchar")
  public name!: string;

  @Column("varchar")
  public email!: string;

  @Column("varchar")
  public password!: string;

  @CreateDateColumn()
  public createdAt!: Date;
}
