import { getQuestionsByCategory, Question } from "@/utils/questionsHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export function useQuiz() {
  
  const params = useLocalSearchParams();

  const categoryName = (params.categoryName as string) || "عشوائي";
  const categoryId = (params.categoryId as string) || "random";

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const [questionsNumber, setQuestionsNumber] = useState(5);

  const [defaultTime, setDefaultTime] = useState(10);
  const [timeLeft, setTimeLeft] = useState(10);

  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGame();
  }, []);

  const loadGame = async () => {
    try {
      const savedTime = await AsyncStorage.getItem("questionTime");

      const savedQuestionsNumber = await AsyncStorage.getItem("questionsNumber");

      // If time is saved, use it
      if (savedTime) {
        const time = parseInt(savedTime);
        setDefaultTime(time);
        setTimeLeft(time);
      }

      // If questions number is saved, use it
      if (savedQuestionsNumber) {
        const number = parseInt(savedQuestionsNumber);
        setQuestionsNumber(number);
      }

      const questions = getQuestionsByCategory(categoryId, questionsNumber);
      setQuestions(questions);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && selectedAnswer === null && !showResult && !loading) {
      const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(t);
    }

    if (timeLeft === 0 && !showResult) handleTimeout();
  }, [timeLeft, selectedAnswer, showResult, loading]);

  const handleTimeout = () => {
    setWrongAttempts((w) => w + 1);
    if (wrongAttempts + 1 >= 3) endGame();
    else nextQuestion();
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

    const correct = questions[currentQuestion].correct;

    if (index === correct) {
      setScore((s) => s + 1);
      setTimeout(nextQuestion, 800);
    } else {
      setWrongAttempts((w) => w + 1);
      if (wrongAttempts + 1 >= 3) setTimeout(endGame, 800);
      else setTimeout(nextQuestion, 800);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setTimeLeft(defaultTime);
    } else {
      endGame();
    }
  };

  const endGame = async () => {
    setShowResult(true);
    try {
      const saved = await AsyncStorage.getItem("gameStats");
      let stats = saved
        ? JSON.parse(saved)
        : { totalGames: 0, totalScore: 0, bestScore: 0 };

      stats.totalGames += 1;
      stats.totalScore += score;
      stats.bestScore = Math.max(stats.bestScore, score);

      await AsyncStorage.setItem("gameStats", JSON.stringify(stats));
    } catch (e) {
      console.log("Save stats error:", e);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setWrongAttempts(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setLoading(true);
    loadGame();
  };

  const goHome = () => router.back();

  return {
    loading,
    questions,
    currentQuestion,
    defaultTime,
    timeLeft,
    wrongAttempts,
    questionsNumber,
    score,
    selectedAnswer,
    categoryName,
    showResult,

    handleAnswer,
    restartGame,
    goHome,
  };
}
