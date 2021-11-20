import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Messages {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column("text")
  public description!: string;

  @Column("uuid")
  public user_id!: string;

  @Column("uuid")
  public room_id!: string;
}
