export type Slice = Group | Member | Action;

export interface Action {
	id: number,
	name: string,
	effect: string
}

export interface Group {
	id: number,
	name: string
	members: Member[]
}

export interface Member {
	id: number,
	groupId: number,
	name: string
	ownerId: number | null,
	isProtected: boolean
}

export interface Player {
	id: number,
	name: string,
	inventory: number[]
}

export interface SliceProps {
	angleStart: number,
	angleEnd: number,
	index: number
}

export interface WheelContextType {
    slicesOnWheel: any[];
    spinWheel: () => void;
    currentWheelMode?: 'Member' | 'Group';
    winner: Slice | null;
    players: Player[];
    rotation: number;
}
