import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { authCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { Separator } from "../../../components/Shared";
import { screens } from "../../../utils";
import { initialValues, validationSchema } from "./LoginForm.form";

export function LoginForm() {
  const { navigate } = useNavigation();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(
          formValue.email.toLowerCase(),
          formValue.password
        );
        await authCtrl.setToken(response.access);
        await login(response.access);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const goToRegister = () => {
    navigate(screens.auth.registerScreen);
  };

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
      <Separator height={40} />
      <Button
        title="Iniciar sesión"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
      <Separator height={20} />
      <Button title="Crear cuenta" type="outline" onPress={goToRegister} />
    </View>
  );
}
