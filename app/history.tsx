import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import EditIcon from "@/assets/customIcons/EditIcon";
import GeoFlag from "@/assets/customIcons/GeoFlag";
import TrashIcon from "@/assets/customIcons/TrashIcon";
import { historyData } from "@/constants/historyData";

interface HistoryEntry {
  id: string;
  recordedText: string;
}

interface HistoryGroup {
  date: string;
  data: HistoryEntry[];
}

const HistoryPage = () => {
  const renderHistoryCards = ({ item }: { item: HistoryGroup }) => (
    <View>
      <Text style={[styles.cardDate]}>{item.date}</Text>
      {item.data.map((card: HistoryEntry) => (
        <View key={card.id} style={[styles.singleCard]}>
          <EditIcon />

          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.cardText]}
          >
            {card.recordedText}
          </Text>

          <TrashIcon />
        </View>
      ))}
    </View>
  );

  return (
    <>
      <View style={[styles.headerContainer]}>
        <View style={[styles.userContainer]}>
          <Pressable onPress={() => router.push("/")}>
            <SimpleLineIcons name="arrow-left" size={24} color="black" />
          </Pressable>

          <View style={[styles.userEmailContainer]}>
            <View style={[styles.userEmailIcon]}>
              <Text>A</Text>
            </View>

            <View>
              <Text style={[styles.userEmail]}>
                achi.teruashvili777@gmail.com
              </Text>
              <View style={[styles.userPlanContainer]}>
                <Text style={[styles.userPlan]}>პრემიუმი</Text>
                <Ionicons
                  name="star"
                  size={12}
                  color="#FED533"
                  style={[styles.userPlanIcon]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.flagContainer]}>
          <GeoFlag width={24} height={24} />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
      <View style={[styles.container]}>
        {historyData && (
          <FlatList
            style={{ width: "100%" }}
            data={historyData}
            keyExtractor={(item) => item.id}
            renderItem={renderHistoryCards}
            contentContainerStyle={styles.cardsContainer}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 12,
    marginBottom: 32,
  },
  headerContainer: {
    paddingTop: 32,
    paddingHorizontal: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  userEmailIcon: {
    width: 30,
    height: 30,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEB80",
    borderRadius: 50,
  },

  userEmailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userEmail: {
    fontWeight: "bold",
    fontSize: 10,
  },

  userPlanContainer: {
    alignSelf: "flex-start",
    marginTop: 8,

    backgroundColor: "#3AD2A7",
    paddingHorizontal: 16,
    paddingVertical: 4,

    borderRadius: 12,
  },

  userPlan: {
    fontSize: 8,
  },
  userPlanIcon: {
    position: "absolute",
    top: -2,
    right: -6,
    transform: [{ rotate: "-15deg" }],
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardsContainer: {
    width: "100%",
    paddingBottom: 20,
    backgroundColor: "#F0F0F0",
  },

  cardDate: {
    marginBottom: 8,
  },

  singleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#2FA2FE",
    borderRadius: 12,
    padding: 12,
  },
  cardText: {
    width: "80%",
    fontSize: 10,
  },
});

export default HistoryPage;
