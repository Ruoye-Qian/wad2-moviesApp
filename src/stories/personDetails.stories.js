import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import PersonsContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PersonsContextProvider>{Story()}</PersonsContextProvider>,
  ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";
