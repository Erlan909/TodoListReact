import React from 'react'
import { Route, Switch} from 'react-router-dom'
import DetailScreen from '../DetailScreen/DetailScreen'
import HomeScreen from '../HomeScreen/HomeScreen'


export default function Main() {
    return (
        <div>
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/detail/:id' component={DetailScreen}/>

        </Switch>
            
        </div>
    )
}
