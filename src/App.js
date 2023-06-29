import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import reducer from './redux/reducers';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
