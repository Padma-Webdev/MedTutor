import { View, Text } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const PersonalisedTutoring = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={groupStyles.personalisedText}>
        1:1 HPAT Tutoring (Personalised One-to-One Coaching)
      </Text>
      <Text style={groupStyles.groupHeader}>
        Premium HPAT Coaching for Ambitious Students
      </Text>
      <Text style={groupStyles.groupBody}>
        Our 1:1 HPAT tutoring is designed for students who want the most
        tailored support. Each session is customised to your goals, strengths,
        weaknesses, and timeline—so your preparation is efficient and
        score-focused.
      </Text>
      <Text style={groupStyles.groupHeader}>Pricing: </Text>
      <Text style={groupStyles.pricing}>From €35 per hour</Text>
      <Text style={groupStyles.groupBoldHeader}>Includes:</Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Fully personalised 1:1 HPAT tutoring
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Strategy-focused teaching and guided practice
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Notes provided for revision
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Direct feedback and improvement plan
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Flexible online scheduling
      </Text>
    </View>
  );
};

export const PersonalisedTutoringFAQ = () => {
  return (
    <View>
      <Text style={groupStyles.faqQuestions}>
        What is included in 1:1 HPAT tutoring?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Personalised coaching, targeted strategy work, guided
        practice, and detailed feedback focused on improving performance.
      </Text>
      <Text style={groupStyles.faqQuestions}>Do you provide notes?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. We provide notes to support revision and reinforce
        strategies covered in sessions.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Can tutoring focus only on my weakest HPAT section?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. Sessions are tailored to the areas that will improve
        your overall performance fastest.
      </Text>
      <Text style={groupStyles.faqQuestions}>How quickly can I start?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} After booking, our Coordinator will contact you to arrange
        sessions as soon as possible.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        How many sessions will I need?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} It depends on your starting point and exam date. Your tutor
        will recommend an effective plan.
      </Text>
      <Text style={groupStyles.faqQuestions}>Is tutoring online?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. All sessions are delivered online.
      </Text>
      <Text style={groupStyles.faqQuestions}>What is your refund policy?</Text>
      <Text style={groupStyles.faqQuestions}>
        {"\u2022"} Fees are refundable if cancelled at least 48 hours in
        advance.
      </Text>
    </View>
  );
};
