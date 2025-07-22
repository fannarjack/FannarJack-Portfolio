import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
} from '@react-email/components';
import * as React from 'react';

type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif' }}>
        <Container>
          <Section>
            <Text>
              <strong>From:</strong> {name} ({email})
            </Text>
            <Text>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
