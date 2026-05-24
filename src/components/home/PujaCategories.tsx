import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

const categories = [
  { name: "Satyanarayan", icon: "home" },
  { name: "Havan", icon: "flame" },
  { name: "Grah Pravesh", icon: "business" },
  { name: "Shanti Puja", icon: "flower" },
];

export default function PujaCategories() {
  return (
    <View style={styles.row}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <View style={styles.circle}>
            <Ionicons name={item.icon as any} size={25} color={colors.primary} />
          </View>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" },
  item: { width: "23%", alignItems: "center" },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.softCard,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { marginTop: 6, fontSize: 9, fontWeight: "700", color: colors.black, textAlign: "center" },
});