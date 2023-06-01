import { useEffect, useState } from "react";
import type { AppContext, AppProps } from "next/app";
import "@/styles/globals.css";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme, customTheme } from "@/themes";
import Cookies from "js-cookie";

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
  
    const selectedTheme: Theme =
      cookieTheme === "light" ? lightTheme : cookieTheme === "dark" ? darkTheme : customTheme;
    setCurrentTheme(selectedTheme);
  }, [])
  


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const validThemes = ["light", "dark", "custom"];

  const { theme } = appContext.ctx.req
    ? (appContext.ctx.req as any).cookies
    : { theme: "light" };

  return {
    theme: validThemes.includes(theme) ? theme : "light",
  };
};
