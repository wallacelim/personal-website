import {
    SKY_BLUE,
    LIGHT_BLUE,
    PINK,
    CREAM,
    YELLOW,
    STEEL_GREY,
    BLACK,
    DARKER_GREY,
    DARK_GREY,
    SEA_GREEN,
    WHITE,
    DARKEST_GREY,
} from "./colors";

export const DARK_THEME = {
    TYPE: "DARK",
    BACKGROUND_PRIMARY: DARKEST_GREY,
    BACKGROUND_SECONDARY: DARKER_GREY,
    DEFAULT_BORDER: "2px solid #f1fa8c",
    PRIMARY: SKY_BLUE,
    SECONDARY: PINK,
    TERTIARY: YELLOW,
    MAIN: CREAM,
    NEGATIVE: BLACK,
};

export const LIGHT_THEME = {
    TYPE: "LIGHT",
    BACKGROUND_PRIMARY: WHITE,
    BACKGROUND_SECONDARY: LIGHT_BLUE,
    DEFAULT_BORDER: "2px solid #2D3748",
    PRIMARY: SEA_GREEN,
    SECONDARY: DARK_GREY,
    TERTIARY: BLACK,
    MAIN: STEEL_GREY,
    NEGATIVE: CREAM,
};
