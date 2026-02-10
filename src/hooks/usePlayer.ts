import { useState } from "react";
import type { Player } from "../types";
import { addMemberToPlayer, getNextPlayerIndex } from "../logic/playerEngine";

export const usePlayer = (playerNames: string[]) => {
    const [players, setPlayers] = useState<Player[]>(
        playerNames.map((name, index) => ({
            id: index + 1,
            name: name,
            inventory: []
        }))
    );
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);

    const awardMemberToCurrentPlayer = (memberId: number) => {
        const newPlayers = [...players];
        const currentPlayer = players[currentPlayerIndex];
        newPlayers[currentPlayerIndex] = addMemberToPlayer(currentPlayer, memberId);
        setPlayers(newPlayers);
    }

    const nextTurn = () => {
        setCurrentPlayerIndex(getNextPlayerIndex(currentPlayerIndex, players.length));
    }

    return { players, currentPlayerIndex, awardMemberToCurrentPlayer, nextTurn };
}