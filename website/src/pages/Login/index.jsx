import PropTypes from "prop-types";
import { useEffect } from "react";
import FormLogin from './components/FormLogin';
import Nav from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

Login.propTypes = {
    title: PropTypes.string,
};
export default function Login(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        
        <main className="d-flex justify-center">
            
            <FormLogin/>
        </main>
    );
}
