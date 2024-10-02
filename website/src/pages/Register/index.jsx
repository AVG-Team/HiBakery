import PropTypes from "prop-types";
import { useEffect } from "react";
import FormRegister from './components/FormRegister';
import Nav from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

Register.propTypes = {
    title: PropTypes.string,
};
export default function Register(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        
        <main className="d-flex justify-center">
            <FormRegister/>
        </main>
    );
}
