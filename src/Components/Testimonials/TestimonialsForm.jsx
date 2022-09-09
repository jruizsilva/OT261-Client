import * as Yup from "yup";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import "../FormStyles.css";
import {
  Container,
  FromWrapper,
  Label,
  Form,
  FromGroup,
  ErrorMessage,
  Button,
  TitleContainer,
  Title,
  Input,
} from "./TestimonialsStyle.js";
import TestimonialsModal from "./testimonialModal/TestimonialsModal.jsx";

const validationSchema = Yup.object({
  name: Yup.string().required("name must be provided"),
  description: Yup.string().max(300).required("description must be provided"),
});

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};

const TestimonialForm = ({ onClose, openCreateModal }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema,
    onSubmit,
  });

  const inputHandler = (event, editor) => {
    setFieldValue("description", editor.getData());
  };
  if (openCreateModal) {
    return (
      <TestimonialsModal onClose={onClose}>
        {/*  <Container> */}
        {/* <FromWrapper> */}
        <Form className="form-container" onSubmit={handleSubmit}>
          <TitleContainer>
            <Title>Create a Testimonial</Title>
          </TitleContainer>
          {isSubmitting ? <p id="success-message"></p> : null}
          <FromGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              value={values.name}
              onChange={handleChange}
              id="name"
              type="name"
              placeholder="Enter your name"
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </FromGroup>
          <FromGroup>
            <Label htmlFor="description">Description</Label>
            <CKEditor
              className={
                errors.description && touched.description ? "input-error" : ""
              }
              editor={ClassicEditor}
              onChange={inputHandler}
              id="description"
              type="description"
              placeholder="Enter your description"
            />
            {errors.description && touched.description && (
              <ErrorMessage>{errors.description}</ErrorMessage>
            )}
          </FromGroup>

          <Button className="submit-btn" type="submit">
            Send Testimonial
          </Button>
        </Form>
        {/* </FromWrapper> */}
        {/* </Container> */}
      </TestimonialsModal>
    );
  } else {
    return null;
  }
};

export default TestimonialForm;
