
import React from 'react';
import message from '../messages';

const sayMessage = (me) => {
  return message.formatMessage(me);
}

const App = (props) => {
  return (
    <h1 className="message">
      {sayMessage('ola turma de js na aula 2')}
    </h1>
  );
}

export default App;
