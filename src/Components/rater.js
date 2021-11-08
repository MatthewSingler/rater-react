import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import { Route, Redirect } from "react-router-dom"


export const GamerRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)