import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomCheckboxProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const CustomCheckbox = ({
  label,
  isSelected,
  onPress,
}: CustomCheckboxProps) => {
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isSelected ? (
        <Ionicons name="checkmark-circle" size={24} color="#2079C0" />
      ) : (
        <View style={styles.unselectedCircle} />
      )}
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 28,
  },
  unselectedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#48484859",
  },
  label: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CustomCheckbox;
