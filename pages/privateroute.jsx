
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
        
        // if (!data ){
        //   setAuthorized(false);
        //   router.push({
        //     pathname: '/account/login',
        // });
        // }else{
        //   setAuthorized(true);
        // }
      // create AuthToken
    //   const token = ServerCookie(ctx)[TOKEN_STORAGE_KEY];
    //   const auth = new AuthToken(token);
      const initialProps = { data };
      
      // if the token is expired, that means the user is no longer (or never was) authenticated
      // and if we allow the request to continue, they will reach a page they should not be at.
      if (!data) redirectToLogin(ctx.res); 
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(initialProps);
        // make sure our `auth: AuthToken` is always returned
        return { ...wrappedProps, data };
      }
      return initialProps;
    }

    componentDidMount() {
      // since getInitialProps returns our props after they've JSON.stringify
      // we need to reinitialize it as an AuthToken to have the full class
      // with all instance methods available
      this.setState({ data: this.props.data })
    }

    render() {
        console.log("moied111")
        console.log(this.props)
      // we want to hydrate the WrappedComponent with a full instance method of
      // AuthToken, the existing props.auth is a flattened auth, we want to use
      // the state instance of auth that has been rehydrated in browser after mount
    //   const { auth, ...propsWithoutAuth } = this.props;
      return <WrappedComponent />;
    }
  };
}