import { ActivityIndicator, Text, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#3b82f6" />
      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        جاري تحميل الأسئلة...
      </Text>
    </View>
  );
}
