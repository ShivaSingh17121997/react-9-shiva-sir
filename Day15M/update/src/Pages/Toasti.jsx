import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tosti() {
    const notifocation = () => toast("Array baah bhaiyawa maza aayi gawa");

    return (
        <div>
            <button onClick={notifocation}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default Tosti;