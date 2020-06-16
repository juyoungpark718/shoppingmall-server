import {
  AdminSignUpMutationArgs,
  AdminSignUpReponse,
} from "./../../../types/graph.d";
import { Resolvers } from "./../../../types/resolvers.d";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolver: Resolvers = {
  Mutation: {
    AdminSignUp: async (
      _,
      args: AdminSignUpMutationArgs
    ): Promise<AdminSignUpReponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should log in instead",
            token: null,
          };
        } else {
          const newUser = await User.create({ ...args });
          const token = createJWT(newUser.id);
          return {
            ok: true,
            error: null,
            token,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolver;
