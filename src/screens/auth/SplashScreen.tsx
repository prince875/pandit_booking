import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import useLoaderAnimation from "../../hooks/useLoaderAnimation";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../theme/colors";

const omImage = require("../../../assets/images/om.png");
const panditImage = require("../../../assets/images/pandit.png");
const templeBg = require("../../../assets/images/temple-bg.png");

export default function SplashScreen() {
  const loaderWidth = useLoaderAnimation();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.replace("User");
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <ImageBackground
      source={templeBg}
      style={styles.container}
      resizeMode="cover"
    >
      {/* OM IMAGE */}
      <Image source={omImage} style={styles.om} />

      {/* TITLE */}
      <Text style={styles.title}>PANDIT</Text>
      <Text style={styles.subTitle}>BOOKING APP</Text>

      <Text style={styles.tagline}>
        Book Pandit for Your Puja & More
      </Text>

      {/* PANDIT IMAGE */}
      <Image source={panditImage} style={styles.pandit} />

       {/* DYNAMIC LOADER */}
      <Text style={styles.loading}>Loading...</Text>
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[
            styles.loaderFill,
            {
              width: loaderWidth,
            },
          ]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    paddingTop: 90,
  },

  om: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: colors.primary,
    
  },

  subTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primaryDark,
    letterSpacing: 2,
  },

  tagline: {
    marginTop: 5,
    fontSize: 16,
    color: colors.text,
  },

  pandit: {
    width: 500,
    height: 500,
    resizeMode: "contain",
      marginTop: -110,
      left: -40,
   
  },

  loading: {
    marginTop: 40,
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
  },

  loader: {
    width: 220,
    height: 8,
    backgroundColor: "#E8D8C7",
    borderRadius: 20,
    marginTop: 20,
    overflow: "hidden",
  },

  loaderContainer: {
  width: 220,
  height: 8,
  backgroundColor: "#E8D8C7",
  borderRadius: 30,
  overflow: "hidden",

  position: "absolute",
  bottom: 100,
},

loaderFill: {
  height: "100%",
  backgroundColor: colors.primary,
  borderRadius: 30,
},
});