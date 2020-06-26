import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

export const App: React.FunctionComponent = props => {
    return (
        <div>
            <div>
                <div>
                    <Link to={'/'}>Page 1</Link>
                </div>
                <div>
                    <Link to={'/2'}>Page 2</Link>
                </div>
            </div>
            <Switch>
                <Route path={'/'} exact>
                    <Page1 />
                </Route>
                <Route path={'/2'} exact>
                    <Page2 />
                </Route>
            </Switch>
        </div>
    )
}
