import type { Member, Group } from "../types/index";

export const MEMBERS: Member[] = [
    // Saison 10
    { id: 1, name: "Anisha", groupId: 1, ownerId: null, isProtected: false },
    { id: 2, name: "Enolax", groupId: 1, ownerId: null, isProtected: false },
    { id: 3, name: "Louis", groupId: 1, ownerId: null, isProtected: false },
    { id: 4, name: "Léa", groupId: 1, ownerId: null, isProtected: false },
    { id: 5, name: "Tiana", groupId: 1, ownerId: null, isProtected: false },
    { id: 6, name: "Chris", groupId: 1, ownerId: null, isProtected: false },
    { id: 7, name: "Stanislas", groupId: 1, ownerId: null, isProtected: false },
    { id: 8, name: "Julien", groupId: 1, ownerId: null, isProtected: false },
    { id: 9, name: "Paola", groupId: 1, ownerId: null, isProtected: false },
    { id: 10, name: "Carla", groupId: 1, ownerId: null, isProtected: false },
    { id: 11, name: "Ahcène", groupId: 1, ownerId: null, isProtected: false },
    { id: 12, name: "Cenzo", groupId: 1, ownerId: null, isProtected: false },
    { id: 13, name: "Amisse", groupId: 1, ownerId: null, isProtected: false },
    // Saison 11
    { id: 14, name: "Pierre", groupId: 2, ownerId: null, isProtected: false },
    { id: 15, name: "Julien", groupId: 2, ownerId: null, isProtected: false },
    { id: 16, name: "Héléna", groupId: 2, ownerId: null, isProtected: false },
    { id: 17, name: "Axel", groupId: 2, ownerId: null, isProtected: false },
    { id: 18, name: "Lénie", groupId: 2, ownerId: null, isProtected: false },
    { id: 19, name: "Djebril", groupId: 2, ownerId: null, isProtected: false },
    { id: 20, name: "Candice", groupId: 2, ownerId: null, isProtected: false },
    { id: 21, name: "Clara", groupId: 2, ownerId: null, isProtected: false },
    { id: 22, name: "Margot", groupId: 2, ownerId: null, isProtected: false },
    { id: 23, name: "Victorien", groupId: 2, ownerId: null, isProtected: false },
    { id: 24, name: "Marie-Maud", groupId: 2, ownerId: null, isProtected: false },
    { id: 25, name: "Lola", groupId: 2, ownerId: null, isProtected: false },
    { id: 26, name: "Louis", groupId: 2, ownerId: null, isProtected: false },
    // Saison 12
    { id: 27, name: "Emma", groupId: 3, ownerId: null, isProtected: false },
    { id: 28, name: "Marine", groupId: 3, ownerId: null, isProtected: false },
    { id: 29, name: "Ulysse", groupId: 3, ownerId: null, isProtected: false },
    { id: 30, name: "Ebène", groupId: 3, ownerId: null, isProtected: false },
    { id: 31, name: "Charles", groupId: 3, ownerId: null, isProtected: false },
    { id: 32, name: "Franck", groupId: 3, ownerId: null, isProtected: false },
    { id: 33, name: "Marguerite", groupId: 3, ownerId: null, isProtected: false },
    { id: 34, name: "Maïa", groupId: 3, ownerId: null, isProtected: false },
    { id: 35, name: "Paul", groupId: 3, ownerId: null, isProtected: false },
    { id: 36, name: "Noah", groupId: 3, ownerId: null, isProtected: false },
    { id: 37, name: "Thomas", groupId: 3, ownerId: null, isProtected: false },
    { id: 38, name: "Maylis", groupId: 3, ownerId: null, isProtected: false },
    { id: 39, name: "Masseo", groupId: 3, ownerId: null, isProtected: false },
    { id: 40, name: "Julie", groupId: 3, ownerId: null, isProtected: false },
    { id: 41, name: "Maureen", groupId: 3, ownerId: null, isProtected: false },
    // Saison 13
    { id: 42, name: "Ambre", groupId: 4, ownerId: null, isProtected: false },
    { id: 43, name: "Léa", groupId: 4, ownerId: null, isProtected: false },
    { id: 44, name: "Victor", groupId: 4, ownerId: null, isProtected: false },
    { id: 45, name: "Sarah", groupId: 4, ownerId: null, isProtected: false },
    { id: 46, name: "Bastiaan", groupId: 4, ownerId: null, isProtected: false },
    { id: 47, name: "Anouk", groupId: 4, ownerId: null, isProtected: false },
    { id: 48, name: "Théo P.", groupId: 4, ownerId: null, isProtected: false },
    { id: 49, name: "Mélissa", groupId: 4, ownerId: null, isProtected: false },
    { id: 50, name: "Jeanne", groupId: 4, ownerId: null, isProtected: false },
    { id: 51, name: "Léo", groupId: 4, ownerId: null, isProtected: false },
    { id: 52, name: "Lily", groupId: 4, ownerId: null, isProtected: false },
    { id: 53, name: "Théo L.", groupId: 4, ownerId: null, isProtected: false },
    { id: 54, name: "Léane", groupId: 4, ownerId: null, isProtected: false },
    { id: 55, name: "Emma", groupId: 4, ownerId: null, isProtected: false },
    { id: 56, name: "Noah", groupId: 4, ownerId: null, isProtected: false },
    { id: 57, name: "Lenny", groupId: 4, ownerId: null, isProtected: false },
    { id: 58, name: "Mehdi", groupId: 4, ownerId: null, isProtected: false }
];

const GROUP_NAMES = [
    "Saison 10", "Saison 11", "Saison 12", "Saison 13"
];

export const GROUPS: Group[] = GROUP_NAMES.map((name, index) => {
    const id = index + 1;
    return {
        id: id,
        name: name,
        members: MEMBERS.filter(m => m.groupId === id)
    };
});
