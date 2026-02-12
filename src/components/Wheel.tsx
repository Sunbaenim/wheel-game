import { useWheel } from "../hooks/useWheel";
import { Slice } from "./Slice";

export const Wheel = () => {
    const { slicesOnWheel, rotation } = useWheel();
    return (
        <div>
            <svg width="600" height="600" viewBox="-5 -5 110 110">
                <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '50px 50px', transition: 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)' }}>
                    <g style={{ filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))' }}>
                        <circle cx="50" cy="50" r="49.5" stroke="black" strokeWidth="0.5" fill="white" />
                    </g>
                    {slicesOnWheel.map((_, index) => {
                        return <Slice angleStart={index * 360 / slicesOnWheel.length} angleEnd={(index + 1) * 360 / slicesOnWheel.length} index={index} key={index} />;
                    })}
                </g>
                <g style={{ filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))' }}>
                    <path d="M 48 102 L 52 102 L 50 95 Z" fill="red" strokeLinejoin="round" stroke="red" strokeWidth="0.5" />
                </g>
            </svg>
        </div>
    );
}
