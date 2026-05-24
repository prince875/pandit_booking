import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

export default function PanditProfileScreen({ navigation, route }: any) {
  const pandit = route?.params?.pandit || {
    name: "Ravi Shastri",
    rating: "4.8",
    reviews: "120",
    experience: "10+ Years",
    price: "₹1500",
  };

  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.primary} />
          </TouchableOpacity>

          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={22} color={colors.primary} />
            <Ionicons name="heart-outline" size={22} color={colors.primary} />
          </View>
        </View>

        <View style={styles.avatarBox}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={92} color={colors.primary} />
          </View>

          <View style={styles.onlineBadge}>
            <Text style={styles.onlineText}>● Online</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>{pandit.name}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={15} color={colors.gold} />
            <Text style={styles.rating}>{pandit.rating}</Text>
            <Text style={styles.review}>({pandit.reviews} Reviews)</Text>
          </View>

          <InfoRow icon="briefcase-outline" label="Experience" value={pandit.experience} />
          <InfoRow icon="ribbon-outline" label="Specialization" value="Havan, Satyanarayan, Grah Pravesh, Marriage" />
          <InfoRow icon="language-outline" label="Languages" value="Hindi, Sanskrit" />
          <InfoRow icon="pricetag-outline" label="Price" value={`${pandit.price} / Puja`} />
          <InfoRow icon="information-circle-outline" label="About" value="Experienced and trusted pandit for various pujas." />

          <View style={styles.bottomRow}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.bookBtn}
              onPress={() => navigation.navigate("Booking", { pandit })}
            >
              <Text style={styles.bookText}>BOOK NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.85} style={styles.callBtn}>
              <Ionicons name="call" size={24} color={colors.card} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}

function InfoRow({ icon, label, value }: any) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoLeft}>
        <Ionicons name={icon} size={15} color={colors.text} />
        <Text style={styles.label}>{label}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 14,
  },

  avatarBox: {
    height: 210,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarCircle: {
    width: 155,
    height: 155,
    borderRadius: 78,
    backgroundColor: colors.softCard,
    alignItems: "center",
    justifyContent: "center",
  },

  onlineBadge: {
    position: "absolute",
    right: 28,
    bottom: 32,
    backgroundColor: "#16A34A",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  onlineText: {
    color: colors.card,
    fontSize: 11,
    fontWeight: "800",
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },

  name: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.text,
    textAlign: "center",
  },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 22,
  },

  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "900",
    color: colors.gold,
  },

  review: {
    marginLeft: 4,
    fontSize: 13,
    color: colors.muted,
    fontWeight: "700",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    gap: 14,
  },

  infoLeft: {
    width: 120,
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
  },

  value: {
    flex: 1,
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
    lineHeight: 17,
  },

  bottomRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },

  bookBtn: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  bookText: {
    color: colors.card,
    fontSize: 15,
    fontWeight: "900",
  },

  callBtn: {
    width: 54,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});