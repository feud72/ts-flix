import React, {Component} from 'react';
import Number from './Number';
import {Input, Form} from './Input';

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: '',
  };
  render() {
    const {counter, name} = this.state;
    return (
      <div>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
      </div>
    );
  }
  add = (): void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
}

export default App;
