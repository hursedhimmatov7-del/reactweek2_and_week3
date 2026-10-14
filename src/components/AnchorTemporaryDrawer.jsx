import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function AnchorTemporaryDrawer({ id, name, status, age }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Tooltip title="Info" placement="bottom" arrow>
        <IconButton
          onClick={() => setOpen(true)}
       sx={{ color: 'rgba(0, 0, 255, 0.766)', transition: ' 0.3s ',":hover":{color:"yellow" } }}
          size="small"
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 3 }} role="presentation">
          <Typography variant="h5" gutterBottom>
            Информация о пользователе
          </Typography>
          <Typography>ID: {id}</Typography>
          <Typography>Имя: {name}</Typography>
          <Typography>Статус: {status ? 'online' : 'offline'}</Typography>
          <Typography>Возраст: {age}</Typography>
        </Box>
      </Drawer>
    </>
  );
}