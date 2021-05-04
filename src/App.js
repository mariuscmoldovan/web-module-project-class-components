
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [], 
    };
    this.addItem = this.addItem.bind(this);
    this.strikeTodo = this.strikeTodo.bind(this);
    this.clear = this.clear.bind(this);
  }
  addItem = (item, e) => {
    
    const newItem = {
      text: item,
      id: Date.now(),
      complete: false
    };
    this.setState(items => ({
      items: [...this.state.items, newItem]
    }))
  }

  strikeTodo = (evt) => {
    evt.target.classList.toggle('strike');
  }
  clear = (evt) => {
     this.setState(state => ({
      ...this.state,
      items: this.state.items.filter(item => !item)
    }))
  };

  
  render() {
    return (
      <div className='todo'>
      <h1>TO DO LIST</h1>
      <div>
          <TodoList 
          items= {this.state.items} 
          strikeTodo={this.strikeTodo} />
          <br/>
          <TodoForm 
          addText={this.addItem} 
          clear={this.clear}/>
        </div>
      </div>
    );
  }
}

export default App;