import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { About, Contact, GitHub, Home, User } from './components';
import githubInfoLoader from './utils/githubInfoLoader.js';

/**
 * Using Object Array Notation
 */
// const router = createBrowserRouter([{
//   path: '/',
//   element: <App />,
//   children: [{
//     path: '',
//     element: <Home />
//   }, {
//     path: 'about',
//     element: <About />
//   }, {
//     path: 'contact',
//     element: <Contact />
//   }]
// }]);

/**
 * Using XML Elements Notation
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='github' element={<GitHub />} loader={githubInfoLoader} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
      hydrateFallbackElement={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "1.2rem",
          }}
        >
          Loading app...
        </div>
      } />
  </StrictMode>,
);
