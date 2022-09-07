import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../reducers/authSlice';
import { store } from '../../store';
import validation from '../../utils/validation';
import Icon from '../Icon/Icon';
import "./login.css"

export default function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState();
    const [showAlert,setShowAlert] = useState(false)

    const formSubmitHandle = (e) => {
        e.preventDefault();
        //validation for username
        if (validation.user(userName)) {
            localStorage.setItem("username", userName);
            store.dispatch(authActions.setUserName(userName))
            navigate("/", { replace: true });
        }
        else{
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 1500);
        }
    }
    
    const changeUserName = (e) => {
        setUserName(e.target.value)
    }

    return (
        <main className="form-signin  m-auto">
            <form onSubmit={formSubmitHandle}>
                <div className="form-floating mb-3">
                    <input name="userName" type="text" className="form-control" onChange={changeUserName} required />
                    <label >Enter Your Name</label>
                </div>
                {showAlert && <div className="alert alert-warning d-flex align-items-center p-2" role="alert">
                   <Icon name="warning" size={24}/>
                    <div className='ms-3'>
                        Username must be 3 letters minimum
                    </div>
                </div>}
                <button className="w-100 btn btn-lg btn-primary" type='Submit' >Sign in</button>

            </form>
        </main>
    )
}
