export const typeDefs = ["type User {\n  id: Int!\n  name: String!\n  email: String!\n  verifiedEmail: Boolean!\n  password: String!\n  sex: String!\n  phone: String!\n  address: String!\n  detailedAddress: String!\n  dateOfBirth: String!\n  isSmsReception: Boolean!\n  isEmailRecption: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  verifiedEmail: boolean;
  password: string;
  sex: string;
  phone: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
  isSmsReception: boolean;
  isEmailRecption: boolean;
  createdAt: string;
  updatedAt: string;
}
