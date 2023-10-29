import React from 'react';
const Nav = (props) => {
    const NAV = ()=>{
        if (props.page === "About"){       
            return(
            <ul>
                <a href="/" style={{color: "#FF5555"}}>About </a>
                <a href = "/technology" >Technology </a>
                <a href = "/projects" >Projects </a>
                <a target="_blank" href="https://drive.google.com/file/d/1gF_Q8HCtOnLr9wttw8B-XkCg-a6366co/view?usp=sharing">Resume</a>
            </ul>
            );
        }
        else if (props.page === "Technology"){       
            return(
            <ul>
                <a href= "/" >About </a>
                <a href="/technology" style={{color: "#FF5555"}} >Technology </a>
                <a href = "/projects" >Projects </a>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1j0zNmUu0FVwwOqyrDeu5K3kAT9kdrW6j/view?usp=sharing">Resume</a>
            </ul>
            );
        }
        else if (props.page === "Projects"){       
            return(
            <ul>
                <a href= "/">About </a>
                <a href= "/technology" >Technology </a>
                <a href="/projects" style={{color: "#FF5555"}} >Projects </a>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1XaPP_tks6EyfvEu6IY9-nCLFBMZ2I3OH/view?usp=sharing?usp=sharing">Resume</a>
            </ul>
            );
        }
    }
    
    return(
        <section id="NavBar">
        <NAV />
            <div id="NavBar__Left__Part">
                <label for="check">
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div style={{backgroundColor:'gray'}} id="NavBar__Right__Part">
                <span id="linkedin">
                    <a rel="noreferrer" href="https://www.linkedin.com/in/sakthi-0654b821a/" target="_blank"> <img style={{marginTop:'20px'}} src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height = "25px" srcset="" /></a>
                </span>
                <span id="github">
                    <a rel="noreferrer" href="https://github.com/Sakthi51" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt=""  height = "29px" srcset="" /></a>
                </span>
            </div>
        </section>
    );
}
export default Nav;