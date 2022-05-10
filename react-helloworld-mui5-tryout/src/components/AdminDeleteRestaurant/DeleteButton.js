import { Box, Button, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Trash2 } from 'react-feather';

export default function DeleteButton() {
  return useMemo(
    () => (
      <Button variant="contained" fullWidth>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Box>
              <Trash2 />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="#fff" size="small">
              削除
            </Typography>
          </Grid>
        </Grid>
      </Button>
    ),
    []
  );
}
