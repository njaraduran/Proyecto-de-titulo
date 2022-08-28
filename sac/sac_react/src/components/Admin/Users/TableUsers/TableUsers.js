import React from 'react';
import { Table,Button,Icon } from 'semantic-ui-react';
import {map} from "lodash";
import "./TableUsers.scss"

export function TableUsers(props) {
  const {users} = props;
  return (
    <Table className = "table-users-admin">
      <Table.Header>
        <Table.HeaderCell>Usuario</Table.HeaderCell>
        <Table.HeaderCell>Correo</Table.HeaderCell>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Apellido</Table.HeaderCell>
        <Table.HeaderCell>Activo</Table.HeaderCell>
        <Table.HeaderCell>Admin</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {map(users,(user,index)=>(
          <Table.Row key={index}>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.first_name}</Table.Cell>
            <Table.Cell>{user.last_name}</Table.Cell>
            <Table.Cell>
              {user.is_active ? <Icon name='check'/>:<Icon name='close'/>}
            </Table.Cell>
            <Table.Cell>Activo</Table.Cell>
            <Table.Cell>boton</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>


  )
}
