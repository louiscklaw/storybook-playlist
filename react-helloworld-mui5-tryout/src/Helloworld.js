import { Box, useTheme } from '@mui/material';
import AlertNewServiceRequest from 'components/Lynked/AlertNewServieRequest';

export default function Helloworld() {
  let { palette } = useTheme();
  return (
    <>
      <Box>Helloworld</Box> <AlertNewServiceRequest />
      <pre>{JSON.stringify(palette, null, 2)}</pre>
    </>
  );
}
