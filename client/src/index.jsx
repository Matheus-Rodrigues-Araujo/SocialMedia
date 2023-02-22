import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './config/store'

import "./styles/Main.css"
import "./styles/App.css"
import './styles/Home.css'
import './styles/Welcome.css'
import './styles/SignIn.css'
import "./styles/SignUp.css"
import './styles/Sidebar/Sidebar.css'
import './styles/Logo.css'
import './styles/Post/Post.css'
import './styles/Profile/Profile.css'
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
