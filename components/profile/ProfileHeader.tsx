import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader() {
  return (
    <View style={{ alignItems: "center", marginBottom: 30 }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "#3b82f6",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Ionicons name="person" size={50} color="white" />
      </View>

      <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
        لاعب مميز
      </Text>

      <Text style={{ fontSize: 16, color: "#94a3b8" }}>
        حسّن مهاراتك وتحدى نفسك
      </Text>
    </View>
  );
}
