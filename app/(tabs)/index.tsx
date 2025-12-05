import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { categories } from "@/data/categories";
import { useQuiz } from "@/hooks/useQuiz";

export default function Index() {

  const { defaultTime } = useQuiz();

  const handleCategorySelect = (category: any) => {
    router.push({
      pathname: "/quiz",
      params: {
        categoryId: category.id,
        categoryName: category.name,
      },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a" }}>
      {/* Header */}
      <View
        style={{ paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20 }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          🎯 تحدي الأسئلة
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          اختر نوع الأسئلة وابدأ التحدي
        </Text>
        <View
          style={{
            backgroundColor: "rgba(234, 179, 8, 0.1)",
            borderWidth: 1,
            borderColor: "rgba(234, 179, 8, 0.3)",
            borderRadius: 15,
            padding: 15,
          }}
        >
          <Text style={{ color: "#fcd34d", textAlign: "center", fontSize: 14 }}>
            ⚡ لديك 3 محاولات خطأ فقط • ⏱️ {defaultTime} ثواني لكل سؤال
          </Text>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategorySelect(category)}
              activeOpacity={0.7}
              style={{
                width: "48%",
                aspectRatio: 1,
                backgroundColor: category.color,
                borderRadius: 20,
                marginBottom: 15,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 8,
              }}
            >
              <Text style={{ fontSize: 60, marginBottom: 10 }}>
                {category.icon}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
