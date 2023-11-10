import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


export const COLORS = {
    // base colors

    primary: "#173156",
    secondary: "#60ADB7",

    inputBlue: "#EDF5F7",

     white: "#FAFFFF", 
     darkgray: "#565656",
     gray: "#ccc",
     black: "#000000",
    


    transparent: "transparent",

    //snackbar colors
    red: '#c72c41',
    darkRed: '#801336',

    greens: '#0c7040',
    darkGreen: '#004e32',

    blue: '#0070e0',
    darkBlue: '#05478a',

    oranges: '#ef8d32',
    darkOrange: '#cb4f14',

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 15,
    radius: 30,
    padding: 10,
    padding2: 12,
    button_padding: 20,

    // font sizes
    largeTitle: 50,
    h1: 25,
    h2: 20,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Montserrat-Medium", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Montserrat-Medium", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Montserrat-Medium", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Montserrat-Medium", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Montserrat-Medium", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Montserrat-Medium", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Montserrat-Medium", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Montserrat-Medium", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Montserrat-Medium", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Montserrat-Medium", fontSize: SIZES.body5, lineHeight: 22 },
};

export const fontWeights = {
    fn: "normal",
    fb: "bold",
    f100: "100",
    f200: "200",
    f300: "300",
    f400: "400",
    f500: "500",
    f600: "600",
    f700: "700",
    f800: "800",
    f900: "900"
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;