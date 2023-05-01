import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    // type assertion
    // user라는 변수를 setUser라는 함수로 값을 변화시킴
    // 우항 ( ) 는 초기값 지정
    const [user, setUser] = useState<AuthUser | null>(null);
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: "Seongmin Kim",
            email: "poceania1358@emoney.co.kr",
        });
    }
    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleLogout}>로그아웃</button>
            <div>사용자 이름은 {user?.name}</div>
            <div>사용자 이메일은 {user?.email}</div>
        </div>
    )
}