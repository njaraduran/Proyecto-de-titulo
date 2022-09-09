import React, { useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import {HeaderPage} from "../../components/Admin";
import {useExpediente} from "../../hooks"

export  function ExpedientesAdmin() {
  const {loading,expedientes,getExpedientes} = useExpediente();

  useEffect(()=>getExpedientes(),[])


  return (
    <>
    <HeaderPage title = "Expedientes" btnTittle = "Nuevo expediente"/>
    {loading ? (
      <Loader active inline="centered">
        Cargado...
      </Loader>
    ):(
      <h2>
        Lista de Expedientes
      </h2>
    )}
    </>
  );

}
