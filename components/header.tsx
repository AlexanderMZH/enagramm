import { app_bg_color } from "@/constants/theme";

import { StyleSheet, Text, View } from "react-native";

import SwitcherIcon from "@/assets/customIcons/SwitcherIcon";

const Header = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.audioSwitcher]}>
        <Text style={[styles.audioSwitcherText]}>ხმა</Text>
        <SwitcherIcon />
        <Text style={[styles.audioSwitcherText]}>ტექსტი</Text>
      </View>

      <View style={[styles.burgerMenu]}>
        <View style={[styles.burgerMenuIcon]}></View>
        <View style={[styles.burgerMenuIcon]}></View>
        <View style={[styles.burgerMenuIcon]}></View>
      </View>

      <View style={[styles.containerBorderBottom]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 12,

    position: "relative",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingBottom: 16,
    backgroundColor: app_bg_color,
  },
  audioSwitcher: { flexDirection: "row", alignItems: "center", gap: 4 },
  audioSwitcherText: { fontSize: 16, fontWeight: 700 },

  burgerMenu: { gap: 6 },
  burgerMenuIcon: { width: 32, height: 4, backgroundColor: "black" },

  containerBorderBottom: {
    width: "auto",
    height: 1,

    position: "absolute",
    bottom: 0,
    left: -20,
    right: -20,

    backgroundColor: "black",
  },
});

export default Header;
