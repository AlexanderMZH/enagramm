import { primary_blue_color } from "@/constants/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Option {
  label: string;
  value: string;
}

interface SearchablePickerProps {
  options: Option[];
  value: Option;
  onSelect: (option: Option) => void;
  isOpen: boolean;
  setIsOpen: () => void;
  zIndex?: number;
}

const CustomPickerSearchable = ({
  options,
  value,
  onSelect,
  isOpen,
  setIsOpen,
  zIndex = 1,
}: SearchablePickerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = useMemo(() => {
    return options.filter((item) => {
      const isNotSelected = item.value !== value.value;
      const matchesSearch = item.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return isNotSelected && matchesSearch;
    });
  }, [options, value, searchQuery]);

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
        activeOpacity={1}
      >
        <Text style={styles.headerText}>{value.label}</Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={18}
          color="#434343"
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <View style={styles.searchSection}>
            <Ionicons
              name="search"
              size={16}
              color="#949494"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="ძიება"
              placeholderTextColor="#949494"
              value={searchQuery}
              onChangeText={setSearchQuery}
              //   autoFocus={true}
            />
          </View>

          <ScrollView
            bounces={false}
            nestedScrollEnabled={true}
            style={styles.list}
          >
            {filteredOptions.map((item, index) => (
              <TouchableOpacity
                key={item.value}
                style={[styles.option]}
                onPress={() => {
                  onSelect(item);
                  setIsOpen();
                  setSearchQuery("");
                }}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
            {filteredOptions.length === 0 && (
              <Text style={styles.noResults}>შედეგი ვერ მოიძებნა</Text>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", position: "relative" },
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
  headerText: { fontSize: 13, color: "black" },
  dropdown: {
    position: "absolute",
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#434343",
    maxHeight: 300,
    zIndex: 10,
    padding: 8,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#43434352",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 8,
  },
  searchIcon: { marginRight: 8 },
  input: { flex: 1, fontSize: 14, color: "#000" },
  list: { maxHeight: 200 },
  option: { height: 30, justifyContent: "center", paddingHorizontal: 4 },
  optionText: { fontSize: 14, color: "black" },
  noResults: { textAlign: "center", padding: 10, color: "#43434396" },
});

export default CustomPickerSearchable;
