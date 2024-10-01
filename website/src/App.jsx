import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import AuthLayout from "./layouts/AuthLayout";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";

const Home = loadable(() => import("./pages/Home"));
const Products = loadable(() => import("./pages/Products"));
const Login = loadable(() => import("./pages/Login"));
const Product = loadable(() => import("./pages/Product"));

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
                                <Home title="HomePage" />
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
