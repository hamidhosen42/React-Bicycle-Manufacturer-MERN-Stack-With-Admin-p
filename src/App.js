import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddProduct";
import Payment from "./Pages/Dashboard/Payment";
import NotFound from "./Pages/Shared/NotFound";
import Portfolio from "./Pages/My Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import PartDetails from "./Pages/PartDetails/PartDetails";
import MyOrder from "./Pages/MyOrder/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProducts from "./Pages/Dashboard/ManageProducts";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/part/:partId"
          element={
            <RequireAuth>
              <PartDetails></PartDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="user"
            element={
              <RequireAdmin>
                <Users></Users>{" "}
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrder></ManageAllOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;