import * as Yup from "yup";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const validationSchema = Yup.object({
  name: Yup.string().required("name must be provided"),
  description: Yup.string().required("description must be provided"),
});

const onSubmit = () => {
  console.log(`submitted!`);
};

const TestimonialForm = () => {
  const { values, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
      },
      validationSchema,
      onSubmit,
    });
  console.log(errors);
  const inputHandler = (event, editor) => {
    // console.log(event);
    setFieldValue("description", editor.getData());
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        value={values.name}
        onChange={handleChange}
        id="name"
        type="name"
        placeholder="Enter your name"
      />
      <label htmlFor="description">description</label>
      <CKEditor
        className="inputText"
        editor={ClassicEditor}
        onChange={inputHandler}
        id="description"
        type="description"
        placeholder="Enter your description"
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default TestimonialForm;
