import {Wrapper, ListBtns, ItemsBtn, Button} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrapper>
            <ListBtns>
           {options.map(option =>
               <ItemsBtn key={option}>
                   <Button onClick={onLeaveFeedback}>{option}</Button>
                </ItemsBtn>)
            }
            </ListBtns>
        </Wrapper>
    )
}

export default FeedbackOptions;