import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';


const Route: React.FC= () => {

    return (
        <ReactDOMRoute
             render={({ location }) => {
                 return(
            <Redirect to={{
                pathname: '/',
                state:{from: location},
            }}/>

                 )}}
                 
        />
    )
}

export default Route;