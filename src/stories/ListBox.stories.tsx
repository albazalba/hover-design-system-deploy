import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { List as ListComponent } from "./ListBox";

export default {
	title: "Components/ListBox",
	component: ListComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const ListTemplate: Story<any> = (args) => <ListComponent {...args} />;

export const List = ListTemplate.bind({});

List.args = {
	defaultValue: "frenchy",
	values: [
		{ value: "frenchy", label: "Frenchy" },
		{ value: "coco", label: "Coco" },
		{ value: "kitkat", label: "Kit-Kat" },
		{ value: "lei", label: "Lei" },
		{ value: "ankith", label: "Ankith" },
	],
	size: "small",

	//TO do code not working
	// onChange: (value: string) => {
	// 	alert("Hello" + value);
	// },
	// onBlur: () => {
	// 	alert("Blurred");
	// },
};
