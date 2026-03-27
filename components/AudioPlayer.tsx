import { app_bg_color, primary_blue_color } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AudioPlayer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playButton}>
        <Ionicons name="play" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={primary_blue_color}
          maximumTrackTintColor="#D9D9D9"
          thumbTintColor={primary_blue_color}
        />
        <Text style={styles.timeText}>00:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    backgroundColor: app_bg_color,
  },
  playButton: {
    backgroundColor: primary_blue_color,
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    flex: 1,
  },
  slider: {
    width: "100%",
    height: 20,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 8,
    marginTop: -4,
  },
});

export default AudioPlayer;
