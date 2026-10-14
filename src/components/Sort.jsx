import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sort({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-by-status-label">Sort by status</InputLabel>

        <Select
          labelId="sort-by-status-label"
          id="sort-by-status"
          label="Sort by status"
          value={value }
          onChange={onChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="true">Online</MenuItem>
          <MenuItem value="false">Offline</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}