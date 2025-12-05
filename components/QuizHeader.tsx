import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  score: number;
  wrongAttempts: number;
  categoryName: string;
  goHome: () => void
}

export default function QuizHeader({  score, wrongAttempts, categoryName, goHome }: Props) {
  return (
    <>
      <TouchableOpacity onPress={goHome} style={{ marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#10b981", fontSize: 18, fontWeight: "bold" }}>
          ✅ {score}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>{categoryName}</Text>
        <Text style={{ color: "#ef4444", fontSize: 18, fontWeight: "bold" }}>
          ❌ {wrongAttempts}/3
        </Text>
      </View>
    </>
  );
}
