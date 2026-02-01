export type sliceType = "group" | "member" | "action";

export interface Slice {
	id: number,
	type: sliceType,
	contentId: number,
	weight: number
}

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
