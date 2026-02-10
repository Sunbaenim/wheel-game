import type { Player } from "../types/index";

export const getNextPlayerIndex = (currentIndex: number, totalPlayers: number) => {
    return (currentIndex + 1) % totalPlayers;
}

export const addMemberToPlayer = (player: Player, memberId: number): Player => {
    return {
        ...player,
        inventory: [...player.inventory, memberId]
    };
}

