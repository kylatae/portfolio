import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const cubeControl = document.querySelector(':root')
var pauseControl = true

function valuetext(value) {
  cubeControl.style.setProperty(`--animationStyle`, `rotate ${value}s linear infinite`)
  return;
}

const pauseAnimation = (e) => {
  if (pauseControl){
    cubeControl.style.setProperty('--animationState', 'paused')
    pauseControl = false;
  } else{
    cubeControl.style.setProperty('--animationState', 'running')
    pauseControl = true;
  }
  

  


}

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 500 }}>
      <form onClick={pauseAnimation}>
      <Button variant="contained">Pause Animation</Button>
      <Slider
        aria-label="Small steps"
        defaultValue={20}
        getAriaValueText={valuetext}
        marks
        min={1}
        max={100}
        valueLabelDisplay="auto"
      />
      </form>
    </Box>
  );
}