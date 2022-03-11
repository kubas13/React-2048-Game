import {MainPage} from "./pages/MainPage/MainPage";
import React from "react";
import {GlobalStyles} from "./Styles/GlobalStyles";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {SignupPage} from "./pages/SignupPage/SignupPage";
import {MainLayout} from "./Layouts/MainLayout/MainLayout";
import {useAuthContext} from "./hooks/useAuthContext";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {ScoresPage} from "./pages/ScoresPage/ScoresPage";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";


function App() {

    const {user}= useAuthContext()

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <MainLayout>
            <Routes>
                <Route exact path={'/'} element={user ? <MainPage/> : <Navigate to={'login'}/> }/>
                <Route path={'/login'} element={!user ?  <LoginPage/> : <Navigate to={'/'}/>}/>
                <Route path={'/signup'} element={!user ? <SignupPage/> : <Navigate to={'/'}/> }/>
                <Route path={'/profile'} element={user ? <ProfilePage/> : <Navigate to={'/'}/> }/>
                <Route path={'/scores'} element={user ? <ScoresPage/> : <Navigate to={'/'}/>}/>
            </Routes>
            </MainLayout>
            </ThemeProvider>
        </BrowserRouter>

    )
}


export default App;
