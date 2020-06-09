import {
  DeleteProductMutationArgs,
  DeleteProductResponse,
} from "./../../../types/graph.d";
import { Resolvers } from "./../../../types/resolvers.d";
import Product from "../../../entities/Product";

const resolvers: Resolvers = {
  Mutation: {
    DeleteProduct: async (
      _,
      args: DeleteProductMutationArgs
    ): Promise<DeleteProductResponse> => {
      try {
        const product = await Product.findOne({ ...args });
        if (!product) {
          return {
            ok: false,
            error: "Not found product",
          };
        }
        product.remove();
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
