import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FireflySpinner = (props: any) => {

    return (
      <Box sx={{ display: 'flex' }} {...props}>
        <CircularProgress />
      </Box>
    );
  };

export default FireflySpinner;
