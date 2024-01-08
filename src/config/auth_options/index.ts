import { VendureConfig } from "@vendure/core";
import { getEnvs } from "../../getEnvs";

const { SUPERADMIN_PASSWORD, SUPERADMIN_USERNAME, COOKIE_SECRET, APP_ENV } =
  getEnvs();

const IS_DEV = APP_ENV === "dev";

export const authOptions: VendureConfig["authOptions"] = {
  tokenMethod: ["bearer", "cookie"],
  superadminCredentials: {
    identifier: SUPERADMIN_USERNAME,
    password: SUPERADMIN_PASSWORD,
  },
  cookieOptions: {
    secret: COOKIE_SECRET,
    ...(!IS_DEV
      ? {
          domain: ".aexol.com",
          sameSite: "lax",
        }
      : {}),
  },
};