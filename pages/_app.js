import '../styles/globals.css'
import '../styles/bootstrap.min.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
