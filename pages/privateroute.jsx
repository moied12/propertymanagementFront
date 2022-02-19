
import React, { Component } from "react";
import ServerCookie from "next-cookies";
import { redirectToLogin } from "../services/redirect-services";
export function privateRoute(WrappedComponent) {
  return class extends Component {
    state = {
      data: this.props.data
    };

    static async getInitialProps(ctx) {
        let data = ServerCookie(ctx)['access-token'];
      const initialProps = { data };
      
      if (!data) redirectToLogin(ctx.res); 
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(initialProps);
        return { ...wrappedProps, data };
      }
      return initialProps;
    }

    render() {
        const { data, ...propsWithoutAuth } = this.props;
      return <WrappedComponent data={this.state.data} {...propsWithoutAuth} />;
    }
  };
}