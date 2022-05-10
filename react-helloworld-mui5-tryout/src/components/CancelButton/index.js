import { Box, Grid, Typography, Button } from '@mui/material';
import { useMemo } from 'react';
import { X } from 'react-feather';

export default function CancelButton() {
  return useMemo(
    () => (
      <>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#222' }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Box>
                <X />
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="#fff" size="small">
                キャンセル
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </>
    ),
    []
  );
}
