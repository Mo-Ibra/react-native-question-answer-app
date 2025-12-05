import { View, ScrollView } from "react-native";
import { useProfile } from "@/hooks/useProfile";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import QuestionTimeSetting from "@/components/profile/QuestionTimeSetting";
import ExtraActions from "@/components/profile/ExtraActions";

export default function Profile() {
  const {
    questionTime,
    tempTime,
    isEditing,
    stats,
    setTempTime,
    setIsEditing,
    saveTime,
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
          isEditing={isEditing}
          setTempTime={setTempTime}
          setIsEditing={setIsEditing}
          saveTime={saveTime}
        />

        {/* Extra Actions */}
        <ExtraActions resetStats={resetStats} />
      </View>
    </ScrollView>
  );
}
