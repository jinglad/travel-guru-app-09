import React, { useContext, useState } from 'react';
import './Login.css';
import logo from '../../Logo1.png';
import { createWithEmailAndPassword, handleFacebookSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";



initializeLoginFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        password: '',
        email: '',
        error: '',
        success: false,
        passwordNotMatchedError: '',
    })


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    // const facebookSignIn = () => {
    //     handleFacebookSignIn()
    //         .then(res => {
    //             setUser(res);
    //             setLoggedInUser(res);
    //             history.replace(from);
    //         })
    // }

    const fbLogIn = () => {
        const fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbprovider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                // console.log("loggedin fb")
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage);
            });
    }


    const signOut = () => {
        handleSignOut()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
            })
    }

    const handleChange = (e) => {
        let isFormValid;
        // console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 6;
            const passHasNum = /\d{1}/.test(e.target.value);
            isFormValid = isPassValid && passHasNum;
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })

        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                    // console.log("login");
                })
        }
        e.preventDefault();
        // console.log("submit clicked");
    }

    return (
        <>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-2 logo">
                        <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
                    </div>
                    <div className="col-md-5 menu ml-auto">
                        <Link className="text-decoration-none text-dark item" to="/news">News</Link>
                        <Link className="text-decoration-none text-dark item" to="/destination">Destination</Link>
                        <Link className="text-decoration-none text-dark item" to="/blog">Blog</Link>
                        <Link className="text-decoration-none text-dark item" to="/contact">Contact</Link>
                        <Link to="/login" className="login-btn text-decoration-none text-dark">Login</Link>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="form-container">
                        {<h3>{newUser ? "Create an account" : "Login"}</h3>}
                        <form onSubmit={handleSubmit}>
                            {newUser && <div className="form-group">
                                <input type="text" onBlur={handleChange} name="fname" placeholder="First Name" />
                            </div>}
                            {newUser && <div className="form-group">
                                <input type="text" onBlur={handleChange} name="lname" placeholder="Last Name" />
                            </div>}
                            <div className="form-group">
                                <input type="text" onBlur={handleChange} name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="passWord" onBlur={handleChange} name="password" placeholder="Password" />
                            </div>
                            {newUser && <div className="form-group">
                                <input type="password" onBlur={handleChange} name="password2" placeholder="Confirm Password" />
                            </div>}
                            <div className="form-group">
                                <input type="submit" className="btn btn-block btn-warning" value={newUser ? "Create an account" : "Login"} />
                            </div>
                            <div className="text-center mb-2">
                                <small>{newUser ? "Already have an account?" : "Don't have an account?"}</small>
                                <input type="checkbox" name="newUser" id="newUser" onChange={() => setNewUser(!newUser)} />
                                <label>{newUser ? "Login" : "Create an account"}</label>
                            </div>
                            <button className="form-control form-group" onClick={fbLogIn}>Continue With Facebook</button>
                            <button className="form-control form-group" onClick={googleSignIn}>Continue With Google</button>
                        </form>
                    </div>
                </div>
                <br />
                <p className="text-danger text-center">{user.error}</p>
                {
                    user.success && <p className="text-success text-center">{newUser ? 'Sign Up' : 'Logged In'}successfull</p>
                }
            </div>
        </>
    );
};

export default Login;