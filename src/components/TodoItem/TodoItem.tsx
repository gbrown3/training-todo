import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <input type='checkbox'></input>
        <label>{"TODO: pull label text from props"}</label>
      </div>
    );
  }
}