import * as Yup from "yup";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { useDispatch } from "react-redux";

import {
  Container,
  RightContainer,
  Image,
  LeftContainer,
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

const validationSchema = Yup.object({
  name: Yup.string().required("name must be provided"),
  description: Yup.string().max(300).required("description must be provided"),
});

const TestimonialForm = () => {
  // const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

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

  return (
    <Container>
      <LeftContainer>
        <TitleContainer>
          <Title>Create a Testimonial</Title>
        </TitleContainer>
        <FromWrapper>
          <Form className="form-container" onSubmit={handleSubmit}>
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
        </FromWrapper>
      </LeftContainer>
      <RightContainer>
        <Image src="/images/project-love.jpg" alt="addTestimonialImage" />
      </RightContainer>
    </Container>
  );
};

export default TestimonialForm;
