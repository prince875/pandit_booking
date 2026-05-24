import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export default function EmergencyPujaCard({ onPress }: any) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name="timer-outline" size={34} color={colors.primary} />
      </View>

      <View style={styles.middle}>
        <Text style={styles.title}>Need Pandit Fast?</Text>
        <Text style={styles.subText}>
          Get a Pandit at your location in{" "}
          <Text style={styles.highlight}>60 minutes</Text>
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Emergency</Text>
        <Ionicons name="arrow-forward" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 22,
    backgroundColor: colors.lightPrimary || "#FFF3E5",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border || "#F1D7C4",
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
  },
  subText: {
    marginTop: 3,
    fontSize: 12,
    color: colors.muted || "#666",
    lineHeight: 17,
  },
  highlight: {
    color: colors.primary,
    fontWeight: "800",
  },
  button: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
  },
});