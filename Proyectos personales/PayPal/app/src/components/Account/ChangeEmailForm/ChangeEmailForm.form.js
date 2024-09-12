import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Email invalido").required("Campo requerido"),
    repeatEmail: Yup.string()
      .email("Email invalido")
      .required("Campo requerido")
      .oneOf([Yup.ref("email")], "Los emails tienen que ser iguales"),
  });
}
