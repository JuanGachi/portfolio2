import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { DateTime } from "luxon";
import { useAuth } from "../../../../hooks";
import { styles } from "./SendMoneyHistory.styles";

export function SendMoneyHistory(props) {
  const { item } = props;
  const { user } = useAuth();
  const dateFormat = DateTime.fromISO(item.created_at);
  const dateFormText = dateFormat.toFormat("dd LLLL yyyy");

  const targetUser = item.target_user;
  const originUser = item.origin_user;
  const meSend = user.id === originUser.id;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="material-community"
          name={meSend ? "cash-fast" : "cash-check"}
          color="#fff"
          size={35}
          containerStyle={styles.iconContainer}
        />
        <View>
          {meSend ? (
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {targetUser.first_name && targetUser.last_name
                ? `${targetUser.first_name} ${targetUser.last_name}`
                : targetUser.email}
            </Text>
          ) : (
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {originUser.first_name && originUser.last_name
                ? `${originUser.first_name} ${originUser.last_name}`
                : originUser.email}
            </Text>
          )}
          <Text style={styles.date}>{dateFormText}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text>Dinero {meSend ? "enviado" : "recibido"}</Text>
        <Text style={meSend ? styles.amountRest : styles.amountPlus}>
          {meSend ? "-" : "+"}
          {item.amount} €
        </Text>
      </View>

      {item.message && <Text style={styles.message}>{item.message}</Text>}
    </View>
  );
}
