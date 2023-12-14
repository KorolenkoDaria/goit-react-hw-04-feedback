import { Component } from "react";

import { Wrapper } from "./App.styled";

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 

  onLeaveFeedback = (event) => {
    const typeFeedback = event.target.textContent;
    this.setState((prevState) => ({
      [typeFeedback]: prevState[typeFeedback] + 1
    }));
  }
 
  countTotalFeedback = () => {
    let total = 0;
     total = this.state.Good + this.state.Neutral + this.state.Bad;
     return total;
  }

  
  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    const total = this.countTotalFeedback();
    if (total === 0) {
      positiveFeedback = 0; 
    } else { positiveFeedback = this.state.Good / total * 100; }
    return Math.floor(positiveFeedback);
  }

  render() {
    return (
      <Wrapper>
        <Section
          title="Please leave your feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        
        <Section
          title="Statistics"
          children={ 
            this.countTotalFeedback() ? (
              <Statistics
              options={Object.keys(this.state)}
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
            ) : (<Notification children = "There is no feedback!" />)
           }
        /> 
      </Wrapper>
    );
  }
}

export default App;
