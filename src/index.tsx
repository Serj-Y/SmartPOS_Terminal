import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './redux/store';
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert';
//@ts-ignore
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 2000,
  transition: transitions.FADE,
  type: types.SUCCESS,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
    <HashRouter>
      <Provider store={store} >
         <App />
      </Provider>
    </HashRouter>
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
