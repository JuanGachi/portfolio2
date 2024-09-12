import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { DateTime } from "luxon";
import { styles } from "./RechargeHistory.styles";

export function RechargeHistory(props) {
  const { item } = props;
  const dateFormat = DateTime.fromISO(item.created_at);
  const dateFormatText = dateFormat.toFormat("dd LLLL yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="material-community"
          name="cash-plus"
          color="#fff"
          size={35}
          containerStyle={styles.iconContainer}
        />
        <View>
          <Text style={styles.title}>Recarga de saldo</Text>
          <Text style={styles.date}>{dateFormatText}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text>Recarga con tarjeta</Text>
        <Text style={styles.amount}>+{item.amount} €</Text>
      </View>
    </View>
  );
}
