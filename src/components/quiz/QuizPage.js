import React, { useState, useEffect, useRef, useMemo } from "react";

// MUI
import {
  Radio,
  RadioGroup,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Paper,
  Box,
  FormHelperText,
} from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";

// Data
import { QuizData } from "/src/data/QuizData";

const QuizMaker = ({ data, onClickAnswer = (f) => f }) => {
  const [value, setValue] = useState("");
  const [hint, setHint] = useState("");

  const checkAnswer = () => {
    if (value == data.answer) {
      onClickAnswer();
    } else {
      setHint(data.hint);
    }
  };

  return (
    <>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="body1">{data.content}</Typography>
      <RadioGroup
        name="quiz"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={data.choice[0]}
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={data.choice[1]}
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label={data.choice[2]}
        />
        <FormControlLabel
          value={4}
          control={<Radio />}
          label={data.choice[3]}
        />
      </RadioGroup>
      <FormHelperText>{hint}</FormHelperText>
      <Button
        sx={{ mt: 1, mr: 1 }}
        onClick={checkAnswer}
        type="submit"
        variant="outlined"
      >
        정답 보내기
      </Button>
    </>
  );
};

const SendedQuiz = () => {
  return (
    <>
      <CardGiftcard sx={{ fontSize: "10em" }} />
      <Typography variant="h4">응모해 주셔서 감사합니다!</Typography>
      <Typography variant="body1">상품은 12/25일 부터 배송됩니다.</Typography>
    </>
  );
};

const QuizPage = ({ isSended, sendQuizAnswer = (f) => f }) => {
  const quizNum = 0;
  const quiz = QuizData[quizNum];

  const onClickAnswer = () => {
    sendQuizAnswer();
  };

  if (isSended) {
    return <SendedQuiz />;
  } else {
    return <QuizMaker data={quiz} onClickAnswer={sendQuizAnswer} />;
  }
};

export default QuizPage;
