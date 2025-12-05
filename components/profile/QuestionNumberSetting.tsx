import { View, Text, TouchableOpacity, TextInput } from "react-native";

interface Props {
  questionsNumber: string;
  setQuestionsNumber: React.Dispatch<React.SetStateAction<string>>;
  isQuestionNumberEditing: boolean;
  setIsQuestionNumberEditing: React.Dispatch<React.SetStateAction<boolean>>;
  saveQuestionsNumber: () => void;
}

export default function QuestionNumberSetting({
  questionsNumber,
  setQuestionsNumber,
  isQuestionNumberEditing,
  setIsQuestionNumberEditing,
  saveQuestionsNumber,
}: Props) {
  return (
    <View style={{ marginBottom: 30 }}>
      <View
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 20,
        }}
      >
        {!isQuestionNumberEditing ? (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 5,
                  }}
                >
                  عدد الاسئلة
                </Text>
                <Text style={{ color: "#94a3b8" }}>عدد الاسئلة التي تريدها</Text>
              </View>

              <TouchableOpacity
                onPress={() => setIsQuestionNumberEditing(true)}
                style={{
                  backgroundColor: "#3b82f6",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  تعديل
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: "#0f172a",
                padding: 20,
                marginTop: 15,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#3b82f6",
                  fontSize: 48,
                  fontWeight: "bold",
                }}
              >
                {questionsNumber}
              </Text>
              <Text style={{ color: "#94a3b8" }}>سؤال</Text>
            </View>
          </>
        ) : (
          <>
            <TextInput
              value={questionsNumber}
              onChangeText={setQuestionsNumber}
              keyboardType="numeric"
              style={{
                backgroundColor: "#0f172a",
                color: "white",
                fontSize: 24,
                padding: 15,
                textAlign: "center",
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#3b82f6",
                marginBottom: 10,
              }}
              maxLength={2}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => {
                  setQuestionsNumber(String(questionsNumber));
                  setIsQuestionNumberEditing(false);
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#475569",
                  padding: 12,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  إلغاء
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={saveQuestionsNumber}
                style={{
                  flex: 1,
                  backgroundColor: "#10b981",
                  padding: 12,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>حفظ</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
