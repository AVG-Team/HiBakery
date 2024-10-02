import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";

const Profile = loadable(() => import("./pages/Profile"));
const PrivacyPolicy = loadable(() => import("./pages/PrivacyPolicy"));

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/thong-tin-ca-nhan"
                    element={
                    <Suspense fallback={<CircularProgress />}>
                        <Profile title="Thông tin cá nhân" />
                    </Suspense>
                    }
                />
                <Route
                    path="/policy-delivery"
                    element={
                    <Suspense fallback={<CircularProgress />}>
                        <PrivacyPolicy title="Chính sách bảo mật" />
                    </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
