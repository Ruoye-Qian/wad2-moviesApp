import React from "react";
import TvHeader from "../components/headerTv";
import SampleTv from "./sampleTvData";
import { MemoryRouter } from "react-router";
// import { action } from "@storybook/addon-actions";

export default {
  title: "Tv Details Page/TvHeader",
  component: TvHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvHeader tv={SampleTv} />;

Basic.storyName = "Default";
