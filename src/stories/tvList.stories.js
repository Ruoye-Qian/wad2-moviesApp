import React from "react";
import TvList from "../components/tvList";
import SampleTv from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToLovesIcon from "../components/cardIcons/addToLove";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/TvList",
  component: TvList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const tvs = [
    { ...SampleTv, id: 1 },
    { ...SampleTv, id: 2 },
    { ...SampleTv, id: 3 },
    { ...SampleTv, id: 4 },
    { ...SampleTv, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvList
        tvs={tvs}
        action={(tv) => <AddToLovesIcon tv={tv} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
