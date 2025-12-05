import { Text, View } from "react-native";

export default function QuestionCard({ questions, currentQuestion }: any) {
  return (
    <View
      style={{
        backgroundColor: "#1e293b",
        borderRadius: 20,
        padding: 25,
        marginBottom: 30,
        minHeight: 150,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 32,
        }}
      >
        {questions[currentQuestion].question}
      </Text>
    </View>
  );
}
