import { BrowserRouter,Route,Routes } from "react-router-dom";
import IndexPage from "../pages/index/IndexPage";

const RoutesPages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages;