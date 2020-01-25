import React from "react";

function PlayerCard(props) {
    //console.log("props.playerdata", props.playerdata);
    return (
        <div>
            <div>
                <div>
                    {props.playerdata.map(player => {
                        return (
                            <div key={player.id}>
                                <h2>{player.name}</h2>
                                <p>Country: {player.country}</p>
                                <p>Searches: {player.searches}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;