import { View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { userCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { Separator } from "../../Shared";
import { initialValues, validationSchema } from "./ChangeFullNameForm.form";

export function ChangeFullNameForm() {
  const { user, reloadUser } = useAuth();
  const { goBack } = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(user.first_name, user.last_name),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateFullName(
          formValue.first_name,
          formValue.last_name
        );
        reloadUser();
        goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View>
      <Input
        placeholder="Nombre"
        onChangeText={(text) => formik.setFieldValue("first_name", text)}
        value={formik.values.first_name}
        errorMessage={formik.errors.first_name}
      />
      <Input
        placeholder="Apllidos"
        onChangeText={(text) => formik.setFieldValue("last_name", text)}
        value={formik.values.last_name}
        errorMessage={formik.errors.last_name}
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
