import React, {Component} from "react";
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css';

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form
            action=""
            onSubmit={this.submitHandler}
            className={classes.Authform}
          >
            <input type="text" />
            <input type="text" />

            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}