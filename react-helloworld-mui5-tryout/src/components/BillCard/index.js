import { Box, Grid, useTheme } from '@mui/material';
import FoodItem from './FoodItem';
import TableInfo from './TableInfo';

export default () => {
  let { palette } = useTheme();
  return (
    <>
      <Box p={2} sx={{ maxWidth: '800px' }}>
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
          p={2}
        >
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
            justifyContent={'flex-start'}
          >
            <TableInfo />
          </Grid>
        </Grid>
      </Box>
      <pre>{JSON.stringify(palette, null, 2)}</pre>
    </>
  );
};
