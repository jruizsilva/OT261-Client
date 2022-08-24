import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { editActivityAsync } from '../../store/slice/activities';

const validationSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Debe tener mínimo 3 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('El título es requerido'),
});

export const ModalEditActivity = ({ show, handleClose }) => {
  const { activityToEdit } = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: activityToEdit.title,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(formik);
      const activityEdited = { ...formik.values, id: activityToEdit.id };
      dispatch(editActivityAsync(activityEdited));
    },
  });
  console.log(formik);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Actualiza el titulo de la actividad'
              name='title'
              onChange={formik.handleChange}
              value={formik.values.title}
              isInvalid={!!formik.errors.title}
            />
            <Form.Control.Feedback>Todo correcto!</Form.Control.Feedback>
            {formik.errors.title && (
              <Form.Control.Feedback type='invalid'>
                {formik.errors.title}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button type='submit' variant='primary'>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
