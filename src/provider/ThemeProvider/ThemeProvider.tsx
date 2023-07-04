// src/ThemeProvider.tsx
import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions,
} from "@mui/material";
import { CssBaseline } from "@mui/material";

const basic: ThemeOptions = {
  palette: {
    primary: {
      main: "#286353",
    },
    secondary: {
      main: "#c2185b",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#333",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "200px",
    },
    h2: {
      fontSize: "150px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1000,
      xl: 1536,
    },
  },
};

const dark: ThemeOptions = {
  palette: {
    primary: {
      main: "#6d8b90",
    },
    secondary: {
      main: "#8c0032",
    },
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "200px",
    },
    h2: {
      fontSize: "150px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1000,
      xl: 1536,
    },
  },
};

export interface SharedThemeProviderProps {
  children: React.ReactNode;
  themeType?: "basic" | "dark";
}

const ThemeProvider: React.FC<SharedThemeProviderProps> = ({
  children,
  themeType = "basic",
}) => {
  const theme = themeType === "dark" ? createTheme(dark) : createTheme(basic);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
