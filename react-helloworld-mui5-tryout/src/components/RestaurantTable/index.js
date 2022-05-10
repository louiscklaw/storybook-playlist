import { Box, Grid, Icon, Typography } from '@mui/material';
import MKBadge from 'components/MKBadge';
import { Button } from '@mui/material';
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
  { column_text: 'restaurant name', name: 'name', align: 'center' },
  { column_text: 'service plan', name: 'function', align: 'left' },
  { column_text: 'action', name: 'action', align: 'center' },
];

const table_data = [
  {
    name: ['https://bit.ly/3t5q4yQ', '六本木 うなぎり 福松屋'],

    function: 'meny_light',
    action: (
      <>
        <Button iconOnly size="large">
          <Icon>delete</Icon>
        </Button>
        <Button iconOnly size="large">
          <Icon>edit</Icon>
        </Button>
      </>
    ),
  },
  {
    name: ['https://bit.ly/3t5q4yQ', '六本木 うなぎり 福松屋'],

    function: 'meny_light',
    action: (
      <>
        <Button iconOnly size="large">
          <Icon>delete</Icon>
        </Button>
        <Button iconOnly size="large">
          <Icon>edit</Icon>
        </Button>
      </>
    ),
  },
  {
    name: ['https://bit.ly/3t5q4yQ', '六本木 うなぎり 福松屋'],

    function: 'meny_light',
    action: (
      <>
        <Button iconOnly size="large">
          <Icon>delete</Icon>
        </Button>
        <Button iconOnly size="large">
          <Icon>edit</Icon>
        </Button>
      </>
    ),
  },
];
