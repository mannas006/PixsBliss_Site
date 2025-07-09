import React from 'react';
import { Box, Container, Heading, Text, VStack, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.md">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Privacy Policy for PixsBliss
          </Heading>

          <Text fontSize="sm" color="gray.600">
            Effective Date: [July 8, 2025] {/* Remember to update this date */}
          </Text>

          <Text>
            PixsBliss ("we", "our", or "us") operates the PixsBliss mobile application (the "App") which provides users with access to high-quality anime wallpapers.
          </Text>
          <Text>
            This privacy policy informs you of our policies regarding the collection, use, and disclosure of personal information when you use our App.
          </Text>

          <Heading as="h2" size="lg">
            1. Information We Collect
          </Heading>
          <Text>
            We collect minimal information to provide and improve the App. This may include:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <Text>
                <b>Device Information</b>: We may collect non-personal device information such as model, operating system, and app version for analytics and performance.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Usage Data</b>: We may collect anonymous usage statistics, including how often you use the app and which wallpapers are downloaded or viewed.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Download Tracking</b> (optional): For featured wallpapers, we may log download counts for analytics purposes.
              </Text>
            </ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg">
            2. How We Use Your Information
          </Heading>
          <Text>
            We use the information we collect to:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Improve user experience and app performance</ListItem>
            <ListItem>Fix bugs and enhance functionality</ListItem>
            <ListItem>Understand user preferences and popular content</ListItem>
            <ListItem>Enable optional premium wallpaper features</ListItem>
          </UnorderedList>
          <Text>
            We <b>do not sell or share</b> your data with third-party advertisers.
          </Text>

          <Heading as="h2" size="lg">
            3. Permissions Used
          </Heading>
          <Text>
            The App may request the following permissions:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <Text>
                <b>Storage Access</b>: To allow users to download and save wallpapers to their device
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Internet Access</b>: To fetch wallpapers and updates from online sources
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Billing</b>: To enable in-app purchases for unlocking premium wallpapers
              </Text>
            </ListItem>
          </UnorderedList>
          <Text>
            These permissions are only used to support core functionality and are never abused.
          </Text>

          <Heading as="h2" size="lg">
            4. Third-Party Services
          </Heading>
          <Text>
            We may use third-party services such as:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>Google Play Billing (for payments)</ListItem>
            <ListItem>Cloudinary (for image hosting)</ListItem>
            <ListItem>Firebase or GitHub (for version updates and performance tracking)</ListItem>
          </UnorderedList>
          <Text>
            These services may collect data in accordance with their own privacy policies.
          </Text>

          <Heading as="h2" size="lg">
            5. Data Retention
          </Heading>
          <Text>
            We do not store any personal data on our servers. All app data is stored locally on your device unless explicitly uploaded (e.g., analytics or purchase history, if you are signed in).
          </Text>

          <Heading as="h2" size="lg">
            6. Your Rights
          </Heading>
          <Text>
            You can uninstall the app at any time to stop data collection. For any data-related inquiries or concerns, please contact us.
          </Text>

          <Heading as="h2" size="lg">
            7. Children’s Privacy
          </Heading>
          <Text>
            PixsBliss does not knowingly collect any personal information from children under 13. If we discover such data has been collected, it will be promptly deleted.
          </Text>

          <Heading as="h2" size="lg">
            8. Changes to This Privacy Policy
          </Heading>
          <Text>
            We may update this Privacy Policy occasionally. We encourage you to review it regularly. Updates are effective when posted on this page.
          </Text>

          <Heading as="h2" size="lg">
            9. Contact Us
          </Heading>
          <Text>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </Text>
          <VStack align="start" pl={4}>
            <Text>
              📧 <b>Contact</b>: [https://pixs-bliss-site.vercel.app/contact-us] {/* Remember to update this email */}
            </Text>
            <Text>
              🌐 <b>Website</b>: [https://pixs-bliss-site.vercel.app] {/* Remember to update this website */}
            </Text>
          </VStack>


          <Link as={RouterLink} to="/" color="blue.500" mt={4}>
            Back to Home
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
