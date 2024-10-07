import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/constants";
import About from "../pages/about/About";
import Accesories from "../pages/accesories/Accesories";
import Cart from "../pages/cart/Cart";
import Collections from "../pages/collections/Collections";
import Contact from "../pages/contact/Contact";
import Discount from "../pages/discount/Discount";
import Favorite from "../pages/favorite/Favorite";
import FrequentyQuestions from "../pages/frequentyQuestions/FrequentyQuestions";
import IndexPage from "../pages/index/IndexPage";
import NotFound from "../pages/notFound/NotFound";
import OneCategory from "../pages/oneCategory/OneCategory";
import OneCollection from "../pages/oneCollection/OneCollection";
import OneProduct from "../pages/oneProduct/OneProduct";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import User from "../pages/user/User";

const RoutesPages = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.INIT} element={<IndexPage/>}></Route>
            <Route path={ROUTES.ACCESORIES} element={<Accesories/>}></Route>
            <Route path={ROUTES.COLLECTIONS} element={<Collections/>}></Route>
            <Route path={ROUTES.DISCOUNTS} element={<Discount/>}></Route>
            <Route path={ROUTES.FAVORITE} element={<Favorite/>}></Route>
            <Route path={ROUTES.ONE_COLLECTION+"/:name"} element={<OneCollection/>}></Route>
            <Route path={ROUTES.ONE_CATEGORY+"/:name"} element={<OneCategory/>}></Route>
            <Route path={ROUTES.PRODUCT+"/:name"} element={<OneProduct/>}></Route>
            <Route path={ROUTES.CART} element={<Cart/>}></Route>
            <Route path={ROUTES.RESET_PASSWORD+`/:token`} element={<ResetPassword/>}></Route>
            <Route path={ROUTES.ACCOUNT} element={<User/>}></Route>
            <Route path={ROUTES.ABOUT} element={<About/>}></Route>
            <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
            <Route path={ROUTES.FREQUENTY_QUESTIONS} element={<FrequentyQuestions/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages;