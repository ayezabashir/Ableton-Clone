const Login = () => {
    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="top">
                        <h1>Log in</h1>
                    </div>
                    <div className="bottom">
                        <h4>Why do I need to log in?</h4>
                        <p>To use any version of Live (including Live Lite or our free trial) you need an Ableton account. It takes less than a minute to create one, and even less to log in if you already have one.</p>
                        <form >
                            <input type="email" />
                            <input type="password" />
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="register">
                <div className="container">
                    <div className="top">
                        <h1>Register</h1>
                    </div>
                    <div className="bottom">
                        <h4>New Customer? Please create an account.</h4>
                        <p>Your account lets you authorize and download Live plus your included library content.</p>
                        <form >
                            <input type="email" />
                            <input type="password" />
                            <input type="text" />
                            <input type="text" />
                            <select name="" id=""></select>
                            <input type="checkbox" name="" id="" />
                            <h6>Sign up to the Ableton newsletter to stay up to date with the latest special offers, tutorial videos, downloads, surveys and other news</h6>
                            <p>It’s free and you can unsubscribe at any time. Further information is available in our Privacy Policy.</p>
                            <button>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
