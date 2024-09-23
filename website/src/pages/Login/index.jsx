import PropTypes from "prop-types";
import { useEffect } from "react";

Login.propTypes = {
    title: PropTypes.string,
};
export default function Login(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <div className="flex items-center justify-center"></div>
                </div>
            </div>
        </main>
    );
}
