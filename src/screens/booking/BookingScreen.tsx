import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

type AddressSuggestion = {
  id: string;
  title: string;
  subtitle: string;
  latitude: number;
  longitude: number;
};

export default function BookingScreen({ navigation, route }: any) {
  const pandit = route?.params?.pandit;
  const category = route?.params?.category;

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [notes, setNotes] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [searchingAddress, setSearchingAddress] = useState(false);

  const [region, setRegion] = useState({
    latitude: 26.9124,
    longitude: 75.7873,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
  });

  const searchTimer = useRef<any>(null);
  const amount = pandit?.price || "₹1500";

  const formatDate = (value: Date) =>
    value.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatTime = (value: Date) =>
    value.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const searchAddress = (text: string) => {
    setAddress(text);

    if (searchTimer.current) {
      clearTimeout(searchTimer.current);
    }

    if (text.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    searchTimer.current = setTimeout(async () => {
      try {
        setSearchingAddress(true);

        const searchTexts = [
          text,
          `${text}, Ahmedabad`,
          `${text}, Gujarat`,
          `${text}, India`,
        ];

        const results: AddressSuggestion[] = [];

        for (const query of searchTexts) {
          const geo = await Location.geocodeAsync(query);

          if (geo?.[0]) {
            results.push({
              id: `${query}-${geo[0].latitude}-${geo[0].longitude}`,
              title: query,
              subtitle: `${geo[0].latitude.toFixed(5)}, ${geo[0].longitude.toFixed(5)}`,
              latitude: geo[0].latitude,
              longitude: geo[0].longitude,
            });
          }
        }

        const uniqueResults = results.filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (x) =>
                x.latitude.toFixed(4) === item.latitude.toFixed(4) &&
                x.longitude.toFixed(4) === item.longitude.toFixed(4)
            )
        );

        setSuggestions(uniqueResults.slice(0, 5));
      } finally {
        setSearchingAddress(false);
      }
    }, 600);
  };

  const selectAddress = (item: AddressSuggestion) => {
    setAddress(item.title);
    setSuggestions([]);

    setRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    });
  };

  const openMap = async () => {
    setMapVisible(true);

    const permission = await Location.requestForegroundPermissionsAsync();

    if (permission.status === "granted") {
      const current = await Location.getCurrentPositionAsync({});

      setRegion({
        latitude: current.coords.latitude,
        longitude: current.coords.longitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
      });
    }
  };

  const confirmAddress = async () => {
    try {
      const result = await Location.reverseGeocodeAsync({
        latitude: region.latitude,
        longitude: region.longitude,
      });

      const place = result?.[0];

      if (place) {
        setAddress(
          `${place.name || ""} ${place.street || ""}, ${
            place.city || place.region || ""
          }`
        );
      }
    } catch {}

    setMapVisible(false);
  };

  return (
    <AppContainer>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color={colors.text} />
            </TouchableOpacity>

            <Text style={styles.title}>Booking Details</Text>

            <View style={{ width: 22 }} />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Select Date</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.inputBox}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.inputText}>{formatDate(date)}</Text>
              <Ionicons name="calendar-outline" size={20} color={colors.text} />
            </TouchableOpacity>

            <Text style={styles.label}>Select Time</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.inputBox}
              onPress={() => setShowTimePicker(true)}
            >
              <Text style={styles.inputText}>{formatTime(time)}</Text>
              <Ionicons name="time-outline" size={20} color={colors.text} />
            </TouchableOpacity>

            <Text style={styles.label}>Address</Text>

            <View style={styles.addressWrapper}>
              <View style={styles.addressBox}>
                <Ionicons
                  name="search-outline"
                  size={18}
                  color={colors.muted}
                  style={{ marginRight: 8 }}
                />

                <TextInput
                  value={address}
                  onChangeText={searchAddress}
                  style={styles.addressInput}
                  placeholder="Search your address"
                  placeholderTextColor={colors.muted}
                />

                {searchingAddress ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <TouchableOpacity onPress={openMap}>
                    <Text style={styles.changeText}>Map</Text>
                  </TouchableOpacity>
                )}
              </View>

              {suggestions.length > 0 && (
                <View style={styles.suggestionBox}>
                  {suggestions.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.8}
                      style={styles.suggestionItem}
                      onPress={() => selectAddress(item)}
                    >
                      <Ionicons
                        name="location-outline"
                        size={18}
                        color={colors.primary}
                      />

                      <View style={{ flex: 1 }}>
                        <Text style={styles.suggestionTitle} numberOfLines={1}>
                          {item.title}
                        </Text>
                        <Text style={styles.suggestionSub} numberOfLines={1}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <Text style={styles.label}>Notes (Optional)</Text>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              style={styles.notesBox}
              placeholder="Write any special notes..."
              placeholderTextColor={colors.muted}
              multiline
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.amount}>{amount}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.continueBtn}
            onPress={() =>
              navigation.navigate("Payment", {
                pandit,
                category,
                date: formatDate(date),
                time: formatTime(time),
                address,
                notes,
                amount,
                lat: region.latitude,
                lng: region.longitude,
              })
            }
          >
            <Text style={styles.continueText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "calendar"}
            minimumDate={new Date()}
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display={Platform.OS === "ios" ? "spinner" : "clock"}
            onChange={(_, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) setTime(selectedTime);
            }}
          />
        )}

        <Modal visible={mapVisible} animationType="slide">
          <View style={styles.mapScreen}>
            <View style={styles.mapHeader}>
              <TouchableOpacity onPress={() => setMapVisible(false)}>
                <Ionicons name="arrow-back" size={22} color={colors.text} />
              </TouchableOpacity>

              <Text style={styles.title}>Select Address</Text>

              <TouchableOpacity onPress={confirmAddress}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>

            <MapView
              style={styles.map}
              region={region}
              onRegionChangeComplete={setRegion}
            >
              <Marker coordinate={region} />
            </MapView>

            <View style={styles.mapFooter}>
              <Text style={styles.mapAddress} numberOfLines={2}>
                {address || "Move map pin to select address"}
              </Text>

              <TouchableOpacity style={styles.confirmBtn} onPress={confirmAddress}>
                <Text style={styles.continueText}>CONFIRM ADDRESS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 24,
  },

  header: {
    height: 52,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text,
  },

  content: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 8,
  },

  inputBox: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
  },

  addressWrapper: {
    marginBottom: 18,
    zIndex: 10,
  },

  addressBox: {
    minHeight: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  addressInput: {
    flex: 1,
    minHeight: 54,
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    paddingVertical: 0,
  },

  changeText: {
    fontSize: 12,
    fontWeight: "900",
    color: colors.primary,
    marginLeft: 12,
  },

  suggestionBox: {
    marginTop: 8,
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },

  suggestionItem: {
    minHeight: 58,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  suggestionTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.text,
  },

  suggestionSub: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: "700",
    color: colors.muted,
  },

  notesBox: {
    height: 82,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 13,
    fontWeight: "700",
    color: colors.text,
    textAlignVertical: "top",
  },

  footer: {
    marginHorizontal: 20,
    marginBottom: 70,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 4,
  },

  amount: {
    fontSize: 26,
    fontWeight: "900",
    color: colors.text,
  },

  continueBtn: {
    width: 150,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  continueText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: "900",
  },

  mapScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  mapHeader: {
    height: 60,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  doneText: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.primary,
  },

  map: {
    flex: 1,
  },

  mapFooter: {
    padding: 18,
    paddingBottom: 30,
    backgroundColor: colors.card,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  mapAddress: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 14,
  },

  confirmBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});