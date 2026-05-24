import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const pujas = [
  "Satyanarayan Puja",
  "Havan",
  "Grah Pravesh",
  "Shanti Puja",
  "Rudrabhishek",
  "Mundan",
  "Wedding Puja",
];

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");

  const filtered = pujas.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppContainer>
      <View style={styles.screen}>
        <Text style={styles.headerTitle}>Search Puja</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={colors.muted} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search pooja, pandit..."
            placeholderTextColor={colors.muted}
            style={styles.input}
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                navigation.navigate("PujaDetail", {
                  category: item.replace(" Puja", ""),
                })
              }
            >
              <View style={styles.iconBox}>
                <Ionicons name="flower-outline" size={22} color={colors.primary} />
              </View>

              <Text style={styles.title}>{item}</Text>

              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            </TouchableOpacity>
          )}
        />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.text,
    marginTop: 16,
    marginBottom: 14,
  },

  searchBox: {
    height: 54,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },

  list: {
    paddingTop: 16,
    paddingBottom: 110,
  },

  row: {
    height: 68,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.softCard,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: "900",
    color: colors.text,
  },
});