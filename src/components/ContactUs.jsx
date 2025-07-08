import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function ContactUs() {
  // State to manage form inputs (optional for HTML form method, but good practice)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Formspree endpoint provided by the user
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xblyvkek';

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.sm">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            Contact Us
          </Heading>

          <Text textAlign="center" color="gray.700">
            Have questions or feedback? Send us a message!
          </Text>

          {/* Formspree form */}
          <Box
            as="form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            w="100%"
            spacing={4}
          >
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={6}
                />
              </FormControl>

              {/* Optional: Redirect after submission */}
              <input type="hidden" name="_next" value={window.location.origin + '/'} />

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                w="full"
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          <Link as={RouterLink} to="/" color="blue.500" textAlign="center">
            Back to Home
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}

export default ContactUs;
