import React,{useState} from 'react'
import { Tabs,Tab,Card,CardTitle,CardText,CardActions,Button, Grid, Cell,CardMenu,IconButton } from 'react-mdl'

function Project(){

    const [state,setState]=useState({
        activeTab:0
    })

    const myfunction = () =>{
            return(
                <div style={{display:'flex'}}>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>COVID-19 Tracker</CardTitle>
                        <CardText>
                            Project
                        </CardText>
                        <CardActions border>
                        <a target="_blank" href="https://github.com/priyatank25">
                            <Button colored>github</Button>
                            </a>
                        </CardActions>
                    </Card>
                   
                </div>
            )
        }
        
           
   
    
    return(
        <div>
            <Tabs activeTab={state.activeTab} onChange={(newId)=>setState({...state,activeTab:newId})}ripple>
                <Tab><h6>Projects</h6></Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                <section>
                {myfunction()}
                </section>

                </Cell>
            </Grid>
            
            
        </div>
    )
}

export default Project
