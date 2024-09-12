import { View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { userCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { Separator } from "../../Shared";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";

export function ChangeEmailForm() {
  const { user, reloadUser } = useAuth();
  const { goBack } = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateEmail(formValue.email);
        await reloadUser();
        goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View>
      <Input value={user.email} disabled />
      <Separator height={30} />

      <Input
        placeholder="Nuevo correo electronico"
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Repetir correo electronico"
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("repeatEmail", text)}
        value={formik.values.repeatEmail}
        errorMessage={formik.errors.repeatEmail}
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
