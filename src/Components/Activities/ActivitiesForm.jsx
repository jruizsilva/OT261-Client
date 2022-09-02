import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../FormStyles.css";
import { useDispatch } from "react-redux";
import { createActivity } from "../../store/slice/activities";
import ActivitiesModal from "./activitiesModal/ActivitiesModal";

const ActivitiesForm = ({ onClose, openCreateModal }) => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
    onClose();
    dispatch(createActivity(initialValues));
  };

  if (openCreateModal) {
    return (
      <ActivitiesModal onClose={onClose}>
        <Form onSubmit={handleSubmit} className="form-container">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="name"
              placeholder="Activity Title"
              value={initialValues.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              className="input-field"
              type="text"
              name="description"
              placeholder="Write some activity description!"
              value={initialValues.description}
              onChange={(e, editor) => {
                const data = editor.getData();

                setInitialValues({
                  ...initialValues,
                  description: data,
                });
              }}
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

export default ActivitiesForm;
