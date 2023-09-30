import { useState } from "react"

const Menubar = () => {
    const [showAbout, setShowAbout] = useState(true);
    const [showJobs, setShowJobs] = useState(false);
    const [showAppre, setShowAppre] = useState(false);
    const handleAbout = () => {
        setShowAbout(true);
        setShowJobs(false);
        setShowAppre(false);
    }
    const handleJobs = () => {
        setShowJobs(true);
        setShowAbout(false);
        setShowAppre(false);

    }
    const handleAppre = () => {
        setShowAppre(true);
        setShowAbout(false);
        setShowJobs(false);
    }

    return (
        <>
            <div className="menubar">
                <div className="container">
                    <div className="stickybar">
                        <ul>
                            <li className="nav-links" onClick={handleAbout}>
                                About
                                {
                                    showAbout && <div>About component</div>
                                }
                            </li>
                            <li className="nav-links" onClick={handleJobs}>
                                Jobs
                                {
                                    showJobs && <div>Jobs component</div>
                                }
                            </li>
                            <li className="nav-links" onClick={handleAppre}>
                                Apprenticeships
                                {
                                    showAppre && <div>Appreee component</div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menubar

