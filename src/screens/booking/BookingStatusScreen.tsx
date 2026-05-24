import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const statusSteps = [
  {
    title: "Booked",
    time: "25 May, 09:40 AM",
    status: "done",
  },
  {
    title: "Confirmed",
    time: "25 May, 09:45 AM",
    status: "done",
  },
  {
    title: "Pandit On the Way",
    time: "25 May, 09:50 AM",
    status: "pending",
  },
  {
    title: "Puja in Progress",
    time: "25 May, 10:05 AM",
    status: "pending",
  },
  {
    title: "Completed",
    time: "25 May, 11:05 AM",
    status: "done",
  },
];

export default function BookingStatusScreen({ navigation }: any) {
  return (
    <AppContainer>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Booking Status</Text>

          <View style={{ width: 22 }} />
        </View>

        <View style={styles.confirmCard}>
          <View style={styles.confirmIcon}>
            <Ionicons name="calendar" size={24} color={colors.card} />
          </View>

          <View>
            <Text style={styles.confirmTitle}>Confirmed</Text>
            <Text style={styles.bookingLabel}>Booking ID</Text>
            <Text style={styles.bookingId}>#BK123456</Text>
            <Text style={styles.bookingTime}>25 May, 2025, 10:00 AM</Text>
          </View>
        </View>

        <View style={styles.timeline}>
          {statusSteps.map((item, index) => {
            const done = item.status === "done";
            const last = index === statusSteps.length - 1;

            return (
              <View key={item.title} style={styles.stepRow}>
                <View style={styles.stepIconColumn}>
                  <View
                    style={[
                      styles.stepIcon,
                      done ? styles.doneIcon : styles.pendingIcon,
                    ]}
                  >
                    {done && (
                      <Ionicons
                        name="checkmark"
                        size={13}
                        color={colors.card}
                      />
                    )}
                  </View>

                  {!last && <View style={styles.line} />}
                </View>

                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>{item.title}</Text>
                  <Text style={styles.stepTime}>{item.time}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.trackBtn}
          onPress={() =>
            navigation.navigate("LiveTracking", {
              pandit: {
                name: "Ravi Shastri",
                image:
                  "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
              },
            })
          }
        >
          <Ionicons name="location" size={18} color={colors.card} />
          <Text style={styles.trackText}>Track Live Location</Text>
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <TouchableOpacity activeOpacity={0.85} style={styles.callBtn}>
            <Text style={styles.callText}>Call Pandit</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85} style={styles.chatBtn}>
            <Text style={styles.chatText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text,
  },

  confirmCard: {
    minHeight: 120,
    borderRadius: 16,
    backgroundColor: colors.softCard,
    padding: 18,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  confirmIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  confirmTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#16A34A",
    marginBottom: 4,
  },

  bookingLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text,
  },

  bookingId: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.text,
    marginTop: 2,
  },

  bookingTime: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text,
    marginTop: 4,
  },

  timeline: {
    marginTop: 24,
    marginBottom: 8,
  },

  stepRow: {
    flexDirection: "row",
    minHeight: 76,
  },

  stepIconColumn: {
    width: 30,
    alignItems: "center",
  },

  stepIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  doneIcon: {
    backgroundColor: "#16A34A",
  },

  pendingIcon: {
    backgroundColor: "#F59E0B",
    borderWidth: 5,
    borderColor: "#F59E0B",
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: 4,
  },

  stepContent: {
    flex: 1,
    paddingLeft: 10,
  },

  stepTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.text,
  },

  stepTime: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.muted,
    marginTop: 4,
  },

  trackBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: colors.primary,

    marginTop: 4,
    marginBottom: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 8,
  },

  trackText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: "900",
  },

  bottomButtons: {
    flexDirection: "row",
    gap: 12,

    paddingBottom: 24,
  },

  callBtn: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  callText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: "900",
  },

  chatBtn: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.card,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  chatText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "900",
  },
});