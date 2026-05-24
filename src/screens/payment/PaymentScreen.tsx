import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

const paymentMethods = [
  {
    id: "upi",
    title: "UPI (PhonePe / GPay / Paytm)",
    icon: "phone-portrait-outline",
  },
  {
    id: "card",
    title: "Debit / Credit Card",
    icon: "card-outline",
  },
  {
    id: "netbanking",
    title: "Net Banking",
    icon: "business-outline",
  },
  {
    id: "wallet",
    title: "Wallet",
    icon: "wallet-outline",
  },
];

export default function PaymentScreen({
  navigation,
  route,
}: any) {
  const amount = route?.params?.amount || "₹1500";

  const [selectedMethod, setSelectedMethod] =
    useState("upi");

  return (
    <AppContainer>
      <View style={styles.screen}>
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

          <Text style={styles.headerTitle}>
            Payment
          </Text>

          <View style={{ width: 22 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Amount */}
          <Text style={styles.totalLabel}>
            Total Amount
          </Text>

          <Text style={styles.amount}>
            {amount}
          </Text>

          {/* Payment Card */}
           <Text style={styles.sectionTitle}>
              Choose Payment Method
            </Text>
          <View style={styles.methodCard}>
           

            {paymentMethods.map((item) => {
              const active =
                selectedMethod === item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.85}
                  style={styles.methodRow}
                  onPress={() =>
                    setSelectedMethod(item.id)
                  }
                >
                  <View style={styles.methodLeft}>
                    <Ionicons
                      name={item.icon as any}
                      size={20}
                      color={colors.text}
                    />

                    <Text style={styles.methodText}>
                      {item.title}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.radioOuter,
                      active &&
                        styles.radioOuterActive,
                    ]}
                  >
                    {active && (
                      <Ionicons
                        name="checkmark"
                        size={12}
                        color={colors.card}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Pay Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.payButton}
            onPress={() =>
              navigation.navigate(
                "BookingStatus",
                {
                  amount,
                  paymentMethod:
                    selectedMethod,
                }
              )
            }
          >
            <Text style={styles.payButtonText}>
              PAY {amount}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    height: 54,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text,
  },

  content: {
    flex: 1,
    paddingTop: 16,
  },

  totalLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 6,
  },

  amount: {
    fontSize: 30,
    fontWeight: "900",
    color: "#16A34A",
    marginBottom: 60,
  },

  methodCard: {
    backgroundColor: colors.card,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: colors.border,

    overflow: "hidden",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.text,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 25,
  },

  methodRow: {
    height: 58,

    paddingHorizontal: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  methodLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  methodText: {
    marginLeft: 12,

    fontSize: 13,
    fontWeight: "800",

    color: colors.text,
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,

    borderWidth: 1.5,
    borderColor: colors.border,

    alignItems: "center",
    justifyContent: "center",
  },

  radioOuterActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  payButton: {
    height: 56,

    borderRadius: 14,

    backgroundColor: colors.primary,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 200,
    marginBottom: 14,
  },

  payButtonText: {
    color: colors.card,

    fontSize: 15,
    fontWeight: "900",
  },
});