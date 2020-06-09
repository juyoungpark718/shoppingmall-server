import { Resolvers } from "src/types/resolvers";
import { AddProductMutationArgs, AddProductResponse } from "src/types/graph";
import Product from "../../../entities/Product";

const resolvers: Resolvers = {
  Mutation: {
    AddProduct: async (
      _,
      args: AddProductMutationArgs
    ): Promise<AddProductResponse> => {
      try {
        const newProduct = await Product.create({ ...args });
        newProduct.save();
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.messages,
        };
      }
    },
  },
};

export default resolvers;
