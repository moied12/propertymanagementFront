import React from "react";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

import { persistStore } from 'redux-persist'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Components } from "antd/lib/date-picker/generatePicker";




function App(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    props.Component.getInitialProps  = async ({ Component, ctx }) => {
        let pageProps = {};
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
    
        return { 
          pageProps, 
        };
      }    ;
    const persistor = persistStore(props.reduxStore);
    useEffect(() => {
        // on initial load - run auth check 
        
        authCheck(router.asPath);
        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function authCheck(url) {
      var cookie = require('cookie-cutter');
        let data = cookie.get('access-token');
        if (!data ){
          setAuthorized(false);
          router.push({
            pathname: '/account/login',
        });
        }else{
          setAuthorized(true);
        }
  }
    return (
        <>
         <Provider store={props.reduxStore}>
        <PersistGate
                    loading={<props.Component {...props.pageProps} />}
                    persistor={persistor}>
                        {authorized &&
                   <props.Component {...props.pageProps} />
                }
                    
                </PersistGate>
      </Provider>
        </>
    );
}


  
  export default withReduxStore(App)