import { useWheel } from "../context/WheelContext";
import type { SliceProps } from "../types";

export const Slice = ({ angleStart, angleEnd, index }: SliceProps) => {
    const { slicesOnWheel } = useWheel();
    const rayon = 49.5;
    const x1 = 50 + (rayon * Math.cos(angleStart * (Math.PI / 180)));
    const y1 = 50 + (rayon * Math.sin(angleStart * (Math.PI / 180)));
    const x2 = 50 + (rayon * Math.cos(angleEnd * (Math.PI / 180)));
    const y2 = 50 + (rayon * Math.sin(angleEnd * (Math.PI / 180)));
    const pathData = `
        M 50 50
        L ${x1} ${y1}
        A ${rayon} ${rayon} 0 0 1 ${x2} ${y2}
        Z
    `;
    const color = `hsl(${(index * 360) / slicesOnWheel.length}, 70%, 60%)`;
    const textRad = (angleStart + angleEnd) / 2 * (Math.PI / 180);
    const textX = 50 + 30 * Math.cos(textRad);
    const textY = 50 + 30 * Math.sin(textRad);
    return (
        <>
            <path
                d={pathData}
                fill={color}
                stroke="black"
                strokeWidth="0.1"
            />
            <text
                x={textX}
                y={textY}
                fontSize={4}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${(angleStart + angleEnd) / 2}, ${textX}, ${textY})`}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
                {slicesOnWheel[index].name}
            </text>
        </>
    );
}