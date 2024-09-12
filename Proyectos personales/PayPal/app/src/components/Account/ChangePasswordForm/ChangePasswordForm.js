import { View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useFormik } from "formik";
import { userCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { Separator } from "../../Shared";
import { initialValues, validationSchame } from "./ChangePasswordForm.form";

export function ChangePasswordForm() {
  const { logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchame(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updatePassword(formValue.password);
        logout();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View>
      <Input
        placeholder="Nueva contraseña"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir nueva contraseña"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        errorMessage={formik.errors.repeatPassword}
      />
      <Separator height={15} />
      <Button
        title="Actualizar"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
