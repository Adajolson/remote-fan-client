import { Route, Routes, Outlet } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { SportList } from "../components/sport/SportList"
import { BarList } from "../components/bar/BarList"
import { TeamList } from "../components/team/TeamList"
import { CityList } from "../components/city/CityList"
import { SingleTeam } from "../components/team/SingleTeam"
import { SingleSport } from "../components/sport/SingleSport"
import { SingleBar } from "../components/bar/SingleBar"
import { SingleCity } from "../components/city/SingleCity"
import { AddCity } from "../components/city/AddCity"
import { AddTeam } from "../components/team/AddTeam"
import { AddBar } from "../components/bar/AddBar"
import { UpdateBar } from "../components/bar/UpdateBar"
import { AddTeamsToBar } from "../components/bar/AddTeamsToBar"
import { EditTeams } from "../components/bar/EditTeamsInBar"
import { Home } from "../components/auth/Home"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/sports" element={<SportList />} />
                <Route path="/bars" element={<BarList />} />
                <Route path="/teams" element={<TeamList />} />
                <Route path="/cities" element={<CityList />} />
                <Route path="/cities/new" element={<AddCity />} />
                <Route path="/teams/new" element={<AddTeam />} />
                <Route path="/bars/new" element={<AddBar />} />
                <Route path="/teams/:teamId" element={<SingleTeam />} />
                <Route path="/sports/:sportId" element={<SingleSport />} />
                <Route path="/bars/:barId" element={<SingleBar />} />
                <Route path="/bars/:barId/update" element={<UpdateBar />} />
                <Route path="/bars/:barId/addTeams" element={<AddTeamsToBar />} />
                <Route path="/bars/:barId/editTeams" element={<EditTeams />} />
                <Route path="/cities/:cityId" element={<SingleCity />} />
            </Route>
        </Routes>
    </>
}
