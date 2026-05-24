import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export default function SearchBar() {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search-outline" size={17} color={colors.muted} />
      <TextInput
        placeholder="Search for Puja, Pandit..."
        placeholderTextColor={colors.muted}
        style={styles.searchInput}
      />
      <Ionicons name="options-outline" size={18} color={colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 16,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, marginHorizontal: 8, fontSize: 13, color: colors.text },
});