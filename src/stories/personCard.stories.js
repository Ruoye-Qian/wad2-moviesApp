import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import PersonsContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToLikesIcon from "../components/cardIcons/addToLike";

export default {
  title: "Home Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PersonsContextProvider>{Story()}</PersonsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
      action={(person) => <AddToLikesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoProfile = { ...SamplePerson, profile_path: undefined };
  return (
    <PersonCard
      person={sampleNoProfile}
      action={(person) => <AddToLikesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Exceptional.storyName = "exception";
