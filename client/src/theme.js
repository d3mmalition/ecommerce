import { createTheme } from '@mui/material/styles'

export const shades = {
primary: {
    100: "#e6f1d1",
    200: "#cee3a3",
    300: "#b5d474",
    400: "#9dc646",
    500: "#84b818",
    600: "#6a9313",
    700: "#4f6e0e",
    800: "#354a0a",
    900: "#1a2505"
},
secondary: {
    100: "#fff7cc",
    200: "#ffef99",
    300: "#ffe766",
    400: "#ffdf33",
    500: "#ffd700",
    600: "#ccac00",
    700: "#998100",
    800: "#665600",
    900: "#332b00"
},
background: {
          100: "#dee6d5",
          200: "#becdac",
          300: "#9db582",
          400: "#7d9c59",
          500: "#5c832f",
          600: "#4a6926",
          700: "#374f1c",
          800: "#253413",
          900: "#121a09"
},
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        
    },
typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 48,
    }

}
})



