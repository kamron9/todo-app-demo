import { Alert, AlertIcon, Box, Stack } from '@chakra-ui/react'
import React from 'react'

const AlertMessage = () => {
  return (
    <Box pos='fixed' bottom={0} right={0}>
      <Stack spacing={3}>
        <Alert status='error'>
          <AlertIcon />
          Please fill on input
        </Alert>

        <Alert status='success'>
          <AlertIcon />
          Data successfuly uploaded
        </Alert>
      </Stack>
    </Box>
  )
}

export default AlertMessage
