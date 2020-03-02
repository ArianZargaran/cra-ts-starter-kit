import { create } from "@storybook/theming/create";
import { isDarkMode } from "../src/utils/isDarkMode";

export default create({
  base: isDarkMode() ? "dark" : "light",
  brandTitle: "wtf Storybook",
  brandUrl: "wtf-repo-url",
  brandImage:
    "https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEsL0EX72Q6S7TgfQYQBQpkz5xM6Qt8VXd_xJGg_ziCFib8BodarTVrzIWCp72ioWw/300Logo.png?format=750w"
});
