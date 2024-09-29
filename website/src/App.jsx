import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";

const Profile = loadable(() => import("./pages/Profile/index.jsx"));
const PrivacyPolicy = loadable => import("./pages/PrivacyPolicy/index.jsx");

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
