import { View, Text } from "react-native";
import { Icon, Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "../../../layouts";
import { Separator } from "../../../components/Shared";
import { walletCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { ENV, screens } from "../../../utils";
import { initialValues, validationSchema } from "./RechargeScreen.form";
import { styles } from "./RechargeScreen.styles";

const stripe = require("stripe-client")(ENV.STRIPE_TOKEN);

export function RechargeScreen(props) {
  const {
    route: { params },
  } = props;
  const amount = params.amount;
  const { user, reloadUser } = useAuth();
  const { navigate } = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const result = await stripe.createToken({ card: formValue });

        if (result?.error) {
          console.error(result.error.message);
        } else {
          await walletCtrl.recharge(result.id, user.id, amount);
          await reloadUser();
          navigate(screens.tab.wallet.walletScreen);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Layout.Basic>
      <Separator height={25} />
      <Icon type="material-community" name="card-bulleted-outline" size={100} />
      <Separator height={25} />
      <Text style={styles.title}>Introduce los datos de tu tarjeta</Text>
      <Separator height={25} />

      <Input
        placeholder="Número de tarjeta"
        keyboardType="number-pad"
        inputContainerStyle={[
          styles.inputContainer,
          formik.errors.number && styles.inputContainerError,
        ]}
        inputStyle={styles.inputNumberStyle}
        onChangeText={(text) => formik.setFieldValue("number", text)}
        value={formik.values.number}
      />

      <View style={styles.cardData}>
        <Input
          placeholder="Mes"
          keyboardType="number-pad"
          inputContainerStyle={[
            styles.inputContainer,
            formik.errors.exp_month && styles.inputContainerError,
          ]}
          containerStyle={styles.inputCatdInfoContainer}
          inputStyle={styles.inputStyle}
          onChangeText={(text) => formik.setFieldValue("exp_month", text)}
          value={formik.values.exp_month}
        />
        <Input
          placeholder="Año"
          keyboardType="number-pad"
          inputContainerStyle={[
            styles.inputContainer,
            formik.errors.exp_year && styles.inputContainerError,
          ]}
          containerStyle={styles.inputCatdInfoContainer}
          inputStyle={styles.inputStyle}
          onChangeText={(text) => formik.setFieldValue("exp_year", text)}
          value={formik.values.exp_year}
        />
        <Input
          placeholder="CVV"
          keyboardType="number-pad"
          inputContainerStyle={[
            styles.inputContainer,
            formik.errors.cvc && styles.inputContainerError,
          ]}
          containerStyle={styles.inputCatdInfoContainer}
          inputStyle={styles.inputStyle}
          onChangeText={(text) => formik.setFieldValue("cvc", text)}
          value={formik.values.cvc}
        />
      </View>

      <Input
        placeholder="Nombre del titular"
        inputContainerStyle={[
          styles.inputContainer,
          formik.errors.name && styles.inputContainerError,
        ]}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
      />
      <Button
        title="Recargar"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </Layout.Basic>
  );
}
