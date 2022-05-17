import React from 'react';

const login = () => {
    return (
        <div>
            <h1 className="text-3xl">login</h1>
            <form className='m-4 flex flex-col justify-center items-center'>
                <input type="email" placeholder="Email" class="input input-bordered input-dark w-full max-w-xs m-2" />
                <input type="password" placeholder="Password" class="input input-bordered input-dark w-full max-w-xs m-2" />
                <div className="submit">
                    <button class="btn m-2" type='submit'>Login</button>
                    <button class="btn">Google</button>
                </div>
            </form>
        </div>
    );
};

export default login;