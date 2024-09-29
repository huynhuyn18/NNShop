import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./page/(website)/layout";
import HomePage from "./page/(website)/(home)/page";
import SignupPage from "./page/(auth)/sign/page";
import LayoutAdmin from "./page/(admin)/layout";
import DashboardPage from "./page/(admin)/dashboard/page";
import NotFoundPage from "./page/(website)/404/page";
import Shop from "./page/(website)/shop/page";
import AboutPage from "./page/(website)/about/page";
import Detail from "./page/detail/page";
import CartPage from "./page/(website)/cart/page";
import PaymentPage from "./page/(website)/payment/page";
import ContactPage from "./page/(website)/contact/page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite/>}>
                    <Route index element={<HomePage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="Shop" element={<Shop />} />
                    <Route path="Home" element={<HomePage />} />
                    <Route path="About" element={<AboutPage />} />
                    <Route path="Detail" element={<Detail />} />
                    <Route path="Cart" element={<CartPage />} />
                    <Route path="Payment" element={<PaymentPage />} />
                    <Route path="Contact" element={<ContactPage />} />





                  

                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;