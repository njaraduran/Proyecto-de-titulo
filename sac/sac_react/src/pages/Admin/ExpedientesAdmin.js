import React, { useState,useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import {AddEditExpedienteForm, HeaderPage,TableExpedienteAdmin} from "../../components/Admin";
import {ModalBasic} from "../../components/Common"
import {useExpediente} from "../../hooks"

export  function ExpedientesAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setcontentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)
  const {loading,expedientes,getExpedientes,deleteExpediente} = useExpediente();

  useEffect(()=>getExpedientes(),[refetch]);

  const openCloseModal = () => setShowModal(prev=>!prev)
  const onRefecth = () =>setRefetch((prev)=>!prev)


  const AddExpediente = () => {
    setTitleModal("Nuevo Expediente");
    setcontentModal(<AddEditExpedienteForm onClose={openCloseModal} onRefecth={onRefecth} />)
    openCloseModal()
  }

  const updateExpediente = (data) =>{
    setTitleModal("Actualizar Expediente")
    setcontentModal(
      <AddEditExpedienteForm onClose={openCloseModal} onRefecth={onRefecth} expediente={data}/>
    )
    openCloseModal();
  }

  const onDeleteExpediente= async(data) =>{
    const result = window.confirm(`¿Eliminar Expediente ${data.title}?`)

    if (result){
      try {
        await deleteExpediente(data.id);
        onRefecth();        
      } catch (error) {
        console.error(error)
      }
    }
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
        updateExpediente = {updateExpediente}
        deleteExpediente = {onDeleteExpediente}
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
