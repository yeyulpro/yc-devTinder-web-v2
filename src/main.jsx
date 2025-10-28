import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { RouterProvider } from "react-router-dom"; 
import { store } from './app/store/store.js';
import { router } from './app/router/routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-right" autoClose={1500} />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
