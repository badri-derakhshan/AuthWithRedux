import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import Home from '../pages/Home'
import Login from '../pages/Login'
const MyRoutes = ()=>{

    const IsLogin = false
    return(
        <Routes>
            <Route path="*" element={ IsLogin ? Navigate({to:'/home'}) : Navigate({to:'/auth'}) } />
            <Route path="auth" element={
                <ErrorBoundary>
                        <Login />
                </ErrorBoundary>
            }/>
            <Route path="/Home" element={
                 <ErrorBoundary>
                         <Home/>
                </ErrorBoundary>
            }/>
        </Routes>
    )

}

export default MyRoutes