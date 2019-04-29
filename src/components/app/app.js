import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SelectBooksPage from '../pages/select-books-page';
import BookshelfPage from '../pages/bookshelf-page';


const App = () => {
    return (
        <Switch>
            <Route
                path='/'
                component={SelectBooksPage}
                exact />

            <Route
                path='/bookshelf'
                component={BookshelfPage} />

            <Redirect to='/' />
        </Switch>
    );
};

export default App;