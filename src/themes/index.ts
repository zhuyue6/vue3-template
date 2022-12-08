import darkStyles from "../styles/themes/dark.module.scss";
import lightStyles from "../styles/themes/light.module.scss";

interface Theme {
  [index: string]: string;
}

interface Themes {
  [index: string]: Theme;
}

const themes: Themes = {
  dark: darkStyles,
  light: lightStyles,
};

export function setTheme(theme: keyof typeof themes) {
  const styles: Theme = themes[theme];
  const htmlElement: HTMLElement = document.querySelector(
    ":root"
  ) as HTMLElement;
  htmlElement.style.setProperty("color-scheme", theme as string);
  for (const [key, value] of Object.entries(styles)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}
