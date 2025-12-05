import { Text, View } from "react-native";

interface Props {
  currentQuestion: number;
  questionNumber: number;
  timeLeft: number;
}

export default function TimerBox({
  currentQuestion,
  questionNumber,
  timeLeft,
}: Props) {
  return (
    <>
      <View
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 15,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#94a3b8", fontSize: 14 }}>
            السؤال {currentQuestion + 1} من {questionNumber}
          </Text>
          <View
            style={{
              backgroundColor: timeLeft <= 3 ? "#ef4444" : "#10b981",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              ⏱️ {timeLeft}
            </Text>
          </View>
        </View>
      </View>

      {/* progress bar */}
      <View
        style={{
          height: 8,
          backgroundColor: "#1e293b",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${((currentQuestion + 1) / questionNumber) * 100}%`,
            backgroundColor: "#10b981",
          }}
        />
      </View>
    </>
  );
}
