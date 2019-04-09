import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookService from './services/book-service';
import { BookServiceProvider } from './components/book-service-context';

import store from './store';

const bookService = new BookService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookServiceProvider value={bookService}>
                <Router>
                    <App />
                </Router>
            </BookServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);