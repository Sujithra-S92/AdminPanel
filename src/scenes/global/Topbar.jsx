import React, { useContext, useState } from 'react'
import { ColorModeContext, tokens } from '../../theme';
import { IconButton , Box, useTheme, InputBase} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutSection from '../../components/LogoutSection';



IconButton
const Topbar = () => {
  const theme= useTheme();
  const colors= tokens(theme.palette.mode);
  const colorMode= useContext(ColorModeContext);
  const [opensection, setopensection]= useState(false);
  

  return (
    <Box display="flex" justifyContent="space-between"p={2}>
      {/* Search bar */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
        <SearchOutlinedIcon/>
        </IconButton> 
      </Box>

      {/* icon section */}
      <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={()=>{setopensection((prev)=>!prev)}}>
          <PersonOutlinedIcon />
        </IconButton>
          
      </Box>
{opensection && (
  <LogoutSection/>
)}
    </Box>
  )
}

export default Topbar