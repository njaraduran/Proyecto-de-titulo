import React from 'react';
import {Form,Button,Checkbox} from "semantic-ui-react";
import "./AddEditUserform.scss"

export function AddEditUserform() {
  return (
    <div>
      <Form className='add-edit-user-form'>
        <Form.Input name="username"  placeholder="Nombre de usuario" />
        <Form.Input name="email"  placeholder="Correo Electronico" />
        <Form.Input name="first_name"  placeholder="Nombres" />
        <Form.Input name="last_name"  placeholder="Apellidos" />
        <Form.Input name="cargo"  placeholder="Cargo" />
        <Form.Input name="password" type="password" placeholder="Contraseña" />

        <div>
          <Checkbox toggle/>Usuario activo
        </div>

        <div>
          <Checkbox toggle/>Usuario administrador
        </div>

        <Button type='submit' primary fluid content="crear"/>


      </Form>
    </div>
  )
}
