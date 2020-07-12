import React from 'react'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Contacts(){
    return(
       <div className="contact1">
           <Grid className="contact-grid">
               <Cell col={6}>
                   <div className="pt">
                   <h3>Priya Tank</h3>
                   <hr/>
                   <img src="priya1.png"/>
                   <p>
                   The first 90 percent of the code accounts for the first 90 percent of the development time…The remaining 10 percent of the code accounts for the other 90 percent of the development time.
                   </p>
                   </div>
               </Cell>
               <Cell col={6}>
                   <div className="tp">
                   <h3>Wanna get in Touch</h3>
                   <hr/>
                    <table>
                       <tr>
                           <td>
                               <FontAwesomeIcon icon={faPhoneSquare} size="3x"/>
                           </td>
                           <td>+91 9764044940</td>
                           
                       </tr>
                       <tr>
                           <td>
                               <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                           </td>
                           <td>priya10tank@gmail.com</td>
                       </tr>
                   </table>  
                   </div>
               </Cell>
           </Grid>
       </div> 
    )
}

export default Contacts