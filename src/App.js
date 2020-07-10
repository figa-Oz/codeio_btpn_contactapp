import React, { Component } from 'react'
import './App.css'
import { 
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom'
import Read from './Pages/Read'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import Detail from './pages/Detail'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/"    
                        exact={true} 
                        render={props => <Read
                        {...props} />}
                    />

                    <Route exact path="/add" component={Create} />
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route exact path="/edit/:id" component={Edit} />
                    <Route exact path="/remove/:id" component={Delete} />
                </Switch>
            </Router>
        )
    }
}
