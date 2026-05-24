import { colors } from "./colors";

export const tabBarStyles = {
  headerShown: false,

  tabBarStyle: {
    position: "absolute" as const,
    left: 18,
    right: 18,
    bottom: 60,
    height: 78,
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    borderTopWidth: 0,
    shadowColor: colors.primary,
    shadowOpacity: 0.40,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 18,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.muted,
  tabBarLabelStyle: {
    fontSize: 10,
    fontWeight: "700" as const,
  },
};