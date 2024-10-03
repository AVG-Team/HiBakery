import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import AuthLayout from "./layouts/AuthLayout";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";
import MultiStepForm from "./pages/Payment/components/MultiStepForm";
const Payment = loadable(() => import("./pages/Payment"))
const Home = loadable(() => import("./pages/Home"));
const Products = loadable(() => import("./pages/Products"));
const Product = loadable(() => import("./pages/Product"));
const Login = loadable(() => import("./pages/Login"));
const AboutUs = loadable(() => import("./pages/AboutUs"))
const Cart = loadable(() => import("./pages/Cart"))
const Payment = loadable(() => import("./pages/Payment"));

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>{/* <Route path="/logout" element={<Logout />} /> */}</Route>
                <Route element={<BasicLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Home title="Trang chủ" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/gio-hang"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Cart title="Giỏ hàng" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Products title="Products" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Product title="Product" />
                            </Suspense>
                        }
                    />
                    
                </Route>
                <Route 
                        path="/thanh-toan"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Payment title="Payment" />
                            </Suspense>
                        }
                    />
                <Route 
                        path="/about-us"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <AboutUs title="About Us" />
                            </Suspense>
                        }
                    />
                    <Route 
                        path="/cart"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Cart title="Cart" />
                            </Suspense>
                        }
                    />
                <Route element={<BlankLayout />}>
                    <Route
                        path="/dang-nhap"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Login title="Đăng nhập" />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
