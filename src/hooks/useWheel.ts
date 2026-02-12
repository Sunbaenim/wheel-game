import { useContext } from "react";
import { WheelContext } from "../context/wheelContext";

export const useWheel = () => {
    const context = useContext(WheelContext);
    if (!context) {
        throw new Error("useWheel must be used within a WheelProvider");
    }

    return context;
}
