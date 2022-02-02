import React from "react";
import NextApp from "next/app";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

import { persistStore } from 'redux-persist'

class App extends NextApp {
  
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
}
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { 
      pageProps, 
    };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <PersistGate
                    loading={<Component {...pageProps} />}
                    persistor={this.persistor}>
                    <Component {...pageProps} />
                </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(App)