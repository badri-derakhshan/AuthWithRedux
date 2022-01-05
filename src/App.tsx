import { BrowserRouter } from "react-router-dom";
import Routers from './base/MyRoutes'
const App = ()=>{

    return (
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>
    )
}

export default App