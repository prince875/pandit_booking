import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

export default function PujaDetailScreen({ navigation, route }: any) {
  const category = route?.params?.category || "Satyanarayan";

  return (
    <AppContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="refresh" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{category} Puja</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={15} color={colors.gold} />
            <Text style={styles.rating}>4.8</Text>
            <Text style={styles.review}>(120 Reviews)</Text>
          </View>

          <Text style={styles.desc}>
            A sacred puja for happiness, prosperity and good fortune.
          </Text>

          <InfoRow icon="time-outline" label="Duration" value="2 - 3 Hours" />
          <InfoRow icon="person-outline" label="Pandit" value="Verified Pandits" />
          <InfoRow icon="bag-check-outline" label="Samagri" value="Included" />

          <View style={styles.infoRow}>
            <View style={styles.left}>
              <Ionicons name="pricetag-outline" size={18} color={colors.text} />
              <Text style={styles.label}>Price</Text>
            </View>

            <View style={styles.priceBox}>
              <Text style={styles.oldPrice}>₹2100</Text>
              <Text style={styles.price}>₹1500</Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.button}
            onPress={() => navigation.navigate("PanditList")}
          >
            <Text style={styles.buttonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppContainer>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.left}>
        <Ionicons name={icon} size={18} color={colors.text} />
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

  image: {
    width: "100%",
    height: 185,
    borderRadius: 18,
    marginTop: 8,
  },

  content: {
    paddingTop: 18,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.text,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  rating: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "800",
    color: colors.gold,
  },

  review: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: colors.muted,
  },

  desc: {
    marginTop: 18,
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "600",
    color: colors.text,
  },

  infoRow: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },

  value: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
  },

  priceBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  oldPrice: {
    marginRight: 8,
    fontSize: 13,
    color: colors.muted,
    textDecorationLine: "line-through",
  },

  price: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.primary,
  },

  button: {
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    marginBottom: 25,
  },

  buttonText: {
    color: colors.card,
    fontSize: 15,
    fontWeight: "900",
  },
});