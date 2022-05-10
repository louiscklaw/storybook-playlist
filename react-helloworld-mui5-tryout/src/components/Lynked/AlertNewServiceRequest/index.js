import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

export default function AlertNewServiceRequest() {
  let { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: '18rem',
          width: '18rem',
          padding: '2rem',
          borderRadius: '1rem',
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Typography
            variant="h5"
            align="center"
            color={palette.primary.contrastText}
          >
            新しいオーダ
            <br />
            ーがありました
          </Typography>

          <FontAwesomeIcon icon={faCheckSquare} size="3x" />

          <Button
            sx={{
              color: palette.primary.contrastText,
              backgroundColor: palette.primary.light,
            }}
          >
            <Typography vairant="h6">OK</Typography>
          </Button>
        </Stack>
      </Box>
    </>
  );
}
