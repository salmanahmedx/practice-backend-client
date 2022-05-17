import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        return (
            <Navigate to="/" />
        );
    }
    return (
        <div>
            <h1 className="text-3xl">Login</h1>
            <button className="btn m-8 text-xl" onClick={() => signInWithGoogle()}>Sign In With Google</button>
        </div>
    );
};

export default Login;