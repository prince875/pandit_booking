import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Share,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const panditLocation = {
  latitude: 26.9194,
  longitude: 75.8042,
};

const userLocation = {
  latitude: 26.9078,
  longitude: 75.7873,
};

const routeCoordinates = [
  userLocation,
  { latitude: 26.9112, longitude: 75.7912 },
  { latitude: 26.9144, longitude: 75.7946 },
  { latitude: 26.9149, longitude: 75.7991 },
  panditLocation,
];

export default function LiveTrackingScreen({ navigation, route }: any) {
  const mapRef = React.useRef<MapView>(null);

  const pandit = route?.params?.pandit || {
    name: "Ravi Shastri",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  };

  const shareLiveLocation = async () => {
    try {
      const liveUrl = `https://www.google.com/maps?q=${panditLocation.latitude},${panditLocation.longitude}`;

      await Share.share({
        message: `${pandit.name} live location:\n${liveUrl}`,
      });
    } catch {
      Alert.alert("Error", "Unable to share live location");
    }
  };

  const focusPanditLocation = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: panditLocation.latitude,
        longitude: panditLocation.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      800
    );
  };

  return (
    <AppContainer>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Live Tracking</Text>

          <View style={{ width: 22 }} />
        </View>

        <View style={styles.mapWrapper}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: 26.9138,
              longitude: 75.7958,
              latitudeDelta: 0.025,
              longitudeDelta: 0.025,
            }}
          >
            <Polyline
              coordinates={routeCoordinates}
              strokeColor={colors.primary}
              strokeWidth={5}
            />

            <Marker coordinate={userLocation}>
              <View style={styles.homeMarker}>
                <Ionicons name="home" size={26} color={colors.primary} />
              </View>
            </Marker>

            <Marker coordinate={panditLocation}>
              <View style={styles.panditMarker}>
                <Image source={{ uri: pandit.image }} style={styles.panditImg} />
              </View>
            </Marker>

            <Marker coordinate={routeCoordinates[2]}>
              <View style={styles.carMarker}>
                <Ionicons name="car-sport" size={22} color={colors.text} />
              </View>
            </Marker>
          </MapView>

          <View style={styles.infoCard}>
            <Image source={{ uri: pandit.image }} style={styles.infoAvatar} />

            <View>
              <Text style={styles.name}>{pandit.name}</Text>
              <Text style={styles.status}>On the way to you</Text>
              <Text style={styles.meta}>ETA: 12 mins  •  2.4 km</Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.locateBtn}
            onPress={focusPanditLocation}
          >
            <Ionicons name="navigate" size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.shareBtn}
            onPress={shareLiveLocation}
          >
            <Ionicons name="share-social-outline" size={18} color={colors.primary} />
            <Text style={styles.shareText}>Share Live Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },

  header: {
    height: 54,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text,
  },

  mapWrapper: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  map: {
    flex: 1,
  },

  infoCard: {
    position: "absolute",
    top: 18,
    left: 18,
    minWidth: 220,
    minHeight: 78,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  infoAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: colors.softCard,
  },

  name: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.text,
  },

  status: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
  },

  meta: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: "700",
    color: colors.muted,
  },

  homeMarker: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  panditMarker: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.softCard,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: "hidden",
  },

  panditImg: {
    width: "100%",
    height: "100%",
  },

  carMarker: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.text,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  locateBtn: {
    position: "absolute",
    right: 18,
    bottom: 24,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  footer: {
    paddingTop: 14,
    paddingBottom: 30,
    paddingHorizontal: 2,
  },

  shareBtn: {
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  shareText: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.primary,
  },
});