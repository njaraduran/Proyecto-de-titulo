import React from 'react'
import {Form,Image,Button} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"
import {useExpediente} from "../../../../hooks"
import "./AddEditExpedienteForm.scss"

export function AddEditExpedienteForm() {

  const {addExpediente} = useExpediente();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async(formValue)=>{
      try {
        await addExpediente(formValue);
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <Form className='add-edit-expediente-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
          name = 'title' 
          placeholder = "Nombre del expediente" 
          value = {formik.values.title}
          onChange = {formik.handleChange}
          error={formik.errors.title}
        />      
        <Form.Group widths='equal'>
          <Form.Input 
            name = 'asignTo' 
            placeholder = "Encargado"
            value = {formik.values.asignTo}
            onChange = {formik.handleChange}
            error={formik.errors.asignTo}
          />  
          <Form.Input 
            name = 'contratist' 
            placeholder = "Empresa Contratista"
            value = {formik.values.contratist}
            onChange = {formik.handleChange}
            error={formik.errors.contratist}
          />   
        </Form.Group>
   
        <Form.Group widths='equal'>          
          <Form.Input 
            name = 'stage' 
            placeholder = "Etapa"
            value = {formik.values.stage}
            onChange = {formik.handleChange}
            error={formik.errors.stage}
          />
          <Form.Input 
            name = 'state' 
            placeholder = "Estado"
            value = {formik.values.state}
            onChange = {formik.handleChange}
            error={formik.errors.state}
          />
        </Form.Group>

        {/* <Form.Group widths='equal'>
          <Form.Input type ='date' 
            label='Fecha de Inicio obra' 
            name = 'dateStart' 
            placeholder = "Fecha Inicio"
            value = {formik.values.dateStart}
            onChange = {formik.handleChange}
            error={formik.errors.dateStart}
          />
          <Form.Input type ='date' 
            label='Fecha de Termino obra' 
            name = 'dateEnd' 
            placeholder = "Fecha Termino"
            value = {formik.values.dateEnd}
            onChange = {formik.handleChange}
            error={formik.errors.dateEnd}
          />
        </Form.Group> */}
        <Form.TextArea 
          name = 'description' 
          label='Descripción' 
          placeholder='Breve descripción del proyecto...' 
          value = {formik.values.description}
          onChange = {formik.handleChange}
          error={formik.errors.description}
        />
        {/* <Button type='button' fluid>
            Subir Archivo
        </Button> */}

        <Button type='submit' primary fluid content="Crear" />
    </Form>
  )
}

function initialValues(){
  return{
    title: "",
  }
}

function newSchema(){
  return {
    title: Yup.string().required(true)
  }
}
