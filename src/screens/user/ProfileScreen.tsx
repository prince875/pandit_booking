import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppContainer from "../../components/AppContainer";
import { colors } from "../../theme/colors";

export default function ProfileScreen({ navigation }: any) {
  const [user, setUser] = useState({
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    family: "Gotra, Kuldevi",
  });

  const [editOpen, setEditOpen] = useState(false);

  const menu = [
    { title: "My Bookings", icon: "calendar-outline", onPress: () => navigation.navigate("Bookings") },
    { title: "Saved Addresses", icon: "location-outline", onPress: () => Alert.alert("Saved Addresses") },
    { title: "Family Details", icon: "people-outline", sub: user.family, onPress: () => setEditOpen(true) },
    { title: "Payment Methods", icon: "card-outline", onPress: () => Alert.alert("Payment Methods") },
    { title: "Settings", icon: "settings-outline", onPress: () => Alert.alert("Settings") },
    { title: "Help & Support", icon: "help-circle-outline", onPress: () => Alert.alert("Help & Support") },
  ];

  return (
    <AppContainer>
      <View style={styles.screen}>
        <View style={styles.headerCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={36} color={colors.primary} />
          </View>

          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.phone}>{user.phone}</Text>
          </View>

          <TouchableOpacity style={styles.editBtn} onPress={() => setEditOpen(true)}>
            <Ionicons name="create-outline" size={20} color={colors.card} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuCard}>
          {menu.map((item) => (
            <TouchableOpacity key={item.title} style={styles.row} onPress={item.onPress}>
              <Ionicons name={item.icon as any} size={20} color={colors.text} />

              <View style={styles.rowTextBox}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                {item.sub && <Text style={styles.rowSub}>{item.sub}</Text>}
              </View>

              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.row}
            onPress={() => Alert.alert("Logout", "Are you sure?", [
              { text: "Cancel" },
              { text: "Logout", style: "destructive" },
            ])}
          >
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <View style={styles.rowTextBox}>
              <Text style={styles.logout}>Logout</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.muted} />
          </TouchableOpacity>
        </View>

        <Modal visible={editOpen} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Edit Profile</Text>

              <TextInput
                style={styles.input}
                value={user.name}
                onChangeText={(v) => setUser({ ...user, name: v })}
                placeholder="Name"
              />

              <TextInput
                style={styles.input}
                value={user.phone}
                onChangeText={(v) => setUser({ ...user, phone: v })}
                placeholder="Phone"
                keyboardType="phone-pad"
              />

              <TextInput
                style={styles.input}
                value={user.family}
                onChangeText={(v) => setUser({ ...user, family: v })}
                placeholder="Family Details"
              />

              <TouchableOpacity style={styles.saveBtn} onPress={() => setEditOpen(false)}>
                <Text style={styles.saveText}>SAVE PROFILE</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setEditOpen(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headerCard: {
    height: 120,
    borderRadius: 18,
    backgroundColor: colors.primary,
    marginTop: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: colors.softCard,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  name: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.card,
  },

  phone: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "700",
    color: colors.card,
  },

  editBtn: {
    marginLeft: "auto",
  },

  menuCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginTop: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },

  row: {
    height: 58,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  rowTextBox: {
    flex: 1,
    marginLeft: 14,
  },

  rowTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
  },

  rowSub: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "700",
    color: colors.muted,
  },

  logout: {
    fontSize: 13,
    fontWeight: "900",
    color: "#EF4444",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  modalCard: {
    backgroundColor: colors.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 34,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.text,
    marginBottom: 18,
  },

  input: {
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },

  saveBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  saveText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: "900",
  },

  cancelText: {
    textAlign: "center",
    marginTop: 16,
    color: colors.primary,
    fontWeight: "900",
  },
});