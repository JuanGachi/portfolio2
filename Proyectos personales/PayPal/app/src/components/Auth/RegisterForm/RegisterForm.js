import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { Separator } from "../../Shared";
import { authCtrl } from "../../../api";
import { screens } from "../../../utils";
import { initialValues, validationSchema } from "./RegisterForm.form";

export function RegisterForm() {
  const { navigate } = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(
          formValue.email.toLocaleLowerCase(),
          formValue.password
        );
        navigate(screens.auth.loginScreen);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View>
      <Input
        placeholder="Correo electronico"
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        errorMessage={formik.errors.repeatPassword}
      />
      <Separator height={40} />
      <Button
        title="Crear cuenta"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
