import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { RouterPath } from './data-model/routerPath.enum';
import { ErrorBoundary } from './components/ErrorBoundary';

function App(): JSX.Element {
    const favourites = useSelector(
        (state: { favourites: number[] }) => state.favourites,
    );
    
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppNavbar />
                <Switch>
                    <Route
                        exact
                        path={RouterPath.FAVOURITES}
                        component={(): JSX.Element => (
                            <Home favourites={favourites!} />
                        )}
                    />
                    <Route exact path={RouterPath.HOME} component={Home} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
