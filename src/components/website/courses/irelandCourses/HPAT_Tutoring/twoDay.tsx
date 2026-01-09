import { View, Text } from "react-native";
import { groupStyles } from "./groupPrepStyles";

export const TwoDayCourse = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={groupStyles.personalisedText}>HPAT 2-Day Online Course</Text>
      <Text style={groupStyles.groupHeader}>
        Intensive HPAT Exam Preparation
      </Text>
      <Text style={groupStyles.groupBody}>
        The HPAT 2-Day Online Course is an intensive programme designed to give
        students a complete understanding of the HPAT exam in a short timeframe.
        It covers all three HPAT sections in detail, with a strong focus on exam
        technique, time management, and avoiding common pitfalls.
      </Text>
      <Text style={groupStyles.groupBody}>
        This course is ideal for first-time HPAT candidates, repeat candidates,
        and students who want focused, high-impact preparation.
      </Text>
      {/* <Text style={groupStyles.groupHeader}>Course Format</Text>
      <Text style={groupStyles.groupBoldCourse}>
        {"\u2022"} Live online classes
      </Text>
      <Text style={groupStyles.groupBoldCourse}>
        {"\u2022"} Saturday & Sunday
      </Text>
      <Text style={groupStyles.groupBoldCourse}>
        {"\u2022"} 10:00am – 4:00pm each day
      </Text>
      <Text style={groupStyles.groupBoldCourse}>
        {"\u2022"} Login details emailed to students before the course begins
      </Text> */}
      <Text style={groupStyles.groupHeader}>Pricing:</Text>
      <Text style={groupStyles.pricing}>€XX </Text>
      <Text style={groupStyles.groupBoldHeader}>Includes:</Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} 2 full days of live online tuition
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} All course materials included
      </Text>
      <Text style={groupStyles.pricingNextLine}>
        {"\u2022"} Mock exam and worked solutions
      </Text>
      <Text style={groupStyles.groupHeader}>What’s Included</Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Live expert HPAT tuition
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Full HPAT mock exam
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Sample questions equivalent to 5 full HPAT exams
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Fully worked solutions
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Comprehensive course notes
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Proven exam strategies
      </Text>
      <Text style={groupStyles.groupHeader}>What Students Learn</Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} HPAT Exam Overview
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Logical Reasoning & Problem Solving
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Interpersonal Understanding
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Non-Verbal Reasoning
      </Text>
      <Text style={groupStyles.groupBoldHeader}>
        {"\u2022"} Exam Practice & Review
      </Text>
      <Text style={groupStyles.groupHeader}>FAQs:</Text>
      <Text style={groupStyles.faqQuestions}>
        What is the HPAT 2-Day Course?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} An intensive online course covering all three HPAT sections
        with strategy-based teaching and a full mock exam.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Who is this course suitable for?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} First-time HPAT candidates, repeat candidates, and students
        close to the exam date.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Are classes live or recorded?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Classes are delivered live online. Live attendance is
        strongly recommended.
      </Text>
      <Text style={groupStyles.faqQuestions}>How do I access the course?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Login details are emailed to students before the course
        begins.
      </Text>
      <Text style={groupStyles.faqQuestions}>Are notes included?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. Comprehensive notes are provided.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Can I buy the notes without attending?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} No. Notes are designed to support live tuition only.
      </Text>
      <Text style={groupStyles.faqQuestions}>Is a mock exam included?</Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes. A full HPAT-style mock exam is included.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        Do students keep the mock exam?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} Yes, along with worked solutions.
      </Text>
      <Text style={groupStyles.faqQuestions}>
        What if I miss part of the course?
      </Text>
      <Text style={groupStyles.faqAnswers}>
        {"\u2022"} You may request course notes by contacting our office.
      </Text>
    </View>
  );
};
