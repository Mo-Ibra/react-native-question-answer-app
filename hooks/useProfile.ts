import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useProfile() {
  const [questionTime, setQuestionTime] = useState("10");
  const [questionsNumber, setQuestionsNumber] = useState("5");
  const [tempTime, setTempTime] = useState("10");
  const [isTimeEditing, setIsTimeEditing] = useState(false);
  const [isQuestionNumberEditing, setIsQuestionNumberEditing] = useState(false);

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
      const savedQuestionNumber = await AsyncStorage.getItem("questionsNumber");

      if (savedQuestionNumber) {
        setQuestionsNumber(savedQuestionNumber);
      }
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
      setIsTimeEditing(false);
      Alert.alert("تم الحفظ", "تم تحديث وقت السؤال بنجاح");
    } catch {
      Alert.alert("خطأ", "حدث خطأ أثناء الحفظ");
    }
  };

  const saveQuestionsNumber = async () => {
    const questionsNum = parseInt(questionsNumber);

    if (isNaN(questionsNum) || questionsNum < 5 || questionsNum > 20) {
      Alert.alert("خطاء", "الرجاء إدخال عدد سؤالات بين 5 و 20");
      return;
    }

    try {
      await AsyncStorage.setItem("questionsNumber", questionsNumber);
      setQuestionsNumber(questionsNumber);
      setIsQuestionNumberEditing(false);
      Alert.alert("تم الحفظ", "تم تحديث عدد الاسئلة بنجاح");
    } catch {
      Alert.alert("خطاء", "حدث خطاء اثناء الحفظ");
    }
  }

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
    questionsNumber,
    tempTime,
    isTimeEditing,
    isQuestionNumberEditing,
    stats,
    setTempTime,
    setIsTimeEditing,
    setQuestionsNumber,
    setIsQuestionNumberEditing,
    saveTime,
    saveQuestionsNumber,
    resetStats,
  };
}
