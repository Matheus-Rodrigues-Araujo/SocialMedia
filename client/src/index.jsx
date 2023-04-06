import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './config/store'

import "./styles/main.scss"
import "./styles/app.scss"
import './styles/home.scss'
import './styles/welcome.scss'
import './styles/Forms/signin.scss'
import "./styles/Forms/signup.scss"
import './styles/Sidebar/sidebar.scss'
import './styles/logo.scss'
import './styles/Post/post.scss'
import './styles/Profile/profile.scss'
import './styles/notfound.scss'


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
