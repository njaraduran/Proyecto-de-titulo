import React from 'react';
import { Button } from 'semantic-ui-react';
import "./HeaderPage.scss"

export function HeaderPage(props) {
        const {title,btnTittle,btnClick,btnTittle2,btnClick2} = props;
  return (
    <div className='header-page-admin'>
        <h2>{title}</h2>
        <div>
            {btnTittle &&(
                <Button positive onClick={btnClick}>
                    {btnTittle}
                </Button>
            )}
            {btnTittle2 &&(
                <Button negative onClick={btnClick2}>
                    {btnTittle2}
                </Button>
            )}
        </div>
    </div>
  )
}
