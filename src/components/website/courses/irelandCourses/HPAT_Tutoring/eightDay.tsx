import { View, Text } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const EightWeek = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={groupStyles.personalisedText}>
        8-Week HPAT Preparation Course
      </Text>
      <Text style={groupStyles.groupHeader}>
        The Most Comprehensive HPAT Preparation Programme
      </Text>
      <Text style={groupStyles.groupBody}>
        The 8-Week HPAT Course offers structured, in-depth preparation delivered
        one day per week. This format allows students to build skills gradually,
        practise between sessions, and develop strong exam confidence over time.
      </Text>
      <Text style={groupStyles.groupBody}>
        This course is ideal for students starting HPAT preparation early and
        balancing HPAT study with the Leaving Certificate.
      </Text>
      <Text style={groupStyles.groupHeader}>Pricing:</Text>
      <Text style={groupStyles.pricing}>€XX </Text>
      <Text style={groupStyles.groupBoldHeader}>Includes:</Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} 8 weeks of live online tuition
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} All learning materials included
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Mock exam and performance review
      </Text>
      <Text style={groupStyles.groupHeader}>What’s Included</Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Weekly live online classes
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Structured homework and practice questions
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Full HPAT mock exam
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Worked solutions and detailed feedback
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Comprehensive course notes
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Ongoing academic support
      </Text>
      <Text style={groupStyles.groupHeader}>What Students Learn</Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Week 1 – HPAT Foundations
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Weeks 2–3: Logical Reasoning & Problem Solving
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Weeks 4–5: nterpersonal Understanding
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Weeks 6–7: Non-Verbal Reasoning
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Week 8: Mock Exam & Performance Review
      </Text>
      <Text style={groupStyles.groupHeader}>FAQs:</Text>
      <Text style={groupStyles.faqQuestions}>
        What is the 8-Week HPAT Course?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} A comprehensive online HPAT programme delivered over eight
        weeks.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Who is this course best suited for?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Students starting early and aiming for consistent
        improvement.
      </Text>
      <Text style={groupStyles.faqQuestions}>How often are classes held?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Once per week, live online.
      </Text>
      <Text style={groupStyles.faqQuestions}>Are notes included?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. Comprehensive notes are provided throughout the course.
      </Text>
      <Text style={groupStyles.faqQuestions}>Is a mock exam included?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. A full HPAT-style mock exam is included in Week 8.
      </Text>
      <Text style={groupStyles.faqQuestions}>Will I receive feedback?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. Detailed feedback and performance analysis are provided.
      </Text>
      <Text style={groupStyles.faqQuestions}>What if I miss a class?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. A full HPAT-style mock exam is included.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Do students keep the mock exam?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Please contact us to discuss access to course material
      </Text>
    </View>
  );
};
