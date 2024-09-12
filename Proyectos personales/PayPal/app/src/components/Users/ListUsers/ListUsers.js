import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { usersCtrl } from "../../../api";
import { Separator } from "../../../components/Shared";
import { UserItem } from "./UserItem";
import { SearchUsers } from "./SearchUsers";
import { styles } from "./ListUsers.styles";

export function ListUsers() {
  const [users, setUsers] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getUsers();
    return () => getUsers();
  }, [searchText]);

  const getUsers = async () => {
    try {
      const response = await usersCtrl.getAll(searchText);
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Enviar dinero a un usuario</Text>
      <SearchUsers setSearchText={setSearchText} />
      <Separator height={20} />

      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem key={item.id} user={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listUsers}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
