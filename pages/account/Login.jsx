import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login,loginErrorReset } from '../../store/auth/slice';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }

    handleLoginSubmit = e => {
        let userdetails = JSON.parse(JSON.stringify(this.state));
        this.props.dispatch(login(userdetails));
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    componentWillUnmount(){
        this.props.dispatch( loginErrorReset());
       }



    render() {
        const {error} = this.props;
        return (
            <div className='loginpage'>
                    <Form
                        onFinish={this.handleLoginSubmit.bind(this)} className='card'>
                        <div class="grid-container1">
                            <div class='item1'>LOGIN</div>
                            <div class='item2'>   <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                        name = "email"
                                        value={this.state.email}
                                            className="form-control"
                                            type="text"
                                            placeholder="Username or email address"
                                            onChange={this.handleChange}    

                                        />
                                    </Form.Item></div>
                                    <div class='item3'> <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                        />
                                    </Form.Item>
                                {error!='false'  ? (
                                        <div style={{color:'red'}}>{error}</div>
                                    ) : (
                                        <div></div>
                                    )}
                                
                                
                           
                                </div>
                                <div class='item4'>
                                    <button type="submit" >
                                        Login
                                    </button>
                                </div>
                                </div>
                    </Form>
   
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Login);
