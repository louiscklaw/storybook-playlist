import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { UserPlus, X } from 'react-feather';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default () => {
  const [age, setAge] = React.useState('');

  const theme = useTheme();
  const { palette } = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <Box p={2} sx={{ maxWidth: '800px', width: '50vw' }}>
        <Box
          sx={{
            borderLeft: '8px solid #263238',
            borderRight: '8px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}>
          <Grid container p={4} spacing={2}>
            <Grid item xs={12} container justifyContent="flex-start">
              <Typography variant={'h6'}>Add Restaurant</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}>
              <TextField label="restaurant name" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}>
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="restaurant-service-plan-control-label">
                    Service plan
                  </InputLabel>
                  <Select
                    labelId="restaurant-service-plan-control-label"
                    id="restaurant-service-plan-control"
                    value={age}
                    label="Service plan"
                    onChange={handleChange}
                    style={{ height: '100%' }}>
                    <MenuItem value={10}>Meny Light</MenuItem>
                    <MenuItem value={20}>Meny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
              container
              justifyContent="center"
              alignItems="center">
              <FormControl sx={{ width: 300, height: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">test chip</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                  sx={{ height: '100%' }}>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              pt={4}
              alignItems="center">
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  fullWidth
                  color="error"
                  disableElevation>
                  <Box mr={1}>
                    <X />
                  </Box>
                  <Typography variant="subtitle2" size={'small'}>
                    cancel
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  fullWidth
                  color="success"
                  disableElevation>
                  <Box mr={1}>
                    <UserPlus />
                  </Box>
                  <Typography variant="subtitle2" color="#fff" size={'small'}>
                    add user
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
