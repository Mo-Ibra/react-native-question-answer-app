import { View } from "react-native";
import LoadingScreen from "@/components/LoadingScreen";
import ResultScreen from "@/components/ResultScreen";
import QuizHeader from "@/components/QuizHeader";
import TimerBox from "@/components/TimerBox";
import QuestionCard from "@/components/QuestionCard";
import OptionsList from "@/components/OptionsList";
import { useQuiz } from "@/hooks/useQuiz";

export default function Quiz() {
  const {
    loading,
    showResult,
    questions,
    currentQuestion,
    timeLeft,
    wrongAttempts,
    questionsNumber,
    score,
    categoryName,
    selectedAnswer,
    handleAnswer,
    restartGame,
    goHome,
  } = useQuiz();

  if (loading) {
    return <LoadingScreen />;
  }

  if (showResult) {
    return (
      <ResultScreen
        score={score}
        total={questionsNumber}
        wrong={wrongAttempts}
        categoryName={categoryName}
        restart={restartGame}
        goHome={goHome}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View
        style={{ paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <QuizHeader
          score={score}
          wrongAttempts={wrongAttempts}
          categoryName={categoryName}
          goHome={goHome}
        />

        <TimerBox
          currentQuestion={currentQuestion}
          questionNumber={questionsNumber}
          timeLeft={timeLeft}
        />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <QuestionCard questions={questions} currentQuestion={currentQuestion} />

        <OptionsList
          options={questions[currentQuestion].options}
          correct={questions[currentQuestion].correct}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
        />
      </View>
    </View>
  );
}
