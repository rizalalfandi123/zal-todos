import { useTheme } from '@mui/material/styles';
import { useApplicationSettingsStore, useDebounce } from '@utils';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slider, { SliderProps } from '@mui/material/Slider';
import { useEffect, useState } from 'react';

export const BorderRadiusField = () => {
 const tempTheme = useApplicationSettingsStore((store) => store.tempSettings.theme);

 const changeTempSettings = useApplicationSettingsStore((store) => store.changeTempSettings);

 const changeBorderRadius = (newBorderRadius: number) => {
  changeTempSettings((prevState) => ({
   ...prevState,
   theme: {
    ...prevState.theme,
    shape: {
     borderRadius: newBorderRadius,
    },
   },
  }));
 };

 const handleChange: SliderProps['onChange'] = (e, value) => {
  if (!Array.isArray(value)) {
   changeBorderRadius(value);
  }
 };

 return (
  <Stack>
   <Typography fontWeight='600'>Border radius</Typography>

   <Slider valueLabelDisplay='auto' value={tempTheme.shape?.borderRadius ?? 8} step={2} marks min={2} max={24} onChange={handleChange} />
  </Stack>
 );
};
