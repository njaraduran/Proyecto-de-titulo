import React ,{useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage,TableUsers } from '../../components/Admin';
import {useUser} from "../../hooks";

export function UsersAdmin() {
  const {loading,users,getUsers} = useUser();

  useEffect(() => getUsers() , [])


  return (
    <>
      <HeaderPage title = "Usuarios" />
      {loading?(
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ): (
        <TableUsers users = {users} />
      )}
    </>
  )
}
