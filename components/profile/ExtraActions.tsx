import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ExtraActions({ resetStats }: any) {
  return (
    <View style={{ marginBottom: 40 }}>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        إجراءات
      </Text>

      <TouchableOpacity
        onPress={resetStats}
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 20,
          borderWidth: 1,
          borderColor: "#ef4444",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="refresh" size={24} color="#ef4444" />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "600" }}>
            إعادة تعيين الإحصائيات
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="#94a3b8" />
      </TouchableOpacity>
    </View>
  );
}
