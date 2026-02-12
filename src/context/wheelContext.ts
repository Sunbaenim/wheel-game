import { createContext } from "react";
import type { WheelContextType } from "../types";

export const WheelContext = createContext<WheelContextType | undefined>(undefined);
