import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import clsx from "clsx";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom";
//import MailIcon from '@material-ui/icons/Mail';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import LinkedCameraRoundedIcon from '@material-ui/icons/LinkedCameraRounded';
import MovieFilterRoundedIcon from '@material-ui/icons/MovieFilterRounded';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});
export function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className={clsx(classes.list, {
      [classes.fullList]: anchor === "top" || anchor === "bottom"
    })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem>
           <ListItemIcon><LiveTvRoundedIcon/> </ListItemIcon>
           <Link to="/movies/nowplaying">Now playing Movies</Link>
           <ListItemText/>
         </ListItem>
         <ListItem>
           <ListItemIcon><LinkedCameraRoundedIcon/> </ListItemIcon>
           <Link to="/movies/topRated">Top Rated Movies</Link>
           <ListItemText />
         </ListItem>
      </List>
      <Divider/>
      <List>
      <ListItem>
           <ListItemIcon><MovieFilterRoundedIcon/> </ListItemIcon>
           <Link to="/movies/popular">Popular Movies</Link>
           <ListItemText />
         </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default withRouter(TemporaryDrawer);