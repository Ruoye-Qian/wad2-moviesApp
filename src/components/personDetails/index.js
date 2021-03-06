import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
//import AccessTimeIcon from "@material-ui/icons/AccessTime";
//import MonetizationIcon from "@material-ui/icons/MonetizationOn";
// import StarRate from "@material-ui/icons/StarRate";
// import NavigationIcon from "@material-ui/icons/Navigation";
// import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import PersonCredit from "../personCredits"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  bord:{
    margin:10,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const PersonDetails = ({ person }) => {  // Don't miss this!
  const classes = useStyles();
  // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3" align="center">
      Biography
      </Typography>

      <Typography variant="h8" component="p" className={classes.bord}>
        {person.biography}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="birthday" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={person.birthday} className={classes.chip}/>
        </li>
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="known_for_department" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={person.known_for_department} className={classes.chip}/>
        </li>
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="place_of_birth" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={person.place_of_birth} className={classes.chip}/>
        </li>
      </Paper>

      


    </>
  );
};
export default  PersonDetails ;