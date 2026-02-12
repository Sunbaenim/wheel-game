import { MEMBERS } from "../data/database";
import { useWheel } from "../hooks/useWheel";
import { Wheel } from "./Wheel";

export const DebugWheel = () => {
    const { slicesOnWheel, currentWheelMode, spinWheel, winner, players } = useWheel();
    return (
        <div>
            <h1>Debug Wheel</h1>
            <Wheel />
            <p>Mode actuel : {currentWheelMode}</p>
            <button onClick={spinWheel}>Spin Wheel</button>
            <h4>Slices on wheel: {slicesOnWheel.length}</h4>
            <ul>
                {slicesOnWheel.map((slice, index) => (
                    <li key={index}>{slice.name}</li>
                ))}
            </ul>
            <h4>Winner is: {winner?.name || "No winner yet"}</h4>
            <h4>Players</h4>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        {player.name} - Inventory: {player.inventory.map(mId => MEMBERS.find(m => m.id === mId)?.name)}
                    </li>
                ))}
            </ul>
        </div>
    );
}