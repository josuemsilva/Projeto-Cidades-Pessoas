import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import {Box} from "@mui/system"
import { useAppThemeContext, useAuthContext, useDrawerContext } from "../../contexts";
import {ReactNode} from 'react'
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface AppThemeProviderProps {
  children: ReactNode;
}

interface IListItemLinkProps {
  to:string;
  icon:string;
  label:string;
  onClick: (() => void) | undefined;
}

const ListItemLink:React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  }

  return(
    <ListItemButton selected={Boolean(match)} onClick={handleClick}>
    <ListItemIcon>
      <Icon>{icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={label}/>
  </ListItemButton>
  )
}

export const MenuLateral:React.FC<AppThemeProviderProps> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
  const {toggleTheme} = useAppThemeContext();
  const { logout } = useAuthContext();

  return (
    <>
    <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
      <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

        <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center"
        justifyContent="center">
        <Avatar
        sx={{height: theme.spacing(12), width: theme.spacing(12)}}
        src="https://i.imgur.com/fvjRaUB.png"/>
        </Box>

      <Divider/>

      <Box flex={1}>
      <List component="nav">
      {drawerOptions.map(drawerOption => (
      <ListItemLink key={drawerOption.path}
      icon={drawerOption.icon} label={drawerOption.label} to={drawerOption.path}
      onClick={smDown ? toggleDrawerOpen: undefined}/>
      ))}
      </List>
      </Box>
      <Box>
      <List component="nav">
        <ListItemButton onClick={toggleTheme}>
          <ListItemIcon>
            <Icon>dark_mode</Icon>
          </ListItemIcon>
          <ListItemText primary="Alternar tema"/>
        </ListItemButton>
        <ListItemButton onClick={logout}>
          <ListItemIcon>
            <Icon>logout</Icon>
          </ListItemIcon>
          <ListItemText primary="Sair"/>
        </ListItemButton>
      </List>
      </Box>

      </Box>
    </Drawer>

    <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
    {children}
    </Box>
    </>
  )
}
