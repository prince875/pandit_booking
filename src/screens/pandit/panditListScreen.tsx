import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const pandits = [
  {
    name: "Ravi Shastri",
    rating: "4.8",
    reviews: "120",
    experience: "10+ Years",
    price: "₹1500",
    distance: "2.5 km",
  },
  {
    name: "Mohan Ji",
    rating: "4.6",
    reviews: "80",
    experience: "8+ Years",
    price: "₹1400",
    distance: "3.1 km",
  },
  {
    name: "Suresh Ji",
    rating: "4.5",
    reviews: "75",
    experience: "7+ Years",
    price: "₹1200",
    distance: "4.0 km",
  },
  {
    name: "Krishna Shastri",
    rating: "4.4",
    reviews: "60",
    experience: "6+ Years",
    price: "₹1100",
    distance: "5.2 km",
  },
];

export default function PanditListScreen({ navigation }: any) {
  return (
    <AppContainer>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Select Pandit</Text>

        <TouchableOpacity>
          <Ionicons name="filter-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={pandits}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              navigation.navigate("PanditProfile", {
                pandit: item,
              })
            }
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={42} color={colors.primary} />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>

              <View style={styles.ratingRow}>
                <Ionicons name="star" size={13} color={colors.gold} />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.review}>({item.reviews})</Text>
              </View>

              <Text style={styles.exp}>{item.experience}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.distanceBox}>
              <Ionicons name="location-outline" size={14} color={colors.muted} />
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text,
  },

  list: {
    paddingTop: 12,
    paddingBottom: 30,
  },

  card: {
    minHeight: 118,
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: colors.border,

    shadowColor: colors.primary,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.softCard,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.text,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  rating: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "800",
    color: colors.gold,
  },

  review: {
    marginLeft: 3,
    fontSize: 12,
    color: colors.muted,
    fontWeight: "600",
  },

  exp: {
    marginTop: 5,
    fontSize: 12,
    color: colors.muted,
    fontWeight: "700",
  },

  price: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "900",
    color: colors.text,
  },

  distanceBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 10,
  },

  distance: {
    marginLeft: 3,
    fontSize: 11,
    color: colors.muted,
    fontWeight: "700",
  },
});