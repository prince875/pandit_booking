import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

const panditImage = require("../../../assets/images/pandit.png");

const pandits = [
  { name: "Ravi Shastri", rating: "4.8" },
  { name: "Mohan Ji", rating: "4.6" },
];

export default function TopPandits() {
  return (
    <View style={styles.row}>
      {pandits.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={panditImage} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={12} color={colors.gold} />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 14 },
  card: {
    width: 120,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: 70, height: 70, resizeMode: "contain", alignSelf: "center" },
  name: { marginTop: 8, fontSize: 12, fontWeight: "900", color: colors.black },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 3, gap: 3 },
  rating: { color: colors.gold, fontSize: 12, fontWeight: "900" },
});