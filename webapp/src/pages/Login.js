import React, { useState } from 'react'
import './All.css'
import { API_BASE_URL } from '../../src/config'
import axios from 'axios'
import Swal from 'sweetalert2'

// Component for the login form
const Login = () => {

    // State variables for email, password, and loading state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to handle login submission
    const login = (event) => {
        event.preventDefault();

        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later!'
                })
            })
    }

    // Render the login form
    return (
        <div className='add'>
            {loading ? <div className='row'>
                <div className="col-12 text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> : ''}
            <h1>LOGIN FORM</h1>
            <form onSubmit={(e) => login(e)}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="email" onChange={(ev) => setEmail(ev.target.value)} class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="password" onChange={(ev) => setPassword(ev.target.value)} class="form-control" />
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login

