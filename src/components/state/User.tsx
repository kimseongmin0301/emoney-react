import {useContext, useState} from 'react'
import {UserContext} from "../context/UserContext"

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    const userContext = useContext(UserContext);
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        userContext.setUser({
            name: "seongmin",
            email: "poceania1358@emoney.co.kr"
        });
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )

}
