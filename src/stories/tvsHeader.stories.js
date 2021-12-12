import React from "react";
import TvsHeader from "../components/headerTvList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/TvPageHeader",
  component: TvsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TvsHeader title="Discover TV" />;

Basic.storyName = "Default";
