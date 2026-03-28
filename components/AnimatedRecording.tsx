import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { recording } from "@/constants/recording";

const AnimatedRecording = ({
  isRecording,
  isRecorded,
}: {
  isRecording: boolean;
  isRecorded: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const words = recording.split(" ");

  useEffect(() => {
    let wordIndex = 0;

    if (isRecording) {
      setDisplayedText("");
    }

    if (!isRecording || isRecorded) return;

    const interval = setInterval(() => {
      if (wordIndex < words.length - 1 && isRecording && !isRecorded) {
        setDisplayedText(
          (prev) => prev + (wordIndex === 0 ? "" : " ") + words[wordIndex],
        );
        wordIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isRecording, isRecorded]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  text: { fontSize: 12, lineHeight: 18, color: "black" },
});

export default AnimatedRecording;
