import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { DropDown as DropdownComponent } from "../../components/DropDown/DropDown";

export default {
	title: "Design system/Components/Dropdown",
	component: DropdownComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const DropDownTemplate: Story<any> = (args) => <DropdownComponent {...args} />;

export const Dropdown = DropDownTemplate.bind({});

Dropdown.args = {
	buttonName: "Open",
	buttonIcon: "▾",
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