import React from 'react';
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.querySelector('#app'))

const App = () => {
  return (
    <div>Coucou les juniors 22</div>
  )
}

rootElement.render(
  <App/>
)

