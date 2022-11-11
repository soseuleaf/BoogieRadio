import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

// MUI Icons
import { red, green, grey } from '@mui/material/colors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';

const icon = (
  <Paper elevation={4}>
    <Box sx={{ width: 500, height: 500 }}>
        In Content
    </Box>
  </Paper>
);

function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(true);
  };

  return (
    <Box 
        sx={{ 
            position: "absolute",
            bottom: 0,
            right: 0,
    }}>
        <IconButton color="inherit" onClick={()=>setChecked(true)}>
            <WbSunnyIcon sx={{ fontSize: "80px", margin: "25px", color: red[500] }}/>
        </IconButton>

        <IconButton onClick={()=>setChecked(true)}>
            <DirectionsTransitIcon sx={{ fontSize: "80px", margin: "25px", color: green[500]  }}/>
        </IconButton>

        <Slide 
            direction="up" 
            mountOnEnter 
            unmountOnExit 
            in={checked} 
            onClick={()=>setChecked(false)}
            sx={{
                position:"absolute",
                bottom: 0,
                right: 0
            }}
        >
          {icon}
        </Slide>
    </Box>
  );
}

export default SimpleSlide