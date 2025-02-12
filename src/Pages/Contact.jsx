import { Helmet } from "react-helmet";
import ContactForm from "../Components/ContactPage/ContactForm";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <ContactForm />
        </div>
    );
};

export default Contact;