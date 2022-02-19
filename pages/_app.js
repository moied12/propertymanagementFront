import React from "react";
import NextApp from "next/app";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import css from "./style.css"
import { persistStore } from 'redux-persist'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-slideshow-image/dist/styles.css';
import Navbar from '../components/navbar';

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
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={this.persistor}>
              <Navbar/>
              <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </>

    );
  }
}

export default withReduxStore(App)