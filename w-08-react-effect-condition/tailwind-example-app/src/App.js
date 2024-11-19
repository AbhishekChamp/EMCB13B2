import { useState } from "react";
import { FaUser } from "react-icons/fa";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className='container mx-auto'>
            <p
                className={`px-4 py-2 font-semibold text-white rounded-lg 
              ${isLoggedIn ? "bg-green-950" : "bg-red-950"}`}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </p>
            <button
                onClick={() => setIsLoggedIn((prev) => !prev)}
                className='m-2 px-10 py-5 rounded-lg bg-blue-700 hover:bg-blue-300'
            >
                Toggle
            </button>
            <FaUser color='white' size={30} className='bg-black' />
        </div>
    );
};

export default App;
