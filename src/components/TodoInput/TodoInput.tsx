/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent } from 'react';

export class TodoInput extends React.Component<{onSubmit: (e:FormEvent) => void }, {newTodo: string}> {
  constructor(props: Readonly<{ onSubmit: (e: React.FormEvent<Element>) => void; }>) {
    super(props);
    this.state = { newTodo:'' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ newTodo: e.target.value });
  }
  
  render() {
    console.log(this.state.newTodo);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input onChange={this.onChangeHandler}></input>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}