import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import BottomActionButtons from "@/components/BottomActionButtons";
import Header from "@/components/Header";
import { Colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MainPage = () => {
  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <View style={[styles.settingContainer]}>
          <Pressable style={[styles.openNew]} onPress={() => null}>
            <FontAwesome6 name="plus" size={14} color="#fff" />
            <Text style={[styles.openNewText]}>ახლის გახსნა</Text>
          </Pressable>
          <Pressable onPress={() => null} style={[styles.settings]}>
            <Feather name="settings" size={16} color="#23557D" />
            <Text style={[styles.settingsText]}>პარამეტრები</Text>
          </Pressable>
        </View>
        <View style={[styles.startRecording]}>
          <MaterialCommunityIcons
            name="microphone"
            size={28}
            color={Colors.light.primary_blue_color}
          />
          <Text style={[styles.startRecordingText]}>დაიწყე ჩაწერა...</Text>
        </View>
      </View>
      <BottomActionButtons />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  settingContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  openNew: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    backgroundColor: Colors.light.primary_blue_color,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  openNewText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  settings: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    padding: 8,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#23557D",
    borderRadius: 12,
  },
  settingsText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#23557D",
  },

  startRecording: {
    flexDirection: "row",
    gap: 4,

    marginTop: 24,
  },

  startRecordingText: {
    fontSize: 16,
  },
});

export default MainPage;
