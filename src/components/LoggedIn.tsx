import {useState} from 'react';

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const renderStatus = (bool: boolean) => {
        if(bool) {
            return <h2>로그인되었습니다.</h2>
        } else {
            return <h2>로그인이 되어있지 않습니다.</h2>
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleLogout}>로그아웃</button>
            <div>
                {renderStatus(isLoggedIn)}
                사용자가 {isLoggedIn ? "로그인이 됨" : "로그인이 안됨" }
            </div>
        </div>
    )
}