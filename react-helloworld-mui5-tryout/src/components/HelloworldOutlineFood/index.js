import { Avatar, Box, Grid, Typography, Stack } from '@mui/material';

const OutlineFood = ({ bar_color, food_name, food_description, price }) => {
  return (
    <>
      <Box p={'0.5rem'} sx={{ maxWidth: 300 }}>
        <Grid
          sx={{
            border: '1px solid #d0d0d0',
            borderLeft: `8px solid ${bar_color}`,
            borderRadius: '5px',

            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}
          container
          justifyContent="space-between"
        >
          <Box sx={{ width: 'calc(100% - 5px)' }}>
            <Box sx={{ margin: '0.25rem', padding: '0.25rem' }}>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: '5vw', height: '5vw' }}
                  />
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2">{food_name}</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Stack direction="row" spacing={1}></Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

const BlueOutlineFood = (props) => (
  <OutlineFood bar_color="#192a56" {...props} />
);

const RedOutlineFood = (props) => (
  <OutlineFood bar_color="#800000" {...props} />
);

export { OutlineFood, RedOutlineFood, BlueOutlineFood };
