import { TOGGLE_VIEW_MODE } from "./actionTypes";

export const toggleViewMode = () => {
    console.log("toggleViewMode called");
    return {
        type: TOGGLE_VIEW_MODE
    };
};
