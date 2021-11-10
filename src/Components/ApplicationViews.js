import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./Game/GameList.js"
import { GameForm } from "./Game/GameForm.js"
import { ReviewForm } from "./Reviews/reviewForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>
            <Route exact path="/game/new">
                <GameForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
        </main>
    </>
}