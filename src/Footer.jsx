import './Footer.css';
import github from "/Users/savannahlyles/Documents/website/myportfolio/src/logos/github.PNG";
import gmail from "/Users/savannahlyles/Documents/website/myportfolio/src/logos/gmail.PNG";
import linkedin from "/Users/savannahlyles/Documents/website/myportfolio/src/logos/linkedin.PNG";

function Footer(){
    return(
        <>
        <foot>
            <footer className="footer">
                <div class="flex">
                    <a href="https://github.com/savannahhlyles" target="_blank">
                    <img src={github} alt="Github Icon" width="35" height="35"/>
                    </a>
                    <a href="mailto:shl2183@columbia.edu">
                    <img src={gmail} alt="Gmail Icon" width="40" height="50"/>
                    </a>
                    <a href="https://www.linkedin.com/in/savannah-lyles-a5766a254" target="_blank">
                    <img src={linkedin} alt="LinkedIn Icon" width="35" height="35"/>
                    </a>
                </div>
            </footer>
        </foot>
        </>
    )
}

export default Footer