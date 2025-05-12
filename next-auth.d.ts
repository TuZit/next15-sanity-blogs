import {
  Session as NextAuthSesstion,
  JWT as NextAuthJWT,
} from "next-auth";

declare module "next-auth" {
    interface Session extends NextAuthSesstion {
        id?: string
    }
    interface JWT extends NextAuthJWT {
      id?: string;
    }
}