// React Base
import React, { useState, useEffect, useMemo } from "react";

// MUI material
import {
  styled,
  Box,
  Typography,
  Slider,
  IconButton,
  Stack,
} from "@mui/material";

// MUI Icons
import {
  PauseRounded,
  PlayArrowRounded,
  VolumeUpRounded,
  VolumeDownRounded,
} from "@mui/icons-material";

// React Player
import ReactPlayer from "react-player";

/* 뮤직 플레이어 영역 입니다. */

/* styled의 CSS 영역 입니다. 해당 부분은 sx로 지정하기에는 너무 많아서 styled로 따로 지정했습니다. */
const Widget = styled("div")(() => ({
  padding: 16,
  borderRadius: 16,
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 50,
  height: 50,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const MediaPlayer = ({ img, title, url }) => {
  /* 현재 실행되고 있는 음악의 시간을 저장합니다. */
  const [playTime, setPlayTime] = useState(0);
  /* 플레이어의 참조를 가리킵니다. */
  const [instance, setInstance] = useState(null);
  /* 플레이어의 볼륨 저장합니다. */
  const [volume, setVolume] = useState(0.1);
  /* 플레이어가 실행되고 있는지 저장합니다. */
  const [playing, setPlaying] = useState(false);
  /* Progress바를 움직인 위치의 값을 저장합니다. */
  const [movedTime, setMovedTime] = useState(0);
  /* Progress바를 움직이기 위해 업데이트를 멈추기 위한 값 입니다. */
  const [seeking, setSeeking] = useState(false);

  /* movedTime이 변한다면 플레이어의 재생 시간을 해당 시간으로 변화 시킵니다. */
  useEffect(() => {
    if (instance) {
      instance.seekTo(movedTime);
    }
  }, [movedTime]);

  /* 자동재생 여부를 설정합니다. */
  const autoPlay = () => {
    setPlaying(true);
  };

  /* 플레이어가 실행될 때 마다 호출되는 함수 입니다. */
  const handleProgress = (state) => {
    if (!seeking) {
      setPlayTime(state.played);
    }
  };

  /* 볼륨을 조절할 때 호출되는 함수 입니다. */
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  /* 재생, 일시정지 버튼을 눌렀을 때 호출되는 함수 입니다. */
  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  /* 
    Progress바 관련 영역 입니다. 해당 값이 변했는지, 마우스를 땟는지 판단하여 값을 변경합니다.
    seeking은 내가 재생 위치을 변화하고 있는지 확인하는 값 입니다. 
    seeking을 설정하지 않으면 재생 위치를 변경 중에도 현재 재생되는 음악의 위치를 변경 시킵니다.
    PlayTime은 해당 값을 변화시키지 않으면 마우스 변경 시 재생바가 따라가지 않습니다.
    마우스를 때면 setMovedTime의 값을 변화 시켜 플레이어의 seekTo 함수가 실행되게 합니다.
  */

  const handleSeekChange = (e) => {
    setSeeking(true);
    setPlayTime(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (_, v) => {
    setSeeking(false);
    setMovedTime(v);
  };

  return (
    <>
      {/* 
        실질적으로 음악을 재생 시키는 react-player입니다. 외부 라이브러리라 실질적인 작동 방식은 자세하지 않습니다.
        width, height를 0으로 두어 안보이게 설정했습니다. 모습만 안보입니다.
        url을 post의 값을 가져와서 설정합니다. soundcloud, youtube 링크 등이 들어갈 수 있습니다.
        loop는 바복재생 여부를 판단합니다.
        playing에 true가 들어가면 재생을 하고, false가 들어가면 재생을 멈춥니다.
        volume은 볼륨 조절 입니다
        ref는 현재 플레이어의 참조를 받아 옵니다.
        onready는 음악의 로딩이 끝났을 때 호출되는 함수 입니다.
        onprogress는 음악이 재생될 때 마다 호출되는 함수 입니다.
        */}

      <ReactPlayer
        width="0"
        height="0"
        url={url}
        loop={true}
        playing={playing}
        volume={volume}
        ref={setInstance}
        //onReady={autoPlay}
        onProgress={handleProgress}
      />

      {/* 플레이어 UI 영역 입니다. 단순히 함수를 동작시키는 영역이고 음악재생은 ReactPlayer에서 담당합니다. */}
      <Widget>
        {/* 앨범 이미지, 제목이 보여지는 영역 입니다. */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img src={`/images/${img}`} />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography noWrap variant="subtitle1">
              {title}
            </Typography>
          </Box>
        </Box>

        {/* 음악의 재생 위치를 조정하는 Progress바, 재생바 입니다. 해당 값은 playedTime에 따라 변하며, 마우스 이벤트에 따라 함수가 실행 됩니다.*/}
        <Slider
          size="small"
          min={0}
          max={0.999999}
          step={0.0001}
          value={playTime}
          onChange={handleSeekChange}
          onChangeCommitted={handleSeekMouseUp}
          sx={{
            // example에서 가져온 Css 디자인 입니다.
            color: "#000",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${"rgb(255 255 255 / 16%)"}`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />

        {/* 컴포넌트를 가로로 정렬시키는 용도의 컴포넌트 입니다.*/}
        <Stack spacing={2} direction="row" alignItems="center">
          {/* playing을 가져와서 플레이어가 실행 중인지, 정지 중인지 판단하여 Icon을 반환하는 영역 이빈다.*/}
          <IconButton onClick={handlePlayPause}>
            {playing ? (
              <PauseRounded sx={{ color: "#000", fontSize: "3rem" }} />
            ) : (
              <PlayArrowRounded sx={{ color: "#000", fontSize: "3rem" }} />
            )}
          </IconButton>

          {/* 볼륨을 조정하기 위한 슬라이더, 볼륨바 입니다. volume 값을 가져와서 해당 값에 적용 시킵니다. */}
          <VolumeDownRounded />
          <Slider
            min={0}
            max={1}
            step={0.001}
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
            defaultValue={0.1}
            sx={{
              color: "#000",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#000",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpRounded />
        </Stack>
      </Widget>
    </>
  );
};

export default MediaPlayer;
