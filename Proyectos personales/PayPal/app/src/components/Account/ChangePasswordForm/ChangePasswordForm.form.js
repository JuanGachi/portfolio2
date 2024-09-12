import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchame() {
  return Yup.object({
    password: Yup.string().required("Campo requerido"),
    repeatPassword: Yup.string()
      .required("Campo requerido")
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
  });
}
