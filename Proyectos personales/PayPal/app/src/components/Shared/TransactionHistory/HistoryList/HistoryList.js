import { View, Text } from "react-native";
import { map, size } from "lodash";
import { RechargeHistory } from "../RechargeHistory";
import { SendMoneyHistory } from "../SendMoneyHistory";
import { styles } from "./HistoryList.styles";

export function HistoryList(props) {
  const { history } = props;

  return (
    <View>
      {size(history) === 0 && (
        <View style={styles.itemConyainer}>
          <Text style={styles.noFound}>No hay transaciones</Text>
        </View>
      )}

      {map(history, (item) => {
        switch (item.type) {
          case "recharge":
            return <RechargeHistory key={item.id} item={item} />;
          case "send_money":
            return <SendMoneyHistory key={item.id} item={item} />;
          default:
            return <Text key={item.id}>Historial no soportado</Text>;
        }
      })}
    </View>
  );
}
