import { BrowserRouter,Route,Routes } from "react-router-dom";
import IndexPage from "../pages/index/IndexPage";
import Accesories from "../pages/accesories/Accesories";
import OneCategory from "../pages/oneCategory/OneCategory";
import { ROUTES } from "../constants/constants";
import NotFound from "../pages/notFound/NotFound";
import Cart from "../pages/cart/Cart";
import OneProduct from "../pages/oneProduct/OneProduct";
import ResetPassword from "../pages/resetPassword/ResetPassword";

const RoutesPages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.INIT} element={<IndexPage/>}></Route>
            <Route path={ROUTES.ACCESORIES} element={<Accesories/>}></Route>
            <Route path={ROUTES.ONE_CATEGORY+"/:name"} element={<OneCategory/>}></Route>
            <Route path={ROUTES.PRODUCT+"/:name"} element={<OneProduct/>}></Route>
            <Route path={ROUTES.CART} element={<Cart/>}></Route>
            <Route path={ROUTES.RESET_PASSWORD+`/:token`} element={<ResetPassword/>}></Route>
            <Route path={ROUTES.ACCOUNT} element={<>vista de ver la cuenta del usuario</>}></Route>
            <Route path={ROUTES.ABOUT} element={<>vista de ver sobre nosotros</>}></Route>
            <Route path={ROUTES.CONTACT} element={<>vista de ver contantenos</>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages;