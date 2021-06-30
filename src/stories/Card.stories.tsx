import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import {
	Card as CardComponent,
	StyledBody,
	StyledAction,
	CardProps
} from "./Card";

import { Button } from "./Button";
export default {
	title: "Components/Card",
	component: CardComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <CardComponent {...args} />;

export const Card = CardTemplate.bind({});

Card.args = {
	title: "Header",
	children: (
		<>
			<StyledBody>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
				possimus provident iste! Odit ratione dignissimos reiciendis dolorem
				aperiam mollitia omnis unde ullam alias, necessitatibus blanditiis eos
				tempore nulla magni nesciunt?
			</StyledBody>
			<StyledAction>
				<Button label="Continue" size="large" />
			</StyledAction>
		</>
	)
};
