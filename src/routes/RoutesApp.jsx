import { BrowserRouter,Route,Routes } from "react-router-dom";
import IndexPage from "../pages/index/IndexPage";
import Accesories from "../pages/accesories/Accesories";
import OneCollection from "../pages/oneCollection/OneCollection";
import { ROUTES } from "../constants/constants";

const RoutesPages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.INIT} element={<IndexPage/>}></Route>
            <Route path={ROUTES.ACCESORIES} element={<Accesories/>}></Route>
            <Route path={ROUTES.ONE_COLLECTION} element={<OneCollection/>}></Route>
            <Route path={ROUTES.PRODUCT} element={<>vista de ver producto seleccionado</>}></Route>
            <Route path={ROUTES.CART} element={<>vista de ver producto seleccionado</>}></Route>
            <Route path={ROUTES.ACCOUNT} element={<>vista de ver la cuenta del usuario</>}></Route>
            <Route path={ROUTES.ABOUT} element={<>vista de ver sobre nosotros</>}></Route>
            <Route path={ROUTES.CONTACT} element={<>vista de ver contantenos</>}></Route>
            <Route path="*" element={<>pagina no encontrada</>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages;