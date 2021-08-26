import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
// import '../styles/globals.scss'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const makestore = () => store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)

// Из коробки
// ==========
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
// ==========
