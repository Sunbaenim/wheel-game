import { createContext, useContext, useState, type ReactNode } from "react";
import type { Player, Slice, WheelContextType } from "../types";
import { GROUPS } from "../data/database";
import { usePlayer } from "../hooks/usePlayer";
import { pickRandomSlice, rotateWheel } from "../logic/wheelEngine";

const WheelContext = createContext<WheelContextType | undefined>(undefined);

export const WheelProvider = ({ children }: { children: ReactNode }) => {
    const [slicesOnWheel, setSlicesOnWheel] = useState<any[]>(GROUPS);
    const [currentWheelMode, setcurrentWheelMode] = useState<'Member' | 'Group'>('Group');
    const [winner, setWinner] = useState<Slice | null>(null);
    const { players, awardMemberToCurrentPlayer, nextTurn } = usePlayer(['Player 1', 'Player 2', 'Player 3']);
    const [rotation, setRotation] = useState(0);

    const spinWheel = () => {
        const selectedSlice = pickRandomSlice(slicesOnWheel);
        setRotation(rotateWheel(rotation));
        setWinner(selectedSlice);
        if (currentWheelMode === 'Group') {
            const groupFound = GROUPS.find(g => g.id === selectedSlice.id);
            setSlicesOnWheel(groupFound?.members || []);
            setcurrentWheelMode('Member');
        } else if (currentWheelMode === 'Member') {
            awardMemberToCurrentPlayer(selectedSlice.id);
            nextTurn();
        }
    }

    return (
        <WheelContext.Provider value={{ slicesOnWheel, spinWheel, currentWheelMode, winner, players, rotation }}>
            {children}
        </WheelContext.Provider>
    );
}

export const useWheel = () => {
    const context = useContext(WheelContext);
    if (!context) {
        throw new Error("useWheel must be used within a WheelProvider");
    }

    return context;
}