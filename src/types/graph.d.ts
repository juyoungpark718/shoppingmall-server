export const typeDefs = ["type AddProductResponse {\n  ok: Boolean!\n  error: String!\n}\n\ntype Mutation {\n  AddProduct(name: String!, price: Int!, description: String!): AddProductResponse!\n  CompletePhoneVerification(phoneNumber: String!, key: String!): CompletePhoneVerificationResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(name: String!, email: String!, password: String!, sex: String!, phone: String!, address: String!, detailedAddress: String!, dateOfBirth: String!): EmailSignUpResponse!\n  StartPhoneVerification(phoneNumber: String!): StartPhoneVerificationResponse!\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  price: Int!\n  description: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  product: Product\n  user: User\n}\n\ntype CompletePhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n  verifiedEmail: Boolean!\n  verifiedPhone: Boolean!\n  password: String!\n  sex: String!\n  phoneNumber: String!\n  address: String!\n  detailedAddress: String!\n  dateOfBirth: String!\n  isSmsReception: Boolean!\n  isEmailRecption: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  product: Product | null;
  user: User | null;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  password: string;
  sex: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
  isSmsReception: boolean;
  isEmailRecption: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  AddProduct: AddProductResponse;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
}

export interface AddProductMutationArgs {
  name: string;
  price: number;
  description: string;
}

export interface CompletePhoneVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  name: string;
  email: string;
  password: string;
  sex: string;
  phone: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
}

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface AddProductResponse {
  ok: boolean;
  error: string;
}

export interface CompletePhoneVerificationResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}
