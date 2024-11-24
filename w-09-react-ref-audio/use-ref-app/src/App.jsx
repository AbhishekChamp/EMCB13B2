import { useState, useRef } from "react";

const App = () => {
    const [name, setName] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with name : ${name}`);
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete='off'
                />
            </div>
            <button type='button'>Submit</button>
        </form>
    );
};

export default App;
