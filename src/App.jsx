import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AnchorTemporaryDrawer from './components/AnchorTemporaryDrawer';
import Sort from './components/Sort';


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

const inputStyle = {
  border: '1px solid black',
  padding: '8px',
  width: '100%',
  borderRadius: '12px',
};

const App = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'Jon Snow', age: 42, status: false },
    { id: 2, name: 'Daenerys Targaryen', age: 25, status: true },
    { id: 3, name: 'Tyrion Lannister', age: 38, status: true },
    { id: 4, name: 'Arya Stark', age: 18, status: false },
    { id: 5, name: 'Cersei Lannister', age: 44, status: false },
  ]);

  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search , searchset] = useState('')
  const [sort , sortset] = useState('all')

  const handleAddClose = () => {
    setAddOpen(false);
  };

  const addSave = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const age = Number(e.target.age.value);
    const status = e.target.status.value === 'true';

    if (!name || Number.isNaN(age)) return;

    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        age,
        status,
      },
    ]);

    e.target.reset();
    handleAddClose();
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const editShow = (row) => {
    setEditData({
      ...row,
      status: String(row.status),
    });
    setOpen(true);
  };

  const editSave = () => {
    if (!editData?.name?.trim()) return;

    setRows((prev) =>
      prev.map((row) =>
        row.id === editData.id
          ? {
              ...editData,
              age: Number(editData.age),
              status: editData.status === 'true' || editData.status === true,
            }
          : row
      )
    );

    handleClose();
  };

  const dltUser = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };
const filteredRows = rows
  .filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase().trim())
  )
  .filter((row) => {
    if (sort === 'true') return row.status === true;
    if (sort === 'false') return row.status === false;
    return true;
  });

  return (
    <>
    <div className='w-150 m-auto my-10 flex gap-5'>
       <Button
        variant="contained"
        onClick={() => setAddOpen(true)}
      >
        Add user
      </Button >
      <Sort
  value={sort}
  onChange={(e) => sortset(e.target.value)}
/>
      <input className='border border-gray-500 outline-0 rounded-md p-1 focus:border-2 focus:border-blue-500' type="search" placeholder='search...' onInput={(e)=> searchset(e.target.value)} />
    </div>


      <Modal open={addOpen} onClose={handleAddClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Add user
          </Typography>

          <form
            onSubmit={addSave}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
            }}
          >
            <input
              style={inputStyle}
              type="text"
              placeholder="name..."
              name="name"
            />

            <input
              style={inputStyle}
              type="number"
              placeholder="age..."
              name="age"
            />

            <select style={inputStyle} name="status" defaultValue="false">
              <option value="true">online</option>
              <option value="false">offline</option>
            </select>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button type="submit" variant="contained">
                Save
              </Button>

              <Button variant="outlined" onClick={handleAddClose}>
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit
          </Typography>

          <input
            style={inputStyle}
            type="text"
            placeholder="name..."
            value={editData?.name || ''}
            onChange={(e) =>
              setEditData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />

          <input
            style={inputStyle}
            type="number"
            placeholder="age..."
            value={editData?.age || ''}
            onChange={(e) =>
              setEditData((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
          />

          <select
            style={inputStyle}
            value={editData?.status || 'false'}
            onChange={(e) =>
              setEditData((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          >
            <option value="true">online</option>
            <option value="false">offline</option>
          </select>

          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button variant="contained" onClick={editSave}>
              Save
            </Button>

            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer
        sx={{ width: '1200px', margin: '100px auto' }}
        component={Paper}
      >
        <Table aria-label="users table">
          <caption>A basic table example with a caption</caption>

          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '100px' }}>ID</TableCell>
              <TableCell align="left">FULL NAME</TableCell>
              <TableCell align="left">STATUS</TableCell>
              <TableCell align="left">AGE</TableCell>
              <TableCell align="left">Settings</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>

                <TableCell align="left">{row.name}</TableCell>

                <TableCell align="left">
                  {row.status ? 'online' : 'offline'}
                </TableCell>

                <TableCell align="left">{row.age}</TableCell>

                <TableCell align="left">
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <Tooltip title="Delete" placement="bottom" arrow>
                      <IconButton
                        onClick={() => dltUser(row.id)}
                        sx={{ color: 'rgba(0, 0, 255, 0.766)', transition: ' 0.3s ',":hover":{color:"red" } }}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit" placement="bottom" arrow>
                      <IconButton
                        onClick={() => editShow(row)}
                         sx={{ color: 'rgba(0, 0, 255, 0.766)', transition: ' 0.3s ',":hover":{color:"lime" } }}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <AnchorTemporaryDrawer
                      id={row.id}
                      name={row.name}
                      status={row.status}
                      age={row.age}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default App;