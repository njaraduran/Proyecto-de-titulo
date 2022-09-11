import React, { useState,useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import {AddEditExpedienteForm, HeaderPage,TableExpedienteAdmin} from "../../components/Admin";
import {ModalBasic} from "../../components/Common"
import {useExpediente} from "../../hooks"

export  function ExpedientesAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setcontentModal] = useState(null)
  const {loading,expedientes,getExpedientes} = useExpediente();

  useEffect(()=>getExpedientes(),[])

  const openCloseModal = () => setShowModal(prev=>!prev)

  const AddExpediente = () => {
    setTitleModal("Nuevo Expediente");
    setcontentModal(<AddEditExpedienteForm />)
    openCloseModal()
  }

  return (
    <>
    <HeaderPage title = "Expedientes" btnTittle = "Nuevo expediente" btnClick={AddExpediente}/>
    {loading ? (
      <Loader active inline="centered">
        Cargado...
      </Loader>
    ):(
      <TableExpedienteAdmin
        expedientes = {expedientes}
      />
    )}

    <ModalBasic 
      show={showModal}    
      onClose = {openCloseModal}
      title = {titleModal}
      children = {contentModal}
    />
    </>
  );

}
