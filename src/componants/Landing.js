import React from 'react'
import {Layout,Header,HeaderRow,Textfield,Navigation,Drawer,Content}from 'react-mdl'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import '../App.css'

import Home from'./Home'
import Resume from './Resume'
import Project from './Project'
import Contacts from './Contacts'

function Landing(){
    return( 
    <div>  
        <BrowserRouter>
        <div className="demo-big-content">
            <Layout className="pri">
                <Header title="PRIYA TANK" className="headerApp" scroll>
                    <Navigation>
                        <Link to="/">HOME</Link>
                        <Link to="/resume">RESUME</Link>
                        <Link to="/project">PROJECT</Link>
                        <Link to="/contacts">CONTACTS</Link>
                    </Navigation>
                </Header>
                <Drawer title="Priya Tank">
                    <Navigation>
                        <Link to="/">HOME</Link>
                        <Link to="/resume">RESUME</Link>
                        <Link to="/project">PROJECT</Link>
                        <Link to="/contacts">CONTACTS</Link>
               
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/resume" component={Resume}></Route>
                            <Route exact path="/project" component={Project}></Route>
                            <Route exact path="/contacts" component={Contacts}></Route>
                        </Switch>
                </Content>
            </Layout>
        </div>
        </BrowserRouter>
    </div>
    
    )
}

export default Landing