import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../constants/color'
import { Menu as MenuIcon, 
  Notifications as NotificationIcon,
  Search as SearchIcon, Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleMobile = () => {
    console.log("Mobile view!!");
  }

  const openSearchDialog = () => {
    console.log("open search Dialog clicked!!");
  }

  const openNewGroup = () => {
    console.log("Open New Group");
  }

  const openNotification = () => {
    console.log("show notifications!!");
  }
  const navigateToGroup = () => {
    // console.log("navigate to group used");
    navigate("/groups")
  }

  const logoutHandler = () => {

  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{ bgcolor: orange, }} >
          <Toolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >Chat-App</Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }} >
              <IconButton color="inherit" onClick={handleMobile} >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton size='large' color="inherit" onClick={openSearchDialog} >
                <SearchIcon />
              </IconButton>
              
              <Tooltip title="New Group">
                <IconButton size='large' color="inherit" onClick={openNewGroup} >
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Manage Group">
                <IconButton size='large' color="inherit" onClick={navigateToGroup} >
                  <GroupIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Notification">
                <IconButton size='large' color="inherit" onClick={openNotification} >
                  <NotificationIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Log out">
                <IconButton size='large' color="inherit" onClick={logoutHandler} >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            
            </Box>


          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header