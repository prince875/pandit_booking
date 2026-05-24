import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AppContainer from "../../components/AppContainer";

import HomeHeader from "../../components/home/HomeHeader";
import SearchBar from "../../components/home/SearchBar";
import HeroBookingCard from "../../components/home/HeroBookingCard";
import EmergencyPujaCard from "../../components/home/EmergencyPujaCard";
import SectionHeader from "../../components/home/SectionHeader";
import PujaCategories from "../../components/home/PujaCategories";
import TrustStats from "../../components/home/TrustStats";

export default function HomeScreen({ navigation }: any) {
  return (
    <AppContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HomeHeader />

        <SearchBar />

        <HeroBookingCard
          onPress={() => navigation.navigate("PujaCategories")}
        />

        <SectionHeader
          title="Popular Puja Services"
          onViewAll={() => navigation.navigate("PujaCategories")}
        />

        <PujaCategories />

        {/* <EmergencyPujaCard
          onPress={() => navigation.navigate("EmergencyBooking")}
        /> */}

        <TrustStats />
      </ScrollView>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 130,
  },
});