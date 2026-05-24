import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { colors } from "../../theme/colors";

export default function OtpScreen() {
  const route = useRoute<any>();
  const { phone } = route.params || {};

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(25);

  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const value = text.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      refs[index + 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 4) {
      Alert.alert("Error", "Please enter 4 digit OTP");
      return;
    }

    if (finalOtp !== "2468") {
      Alert.alert("Invalid OTP", "Use 2468 for testing");
      return;
    }

    Alert.alert("Success", "OTP verified successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter OTP</Text>

        <Text style={styles.subtitle}>We have sent OTP to</Text>

        <Text style={styles.phone}>+91 {phone || "98765 43210"}</Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={refs[index]}
              style={styles.otpBox}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <Text style={styles.resend}>
          Resend OTP in{" "}
          <Text style={styles.timer}>
            00:{timer.toString().padStart(2, "0")}
          </Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>VERIFY OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    justifyContent: "center",
  },

  card: {
    minHeight: 520,
    paddingHorizontal: 24,
    paddingTop: 50,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.black,
  },

  subtitle: {
    marginTop: 22,
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },

  phone: {
    marginTop: 6,
    fontSize: 15,
    color: colors.black,
    fontWeight: "800",
  },

  otpRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 48,
  },

  otpBox: {
    width: 56,
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E9D8C8",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
    color: colors.black,
  },

  resend: {
    marginTop: 38,
    fontSize: 14,
    color: colors.text,
    fontWeight: "600",
  },

  timer: {
    color: colors.primary,
    fontWeight: "900",
  },

  button: {
    marginTop: 80,
    width: "100%",
    height: 58,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "900",
  },
});