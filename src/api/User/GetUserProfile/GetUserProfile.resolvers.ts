import { GetUserProfileResponse } from "./../../../types/graph.d";
import { Resolvers } from "./../../../types/resolvers.d";
import privateResolver from "../../../utils/privateResolver";
const resolvers: Resolvers = {
  Query: {
    GetUserProfile: privateResolver(
      (_, __, { req }): GetUserProfileResponse => {
        const { user } = req;
        try {
          if (!user) {
            return {
              ok: false,
              user: null,
              error: "Not found User",
            };
          }
          return {
            ok: true,
            user,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            user: null,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
