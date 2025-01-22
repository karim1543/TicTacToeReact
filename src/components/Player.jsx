import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }

    }
    let btnCaption = 'Edit';
    let state = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        state = <input type="text" required value={playerName} onChange={handleChange} />
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {state}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
        </li>
    );
}