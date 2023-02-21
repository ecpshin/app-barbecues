import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pedidos from './pages/Pedidos/Pedidos';

function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pedidos' element={<Pedidos />} />
        </Routes>
    )
}

export default AppRoutes;