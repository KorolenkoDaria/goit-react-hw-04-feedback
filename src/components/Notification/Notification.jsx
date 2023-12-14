import { Title } from "./Notification.styled";
 
const Notification = ({children}) => { 
    return (
        <Title>{children}</Title>
)
}

export default Notification;