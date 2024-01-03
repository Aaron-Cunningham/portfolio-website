import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className='bg-white my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>You received the following message</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
