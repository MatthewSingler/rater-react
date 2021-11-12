import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getGames, getSingleGame } from "../Game/GameManager"
import { createReview } from "./review"


export const ReviewForm = () => {
    const history = useHistory()
    const [currentReview, setReview] = useState({})
    const [games, setGames] = useState([])
    const { gameId } = useParams()
    useEffect(() => {
        if (gameId) {
            getSingleGame(gameId).then((gameData) => setGames({
                ...gameData,
                skillLevel: gameData.skill_level,
                numberOfPlayers: gameData.number_of_players,
                gameTypeId: gameData.game_type.id,
                ageRecommendation: gameData.age_recommendation,
                releaseYear: gameData.release_year
            }))
        }
    }, [gameId])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    const handleOnChange = (review) => {
        const copyReview = { ...currentReview }
        copyReview[review.target.name] = review.target.value
        setReview(copyReview)
    }
    const saveReview = (review) => {
        createReview(review).then(() => {
            history.push(`/games/${gameId}`)
        })
    }

        return (
            <>
                <label>Review</label>
                <input category="text" name="content" onChange={(review) => handleOnChange(review)}></input>
                <br>
                </br>
                <select name="game" onChange={(review) => handleOnChange(review)}>
                    <option value="0">Select a Game</option>
                    {
                        games.map(game => <option value={game.id}>{game.title}</option>)
                    }
                </select>

                <button
                    onClick={rev => {
                        rev.preventDefault()
                        const review = {
                            game: currentReview.game,
                            review: currentReview.content,
                            player: currentReview.player
                        }
                        saveReview(review)
                    }}
                    className="btn btn-primary">Review</button>
            </>
        )
}