import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AouthContext = createContext();
const AouthProvider = ({children}) => {
	return (
		<AouthContext.Provider value={useFirebase()}>
			{children}
		</AouthContext.Provider>
	);
};

export default AouthProvider;