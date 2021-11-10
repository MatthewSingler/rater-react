import React, { useState, useEffect } from "react"
import { getGames } from "./GameManager.js"
import { useHistory } from "react-router"

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <h3>Game</h3>
                        <div className="game__title">{game.title}</div>
                        <div className="game__designer">Created by {game.designer}</div>
                        <div className="game__release">Released in {game.release_year}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__time">Time is {game.time_to_play}</div>
                        <div className="game__age">Recommended age is {game.age_recommendation}</div>
                        <br>
                        </br>
                    </section>
                })
            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => { history.push({ pathname: "/game/new" }) }}>Create Game</button>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => { history.push({ pathname: "/game/review" }) }}>Review Game</button>
        </article>
    )
}