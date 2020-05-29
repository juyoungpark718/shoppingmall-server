import { Resolvers } from "src/types/resolvers";
import User from "../../../entities/User";
import { GetUsersReponse } from "../../../types/graph";

const resolvers: Resolvers = {
  Query: {
    GetUsers: async (_, __, { req }): Promise<GetUsersReponse> => {
      try {
        const users = await User.find();
        if (users) {
          return {
            ok: true,
            error: null,
            users,
          };
        } else {
          return {
            ok: false,
            error: "Not found users",
            users: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          users: null,
        };
      }
    },
  },
};

export default resolvers;
