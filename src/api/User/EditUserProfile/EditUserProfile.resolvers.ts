import {
  EditUserProfileMutationArgs,
  EditUserProfileResponse,
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    EditUserProfile: privateResolver(
      async (
        _,
        args: EditUserProfileMutationArgs,
        {
          req: {
            user: { id },
          },
        }
      ): Promise<EditUserProfileResponse> => {
        const { address, detailedAddress } = args;
        try {
          const user = await User.findOne({ id });
          if (!user) {
            return {
              ok: false,
              error: "Not Found User",
            };
          }
          user.address = address;
          user.detailedAddress = detailedAddress;
          user.save();
          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
