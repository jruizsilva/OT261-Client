import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editActivityAsync } from "../../store/slice/activities";
import ActivitiesModal from "../Activities/activitiesModal/ActivitiesModal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Debe tener mínimo 3 caracteres")
    .max(16, "Debe tener máximo 16 caracteres")
    .required("El título es requerido"),
});

export const ModalEditActivity = ({ onClose, openEditModal }) => {
  const { activityToEdit } = useSelector((state) => state.activities);
  // const dispatch = useDispatch();

  //initial state values
  const initialValues = {
    name: activityToEdit.name,
    description: activityToEdit.description,
  };

  const inputHandler = (event, editor) => {
    // console.log(event);
    formik.setFieldValue("description", editor.getData());
  };

  //formik setting
  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      const { name, description } = values;
      console.log(`${name}, ${description}`);
      onClose();
    },
    validationSchema,
  });

  if (openEditModal) {
    return (
      <ActivitiesModal onClose={onClose}>
        <Form
          noValidate
          onSubmit={formik.handleSubmit}
          className="form-container"
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="name"
              placeholder="Activity Title"
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={!!formik.errors.name}
            />
            <Form.Control.Feedback>Todo correcto!</Form.Control.Feedback>
            {formik.errors.name && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              className="input-field"
              type="text"
              name="description"
              placeholder="Write some activity description!"
              value={formik.values.description}
              onChange={inputHandler}
            />
          </Form.Group>
          <Button variant="primary" className="submit-btn" type="submit">
            Send
          </Button>
        </Form>
      </ActivitiesModal>
    );
  } else {
    return null;
  }
};
