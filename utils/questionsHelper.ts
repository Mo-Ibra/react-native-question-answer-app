import questionsData from "../data/questions.json";

export type CategoryType =
  | "random"
  | "sports"
  | "science"
  | "technology"
  | "history"
  | "geography"
  | "culture"
  | "entertainment";

export interface Question {
  question: string;
  options: string[];
  correct: number;
}

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Get questions for the specified category
export const getQuestionsByCategory = (
  categoryId: string,
  count: number = 5
): Question[] => {
  let questions: Question[] = [];

  if (categoryId === "random") {

    // Get questions for all categories
    const allQuestions: Question[] = [];

    Object.values(questionsData).forEach((categoryQuestions) => {
      allQuestions.push(...categoryQuestions);
    });

    questions = shuffleArray(allQuestions);
  } else {
    // Get questions for the specified category
    const categoryQuestions =
      questionsData[categoryId as keyof typeof questionsData];
    if (categoryQuestions) {
      questions = shuffleArray(categoryQuestions);
    }
  }

  // Return the specified number of questions
  return questions.slice(0, count);
};
