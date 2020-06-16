import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Md5 } from "ts-md5";

class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
  @Column({ type: "text" })
  email: string;
  @Column({ type: "text" })
  password: string;
  @Column({ type: "text" })
  phoneNumber: string;
  @Column({ type: "boolean", default: false })
  verified: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

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

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }
}

export default Admin;
