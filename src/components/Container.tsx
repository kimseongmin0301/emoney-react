type ContainerProps = {
    styles: React.CSSProperties;
}

export const Container = (props: ContainerProps) => {
    return (
        <>
            <div style={props.styles}>내용을 여기에 이력하세요1</div>
            <div style={{border: "2px dotted orange", padding: "2px", margin:"50px"}}>내용을 여기에 이력하세요2</div>
        </>
    )
};