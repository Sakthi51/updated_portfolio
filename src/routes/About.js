import React, { useState, useEffect } from 'react';

var drawer = false;


function About() {

    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden");
    const [toggle, setToggle] = useState(false);
    const [navBar, setNavBar] = useState("NavBar");

    function DrawerManager() {
        if (drawer) {
            if (localStorage.getItem('Theme') === "true") {
                drawer = false;
                setDrawerSlide("DrawerHidden-Dark");
                setDrawerBG("DrawerBGHidden");
            }
            else {
                drawer = false;
                setDrawerSlide("DrawerHidden");
                setDrawerBG("DrawerBGHidden");
            }
        }
        else {
            if (localStorage.getItem('Theme') === "true") {
                drawer = true;
                setDrawerSlide("Drawer-Dark");
                setDrawerBG("DrawerBG");
            }
            else {
                drawer = true;
                setDrawerSlide("Drawer");
                setDrawerBG("DrawerBG");
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('Theme') === "true") {
            setToggle(true);
            setNavBar("NavBar-Dark");
        }
    }, []);
    function ModeManager() {
        if (localStorage.getItem('Theme') === "true") {
            setToggle(false);
            localStorage.setItem('Theme', 'false')
            document.body.classList.remove('body');
            setNavBar("NavBar");
            drawer = false;
            setDrawerSlide("DrawerHidden");
            setDrawerBG("DrawerBGHidden");
        }
        else {
            localStorage.setItem('Theme', 'true');
            document.body.classList.add('body');
            setNavBar("NavBar-Dark");
            setToggle(true);
            drawer = false;
            setDrawerSlide("DrawerHidden-Dark");
            setDrawerBG("DrawerBGHidden");
        }
    }




    function Drawer() {
        return (
            <div className={DrawerBG}>
                <div className={DrawerBG} onClick={DrawerManager}>
                </div>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'}
                    <a href="/" style={{ color: "#FF5555" }}>About </a>{'\n\n'}
                    <a href="/technology" >Technology </a>{'\n\n'}
                    <a href="/projects" >Projects </a>{'\n\n'}
                    {/* <a target="_blank" rel="noreferrer" href="https://manoj-writes.hashnode.dev/">Blog</a>{'\n\n'} */}
                    <a target="_blank" href="https://drive.google.com/file/d/1j0zNmUu0FVwwOqyrDeu5K3kAT9kdrW6j/view?usp=sharing">Resume</a>
                    {'\n\n'}<hr style={{ width: "80%", margin: "auto", opacity: "0.2" }} />{'\n'}
                    <a target="_blank" rel="noreferrer" href="mailto:sakthi1711231@gmail.com"  >E-mail </a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sakthi-0654b821a/"  >LinkedIn </a>{'\n\n'}
                    {/* <a target="_blank" rel="noreferrer" href="https://discord.com/users/777906489498271765"  >Discord </a>{'\n\n'} */}
                    <a target="_blank" rel="noreferrer" href="#"  >Telegram </a>{'\n'}
                    {'\n'}<b>Dark Mode:</b><div class="toggleWrapper">
                        <input type="checkbox" name="toggle2" checked={toggle} onClick={ModeManager} class="mobileToggle" id="toggle2" />
                        <label for="toggle2"></label>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Drawer />
            <section id={navBar}>
                <div id="NavBar__Left__Part">
                    <label for="check">
                        <input type="checkbox" onClick={DrawerManager} checked={drawer} id="check" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                {/* <div id="NavBar__Right__Part">
                    <span id="linkedin">
                        <a rel="noreferrer" href="https://www.linkedin.com/in/sakthi-0654b821a/" target="_blank"> <img style={{ marginTop: '5px' }} src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height="25px" srcset="" /></a>
                    </span>
                    <span id="Github">
                        <a rel="noreferrer" href="https://github.com/Sakthi51" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt="" height="29px" srcset="" /></a>
                    </span>
                </div> */}
                <div className='navbar-right-part'>

                <div style={{marginTop:'1px'}} className='leetcode_icon'>
                    <a rel="noreferrer" href="https://leetcode.com/sakthi_/" target="_blank"> <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3628297-3031905.png?f=avif&w=256" alt="" height="30px" srcset="" /></a>
                    </div>
                    <div className='linkedin_icon'>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/sakthi-0654b821a/" target="_blank"> <img style={{ marginTop: '5px' }} src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height="27px" srcset="" /></a>
                    </div>
                    <div className='github_icon'>
                    <a rel="noreferrer" href="https://github.com/Sakthi51" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt="" height="30px" srcset="" /></a>
                    </div>



                </div>
            </section>

            <section style={{ height: "128px" }}>
            </section>
            <section id="Home">

                <section id="img">
                </section>
                {'\n'}
                <h1 style={{ opacity: "0.9" }}><b style={{ color: "#ee5253" }}>
                    Hi!</b> This is Sakthi
                </h1>
                <p style={{ opacity: "0.7" }}>I love to take care of <b>Full stack Software Development</b>.</p>
                {'\n\n'}
                <div style={{ fontSize: '15px' }} id="aboutMe" >
                    <h2 style={{ opacity: "0.9" }}>About Me</h2>
                    {'\n'}
                    <p style={{ opacity: "0.8", fontFamily: "Inter", marginLeft: "auto", marginRight: "auto", maxWidth: "720px", textAlign: "justify" }}>
                        I'm a Full stack developer with a strong foundation in <b>HTML, CSS, and JavaScript</b> . I specialize in modern front-end frameworks like <b>ReactJS and Redux, Redux saga</b>  and have expertise in back-end development with <b>Flask, NodeJS, and ExpressJS</b> , as well as <b>Graphql</b>. My experience also includes <b>SQL</b> and <b>MongoDB databases</b>, as well as version control using <b>Git/GitHub</b>.
                        {'\n\n'}
                        With a degree in Information Technology from <b>Sathyabama University</b>, I bring a solid understanding of programming concepts and best practices to any project. I'm always looking for opportunities to expand my skills and contribute to exciting web development projects.
                    </p>
                    {'\n'}
                    

                    <h2>Work & Experience</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Inter", marginLeft: "auto", marginRight: "auto", maxWidth: "720px", textAlign: "justify" }}>
                        {'\n'}
                        I am a full-stack developer with experience working as an <b>intern at Paperflite</b> .As an intern, I was able to work on real-world projects, collaborate with cross-functional teams, and develop my skills.
                        {'\n\n  '}
                        {/* I'm seeking an internship opportunity
                        in software development. Currently, I'm preparing myself for Full stack web Development.
                        {'\n\n'}
                        {'\n\n'} */}
                    </p>
                    You can reach me out on
                    <b>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/sakthi-0654b821a/" target="_blank" className="LINK">
                            {''} <u>LinkedIn</u>✨
                        </a>
                    </b>
                    {/* {''} and {''} */}
                    {/* <b>
                        <a target="_blank" rel="noreferrer" href="https://discord.com/users/777906489498271765">
                            <u>Discords</u> </a>
                    </b> */}
                    {/* (Sakthi#4427) ✨ */}

                    {'\n\n'}
                    Don't forget to check out my <b>
                        <a rel="noreferrer" href="/technology" target="_blank" className="LINK">
                            <u>Technology</u>
                        </a></b> and <b><a target="_blank" rel="noreferrer" href="/projects"  >
                            <u>Projects</u>
                        </a></b> and <b><a target="_blank" rel="noreferrer" href="https://leetcode.com/sakthi_/"  >
                            <u>Leetcode profile</u>
                        </a></b> page.
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    <i style={{ opacity: 0.3 }}>
                        Last Modified on: 10-06-2023
                    </i>
                </div>
            </section>
        </div>
    )
}

export default About;