import  { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Input } from "./myInput";
import { UserList } from "./usersList";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "./services/http/usersServices";

function App() {
  let dispatch = useDispatch();

  const handleCreateUser = (user) => {
    dispatch(createUser(user))
  }
  
  return (
    <>
      <h1>Rejestracja</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          age: "",
          email: "",
          password: ""
        }}

        validationSchema={Yup.object({
          firstname: Yup.string()
            .min(2, "Imię musi posiadać miniumum 2 znaki")
            .max(20, "Imię musi posiadać miniumum 20 znaków")
            .required("Pole jest wymagane"),
          lastname: Yup.string()
            .min(2, "Nazwisko musi posiadać miniumum 2 znaki")
            .max(20, "Nazwisko musi posiadać miniumum 20 znaków")
            .required("Pole jest wymagane"),
          email: Yup.string()
            .min(2, "Email musi posiadać miniumum 2 znaki")
            .max(40, "Email musi posiadać miniumum 40 znaków")
            .email("Email jest nie poprawny")
            .required("Pole jest wymagane"),
        })}

        onSubmit={values => {
          handleCreateUser(values)
        }}
      >
        <Form style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <Input  id="firstname" name="firstname" type="text" label="Imię"/>
          <Input  id="lastname" name="lastname" type="text" label="Nazwisko"/>
          <Input  id="email" name="email" type="email" label="Email"/>
          <button type="submit">Wyślij</button>
        </Form>
      </Formik>

      <UserList/>
    </>
  )
}

export default App
