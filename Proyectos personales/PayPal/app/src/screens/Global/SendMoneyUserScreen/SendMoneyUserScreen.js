import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { usersCtrl, walletCtrl } from "../../../api";
import { Layout } from "../../../layouts";
import { useAuth } from "../../../hooks";
import { styles } from "./SendMoneyUserScreen.styles";

export function SendMoneyUserScreen(props) {
  const {
    route: { params },
  } = props;
  const [userDest, setUserDest] = useState(null);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { goBack } = useNavigation();
  const { user, reloadUser } = useAuth();

  useEffect(() => {
    getUserDest();
    return () => getUserDest();
  }, [params.userId]);

  const getUserDest = async () => {
    try {
      const response = await usersCtrl.getUser(params.userId);
      setUserDest(response);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMoney = async () => {
    try {
      setLoading(true);

      if (Number(amount) > Number(user.wallet.balance)) {
        throw "No puedes mandar mas dinero del que tienes";
      }
      if (Number(amount) === 0) {
        throw "No puedes mandar 0 euros";
      }

      await walletCtrl.sendMoney(userDest.id, amount, message);
      reloadUser();
      goBack();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (!userDest) return null;

  return (
    <Layout.Basic>
      <View style={styles.userContainer}>
        <Icon
          name="person"
          color="#fff"
          size={50}
          containerStyle={styles.iconContainer}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {userDest.first_name && userDest.last_name
              ? `${userDest.first_name} ${userDest.last_name}`
              : "..."}
          </Text>
          <Text style={styles.email}>{userDest.email}</Text>
        </View>
      </View>

      <Text>Enviar</Text>
      <Input
        placeholder="0,00€"
        keyboardType="numeric"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        onChangeText={setAmount}
        autoFocus
      />

      <Input placeholder="Añadir mensaje..." onChangeText={setMessage} />
      <Button title="Enviar" onPress={sendMoney} loading={loading} />
    </Layout.Basic>
  );
}
