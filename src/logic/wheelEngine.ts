export const pickRandomSlice = (slices: any[]) => {
    if (slices.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * slices.length);
    return slices[randomIndex];
}

export const rotateWheel = (currentRotation: number) => {
    const turns = Math.floor(Math.random() * 4) + 1;
    const extraDegrees = Math.floor(Math.random() * 360);
    return currentRotation + (turns * 360) + extraDegrees;
}