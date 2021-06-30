import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Card1, CardProps } from "../components/Card/Card";
import Heading from "../components/Card/Heading";
import Flex from "../components/Card/Flex";
import Button from "../components/Button";

export default {
	title: "",
	component: Card1,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as Meta;

const Template: Story<CardProps> = (args) => <Card1 {...args} />;

const CardCompo = () => {
	return (
		<>
			<Heading h2>Title</Heading>
			<p>
				Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non
				mi porta gravida at eget metus. Donec sed odio dui.
			</p>
			<Flex>
				<Button variant="secondary">Submit</Button>
			</Flex>
		</>
	);
};

export const CardType1 = Template.bind({});
CardType1.args = {
	children: <CardCompo />
};
