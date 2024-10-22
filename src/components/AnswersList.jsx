/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
