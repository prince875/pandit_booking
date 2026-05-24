import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const notifications = [
  {
    id: "1",
    title: "Booking Confirmed",
    desc: "Your booking has been confirmed.",
    time: "25 May, 09:45 AM",
    icon: "calendar",
    color: colors.primary,
  },
  {
    id: "2",
    title: "Pandit On the Way",
    desc: "Pandit is on the way to your location.",
    time: "25 May, 09:50 AM",
    icon: "walk",
    color: colors.primary,
  },
  {
    id: "3",
    title: "Puja in Progress",
    desc: "Your puja has been started.",
    time: "25 May, 10:05 AM",
    icon: "gift",
    color: colors.gold,
  },
  {
    id: "4",
    title: "Puja Completed",
    desc: "Your puja has been completed.",
    time: "25 May, 12:10 PM",
    icon: "checkmark-done",
    color: colors.primary,
  },
  {
    id: "5",
    title: "Special Offer",
    desc: "Get flat 20% off on next booking.",
    time: "24 May, 06:30 PM",
    icon: "star",
    color: "#EF4444",
  },
];

export default function NotificationsScreen({ navigation }: any) {
  return (
    <AppContainer>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notifications</Text>

          <View style={{ width: 22 }} />
        </View>

        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.85} style={styles.card}>
              <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon as any} size={20} color={colors.card} />
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
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

  list: {
    paddingTop: 14,
    paddingBottom: 110,
  },

  card: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 14,
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.text,
  },

  desc: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text,
    marginTop: 3,
  },

  time: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.muted,
    marginTop: 4,
  },
});