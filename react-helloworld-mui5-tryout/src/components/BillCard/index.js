import { Box, Grid, Typography } from '@mui/material';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import { Check, X } from 'react-feather';

import FoodItem from './FoodItem';
import TableInfo from './TableInfo';

export default () => {
  return (
    <>
      BillCard
      <Box p={2}>
        <Grid
          sx={{
            borderLeft: '8px solid #192a56',
            borderRight: '8px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}
          container
          justifyContent="space-between"
          p={2}>
          <Grid item xs={6}>
            <FoodItem />
            <FoodItem />
            <FoodItem />
          </Grid>
          <Grid
            item
            xs={6}
            container
            flexDirection={'column'}
            justifyContent={'flex-start'}>
            <TableInfo />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
