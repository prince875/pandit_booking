import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

const data = [
  {
    icon: "shield-checkmark",
    value: "5000+",
    label: "Bookings Completed",
  },
  {
    icon: "star",
    value: "4.8/5",
    label: "Average Rating",
  },
  {
    icon: "people",
    value: "3000+",
    label: "Verified Pandits",
  },
];

export default function TrustStats() {
  return (
    <View style={styles.card}>
      {data.map((item, index) => (
        <View
          key={item.value}
          style={[styles.item, index !== data.length - 1 && styles.border]}
        >
          <View style={styles.iconCircle}>
            <Ionicons name={item.icon as any} size={22} color={colors.primary} />
          </View>

          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 22,
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.border || "#E5E7EB",
  },
  item: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 6,
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: colors.border || "#E5E7EB",
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.lightPrimary || "#FFF3E5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    color: colors.muted || "#666",
    textAlign: "center",
    lineHeight: 14,
  },
});