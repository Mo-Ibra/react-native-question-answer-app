import { View, Text } from "react-native";

interface Props {
  totalGames: number;
  totalScore: number;
  bestScore: number;
}

export default function ProfileStats({ totalGames, totalScore, bestScore }: Props) {
  return (
    <View style={{ marginBottom: 30 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          marginBottom: 15,
        }}
      >
        إحصائياتك
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#1e293b",
            borderRadius: 15,
            padding: 20,
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#3b82f6" }}>
            {totalGames}
          </Text>
          <Text style={{ color: "#94a3b8" }}>مباريات</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#1e293b",
            borderRadius: 15,
            padding: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#10b981" }}>
            {bestScore}
          </Text>
          <Text style={{ color: "#94a3b8" }}>أفضل نتيجة</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#f59e0b" }}>
          {totalScore}
        </Text>
        <Text style={{ color: "#94a3b8" }}>مجموع النقاط</Text>
      </View>
    </View>
  );
}
