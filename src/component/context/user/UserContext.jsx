import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ( {children} ) => {
    
    const register = async (user) => {
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return data;
    }

    const authenticate = async (user) => {
        const response = await fetch('/user/authentication', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

        const data = await response.json();
        return data;
    }

    return(
        <UserContext.Provider value={{
            register: register
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;