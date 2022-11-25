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
  Divider,
  FormHelperText,
} from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";

// Data
import QuizData from "/src/db/QuizData";

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
    <div
      className="ReadPost"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ color: "primary.main" }}>
        {data.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 5 }}>
        {data.content}
      </Typography>

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
      <FormHelperText>
        <pre>{hint}</pre>
      </FormHelperText>
      <Button
        fullWidth
        sx={{ mt: 1, mr: 1 }}
        onClick={checkAnswer}
        variant="outlined"
      >
        정답 보내기
      </Button>
    </div>
  );
};

const SendedQuiz = () => {
  return (
    <>
      <div
        className="ReadPost"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardGiftcard sx={{ fontSize: "10em", color: "primary.main" }} />
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          응모해 주셔서 감사합니다!
        </Typography>
        <Typography variant="body1">상품은 12/25일 부터 배송됩니다.</Typography>
      </div>
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
