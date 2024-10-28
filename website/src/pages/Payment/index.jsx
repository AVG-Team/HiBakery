import { useLocation } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm";
export default function Payment() {
    const location = useLocation();
    const { orderDetails } = location.state || {};
    return (
        <main>
            <div className="flex flex-col items-center justify-center w-full">
                <MultiStepForm orderDetails={orderDetails} />
            </div>
        </main>
    );
}
