import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {register,login} from '../../actions/loginActions';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    onSubmit = (event) => {
        if(this.state.username.length < 4 || this.state.password.length < 8){
            alert('username or password too short');
            return
        }
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if(event.target.name === 'register'){
            this.props.dispatch(register(user));
        }else {
            this.props.dispatch(login(user));
        }
    }

    render(){
        return (
            <div className="page">
      <div className="container">
        <div className="row justify">
          <div className="col-md-8 col-md-offset-2">
            <div className="login-form">
            <Form>
                <h2>Login Form</h2>
                <Form.Field className="form-group">
                    <input type = 'text' className="form-control" placeholder="Username"  onChange={this.onChange} name = 'username' value={this.state.username} />
                </Form.Field>
                <Form.Field className="form-group">
                    <input type = 'password' className="form-control" placeholder="Password" onChange={this.onChange} name = 'password' value={this.state.password} />
                </Form.Field>
                <Button onClick={this.onSubmit} className="btn-ecommarce" name='login'>Login</Button>
            </Form>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }

}

export default connect()(LoginForm);