import React from "react";
import PersonHeader from "../components/headerPerson";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Person Details Page/PersonHeader",
  component: PersonHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PersonHeader person={SamplePerson} />;

Basic.storyName = "Default";
