import * as Yup from "yup";

export function initialValues(firstName, lastName) {
  return {
    first_name: firstName || "",
    last_name: lastName || "",
  };
}

export function validationSchema() {
  return Yup.object({
    first_name: Yup.string().required("Campo requerido"),
    last_name: Yup.string().required("Campo requerido"),
  });
}
