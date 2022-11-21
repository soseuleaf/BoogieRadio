import React, { useState, useEffect, useRef, useMemo } from "react";

// MUI
import {Radio,RadioGroup, TextField, Button, Typography, FormControlLabel} from '@mui/material';

// Data
import { QuizData } from "/src/data/QuizData";



const EssayQuestion = ({data, onClickAnswer = f => f}) => {
    const [value, setValue] = useState('');

    return (
        <>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="body1">{data.content}</Typography>
            
            <TextField fullWidth label="정답" onChange={(e) => setValue(e.target.value)}/>
            
            <Button sx={{ mt: 1, mr: 1 }} onClick={()=>onClickAnswer(value)} type="submit" variant="outlined">
                정답 보내기
            </Button>
        </>
    );
}

const MultipleChoice = ({data, onClickAnswer = f => f}) => {
    const [value, setValue] = useState('');

    const radioChanged = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="body1">{data.content}</Typography>
                <RadioGroup
                    name="quiz"
                    value={value}
                    onChange={radioChanged}
                >
                <FormControlLabel value={1} control={<Radio />} label={data.choice[0]}/>
                <FormControlLabel value={2} control={<Radio />} label={data.choice[1]} />
                <FormControlLabel value={3} control={<Radio />} label={data.choice[2]} />
                <FormControlLabel value={4} control={<Radio />} label={data.choice[3]} />
            </RadioGroup>
            
            <Button sx={{ mt: 1, mr: 1 }} onClick={()=>onClickAnswer(value)} type="submit" variant="outlined">
                정답 보내기
            </Button>
        </>
    );
}   

const QuizPage = ({sendQuizAnswer = (f) => f}) => {
    const quizNum = 0;
    const quiz = QuizData[quizNum];

    const onClickAnswer = (answer) => {
        console.log(answer);
    }

    if(quiz.type === 0){
        return <MultipleChoice data={quiz} onClickAnswer={onClickAnswer}/>
    } else {
        return <EssayQuestion data={quiz} onClickAnswer={onClickAnswer}/>
    }
}

export default QuizPage;