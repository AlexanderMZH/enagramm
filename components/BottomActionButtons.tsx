import { Colors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Pressable, StyleSheet, Text, View } from "react-native";

const BottomActionButtons = () => {
  return (
    <View style={[styles.container]}>
      <Pressable style={[styles.actionButtonContainer]}>
        <AntDesign name="file-add" size={40} color="#767676" />
        <Text style={[styles.buttonLabels]}>აუდიო ფაილი</Text>
      </Pressable>
      <Pressable style={[styles.actionButtonContainer]}>
        <View style={[styles.microphoneIconContainer]}>
          <MaterialCommunityIcons name="microphone" size={30} color="#fff" />
        </View>
        <Text style={[styles.buttonLabels]}>ჩაწერა</Text>
      </Pressable>
      <Pressable style={[styles.actionButtonContainer]}>
        <Ionicons name="logo-youtube" size={40} color="#FF0000" />
        <Text style={[styles.buttonLabels]}>YouTube Link</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  actionButtonContainer: {
    alignItems: "center",
  },

  microphoneIconContainer: {
    padding: 14,
    borderRadius: 16,

    backgroundColor: Colors.light.primary_blue_color,
  },

  buttonLabels: {
    fontSize: 12,
  },
});

export default BottomActionButtons;
