import React from 'react'
import { Button } from "semantic-ui-react";
import "./App.scss";
import {Navigation} from "./routes"
import {ClientLayout} from "./layouts"

export default function App() {
  return (
    <ClientLayout>
      <h1>Hola mundo</h1>
    </ClientLayout>
  );
}
