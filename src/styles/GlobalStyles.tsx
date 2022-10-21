import React from "react";
import {Theme} from "@mui/material";
import {GlobalStyles as GlobalStylesMui} from '@mui/material';

interface GlobalStylesProps {
  theme: Theme
}

export const GlobalStyles = ({theme}: GlobalStylesProps) => {
  const scrollbarSize = '0.65em'
  return (
    <GlobalStylesMui styles={{
      '*::-webkit-scrollbar': {
        width: scrollbarSize
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 16,
        '&:hover': {
          backgroundColor: theme.palette.primary.light
        }
      },
      '*::-webkit-scrollbar:horizontal': {
        height: scrollbarSize
      }
    }}/>
  )
}
