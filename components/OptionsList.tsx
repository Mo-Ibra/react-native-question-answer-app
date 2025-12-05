import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  options: any;
  correct: number;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}

export default function OptionsList({ options, correct, selectedAnswer, onAnswer }: Props) {
  return (
    <View>
      {options.map((option: string, index: number) => {
        let bgColor = "#1e293b";
        if (selectedAnswer !== null) {
          if (index === correct) {
            bgColor = "#10b981";
          } else if (index === selectedAnswer) {
            bgColor = "#ef4444";
          }
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={() => selectedAnswer === null && onAnswer(index)}
            disabled={selectedAnswer !== null}
            style={{
              backgroundColor: bgColor,
              padding: 20,
              borderRadius: 15,
              marginBottom: 15,
              borderWidth: 2,
              borderColor: selectedAnswer === index ? "white" : "transparent",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
