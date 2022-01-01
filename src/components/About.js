import myImg from "./myImg.jpeg"

function About(){
    return (
        <div id="about">
            About Me
            <img src={myImg} alt="I, in the flesh." width="250"/>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <a><button>Download Resume</button></a>
        </div>
    )
}

export default About;