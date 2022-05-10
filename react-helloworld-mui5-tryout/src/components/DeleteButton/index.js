import { useMemo } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Check, Trash2, X } from 'react-feather';

export default function DeleteButton() {
  return useMemo(
    () => (
      <Button variant="contained" color="error" fullWidth>
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
