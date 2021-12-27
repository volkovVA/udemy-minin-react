import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import { add, sub, addNumber } from './redux/actions/actions';
import './App.scss'

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть</button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
