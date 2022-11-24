import React from 'react';
import {Menu,Icon} from "semantic-ui-react";
import {Link,useLocation} from "react-router-dom";
import { useAuth } from '../../../hooks';
import "./SideMenu.scss";

export function SideMenu(props) {
    const {children} = props;
    const {pathname} = useLocation();
    return (
        <div className='side-menu-admin'>
            <MenuLeft pathname={pathname}/>
            <div className='content'>{children}</div>
        </div>
    );
}

function MenuLeft(props){
    const {pathname} = props;
    const {auth} = useAuth();

    return(
        <Menu fixed='left' borderless className='side' vertical>
            <Menu.Item as={Link} to={'/admin'} active={pathname === '/admin'}>
                <Icon name='home' />Menu
            </Menu.Item>

            {auth.me?.is_staff && (


                <Menu.Item as={Link} to={'/admin/documentos'} active={pathname === '/admin/documentos'}>
                <Icon name='file' />Documentos
            </Menu.Item>            

            )}

            {auth.me?.is_staff && (
    

                <Menu.Item as={Link} to={'/admin/expedientes'} active={pathname === '/admin/expedientes'}>
                <Icon name='archive' />Expedientes
            </Menu.Item>            

            )}

                
            
            {auth.me?.is_staff && (
    

            <Menu.Item as={Link} to={'/admin/users'} active={pathname === '/admin/users'}>
                <Icon name='users' />Usuarios
            </Menu.Item>           

            )}
         </Menu>
    )
}