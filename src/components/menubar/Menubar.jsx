import { useState } from "react"
import Jobs from "../jobs/Jobs";
import About from "../about/About";
import Apprenticeships from "../apprenticeships/Apprenticeships";

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
                            <li className="nav-links" onClick={handleAbout} style={showAbout ? { color: "#ff764d" } : { color: "#000" }}>
                                About
                            </li>
                            <li className="nav-links" onClick={handleJobs} style={showJobs ? { color: "#ff764d" } : { color: "#000" }}>
                                Jobs
                            </li>
                            <li className="nav-links" onClick={handleAppre} style={showAppre ? { color: "#ff764d" } : { color: "#000" }}>
                                Apprenticeships
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    showAbout && <About />
                }
                {
                    showJobs && <Jobs />
                }
                {
                    showAppre && <Apprenticeships />
                }
            </div>
        </>
    )
}

export default Menubar

