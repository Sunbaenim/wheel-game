import { useWheel } from "../hooks/useWheel";
import { DebugWheel } from "./DebugWheel";

export const WheelContainer = () => {
    const { spinWheel } = useWheel();
    return (
        <>
            {/* <Wheel /> */}
            <DebugWheel />
            <button onClick={spinWheel}>Spin Wheel</button>
        </>
    );
}