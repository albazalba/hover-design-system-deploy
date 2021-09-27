import React, { ChangeEvent } from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Select as SelectComponent} from "../../components/Select/Select";

export default {
	title: "Design system/Components/Select",
	component: SelectComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const SelectTemplate: Story<any> = (args) => <SelectComponent {...args} />;

export const Select = SelectTemplate.bind({});

Select.args = {
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
