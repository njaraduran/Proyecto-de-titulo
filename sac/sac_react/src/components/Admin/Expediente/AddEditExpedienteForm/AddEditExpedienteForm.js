import React from 'react'
import {Form,Button} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"
import {useExpediente} from "../../../../hooks"
import "./AddEditExpedienteForm.scss"

export function AddEditExpedienteForm(props) {

  const {onClose,onRefecth,expediente} = props;
  console.log(expediente)
  const {addExpediente,updateExpediente} = useExpediente();

  const formik = useFormik({
    initialValues: initialValues(expediente),
    validationSchema: Yup.object(expediente?updateSchema(): newSchema()),
    validateOnChange: false,
    onSubmit: async(formValue)=>{
      try {
        if (expediente) await updateExpediente(expediente.id,formValue)
        else await addExpediente(formValue);
        onRefecth();
        onClose();
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <Form className='add-edit-expediente-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
          label='Nombre del Proyecto' 
          name = 'title' 
          placeholder = "Nombre del expediente" 
          value = {formik.values.title}
          onChange = {formik.handleChange}
          error={formik.errors.title}
        />      
        <Form.Group widths='equal'>
          <Form.Input 
            label='Inspector Técnico' 
            name = 'asignTo' 
            placeholder = "Encargado"
            value = {formik.values.asignTo}
            onChange = {formik.handleChange}
            error={formik.errors.asignTo}
          />  
          <Form.Input 
            label='Contratista' 
            name = 'contratist' 
            placeholder = "Empresa Contratista"
            value = {formik.values.contratist}
            onChange = {formik.handleChange}
            error={formik.errors.contratist}
          />   
        </Form.Group>
   
        <Form.Group widths='equal'>          
          <Form.Input 
            label = "Estapa"
            name = 'stage' 
            placeholder = "Etapa"
            value = {formik.values.stage}
            onChange = {formik.handleChange}
            error={formik.errors.stage}
          />
          <Form.Input 
            label = "Estado"
            name = 'state' 
            placeholder = "Estado"
            value = {formik.values.state}
            onChange = {formik.handleChange}
            error={formik.errors.state}
          />
        </Form.Group>

        <Form.Group widths='equal'>
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
        </Form.Group>
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

        <Button type='submit' primary fluid content={expediente ? "Actualizar" : "Crear"} />
    </Form>
  )
}

function initialValues(data){
  return{
    title: data?.title || "",
    asignTo: data?.asignTo || "",
    contratist: data?.contratist || "",
    stage: data?.stage || "",
    state: data?.state || "",
    dateStart: data?.dateStart || "",
    dateEnd: data?.dateEnd || "",
    description: data?.description || "",
  }
}

function newSchema(){
  return {
    title: Yup.string().required(true)
  }
}

function updateSchema(){
  return {
    title: Yup.string().required(true)
  }
}
