import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./Game/GameList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games/:gameId(\d+)">
                <GameList />
            </Route>
        </main>
    </>
}