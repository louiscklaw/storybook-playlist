import { Box, Grid, Typography } from '@mui/material';
import MKTypography from 'components/MKTypography';

export default function FoodItem() {
  return (
    <>
      <Box p={1} pl={0} pt={0}>
        <Grid container sx={{ borderTop: '1px solid #eee' }} pt={1}>
          <Grid
            item
            xs={8}
            container
            flexDirection={'column'}
            sx={{ textAlign: 'left' }}
          >
            <MKTypography variant={'h6'}>テスト</MKTypography>
            <MKTypography variant={'caption'} pt={1}>
              注文受付:2022年04月24日
            </MKTypography>
            <MKTypography variant={'caption'}>19時23分</MKTypography>
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent={'center'}
            alignItems={'center'}
          >
            <MKTypography variant={'h6'} color="error">
              ¥1 x 1点
            </MKTypography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
