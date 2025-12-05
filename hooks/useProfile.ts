import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useProfile() {
  const [questionTime, setQuestionTime] = useState("10");
  const [tempTime, setTempTime] = useState("10");
  const [isEditing, setIsEditing] = useState(false);

  const [stats, setStats] = useState<{
    totalGames: number;
    totalScore: number;
    bestScore: number;
  }>({
    totalGames: 0,
    totalScore: 0,
    bestScore: 0,
  });

  useEffect(() => {
    loadSettings();
    loadStats();
  }, []);

  const loadSettings = async () => {
    try {
      const savedTime = await AsyncStorage.getItem("questionTime");
      if (savedTime) {
        setQuestionTime(savedTime);
        setTempTime(savedTime);
      }
    } catch (error) {
      console.log("Error loading settings:", error);
    }
  };

  const loadStats = async () => {
    try {
      const savedStats = await AsyncStorage.getItem("gameStats");

      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
    } catch (error) {
      console.log("Error loading stats:", error);
    }
  };

  const saveTime = async () => {
    const timeNum = parseInt(tempTime);

    if (isNaN(timeNum) || timeNum < 5 || timeNum > 60) {
      Alert.alert("خطأ", "الرجاء إدخال وقت بين 5 و 60 ثانية");
      return;
    }

    try {
      await AsyncStorage.setItem("questionTime", tempTime);
      setQuestionTime(tempTime);
      setIsEditing(false);
      Alert.alert("تم الحفظ", "تم تحديث وقت السؤال بنجاح");
    } catch {
      Alert.alert("خطأ", "حدث خطأ أثناء الحفظ");
    }
  };

  const resetStats = async () => {
    Alert.alert(
      "إعادة تعيين الإحصائيات",
      "هل أنت متأكد من إعادة تعيين جميع الإحصائيات؟",
      [
        { text: "إلغاء", style: "cancel" },
        {
          text: "إعادة تعيين",
          style: "destructive",
          onPress: async () => {
            try {
              const newStats = { totalGames: 0, totalScore: 0, bestScore: 0 };
              await AsyncStorage.setItem("gameStats", JSON.stringify(newStats));
              setStats(newStats);
              Alert.alert("تم", "تم إعادة تعيين الإحصائيات");
            } catch {
              Alert.alert("خطأ", "حدث خطأ أثناء إعادة التعيين");
            }
          },
        },
      ]
    );
  };

  return {
    questionTime,
    tempTime,
    isEditing,
    stats,
    setTempTime,
    setIsEditing,
    saveTime,
    resetStats,
  };
}
