export { theme1 as deepPurpleTheme } from "./deeppurple";
export { theme as redTheme } from "./red";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    menu2: true;
  }
}
