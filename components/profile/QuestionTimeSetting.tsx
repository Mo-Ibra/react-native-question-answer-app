import { View, Text, TouchableOpacity, TextInput } from "react-native";

interface Props {
  questionTime: string;
  tempTime: string;
  isEditing: boolean;
  setTempTime: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  saveTime: () => void;
}

export default function QuestionTimeSetting({
  questionTime,
  tempTime,
  isEditing,
  setTempTime,
  setIsEditing,
  saveTime,
}: Props) {
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
        إعدادات اللعبة
      </Text>

      <View
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 15,
          padding: 20,
        }}
      >
        {!isEditing ? (
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
                  وقت السؤال
                </Text>
                <Text style={{ color: "#94a3b8" }}>الوقت المتاح لكل سؤال</Text>
              </View>

              <TouchableOpacity
                onPress={() => setIsEditing(true)}
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
                {questionTime}
              </Text>
              <Text style={{ color: "#94a3b8" }}>ثانية</Text>
            </View>
          </>
        ) : (
          <>
            <TextInput
              value={tempTime}
              onChangeText={setTempTime}
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
                  setTempTime(String(questionTime));
                  setIsEditing(false);
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
                onPress={saveTime}
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
