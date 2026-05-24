import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme/colors";

const templeImage = require("../../../assets/images/login-temple.png");

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState("");

  const handleSendOtp = () => {
    const cleanPhone = phone.trim();

    if (cleanPhone.length !== 10) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    navigation.navigate("Otp", { phone: cleanPhone });
  };

  return (
    <View style={styles.bg}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Please login to continue</Text>

        <Image source={templeImage} style={styles.temple} resizeMode="contain" />

        <View style={styles.card}>
          <View style={styles.inputBox}>
            <Text style={styles.countryCode}>+91</Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ""))}
              placeholder="98765 43210"
              placeholderTextColor={colors.muted}
              keyboardType="number-pad"
              maxLength={10}
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleSendOtp}
          >
            <Text style={styles.buttonText}>SEND OTP</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>By continuing you agree to our</Text>
          <Text style={styles.termsText}>Terms & Conditions</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  temple: {
    width: 200,
    height: 800,
    alignSelf: "center",
    marginBottom: -270,
    marginTop: -400,
    zIndex: 10,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.97)",
    borderRadius: 34,
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 90,
    borderWidth: 1.5,
    borderColor: "#EAC89C",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 12,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#4B000F",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: "#6B4D3B",
    textAlign: "center",
    marginBottom: 130,
  },

  inputBox: {
    height: 62,
    borderWidth: 1.5,
    borderColor: "#EAC89C",
    borderRadius: 18,
    backgroundColor: "#FFFDF9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },

  countryCode: {
    fontSize: 18,
    fontWeight: "800",
    color: "#6A0015",
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#2B2B2B",
  },

  button: {
    marginTop: 26,
    height: 62,
    borderRadius: 18,
    backgroundColor: "#8B0F24",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#8B0F24",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 8,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footerText: {
    marginTop: 28,
    fontSize: 13,
    color: "#6B4D3B",
    textAlign: "center",
  },

  termsText: {
    marginTop: 10,
    fontSize: 14,
    color: "#6A0015",
    textAlign: "center",
    fontWeight: "900",
  },
});