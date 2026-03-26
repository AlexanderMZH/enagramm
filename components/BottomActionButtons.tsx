import { Colors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Pressable, StyleSheet, Text, View } from "react-native";

const BottomActionButtons = ({
  isRecording,
  isRecordingToggle,
  isRecorded,
  isRecordedToggle,
}: {
  isRecording: boolean;
  isRecorded: boolean;
  isRecordingToggle: () => void;
  isRecordedToggle: () => void;
}) => {
  const handleRecording = () => {
    if (isRecorded) {
      isRecordedToggle();
    }
    isRecordingToggle();
  };

  const handleStopRecording = () => {
    isRecordingToggle();
    isRecordedToggle();
  };

  return (
    <View style={[styles.container]}>
      <Pressable style={[styles.actionButtonContainer]}>
        <AntDesign name="file-add" size={40} color="#767676" />
        <Text style={[styles.buttonLabels]}>აუდიო ფაილი</Text>
      </Pressable>
      {isRecording ? (
        <Pressable
          style={[styles.actionButtonContainer]}
          onPress={handleStopRecording}
        >
          <View style={[styles.stopIconOuter]}>
            <View style={[styles.stopIconInner]}></View>
          </View>
          <Text style={[styles.buttonLabels]}>შეჩერება</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.actionButtonContainer]}
          onPress={handleRecording}
        >
          <View style={[styles.microphoneIconContainer]}>
            <MaterialCommunityIcons name="microphone" size={24} color="#fff" />
          </View>
          <Text style={[styles.buttonLabels]}>ჩაწერა</Text>
        </Pressable>
      )}
      <Pressable style={[styles.actionButtonContainer]}>
        <Ionicons name="logo-youtube" size={44} color="#FF0000" />
        <Text style={[styles.buttonLabels]}>YouTube Link</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.app_bg_color,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    paddingTop: 20,
  },

  actionButtonContainer: {
    alignItems: "center",
  },

  microphoneIconContainer: {
    padding: 18,
    borderRadius: 16,

    backgroundColor: Colors.light.primary_blue_color,
  },

  stopIconOuter: {
    width: 61,
    height: 61,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F65959",
    borderRadius: 12,
  },
  stopIconInner: {
    width: 14,
    height: 14,

    backgroundColor: "#fff",
    borderRadius: 4,
  },
  buttonLabels: {
    marginTop: 8,
    fontSize: 12,
  },
});

export default BottomActionButtons;
