import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const bookings = [
  {
    id: "BK123456",
    puja: "Satyanarayan Puja",
    pandit: "Ravi Shastri",
    date: "25 May 2025",
    time: "10:00 AM",
    amount: "₹1500",
    status: "In Process",
  },
  {
    id: "BK123457",
    puja: "Havan Puja",
    pandit: "Mohan Ji",
    date: "24 May 2025",
    time: "04:00 PM",
    amount: "₹1400",
    status: "Completed",
  },
  {
    id: "BK123458",
    puja: "Grah Pravesh",
    pandit: "Suresh Ji",
    date: "26 May 2025",
    time: "09:00 AM",
    amount: "₹1200",
    status: "Pending",
  },
];

export default function BookingsScreen({ navigation }: any) {
  const getStatusColor = (status: string) => {
    if (status === "Completed") return "#16A34A";
    if (status === "Pending") return "#F59E0B";
    return colors.primary;
  };

  return (
    <AppContainer>
      <View style={styles.screen}>
        <Text style={styles.headerTitle}>My Bookings</Text>

        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.card}
              onPress={() => navigation.navigate("BookingStatus")}
            >
              <View style={styles.topRow}>
                <Text style={styles.puja}>{item.puja}</Text>

                <View
                  style={[
                    styles.badge,
                    { backgroundColor: getStatusColor(item.status) },
                  ]}
                >
                  <Text style={styles.badgeText}>{item.status}</Text>
                </View>
              </View>

              <Text style={styles.bookingId}>Booking ID: #{item.id}</Text>

              <View style={styles.infoRow}>
                <Ionicons name="person-outline" size={16} color={colors.muted} />
                <Text style={styles.infoText}>{item.pandit}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                <Text style={styles.infoText}>
                  {item.date}, {item.time}
                </Text>
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.amount}>{item.amount}</Text>
                <Text style={styles.viewDetails}>View Details ›</Text>
              </View>
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
    marginBottom: 12,
  },

  list: {
    paddingBottom: 110,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  puja: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.text,
    flex: 1,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 10,
  },

  badgeText: {
    color: colors.card,
    fontSize: 10,
    fontWeight: "900",
  },

  bookingId: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "800",
    color: colors.muted,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  infoText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "700",
    color: colors.text,
  },

  bottomRow: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  amount: {
    fontSize: 17,
    fontWeight: "900",
    color: colors.primary,
  },

  viewDetails: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.primary,
  },
});