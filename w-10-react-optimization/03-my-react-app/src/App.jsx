import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    font-size: 14px;
    background-color: rebeccapurple;
    color: white;
    padding: 2rem;
`;

function App() {
    function handleClick() {
        toast("Button got clicked");
    }
    return (
        <>
            <Wrapper>
                <Title>Hello World!</Title>
                <Button onClick={handleClick}>Click Here</Button>
            </Wrapper>
            <ToastContainer position='top-center' theme='dark' />
        </>
    );
}

export default App;
