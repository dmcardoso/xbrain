import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from './global-styles';
import Routes from './routes';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline />
                <GlobalStyle />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
