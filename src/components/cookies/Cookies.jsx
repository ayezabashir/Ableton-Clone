import { useState } from "react"

const Cookies = () => {
    const [cookies, setCookies] = useState(true);
    const closeCookie = () => {
        setCookies(false);
    }
    return (
        <>
            {
                cookies && <div className="cookies">
                    <div className="detail">
                        <p className="font-light">Clicking “Accept” means you consent to your data being processed in the United States, and you’ll let us use cookies and other technologies to process your personal information so we can personalize and enhance your experience using Ableton.com. This also allows us to get statistics of visits. Click “More Info” to find out more about this (including possible risks of data processing in the USA), set your individual settings or object to certain processes. Click “Close” to deny consent. However, the use of technically required cookies is essential for the website to function.</p>
                    </div>
                    <div className="accept">
                        <button onClick={closeCookie}>Accept</button>
                    </div>
                    <div className="close">
                        <button onClick={closeCookie}>Close</button>
                        <button onClick={closeCookie}>More Info</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cookies
