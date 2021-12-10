import React from "react";
import PersonsHeader from "../components/headerPersonList";
import { MemoryRouter } from "react-router";
import PersonsContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/PersonPageHeader",
  component: PersonsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PersonsContextProvider>{Story()}</PersonsContextProvider>,
  ],
};

export const Basic = () => <PersonsHeader title="Actors" />;

Basic.storyName = "Default";
