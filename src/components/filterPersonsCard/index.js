import React from "react"; 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import img from '../../images/personfilter.jpg'
// import { getGenres } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../spinner'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#b2dfdb",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterPersonsCard(props) {
  const classes = useStyles();


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  // const handleSortChange = e => {
  //   var kind = document.getElementById("sortin");
  //   var myoption=kind.options[kind.selectedIndex].getAttribute('on');
  //   if(myoption==='1'){
  //     handleChange(e, "ASC", e.target.value);
      
  //   }else if(myoption==='2'){
  //     handleChange(e, "DESC", e.target.value);
  //   }
  // };

  const handleSortChange = (e, props) => {
    handleChange(e, "popularity", e.target.value);
  };




  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Search the Actors.
        </Typography>
        <TextField
         className={classes.formControl}
         id="filled-search"
         label="Search field"
         type="search"
         value={props.titleFilter}
         variant="filled"
         onChange={handleTextChange}
        />

        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Sorted by Popularity:
        </Typography>
        <TextField
         className={classes.formControl}
         id="filled-search"
         label="Search field"
         type="search"
         value={props.sortFilter}
         variant="filled"
         onChange={handleSortChange}
        />


      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Search the actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}