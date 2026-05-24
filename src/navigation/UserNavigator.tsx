import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../theme/colors";
import { tabBarStyles } from "../theme/tabTheme";

import HomeScreen from "../screens/user/HomeScreen";
import NotificationsScreen from "../screens/user/NotificationsScreen";

import PujaCategoriesScreen from "../screens/pooja/PujaCategoriesScreen";
import PujaDetailScreen from "../screens/pooja/PujaDetailScreen";

import PanditListScreen from "../screens/pandit/panditListScreen";
import PanditProfileScreen from "../screens/pandit/PanditProfileScreen";

import BookingScreen from "../screens/booking/BookingScreen";
import BookingStatusScreen from "../screens/booking/BookingStatusScreen";

import PaymentScreen from "../screens/payment/PaymentScreen";
import LiveTrackingScreen from "../screens/tracking/LiveTrackingScreen";


import SearchScreen from "../screens/user/SearchScreen";
import BookingsScreen from "../screens/user/BookingsScreen";


import ProfileScreen from "../screens/user/ProfileScreen";

export type UserBottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Bookings: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type UserStackParamList = {
  Tabs: undefined;

  PujaCategories: undefined;
  PujaDetail: { category: string };

  PanditList: undefined;
  PanditProfile: { pandit: any };

  Booking: {
    pandit?: any;
    category?: string;
  };

  Payment: {
    amount?: string;
    pandit?: any;
    category?: string;
  };

  BookingStatus: {
    amount?: string;
    paymentMethod?: string;
  };

  LiveTracking: {
    pandit?: any;
  };
};

const Tab = createBottomTabNavigator<UserBottomTabParamList>();
const Stack = createNativeStackNavigator<UserStackParamList>();

function TempScreen({ title }: { title: string }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: colors.primary,
          fontSize: 22,
          fontWeight: "800",
        }}
      >
        {title}
      </Text>
    </View>
  );
}




function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabBarStyles,
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          if (route.name === "Bookings") {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          if (route.name === "Notifications") {
            iconName = focused
              ? "notifications"
              : "notifications-outline";
          }

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function UserNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={BottomTabs} />

      <Stack.Screen
        name="PujaCategories"
        component={PujaCategoriesScreen}
      />

      <Stack.Screen
        name="PujaDetail"
        component={PujaDetailScreen}
      />

      <Stack.Screen
        name="PanditList"
        component={PanditListScreen}
      />

      <Stack.Screen
        name="PanditProfile"
        component={PanditProfileScreen}
      />

      <Stack.Screen
        name="Booking"
        component={BookingScreen}
      />

      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
      />

      <Stack.Screen
        name="BookingStatus"
        component={BookingStatusScreen}
      />

      <Stack.Screen
        name="LiveTracking"
        component={LiveTrackingScreen}
      />
    </Stack.Navigator>
  );
}