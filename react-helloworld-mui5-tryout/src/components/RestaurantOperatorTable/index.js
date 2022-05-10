import { Box, Grid, Icon, Typography } from '@mui/material';
import MKBadge from 'components/MKBadge';
import MKButton from 'components/MKButton';
import { Check } from 'react-feather';
import LynkedStyleTable from './LynkedStyleTable';

export default function RestaurantOperatorTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          RestaurantOperatorTable
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <LynkedStyleTable columns={column_name} rows={table_data} />
        </Grid>
      </Grid>
    </>
  );
}

const column_name = [
  { column_text: 'email', name: 'name', align: 'center' },
  { column_text: 'disabled', name: 'function', align: 'left' },
  { column_text: 'last signin time', name: 'status', align: 'center' },
  { column_text: 'meny service class', name: 'email', align: 'center' },
  { column_text: 'action', name: 'action', align: 'center' },
];

const table_data = [
  {
    name: ['https://bit.ly/3t5q4yQ', 'sicxtest@gmail.com'],

    function: 'テスト',
    status: 1,
    email: '#1',
    action: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
  {
    name: ['https://bit.ly/3t5q4yQ', 'sicxtest@gmail.com'],

    function: 'テスト',
    status: 1,
    email: '#1',
    action: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
  {
    name: ['https://bit.ly/3t5q4yQ', 'sicxtest@gmail.com'],

    function: 'テスト',
    status: 1,
    email: '#1',
    action: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
];
