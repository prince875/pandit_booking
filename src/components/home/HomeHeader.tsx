import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.name}>Namaste, Rahul</Text>
        <Text style={styles.morning}>Good Morning! 🙏</Text>
      </View>
      <Ionicons name="person-circle-outline" size={24} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { fontSize: 20, fontWeight: "900", color: colors.black },
  morning: { marginTop: 2, fontSize: 12, color: colors.muted, fontWeight: "600" },
});