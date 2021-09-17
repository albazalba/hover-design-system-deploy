import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { DropDown } from "../components/DropDown/MenuButton";

export default {
	title: "Components/MenuButton",
	component: DropDown,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const DropDownTemplate: Story<any> = (args) => <DropDown {...args} />;

export const DropDownMenu = DropDownTemplate.bind({});

DropDownMenu.args = {
	button: "Open",
	buttonStyle: {border:"none", background:"#48bde0", color:"white", padding:"9px 15px"},
	menuListStyle: {},
	list: [
		{ label: "Frenchy", onSelect: () => console.log("onSelect") },
		{ label: "Coco" },
		{ label: "Kit-Kat" },
		{ label: "Lei" },
		{ label: "Holla" },
	]
};