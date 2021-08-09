import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import styled from '@emotion/styled';
import {FiMoreVertical} from 'react-icons/fi'

import {
	Card as CardComponent,
	CardBody,
	CardAction,
	CardProps,
    CardMedia,
    CardHeader
} from "../components/Card/Card";

import { Button } from "../components/ButtonUpdated/Button1";
export default {
	title: "Components/Card",
	component: CardComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <Wrapper><CardComponent {...args} /></Wrapper>;
const Wrapper =styled.div`
    max-width:350px;
	`
export const Card = CardTemplate.bind({});

Card.args = {
	children: (
		<>
            <CardMedia image="https://domf5oio6qrcr.cloudfront.net/medialibrary/6000/8c38e37d-e8b9-48dd-a9a8-65083a6115e5.jpg" title = "image" />
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <CardHeader title="Title" subheader="Subheader" style={{fontSize:"50px"}}></CardHeader>
                <Button icon={<FiMoreVertical />} accent="secondary" variant="ghost"/> 
            </div>
			<CardBody>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
				possimus provident iste! Odit ratione dignissimos reiciendis dolorem
				aperiam mollitia omnis unde ullam alias, necessitatibus blanditiis eos
				tempore nulla magni nesciunt?
			</CardBody>
			<CardAction>
                <Button accent="primary"  size="large" label="Next" style={{marginRight:"10px"}} onClick = {() => console.log("hi")} /> 
				<Button variant="light" label="Continue" size="large" />
			</CardAction>
		</>
	)
};
