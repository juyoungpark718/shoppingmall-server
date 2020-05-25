import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { IsEmail } from "class-validator";
import { Md5 } from "ts-md5";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  @IsEmail()
  email: string;

  @Column({ type: "boolean", default: false })
  verifiedEmail: boolean;

  @Column()
  password: string;

  @Column({ type: "text" })
  sex: string;

  @Column({ type: "text" })
  phone: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text" })
  detailedAddress: string;

  @Column({ type: "text" })
  dateOfBirth: string;

  @Column({ type: "boolean", default: false })
  isSmsReception: boolean;

  @Column({ type: "boolean", default: false })
  isEmailRecption: boolean;

  private hashPassword(password: string): string {
    const hashedPassword: string = Md5.hashStr(password).toString();
    return hashedPassword;
  }

  public comparePassword(password: string): boolean {
    if (this.hashPassword(password) === this.password) {
      return true;
    } else {
      return false;
    }
  }

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }
}

export default User;
