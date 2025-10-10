import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string().required("Password is required!")
});

const FormikForm = () => (
    <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default FormikForm;