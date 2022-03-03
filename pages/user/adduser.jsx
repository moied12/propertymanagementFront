import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register,registerErrorReset } from '../../store/auth/slice';

import { Form, Input, InputNumber, notification } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            phone:0,
            name:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn != true) {
            Router.push('/');
        }
        return false;
    }

    handleRegisterSubmit = e => {
        let userdetails = JSON.parse(JSON.stringify(this.state));
        this.props.dispatch(register(userdetails));
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value, } = e.target;
        this.setState({ [name]: value });
    };
    componentWillUnmount(){
        this.props.dispatch( registerErrorReset());
       }



    render() {
        const {error} = this.props;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleRegisterSubmit.bind(this)}>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                type: "email",
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
                                            placeholder="Email address"
                                            onChange={this.handleChange}    

                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
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
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your number!',
                                                    pattern: new RegExp(/^[0-9]+$/)
                                            },
                                        ]}>
                                        <Input
                                        name='phone'
                                        value={this.state.phone}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="phone"
                                            placeholder="Phone..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Name!',
                                            },
                                        ]}>
                                        <Input
                                        name='name'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="name"
                                            placeholder="Name..."
                                        />
                                    </Form.Item>
                                </div>
                                {error!='false'  ? (
                                        <div style={{color:'red'}}>{error}</div>
                                    ) : (
                                        <div></div>
                                    )}
                             
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register User
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
