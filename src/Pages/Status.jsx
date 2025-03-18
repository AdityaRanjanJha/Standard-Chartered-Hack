import { useLocation } from "react-router-dom";
import RejectionAnimation from "../Modules/RejectAnimation/RejectionAnimation";
import CheckmarkAnimation from "../Modules/SuccessAnimation/CheckmarkAnimation";

const Status = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status"); // Get the `status` from URL

    return (
        <div>
            {status === "success" && <CheckmarkAnimation />}
            {status === "rejected" && <RejectionAnimation />}
            {!status && <p>Please provide a valid status query parameter.</p>}
        </div>
    );
};

export default Status;
