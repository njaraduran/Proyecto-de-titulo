import React from 'react'
import {Table,Image,Button,Icon} from "semantic-ui-react"
import { map } from 'lodash';
import "./TableExpedienteAdmin.scss"

export  function TableExpedienteAdmin(props) {
    const {expedientes}= props;
  return (
    <Table className='.table-expediente-admin'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Expediente</Table.HeaderCell>
          <Table.HeaderCell>Creador</Table.HeaderCell>
          <Table.HeaderCell>Encargado</Table.HeaderCell>
          <Table.HeaderCell>Contratista</Table.HeaderCell>
          <Table.HeaderCell>Etapa</Table.HeaderCell>
          <Table.HeaderCell>Estado</Table.HeaderCell>
          {/* <Table.HeaderCell>Fecha Inicio</Table.HeaderCell>
          <Table.HeaderCell>Fecha Termino</Table.HeaderCell> */}
          <Table.HeaderCell>Descripción</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(expedientes,(expediente,index)=>(
          <Table.Row key={index}>
            <Table.Cell>{expediente.title}</Table.Cell>
            <Table.Cell>{expediente.creator}</Table.Cell>
            <Table.Cell>{expediente.asignTo}</Table.Cell>
            <Table.Cell>{expediente.contratist}</Table.Cell>
            <Table.Cell>{expediente.stage}</Table.Cell>
            <Table.Cell>{expediente.state}</Table.Cell>
            {/* <Table.Cell>{expediente.dateStart}</Table.Cell>
            <Table.Cell>{expediente.dateEnd}</Table.Cell> */}
            <Table.Cell>{expediente.description}</Table.Cell>
            <Actions expediente = {expediente}/>
          </Table.Row>  
        ))}
      </Table.Body>

    </Table>
    
  )
}

function Actions(props){
  const {expediente} = props;

  return(
    <Table.Cell textAlign='right'>
      <Button icon onClick={()=>console.log("actualizar exp")}>
        <Icon name='pencil'/>
      </Button>
      <Button icon negative onClick={()=>console.log("eliminar exp")}>
        <Icon name='close'/>
      </Button>
    </Table.Cell>
  )
}
