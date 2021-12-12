import React from 'react';
import Main from './examples/Main';
import Alert from './examples/alert/Alert';
import { AlertProvider } from './examples/alert/AlertContext'

function App() {

  return (
    <AlertProvider>
      <div className={'container'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;