import { User } from "@prisma/client";

export type PayloadType = {
  id: string;
  role: string;
};

export type AdditionalContext = {
  Variables: {
    user: User;
    role: string;
  };
};
