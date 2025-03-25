import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'


function App() {
  return (
    <>
      <Typography variant="body2" color="text.secondary">Test typography</Typography>
      <div>nhattVim</div>
      <Button variant="contained" color='success'>Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
