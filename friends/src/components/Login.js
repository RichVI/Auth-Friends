import React  from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials:{
            ...this.state.credentials,
            [event.target.name]: event.target.value
            }
        });
    }

    handleLogin = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log("Post res", res)
            if (window.localStorage) {
                window.localStorage.setItem('token', res.data.payload);
                this.props.history.push("/protected")
            }
        })
        .catch(error => (console.log(error)));
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <input name="username" type="text" value={this.state.credentials.username} onChange={this.handleChange} />
                    <input name="password" type="text" value={this.state.credentials.password} onChange={this.handleChange}/>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export { Login };