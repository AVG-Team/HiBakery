import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import AuthLayout from "./layouts/AuthLayout";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";
const Payment = loadable(() => import("./pages/Payment"));
const Home = loadable(() => import("./pages/Home"));
const Products = loadable(() => import("./pages/Products"));
const Product = loadable(() => import("./pages/Product"));
const Login = loadable(() => import("./pages/Login"));
const Register = loadable(() => import("./pages/Register"));
const Cart = loadable(() => import("./pages/Cart"));
const Profile = loadable(() => import("./pages/Profile"));
const PrivacyPolicy = loadable(() => import("./pages/PrivacyPolicy"));
const AboutUs = loadable(() => import("./pages/AboutUs"));
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
                        path="/san-pham"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Products title="Sản phẩm" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/san-pham/:id"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Product title="Sản phẩm bạn đang xem" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/thong-tin-ca-nhan"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Profile title="Thông tin cá nhân" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/chinh-sach-van-chuyen"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <PrivacyPolicy title="Chính sách bảo mật" />
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
                    path="/ve-chung-toi"
                    element={
                        <Suspense fallback={<CircularProgress />}>
                            <AboutUs title="About Us" />
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
                <Route element={<BlankLayout />}>
                    <Route
                        path="/dang-ki"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Register title="Đăng kí" />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
