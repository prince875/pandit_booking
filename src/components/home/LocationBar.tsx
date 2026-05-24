import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../theme/colors";

export default function LocationBar() {
  return (
    <View style={styles.locationRow}>
      <View style={styles.locationLeft}>
        <Ionicons
          name="location-outline"
          size={15}
          color={colors.primary}
        />

        <Text style={styles.location}>
          Jaipur, Rajasthan
        </Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.change}>
          Change ›
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  locationRow: {
    marginTop: 12,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  locationLeft: {
    flexDirection: "row",

    alignItems: "center",

    gap: 4,
  },

  location: {
    color: colors.primary,

    fontSize: 12,

    fontWeight: "700",
  },

  change: {
    color: colors.primary,

    fontSize: 12,

    fontWeight: "800",
  },
});