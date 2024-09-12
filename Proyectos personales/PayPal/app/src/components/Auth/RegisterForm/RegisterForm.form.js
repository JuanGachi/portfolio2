import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Email invalido").required("Compo requerido"),
    password: Yup.string().required("Campo requerido"),
    repeatPassword: Yup.string()
      .required("Campo requerido")
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
  });
}
