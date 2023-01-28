import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './config/store'

import "./styles/App.css"
import './styles/Home.css'
import './styles/SignIn.css'
import "./styles/Register.css"
import './styles/Sidebar.css'
import './styles/Post.css'
import './styles/NotFound.css'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
