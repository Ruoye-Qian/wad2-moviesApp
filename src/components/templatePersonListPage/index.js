import React, { useState } from "react";
import Header from "../headerPersonList";
import FilterCard from "../filterPersonsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../personList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PersonListPageTemplate({ persons, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");


  let displayedPersons = persons
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    // .map((m) => {
    //   return m.popularity;
    // });




  const handleChange = (type, value) => {
    if (type === "name"){
      setNameFilter(value);
    } 
    else if(type === "popularity"){
      setSortFilter(value);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            sortFilter={sortFilter}
          />
        </Grid>
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;