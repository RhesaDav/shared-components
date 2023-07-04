import React from "react";
import { Story, Meta } from "@storybook/react";
import ThemeProvider, { SharedThemeProviderProps } from "./ThemeProvider";
import { Button, Typography } from "../../components";

export default {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
} as Meta;

const Template: Story<SharedThemeProviderProps> = (args) => (
  <ThemeProvider {...args} />
);

export const BasicTheme = Template.bind({});
BasicTheme.args = {
  themeType: "basic",
  children: (
    <div style={{ background: "white", padding: "16px" }}>
      <Button>asdsad</Button>
      <Typography variant="h1">Basic Theme</Typography>
      <Typography variant="body1">This is the basic theme.</Typography>
    </div>
  ),
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  themeType: "dark",
  children: (
    <div style={{ background: "black", padding: "16px" }}>
      <Button>asdsad</Button>
      <Typography variant="h1">Dark Theme</Typography>
      <Typography variant="body1">This is the dark theme.</Typography>
    </div>
  ),
};
