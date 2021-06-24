import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { List as ListComponent, ListItem, ListProps, List } from "./List";
import { FiCheck } from "react-icons/fi";
import reportWebVitals from "../reportWebVitals";

export default {
	title: "Components/List",
	component: ListComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<ListProps> = (args) => {
	return (
		<ListComponent {...args}>
			<ListItem>Ankith</ListItem>
			<ListItem>Akhil</ListItem>
			<ListItem>Rahul</ListItem>
			<ListItem>Veen</ListItem>
			<ListItem>Suri</ListItem>
			<ListItem>Supritha</ListItem>
		</ListComponent>
	);
};

export const PrimaryList = Template.bind({});
PrimaryList.args = {
	accent: "primary",
	type: "bullet",
	size: "large",
};

export const SecondaryList = Template.bind({});
SecondaryList.args = {
	accent: "secondary",
	type: "roman",
	size: "large",
};

export const ImageList = Template.bind({});
ImageList.args = {
	accent: "image",
	size: "default",
	type: <FiCheck />,
};

export const VerticalList = Template.bind({});
VerticalList.args = {
	accent: "primary",
	size: "large",
	alignment: "horizontal",
};

export const defaultStyling = Template.bind({});
defaultStyling.args = {};
