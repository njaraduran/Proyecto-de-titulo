import React ,{useState, useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage,TableUsers,AddEditUserform } from '../../components/Admin';
import {ModalBasic} from "../../components/Common";
import {useUser} from "../../hooks";

export function UsersAdmin() {
  const [showModal,setShowModal] = useState(false);
  const [titleModal,setTitleModal] = useState(null);
  const [contentModal,setContentModal] = useState(null);
  const {loading,users,getUsers} = useUser();

  useEffect(() =>  getUsers() , []);
  
  const openCloseModal =() => setShowModal((prev) => !prev);//sirve para abrir y cerrar popups

  const addUser =()=>{
    setTitleModal("hola1");
    setContentModal(<AddEditUserform />);
    openCloseModal();
  };


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
        <TableUsers users = {users} />
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
