import React from 'react'
import '../App.css'
import { Grid, Cell } from 'react-mdl'

function Resume(){
    return(
        <div>
            <Grid>
                <Cell className="resume-cell-1" col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src="myimage.png" style={{height:'200px'}} />
                    </div>
                    <h3 style={{paddingTop:'1em'}}>PRIYA TANK</h3>
                    <h4>Programmer</h4>
                    <hr style={{borderTop:'3px solid ',width:'50%',margin:'auto'}}/>
                    <p>
                    The first 90 percent of the code accounts for the first 90 percent of the development time…The remaining 10 percent of the code accounts for the other 90 percent of the development time.
                    </p>
                    
                </Cell>
                <Cell className="resume-cell-2" col={8}>
                    <h4>PRIYA GIRDHAR TANK</h4>
                    <p>
                        33,Shree Krushna Banglow,Hirawadi,Nashik-422003
                        <br/>
                        9764044940
                        <br/>
                        priya10tank@gmail.com
            
                     </p>
                     <hr/>
                    <h4>CAREER OBJECTIVE</h4>
                    <p>
                         seeking a position at XYZ Company Where I Can maximize my 10+ years of management,quality assurance,program development,and training experience.
                    </p>
                    <hr/>
                    <h4>EDUCATION</h4> 
                    <p>
                        <h5>G.H.Raisoni Institute Of Engineering And Technology , Pune</h5>
                        Information Technology(Pursuing)<br/> 
                        8.04<br/>
                        2022<br/>
                        <h5>KK Wagh Women's Polytechnic , Nashik</h5>
                        Diploma,Computer Technology<br/>
                        73.94%<br/>
                        2019
                        <h5>R.P.Vidhyalaya</h5>
                        10th<br/>
                        80.60%<br/>
                        2016

                    </p>
                    <hr/> 
                    <h4>TECHNICAL SKILLS</h4>
                    <p>Programming Language: C , C++ , Python</p>
                    <hr/>
                    <h4>INTERESTS</h4>
                    <p>
                        Software Development<br/>
                        Web Development
                    </p>
                    <hr/>
                    <h4>ACTIVITIES</h4>
                    <p>Active Participation in Organized event</p>
                    <hr/>

                    <h4>PERSONAL PPROFILE</h4>
                    <p>
                        Date of Birth : 25/10/2000<br/>
                        Marital Status : Unmarried<br/>
                        Nationality : Indian<br/>
                        Known Language : English , Hindi , Marathi and Gujarati<br/>
                        Hobby : Singging , Play Musical Instruments
                    </p> 
                </Cell>
            </Grid>
            
             
        </div>
    )
}

export default Resume