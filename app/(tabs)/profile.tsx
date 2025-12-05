import { View, ScrollView } from "react-native";
import { useProfile } from "@/hooks/useProfile";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import QuestionTimeSetting from "@/components/profile/QuestionTimeSetting";
import ExtraActions from "@/components/profile/ExtraActions";
import QuestionNumberSetting from "@/components/profile/QuestionNumberSetting";

export default function Profile() {
  const {
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
  } = useProfile();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View
        style={{ paddingTop: 60, paddingHorizontal: 20, paddingBottom: 30 }}
      >
        {/* Header */}
        <ProfileHeader />

        {/* Stats */}
        <ProfileStats {...stats} />

        {/* Question Time */}
        <QuestionTimeSetting
          questionTime={questionTime}
          tempTime={tempTime}
          isEditing={isTimeEditing}
          setTempTime={setTempTime}
          setIsEditing={setIsTimeEditing}
          saveTime={saveTime}
        />

        {/* Question Number */}
        <QuestionNumberSetting
          questionsNumber={questionsNumber}
          isQuestionNumberEditing={isQuestionNumberEditing}
          setQuestionsNumber={setQuestionsNumber}
          setIsQuestionNumberEditing={setIsQuestionNumberEditing}
          saveQuestionsNumber={saveQuestionsNumber}
        />

        {/* Extra Actions */}
        <ExtraActions resetStats={resetStats} />
      </View>
    </ScrollView>
  );
}
