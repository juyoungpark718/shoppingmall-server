import {
  StartEmailVerificationMutationArgs,
  StartEmailVerificationResponse,
} from "./../../../types/graph.d";
import { Resolvers } from "./../../../types/resolvers.d";
import Verification from "../../../entities/Verification";
const resolvers: Resolvers = {
  Mutation: {
    StartEmailVerification: async (
      _,
      args: StartEmailVerificationMutationArgs
    ): Promise<StartEmailVerificationResponse> => {
      const { email } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: email,
        });
        if (existingVerification) {
          existingVerification.remove();
        }
        // 새로운 Verification을 만들고 그 verification을 email로 보내야함.
        // await Verification.create({ target: "EMAIL", payload: email }).save();
        const newVerification = await Verification.create({
          target: "EMAIL",
          payload: email,
        }).save();
        console.log(newVerification.key);
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
