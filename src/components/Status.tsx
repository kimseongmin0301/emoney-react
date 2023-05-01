type StatusProps = {
    status: "loading" | "success" | "error";
}

export const Status = (props: StatusProps) => {
    let message;
    if(props.status === "loading") {
        message = "불러오는 중";
    } else if(props.status === "success") {
        message = "데이터 패치 성공";
    } else if(props.status === "error") {
        message = "데이터 패치 에러";
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    );
};