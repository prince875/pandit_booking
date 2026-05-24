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

const categories = [
  { name: "Satyanarayan", icon: "home" },
  { name: "Havan", icon: "flame" },
  { name: "Grah Pravesh", icon: "business" },
  { name: "Shanti Puja", icon: "flower" },
  { name: "Rudrabhishek", icon: "storefront" },
  { name: "Mundan", icon: "person" },
  { name: "Wedding", icon: "rose" },
  { name: "All Puja", icon: "apps" },
];

export default function PujaCategoriesScreen({
  navigation,
}: any) {
  return (
    <AppContainer>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Puja Categories
        </Text>

        <View style={{ width: 22 }} />
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.card}
            onPress={() =>
              navigation.navigate("PujaDetail", {
                category: item.name,
              })
            }
          >
            <View style={styles.iconBox}>
              <Ionicons
                name={item.icon as any}
                size={40}
                color={colors.primary}
              />
            </View>

            <Text style={styles.cardText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.text,
  },

  list: {
    paddingBottom: 40,
    paddingHorizontal: 8,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 18,
  },

  card: {
    width: "46%",
    height: 132,

    backgroundColor: colors.softCard,

    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: colors.border,

    paddingHorizontal: 12,
  },

  iconBox: {
    width: 72,
    height: 72,
    borderRadius: 36,

    backgroundColor: "#FFF7ED",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 14,
  },

  cardText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
  },
});