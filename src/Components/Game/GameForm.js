import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame, getGames, getGameCategories } from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()
    /*const [games, updateGames] = useState([])*/
    const [currentGame, setCurrentGame] = useState({})
    const [gameCategory, setCategory] = useState([])

    useEffect(() => {
        getGameCategories().then(data => setCategory(data))
    }, [])

    const handleOnChange = (event) => {
        const copyGame = { ...currentGame }
        copyGame[event.target.name] = event.target.value
        setCurrentGame(copyGame)
    }

    return (
        <>
            <label>Title</label>
            <input category="text" name="title" onChange={(event) => handleOnChange(event)}></input>
            <label>Maker</label>
            <input category="text" name="maker" onChange={(event) => handleOnChange(event)}></input>
            <label>Number of Players</label>
            <input category="number" name="numberOfPlayers" onChange={(event) => handleOnChange(event)}></input>
            <label>Skill Level</label>
            <input category="number" name="skillLevel" onChange={(event) => handleOnChange(event)}></input>
            <label>Game Type</label>
            <br>
            </br>
            <select name="category" onChange={(event) => handleOnChange(event)}>
                <option value="0">Select a Category</option>
                {
                    gameCategory.map(category => <option value={category.id}>{category.type}</option>)
                }
            </select>

            <button
                onClick={evt => {
                    evt.preventDefault()

                    const category = {
                        maker: currentGame.maker,
                        title: currentGame.title,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        skillLevel: parseInt(currentGame.skillLevel),
                        gameTypeId: parseInt(currentGame.gameTypeId)
                    }

                    createGame(category)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create</button>
        </>
    )
}