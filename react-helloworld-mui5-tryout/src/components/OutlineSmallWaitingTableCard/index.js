// Material Kit 2 PRO React Examples
import { Box, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';

export default () => {
  return useMemo(
    () => (
      <>
        <Grid container>
          <Grid item xs={12} xl={4}></Grid>
          <Grid
            sx={{
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              backgroundColor: '#fff',
            }}
            container
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Grid
              item
              xs={12}
              container
              justifyContent={'flex-start'}
              alignItems="center"
            >
              <Grid item xs={8} sx={{ textAlign: 'left' }}>
                <Typography variant="caption" sx={{ paddingLeft: '0.2rem' }}>
                  2022年04月21日 19時28分
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'right' }}>
                <Typography variant="subtitle2">受付番号3</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ borderTop: '1px solid #ccc' }} mt={2}>
              <Box mt={2} sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle2">1 大人1 / 子供0</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </>
    ),
    []
  );
};
