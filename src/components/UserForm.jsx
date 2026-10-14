import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '15px',
  gap: '10px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #0000002c',
  boxShadow: 24,
  p: 4,
};

export default function UserForm({ open, title, data, setData, onSave, onClose }) {
  const nameEmpty = (data?.name ?? '').trim() === '';

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        sx={style}
        onSubmit={(e) => {
          e.preventDefault();
          onSave();
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>

        <TextField
          label="Name"
          fullWidth
          value={data?.name ?? ''}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          error={nameEmpty}
          helperText={nameEmpty ? 'Введите имя' : ''}
        />

        <TextField
          label="Age"
          type="number"
          fullWidth
          value={data?.age ?? ''}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            label="Status"
            value={data?.status ?? true}
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <MenuItem value={true}>online</MenuItem>
            <MenuItem value={false}>offline</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}