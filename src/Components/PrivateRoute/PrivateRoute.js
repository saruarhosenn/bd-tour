import React from 'react';
import { Redirect, Route } from 'react-router';
import useAouth from '../../Hooks/useAouth';

const PrivateRoute = ({children, ...rest}) => {
	const { user } = useAouth();
	return (
		<Route
		{...rest}
		render={({ location }) => user.email ? children : 
				<Redirect
					to={{
						pathname: "/signIn",
						state: { from: location }
					}}
				/>
		  	}
		/>
	);
};

export default PrivateRoute;