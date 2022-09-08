import { initial } from 'lodash';
import React ,{useState, useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage,TableUsers,AddEditUserform } from '../../components/Admin';
import {ModalBasic} from "../../components/Common";
import {useUser} from "../../hooks";

export function UsersAdmin() {
  const [showModal,setShowModal] = useState(false);
  const [titleModal,setTitleModal] = useState(null);
  const [contentModal,setContentModal] = useState(null);
  const [refetch,setRefech] = useState(false)
  const {loading,users,getUsers,deleteUser} = useUser();

  useEffect(() =>  getUsers() , [refetch]);
  const onReFetch = () => setRefech((prev)=>!prev);
  
  const openCloseModal =() => setShowModal((prev) => !prev);//sirve para abrir y cerrar popups

  const addUser =()=>{
    setTitleModal("Crear Usuario");
    setContentModal(<AddEditUserform onClose={openCloseModal} onReFetch={onReFetch}/>);
    openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar usuario");
    setContentModal(<AddEditUserform onClose={openCloseModal} onReFetch={onReFetch} user={data}/>);
    openCloseModal();
  };

  const onDeleteUser = async(data) =>{
    const result = window.confirm(`¿Eliminar usuario ${data.email}?`)

    if (result){
      try {
        await deleteUser(data.id);
        onReFetch();        
      } catch (error) {
        console.error(error)
      }
    }
  }


  return (
    <>
      <HeaderPage 
        title = "Usuarios" 
        btnTittle="Nuevo Usuario" 
        btnClick = {addUser}
      />
      {loading?(
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ): (
        <TableUsers 
          users = {users}
          updateUser = {updateUser}
          onDeleteUser = {onDeleteUser}
        />
      )}

      <ModalBasic 
        show={showModal}
        onClose= {openCloseModal}
        title={titleModal}
        children={contentModal}
        />
    </>
  );
}
