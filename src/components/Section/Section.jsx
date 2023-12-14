import { Wrapper, Title } from "./Section.styled";

const Section = ({children, title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {children}
        </Wrapper>) 
}
export default Section;