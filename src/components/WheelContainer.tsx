import { useWheel } from "../context/WheelContext";
import { DebugWheel } from "./DebugWheel";
import { Wheel } from "./Wheel";

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