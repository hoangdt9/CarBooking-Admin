import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { createStorage } from "./utils/LocalStorage";
import { viVN } from "@mui/material/locale";

// color design tokens export
type modeProps = "dark" | "light";

/* Primary: 2E65F3 */

export const tokens = (mode: modeProps) => ({
  ...(mode === "dark"
    ? {
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#666666",
          500: "#ffffff",
          600: "#f1f1f1",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        blue: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        black: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#d0d1d5", // manually changed
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#23b56c", // manually changed
          600: "#41d38a", // manually changed
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#1A2027", // manually changed
          200: "#122861",
          300: "#1c3d92",
          400: "#2551c2",
          500: "#2e65f3",
          600: "#2E65F3", // manually changed
          700: "#82a3f8",
          800: "#abc1fa",
          900: "#d5e0fd",
        },
      }
    : {
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#F7F7F9",
          500: "#f1f1f1",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        blue: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        black: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#336CFB", // custom change
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#23b56c", // manually changed
          600: "#41d38a", // manually changed
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#D3ECFE", // manually changed
          200: "#abc1fa",
          300: "#82a3f8",
          400: "#5884f5",
          500: "#2e65f3",
          600: "#2551c2",
          700: "#1c3d92",
          800: "#122861",
          900: "#091431",
        },
      }),
});

// mui theme settings
export const themeSettings: any = (mode: any) => {
  const colors = tokens(mode);
  const theme = createTheme();

  return {
    palette: {
      ...colors,
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#23b56c",
              dark: "#05974e",
              light: "#41d38a",
            },
            // palette values for dark mode
            // secondary: {
            //   main: colors.grey[900],
            // },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            primary: {
              main: "#23b56c",
              dark: "#05974e",
              light: "#41d38a",
            },

            // palette values for light mode
            error: {
              main: "#dc3545",
              dark: "#dc3545",
              light: "#dc3545",
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      // body1: {
      //   fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      //   fontSize: 30,
      // },
    },
    spacing: 8,
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "html, body, #root": {
            height: "100%",
          },
        },
      },
      MuiButton: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
          color: "rgb(40, 42, 43)",
          transition: defaultTheme.transitions.create(
            ["background-color", "box-shadow", "border", "color"],
            {
              duration: defaultTheme.transitions.duration.short,
            }
          ),
        },
        text: {
          padding: "6px 14px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlinedPrimary: {
          border: "2px solid #027AC5",
          "&:hover": {
            border: "2px solid rgb(1, 85, 137)",
          },
        },
        startIcon: {
          marginRight: "6px",
        },
      },
      MuiTypography: {
        body1: {
          color: "rgb(40, 42, 43)",
        },
      },
      MuiInputBase: {
        root: {},
      },
      MuiSelect: {
        root: {
          padding: "0.85em",
        },
      },
      MuiDialogActions: {
        root: {
          padding: "16px",
        },
      },
      MuiTextField: {
        root: {
          color: "rgb(40, 42, 43)",
        },
      },
      MuiInputLabel: {
        root: {
          color: "rgb(40, 42, 43)",
          marginBottom: "0.2em",
          fontWeight: 500,
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: "rgb(136, 140, 142)",
        },
      },
      MuiSwitch: {
        root: {
          width: 42,
          height: 18,
          padding: 0,
          display: "flex",
          marginRight: "0.5em",
        },
        switchBase: {
          padding: 2,
          color: "#FFFFFF",
          "&$checked": {
            transform: "translateX(18px)",
            top: "50%",
            marginTop: -24 / 2,
            "&$disabled": {
              "& + $track": {
                opacity: "0.5",
              },
            },
          },
        },
        colorSecondary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: "FFFFF",
          },
        },
        thumb: {
          width: 14,
          height: 14,
          boxShadow: "none",
        },
        track: {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor: "#E1E3EA",
          "$checked$checked + &": {
            opacity: 1,
            backgroundColor: "#14B053",
          },
        },
      },
    },
    brand: "#E22525",
    footerHeight: 72,
    mobileFooterHeight: 56,
    sidebarWidth: 300,
    sidebarMobileHeight: 90,
    sidebarMobilePadding: 8,
    participantBorderWidth: 2,
    mobileTopBarHeight: 52,
    rightDrawerWidth: 684,
    galleryViewBackgroundColor: "#121C2D",
  };
};

// context for color mode
export const ColorModeContext: any = createContext({
  toggleColorMode: () => null,
});

export const useMode: any = () => {
  const storage = createStorage("cld");
  const themeMode: string = storage.get("themeMode") ?? "light";
  const [mode, setMode] = useState(themeMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
        const storage = createStorage("cld");
        storage.set("themeMode", mode === "light" ? "dark" : "light");
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode), viVN), [mode]);
  return [theme, colorMode];
};

declare module "@mui/material/styles" {
  interface Theme {
    sidebarWidth: number;
    sidebarMobileHeight: number;
    brand: string;
    footerHeight: number;
    mobileTopBarHeight: number;
    mobileFooterHeight: number;
    sidebarMobilePadding: number;
    participantBorderWidth: number;
    rightDrawerWidth: number;
    galleryViewBackgroundColor: string;
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    sidebarWidth?: number;
    sidebarMobileHeight?: number;
    brand: string;
    footerHeight: number;
    mobileTopBarHeight: number;
    mobileFooterHeight: number;
    sidebarMobilePadding: number;
    participantBorderWidth: number;
    rightDrawerWidth?: number;
    galleryViewBackgroundColor: string;
  }
}

const defaultTheme = createTheme();
