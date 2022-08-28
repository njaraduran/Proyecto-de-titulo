import React from 'react'
// import { Button } from "semantic-ui-react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Navigation} from "./routes";
// import {ClientLayout} from "./layouts";
import {AuthProvider} from "./context"

export default function App() {
  return (
    <AuthProvider>
      <Navigation />

      <ToastContainer 
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />


    </AuthProvider>
  );
}
