import React, { ChangeEvent } from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Dropdown as DropdownComponent } from "./Dropdown";

export default {
	title: "Components/Dropdown",
	component: DropdownComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const DropdownTemplate: Story<any> = (args) => <DropdownComponent {...args} />;

export const Dropdown = DropdownTemplate.bind({});

Dropdown.args = {
	defaultValue: "frenchy",
	options: [
		{ value: "frenchy", label: "Frenchy" },
		{ value: "coco", label: "Coco" },
		{ value: "kitkat", label: "Kit-Kat" },
		{ value: "lei", label: "Lei" },
		{ value: "ankith", label: "Ankith" },
	],
	size: "large",
	argTypes: {
		onChange: { action: (value: string) => console.log(value) },
	},
};
