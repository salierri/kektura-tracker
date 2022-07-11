import '../styles/globals.css'
import '../styles/bootstrap.min.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: {} });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
