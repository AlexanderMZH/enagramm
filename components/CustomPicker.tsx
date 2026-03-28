import { primary_blue_color } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Option {
  label: string;
  value: string;
}

interface CustomPickerProps {
  options: Option[];
  value: Option;
  onSelect: (option: Option) => void;
  isOpen: boolean;
  setIsOpen: () => void;
  zIndex?: number;
}

const CustomPicker = ({
  options,
  value,
  onSelect,
  isOpen,
  setIsOpen,
  zIndex,
}: CustomPickerProps) => {
  return (
    <View style={[styles.container, { zIndex }]}>
      <TouchableOpacity
        style={[
          styles.header,
          {
            borderColor: isOpen ? primary_blue_color : "#434343",
          },
        ]}
        onPress={setIsOpen}
        activeOpacity={0.8}
      >
        <Text style={styles.headerText}>{value?.label}</Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={18}
          color="#434343"
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <ScrollView bounces={false} nestedScrollEnabled={true}>
            {options
              .filter((item) => item.value !== value.value) // to hide selected item
              .map((item, index, filteredArray) => (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    styles.option,

                    index !== filteredArray.length - 1 && styles.borderBottom,
                  ]}
                  onPress={() => {
                    onSelect(item);
                    setIsOpen();
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 2,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 13,
  },
  dropdown: {
    position: "absolute",
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#434343",
    maxHeight: 200,

    zIndex: 2,
  },
  option: {
    height: 48,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#434343",
  },
  optionText: {
    fontSize: 13,
  },

  selectedOption: {},
});

export default CustomPicker;
