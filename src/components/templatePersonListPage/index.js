import React, { useState } from "react";
import Header from "../headerMovieList";    //要改
import FilterCard from "../filterPersonsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../personList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PersonListPageTemplate({ persons, name, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedPersons = persons
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        {/* <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          /> 
        </Grid> */}
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;