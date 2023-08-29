import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function BasicButtons() {
  return (
    <Stack spacing={8} direction="row" >
      <Button variant="text">Text</Button>
      <Button variant="contained" color="warning">Contained</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="outlined" endIcon={<AccessibilityIcon/>}>SOORYA</Button>
    </Stack>
  );
}