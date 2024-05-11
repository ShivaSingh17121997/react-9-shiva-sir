import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form1() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [error, setError] = useState({})


    const [isSubmitted, setIsSubmitted] = useState(false);

    


    const handleSubmit = (e) => {
      
        e.preventDefault();
        //validation logic;
        const error = {};
        console.log(error,"error")

        if (!name.trim()) {
            error.name = "Name is required"
        }
        if (!email.trim()) {
            error.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Email is invalid"
        }
        if (!password.trim()) {
            error.password = "Password is required "
        }
        else if (password.length < 6) {
            error.password = "Password must be at least 6 characteres"
        }

       
        


        if (Object.keys(error).length > 0) {
            setError(error)
        }

        console.log(error)



        // if there are validation error , set them in state
        if (Object.keys(error).length > 0) {
            setError(error)
        }
        else {

            toast.success("Data updated successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSubmitted(true);
            console.log(name, email, password)
            setName('');
            setEmail('');
            setPassword('');
            setError({});
        }
    }

    console.log(error)


    return (
        <div>
            <h1>form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    {error.name && <span style={{ color: "red" }} >{error.name}</span>}
                </div>

                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    {error.email && <span style={{ color: "red" }}>{error.email}</span>}
                </div>

                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
                    {error.password && <span style={{ color: "red" }}>{error.password}</span>}
                </div>

                <button type='submit' >submit</button>
                <ToastContainer />
            </form>
            {isSubmitted && (
                <p style={{ color: 'green' }}>Data successfully added!</p>
            )}

        </div>
    )
}
