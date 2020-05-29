import {
  CompleteEmailVerificationMutationArgs,
  CompleteEmailVerificationResponse,
} from "./../../../types/graph.d";
import { Resolvers } from "./../../../types/resolvers.d";
import Verification from "../../../entities/Verification";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    CompleteEmailVerification: async (
      _,
      args: CompleteEmailVerificationMutationArgs
    ): Promise<CompleteEmailVerificationResponse> => {
      const { email, key } = args;
      try {
        const verification = await Verification.findOne({
          payload: email,
          key,
        });
        if (!verification) {
          return {
            ok: false,
            error: "Not invalid key",
            token: null,
          };
        } else {
          verification.verified = true;
          verification.save();
        }
      } catch (error) {
        return {
          ok: false,
          error: error.messages,
          token: null,
        };
      }
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: "Not invalid Email",
            token: null,
          };
        }
        user.verifiedEmail = true;
        user.save();
        return {
          ok: true,
          error: null,
          token: createJWT(user.id),
        };
      } catch (error) {
        return {
          ok: false,
          error: error.messages,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
