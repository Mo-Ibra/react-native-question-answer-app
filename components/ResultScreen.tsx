import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  score: number;
  total: number;
  wrong: number;
  categoryName: string;
  restart: () => void;
  goHome: () => void;
}

export default function ResultScreen({
  score,
  total,
  wrong,
  categoryName,
  restart,
  goHome,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 80, marginBottom: 20 }}>
        {score >= total * 0.7 ? "🎉" : score >= total * 0.4 ? "😊" : "😢"}
      </Text>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "white",
          marginBottom: 10,
        }}
      >
        انتهت اللعبة!
      </Text>
      <Text style={{ fontSize: 20, color: "#94a3b8", marginBottom: 10 }}>
        {categoryName}
      </Text>
      <Text
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "#10b981",
          marginBottom: 30,
        }}
      >
        {score} / {total}
      </Text>

      <View
        style={{
          width: "100%",
          marginBottom: 20,
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 20,
        }}
      >
        <Text style={{ color: "#94a3b8", fontSize: 16, marginBottom: 10 }}>
          📊 إحصائيات:
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 5 }}>
          ✅ إجابات صحيحة: {score}
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 5 }}>
          ❌ إجابات خاطئة: {wrong}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          🎯 النسبة: {Math.round((score / total) * 100)}%
        </Text>
      </View>

      <TouchableOpacity
        onPress={restart}
        style={{
          backgroundColor: "#10b981",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 15,
          marginBottom: 15,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          🔄 إعادة المحاولة ({categoryName})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goHome}
        style={{
          backgroundColor: "#475569",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 15,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          🏠 العودة للقائمة
        </Text>
      </TouchableOpacity>
    </View>
  );
}
