import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AnimatedRecording from "@/components/AnimatedRecording";
import Header from "@/components/Header";

import BottomActionButtons from "@/components/BottomActionButtons";

import AudioPlayer from "@/components/AudioPlayer";
import { app_bg_color, primary_blue_color } from "@/constants/theme";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MainPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <View style={[styles.settingContainer]}>
          <Pressable
            style={[styles.openNew]}
            onPress={() => {
              setIsRecorded(false);
              setIsRecording(false);
            }}
          >
            <FontAwesome6 name="plus" size={14} color="#fff" />
            <Text style={[styles.openNewText]}>ახლის გახსნა</Text>
          </Pressable>
          <Pressable onPress={() => null} style={[styles.settings]}>
            <Feather name="settings" size={16} color="#23557D" />
            <Text style={[styles.settingsText]}>პარამეტრები</Text>
          </Pressable>
        </View>
        {isRecording || isRecorded ? (
          <AnimatedRecording
            isRecorded={isRecorded}
            isRecording={isRecording}
          />
        ) : (
          <View style={[styles.startRecording]}>
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color={primary_blue_color}
            />
            <Text style={[styles.startRecordingText]}>დაიწყე ჩაწერა...</Text>
          </View>
        )}
      </View>
      {isRecorded && <AudioPlayer />}
      <BottomActionButtons
        isRecording={isRecording}
        isRecordingToggle={() => setIsRecording(!isRecording)}
        isRecorded={isRecorded}
        isRecordedToggle={() => setIsRecorded(!isRecorded)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,

    flex: 1,

    backgroundColor: app_bg_color,
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

    backgroundColor: primary_blue_color,
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
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
  },
  hugeText: {
    fontSize: 12,
    lineHeight: 18,
  },
});

export default MainPage;
