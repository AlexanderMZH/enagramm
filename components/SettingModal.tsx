import * as NavigationBar from "expo-navigation-bar";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import CustomCheckbox from "./CustomCheckbox";
import CustomPicker from "./CustomPicker";
import CustomPickerSearchable from "./CustomPickerSearchable";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const [openPicker, setOpenPicker] = useState<string | null>(null);

  const [langSelect, setLangSelect] = useState({
    label: "ქართული",
    value: "geo",
  });
  const [speakerSwitcherSelect, setSpeakerSwitcherSelect] = useState({
    label: "მოსაუბრის გამოყოფა",
    value: "true",
  });
  const [sttSelect, setSttSelect] = useState({
    label: "STT1",
    value: "stt1",
  });
  const [microphoneSelect, setMicrophoneSelect] = useState({
    label: "მიკროფონი",
    value: "mic",
  });

  const togglePicker = (name: string) => {
    setOpenPicker(openPicker === name ? null : name);
  };

  // checkbox

  const [isPunctuation, setIsPunctuation] = useState(true);
  const [isAutoCorrect, setIsAutoCorrect] = useState(false);

  const handleCloseModal = () => {
    onClose();
    setOpenPicker(null);
    NavigationBar.setVisibilityAsync("visible");
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={handleCloseModal}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleCloseModal}
      >
        <TouchableWithoutFeedback>
          <View style={styles.contentCard}>
            <CustomPickerSearchable
              zIndex={4}
              isOpen={openPicker === "language"}
              setIsOpen={() => togglePicker("language")}
              options={[
                { label: "ფრანგული", value: "fr" },
                { label: "იაპონური", value: "ja" },
                { label: "ქართული", value: "ge" },
                { label: "ინგლისური", value: "en" },
                { label: "არაბული", value: "ar" },
                { label: "ნიდერლანდური", value: "ne" },
                { label: "ბერძნული", value: "gr" },
                { label: "შვედური", value: "sw" },
                { label: "ფინური", value: "fn" },
                { label: "ესპანური", value: "sp" },
                { label: "იტალიური", value: "it" },
              ]}
              value={langSelect}
              onSelect={setLangSelect}
            />

            <View style={{ height: 20 }} />

            <CustomPicker
              zIndex={3}
              isOpen={openPicker === "speaker"}
              setIsOpen={() => togglePicker("speaker")}
              options={[
                { label: "მოსაუბრის გამოყოფა", value: "true" },
                { label: "მოსაუბრის არ გამოყოფა", value: "false" },
              ]}
              value={speakerSwitcherSelect}
              onSelect={setSpeakerSwitcherSelect}
            />

            <View style={{ height: 20 }} />

            <CustomPicker
              zIndex={2}
              isOpen={openPicker === "stt"}
              setIsOpen={() => togglePicker("stt")}
              options={[
                { label: "STT1", value: "stt1" },
                { label: "STT2", value: "stt2" },
                { label: "STT3", value: "stt3" },
                { label: "STT4", value: "stt4" },
              ]}
              value={sttSelect}
              onSelect={setSttSelect}
            />

            <View style={{ height: 20 }} />

            <CustomPicker
              zIndex={1}
              isOpen={openPicker === "microphone"}
              setIsOpen={() => togglePicker("microphone")}
              options={[
                { label: "მიკროფონი", value: "mic" },
                { label: "სისტემის ხმა", value: "system" },
              ]}
              value={microphoneSelect}
              onSelect={setMicrophoneSelect}
            />

            <View style={styles.checkboxContainer}>
              <CustomCheckbox
                label="პუნქტუაცია"
                isSelected={isPunctuation}
                onPress={() => setIsPunctuation(!isPunctuation)}
              />

              <CustomCheckbox
                label="ავტოკორექტი"
                isSelected={isAutoCorrect}
                onPress={() => setIsAutoCorrect(!isAutoCorrect)}
              />
            </View>

            <View style={styles.settingButtonsContainer}>
              <Pressable
                style={[styles.button, { backgroundColor: "#E0F1FF" }]}
                onPress={handleCloseModal}
              >
                <Text style={{ color: "#2079C0", fontSize: 17 }}>გაუქმება</Text>
              </Pressable>
              <Pressable
                style={[styles.button, { backgroundColor: "#2079C0" }]}
                onPress={handleCloseModal}
              >
                <Text style={{ color: "#fff", fontSize: 17 }}>
                  დამახსოვრება
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#747373BA",
    justifyContent: "flex-end",
  },
  contentCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 40,
    minHeight: "50%",
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginTop: 20,
  },

  settingButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
  },

  button: {
    width: "48%",
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 12,
  },
});

export default SettingsModal;
