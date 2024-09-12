import { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { styles } from "./SearchUsers.styles";

export function SearchUsers(props) {
  const { setSearchText } = props;
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
    setSearchText(text);
  };

  return (
    <View>
      <SearchBar
        lightTheme
        placeholder="Nombre, @usuario, correo electronico..."
        value={value}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
}
