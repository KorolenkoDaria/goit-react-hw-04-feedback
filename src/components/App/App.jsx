import { useState } from "react";

import { Wrapper } from "./App.styled";

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const onLeaveFeedback = (event) => {

    const typeFeedback = event.target.textContent;

    switch (typeFeedback) {
      case 'good':
        setGood(prevState => prevState + 1)
      break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
      break;
      case 'bad':
        setBad(prevState => prevState + 1)
      break;
      default:
      break;
   }
  }
  
  const feedback = {
    good,
    neutral,
    bad,
  }
 
  const countTotalFeedback = () => {
    let total = 0;
     total = good + neutral + bad;
     return total;
  }

  
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    const total = countTotalFeedback();
    if (total === 0) {
      positiveFeedback = 0; 
    } else { positiveFeedback = good / total * 100; }
    return Math.floor(positiveFeedback);
  }

  
    return (
      <Wrapper>
        <Section
          title="Please leave your feedback"
          children={
            <FeedbackOptions
              options={Object.keys(feedback)}
              onLeaveFeedback={onLeaveFeedback}
            />
          }
        />
        
        <Section
          title="Statistics"
          children={ 
            countTotalFeedback() ? (
              <Statistics
              options={Object.keys(feedback)}
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()} />
            ) : (<Notification children = "There is no feedback!" />)
           }
        /> 
      </Wrapper>
    );
  
}

export default App;
