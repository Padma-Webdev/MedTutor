import { View, Text } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const SmallGroupTutoring = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={groupStyles.personalisedText}>
        Small Group HPAT Tutoring (Live Online)
      </Text>
      <Text style={groupStyles.groupHeader}>
        Structured Learning with Motivation and Support
      </Text>
      <Text style={groupStyles.groupBody}>
        Our Small Group(Groups of 3–5 students) HPAT tutoring is ideal for
        students who learn best in a collaborative environment. Sessions are
        live online, interactive, and designed to keep students progressing
        consistently.
      </Text>
      <Text style={groupStyles.groupHeader}>What You Get</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={groupStyles.groupBoldHeader}>
          {"\u2022"} Interactive Learning:
        </Text>
        <Text style={groupStyles.groupRegHeader}>
          Ask questions, practise strategies, and learn actively
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={groupStyles.groupBoldHeader}>
          {"\u2022"} Collaborative Environment:
        </Text>
        <Text style={groupStyles.groupRegHeader}>
          Motivation and insight from peers in a focused setting
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={groupStyles.groupBoldHeader}>
          {"\u2022"} Consistent Preparation:
        </Text>
        <Text style={groupStyles.groupRegHeader}>
          Sessions arranged to suit your timetable
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={groupStyles.groupBoldHeader}>
          {"\u2022"} Seamless Process:
        </Text>
        <Text style={groupStyles.groupRegHeader}>
          Ongoing preparation to keep you exam-ready and confident
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={groupStyles.groupBoldHeader}>
          {"\u2022"} Notes Included:
        </Text>
        <Text style={groupStyles.groupRegHeader}>
          We provide notes for revision and structured study
        </Text>
      </View>
      <Text style={groupStyles.groupHeader}>
        Pricing – Small Group HPAT Tutoring
      </Text>
      <Text style={groupStyles.pricing}>€XXX per course / term</Text>
      <Text style={groupStyles.groupBoldHeader}>Includes:</Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Live online small group sessions (3–5 students)
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Strategy-focused teaching and guided practice
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Structured HPAT strategy teaching
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Notes provided for revision
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Interactive Q&A throughout
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Consistent preparation leading up to exam day
      </Text>
      <Text style={groupStyles.groupHeader}>FAQs:</Text>
      <Text style={groupStyles.faqQuestions}>
        How many students are in each group?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Groups are limited to 3–5 students to ensure strong
        interaction and personalised support.
      </Text>
      <Text style={groupStyles.faqQuestions}>Do you provide notes?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. We provide notes to support revision and reinforce
        strategies covered in sessions.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Are sessions live or recorded?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Sessions are delivered live online.
      </Text>
      <Text style={groupStyles.faqQuestions}>Do you provide notes?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. We provide notes to support revision and reinforce
        strategies covered in class.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Can I ask questions during class?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. Sessions are interactive, and students are encouraged to
        ask questions throughout.
      </Text>
      <Text style={groupStyles.faqQuestions}>What if I miss a session?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Please contact us to discuss access to notes/materials or
        alternative arrangements.
      </Text>
      <Text style={groupStyles.faqQuestions}>What is your refund policy?</Text>
      <Text style={groupStyles.faqQuestions}>
        {"\u2022"} Fees are refundable if cancelled at least 48 hours in
        advance.
      </Text>
    </View>
  );
};
