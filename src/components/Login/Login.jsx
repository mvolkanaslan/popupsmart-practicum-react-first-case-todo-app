import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { todoActions } from '../../reducers/todoSlice';
import { store } from '../../store';
import "./login.css"


export default function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState();
    const formSubmitHandle = (e) => {
        e.preventDefault();
        if (userName.length >= 3) {
            localStorage.setItem("username", userName);
            store.dispatch(todoActions.setUserName(userName))
            navigate("/", { replace: true });
        }
    }
    const changeUserName = (e) => {
        setUserName(e.target.value)
    }


    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={formSubmitHandle}>
                <div className="form-floating mb-3">
                    <input name="userName" type="text" className="form-control" onChange={changeUserName} required />
                    <label >Enter Your Name</label>
                </div>
                {/* <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary" type='Submit' >Sign in</button>

            </form>
        </main>
    )
}
