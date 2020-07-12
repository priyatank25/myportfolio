import React from 'react'
import '../App.css'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn,faPython,faStackOverflow,faInstagram,faFacebook,} from '@fortawesome/free-brands-svg-icons'
function Home(){
    return(
        <div >
            <Grid className="home-grid">
                <Cell col={12}>

                    <div>
                        <img src = "priya1.png" className="center"></img>
                        <img src = "sign.png" className="sign"></img>
                    </div>
                </Cell>
                
                <div className="banner-text">
                    <h2>STUDENT</h2>
                    <hr/>
                    <p>Web Development | Software Development </p>
                    
                    <div className="icon">
                    <a target="_blank" href="https://github.com/priyatank25">
                    
                        <span>
                            <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/priya-tank-98903a1b2">
                        <span>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </span>
                        </a>
                        <a target="_blank" href="https://stackoverflow.com/users/13885701/priya-tank">
                        <span>
                            <FontAwesomeIcon icon={faStackOverflow}/>
                        </span>
                        </a>
                        <span>
                            <FontAwesomeIcon icon={faPython}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </span>
                    </div>
                </div>
        
            </Grid>
        </div>
    )
}
export default Home