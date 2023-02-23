import { Error } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const ErrorMessage = ({ message }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      mt: '6px'
    }}>
      <Error color="error" sx={{ width: '20px' }} />
      <Typography color='error.main' variant="span" fontSize='14px'>
        {message}
      </Typography>
    </Box>
  )
}

export default ErrorMessage