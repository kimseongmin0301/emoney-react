type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props;
  // const messageCount = props.messageCount
  
  return (
    <div>
      {props.isLoggedIn ? `${props.name} ${props.messageCount}`
      : `no`}
      <h2>{props.name} {props.messageCount}</h2>
    </div>
  );
};
