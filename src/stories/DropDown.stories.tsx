import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { DropDown as DropDownComponent, DropDownProp } from "./DropDown";

export default {
	title: "Components/DropDown",
	component: DropDownComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const DropDownTemplate: Story<DropDownProp> = (args) => (
	<DropDownComponent {...args} />
);

export const DropDown = DropDownTemplate.bind({});

DropDown.args = {
	content: (
		<div>
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content. This is drop down content. This is drop down content.
			This is drop down content. This is drop down content. This is drop down
			content. This is drop down content. This is drop down content. This is
			drop down content.
		</div>
	),
	children: <h4>Click Here</h4>,
};
