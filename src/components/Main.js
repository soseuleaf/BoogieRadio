import React from 'react';
import { Paper, Grid, Button } from '@mui/material';

const Main = () => {
  return (
    <Grid container >
      <Grid item 
        xs={false} 
        sm={4} 
        md={7}
        sx={{
            display: 'flex',
            justifyContent:'center',
            alignItems : 'center',
        }}>
        <Button variant="outlined">Test1</Button>
        <Button variant="outlined">Test2</Button>
        <Button variant="outlined">Test3</Button>
        <Button variant="outlined">Test4</Button>
        <Button variant="outlined">Test5</Button>
        <Button variant="outlined">Test6</Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Paper        
            sx={{
                height: '50vh',
                padding: '24px',
                margin: '24px'
            }}>
                Hello
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Main;