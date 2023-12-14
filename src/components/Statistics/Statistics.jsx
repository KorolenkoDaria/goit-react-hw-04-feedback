import {List, ListItem, Option, Value} from "./Statistics.styled";
const Statistics = ({ options, good, neutral, bad, total, positivePercentage }) => {
    const optionsValue = [good, neutral, bad];
    return (
            <List>
                {options.map((option ,index) =>
                <ListItem key={option}>
                        <Option>
                            {option}:
                        </Option>   
                        <Value>
                            {optionsValue[index]}
                        </Value>
                </ListItem>)
            }
                <ListItem>
                        <Option>
                            Total:
                        </Option>   
                        <Value>
                            {total}
                        </Value>
                </ListItem>
                <ListItem>
                        <Option>
                            Positive Feedback:
                        </Option>   
                        <Value>
                             {positivePercentage}%
                        </Value>
                </ListItem>
            </List>
    )

}

export default Statistics;
