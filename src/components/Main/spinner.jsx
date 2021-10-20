import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const spinner = () => {
    return (
        <div>
              <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
              </Box>
        </div>
    )
}

export default spinner
