import React from "react";

import {
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

import { colors } from "../theme/colors";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({
  children,
}: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,

    paddingTop:
      (StatusBar.currentHeight || 0) + 10,
  },
});