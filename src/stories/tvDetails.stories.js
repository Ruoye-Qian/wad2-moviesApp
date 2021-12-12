import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Tv Details Page/TvDetails",
  component: TvDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TvDetails tv={SampleTv} />;

Basic.storyName = "Default";
