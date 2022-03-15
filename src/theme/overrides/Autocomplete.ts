// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function Autocomplete(theme : any) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          padding: 50
        },
        input :{
          color: 'red',
          border: '5px dashed grey'
        },
        paper: {
          boxShadow: theme.customShadows.z20,
          border: '5px dashed grey'
        }
      }
    }
  };
}
