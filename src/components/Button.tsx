type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export const Button = (props: ButtonProps) => {
    let number = 0;

    return (
        <button onClick={(event) => props.handleClick(event, ++number)}>Click</button>
    );
};