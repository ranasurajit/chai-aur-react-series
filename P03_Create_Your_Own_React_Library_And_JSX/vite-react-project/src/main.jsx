import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const CustomElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click to Visit Google'
};

const CustomJSX = () => {
  return (
    <a href='https://www.google.com' target='_blank'>Click to Visit Google</a>
  );
};

console.log(CustomJSX());

const globalVar = ' Global Variable Expression';

const CustomReactElement = () => {
  // returns valid JSX
  return React.createElement('a',
    {
      href: 'https://www.google.com',
      target: '_blank',
    },
    'Click to Visit Google (using React.CreateElement)',
    globalVar
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CustomElement /> */}
    <>
      <App />
      <br />
      <CustomJSX />
      <br />
      <CustomReactElement />
    </>
  </StrictMode>,
);
