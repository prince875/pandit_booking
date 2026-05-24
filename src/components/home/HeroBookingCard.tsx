import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export default function HeroBookingCard({ onPress }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Book Trusted Pandit Near You</Text>

      <View style={styles.features}>
        <View style={styles.feature}>
          <Ionicons name="shield-checkmark" size={15} color={colors.primary} />
          <Text style={styles.featureText}>Verified Pandits</Text>
        </View>

        <View style={styles.feature}>
          <Ionicons name="calendar-outline" size={15} color={colors.primary} />
          <Text style={styles.featureText}>Easy Booking</Text>
        </View>

        <View style={styles.feature}>
          <Ionicons name="lock-closed-outline" size={15} color={colors.primary} />
          <Text style={styles.featureText}>Secure</Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Book Puja Now</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    backgroundColor: colors.lightPrimary || "#FFF3E5",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border || "#F1D7C4",
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.text,
    lineHeight: 34,
    width: "80%",
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 15,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  featureText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: "70%",
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});