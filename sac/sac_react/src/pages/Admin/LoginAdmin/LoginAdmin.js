import React from 'react';
import {LoginForm} from "../../../components/Admin";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className='login-admin'>
      <div className='login-admin__content'>
        <h1>Sistema de Admnistración de Contratos</h1>
        <LoginForm />
      </div>
    </div>
    
  )
}
