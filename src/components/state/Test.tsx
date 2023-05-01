import {useContext, useState} from 'react'
import {UserContext} from "../context/UserContext"

type AuthUser = {
    name: string;
    email: string;
}

export const Test = () => {
    const userContext = useContext(UserContext);
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        userContext.setUser({
            name: "Test",
            email: "Test"
        });
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>test</button>
            <button onClick={handleLogout}>test</button>
            <div>Test {userContext.user?.name}</div>
            <div>Test  {userContext.user?.email}</div>
        </div>
    )

}
