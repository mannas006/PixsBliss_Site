import React, { useEffect, useState } from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Icon,
  Card,
  CardBody,
  Spinner,
  IconButton,
  useColorMode,
  useColorModeValue,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon, SettingsIcon, SearchIcon, DownloadIcon, LockIcon, ViewIcon, SunIcon, MoonIcon, RepeatIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import ContactUs from './ContactUs.jsx';

// Actual screenshot file paths
const screenshots = [
  '/Screenshot 2025-07-07 at 1.00.15\u202FPM.png',
  '/Screenshot 2025-07-07 at 1.00.33\u202FPM.png',
  '/Screenshot 2025-07-07 at 1.00.49\u202FPM.png',
  '/Screenshot 2025-07-07 at 1.01.05\u202FPM.png',
  '/Screenshot 2025-07-07 at 12.59.57\u202FPM.png',
];

const features = [
  { icon: StarIcon, title: 'High-Quality Wallpapers', description: 'Curated selection of stunning HD anime wallpapers.' },
  { icon: CheckCircleIcon, title: 'Organized Categories', description: 'Easily browse wallpapers sorted into various categories.' },
  { icon: SearchIcon, title: 'Powerful Search', description: 'Find wallpapers quickly by title, tag, or category.' },
  { icon: DownloadIcon, title: 'Easy Downloads', description: 'Download your favorite free wallpapers directly to your device.' },
  { icon: LockIcon, title: 'Premium Wallpapers', description: 'Unlock exclusive featured wallpapers with a small payment.' },
  { icon: RepeatIcon, title: 'Caching & Offline', description: 'Enjoy faster loading and access previously viewed content offline.' },
  { icon: Spinner, title: 'Smooth Loading', description: 'Clean shimmer/skeleton loading animations for a polished feel.' },
  { icon: SunIcon, title: 'Dark & Light Mode', description: 'Switch between themes and save your preference.' },
  { icon: ViewIcon, title: 'Fullscreen View', description: 'Immersive fullscreen view with smooth zoom and gesture navigation.' },
  { icon: SettingsIcon, title: 'In-App Updates', description: 'Stay up-to-date with the latest version via the in-app update system.' },
];

const UPDATE_JSON_URL = 'https://raw.githubusercontent.com/mannas006/PixsBliss_mobile_app/refs/heads/main/update.json';

function HomePage() {
  const [apkUrl, setApkUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const nextMode = useColorModeValue('Dark', 'Light');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  useEffect(() => {
    const fetchApkUrl = async () => {
      try {
        const response = await fetch(UPDATE_JSON_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApkUrl(data.apk_url);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApkUrl();
  }, []);

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} minH="100vh">
      <Container maxW="container.md" py={8}>
        {/* Header Section */}
        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} justify="space-between" mb={6} gap={6}>
          <HStack align="center" spacing={4}>
            <Image
              boxSize={{ base: '72px', md: '96px' }}
              src={'/Adobe Express - file (3).png'}
              alt="PixsBliss App Icon"
              borderRadius="2xl"
              boxShadow="lg"
            />
            <VStack align="start" spacing={1}>
              <Heading as="h1" size="lg" fontWeight="bold">PixsBliss</Heading>
              <Text fontSize="sm" color="gray.500">PixsBliss Team</Text>
              <HStack spacing={1}>
                <StarIcon color="yellow.400" boxSize={4} />
                <Text fontWeight="bold" fontSize="sm">4.8</Text>
                <Text fontSize="xs" color="gray.500">· 10+ reviews</Text>
              </HStack>
            </VStack>
          </HStack>
          <Button
            as={Link}
            href={apkUrl || '#'}
            colorScheme="blue"
            size="lg"
            w={{ base: 'full', md: 'auto' }}
            isExternal
            mb={{ base: 2, md: 0 }}
            isLoading={isLoading}
            loadingText="Loading..."
            disabled={!apkUrl}
          >
            Download APK
          </Button>
          <IconButton
            aria-label={`Toggle ${nextMode} Mode`}
            icon={icon}
            onClick={toggleColorMode}
            variant="ghost"
            size="lg"
            alignSelf={{ base: 'flex-end', md: 'center' }}
          />
        </Flex>

        {/* Info Row */}
        <Flex justify="space-between" align="center" mb={8} px={2}>
          <VStack spacing={0} align="center">
            <Text fontWeight="bold" fontSize="md">4.8★</Text>
            <Text fontSize="xs" color="gray.500">10+ reviews</Text>
          </VStack>
          <VStack spacing={0} align="center">
            <Text fontWeight="bold" fontSize="md">10+</Text>
            <Text fontSize="xs" color="gray.500">Downloads</Text>
          </VStack>
          <VStack spacing={0} align="center">
            <Text fontWeight="bold" fontSize="md">Everyone</Text>
            <Text fontSize="xs" color="gray.500">Content rating</Text>
          </VStack>
        </Flex>

        {/* Screenshot Carousel */}
        <Box mb={10}>
          <Text fontWeight="bold" fontSize="lg" mb={3} ml={1}>
            Preview
          </Text>
          <Box bg={useColorModeValue('white', 'gray.800')} borderRadius="2xl" boxShadow="lg" px={{ base: 1, md: 4 }} py={4}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              style={{ paddingBottom: '1rem' }}
            >
              {screenshots.map((src, index) => (
                <SwiperSlide key={index}>
                  <Box cursor="pointer" onClick={() => { setSelectedScreenshot(src); onOpen(); }}>
                    <AspectRatio ratio={9 / 16} maxW="100%" borderRadius="2xl" boxShadow="2xl" bg="gray.100" overflow="hidden">
                      <img src={src} alt={`Screenshot ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }} />
                    </AspectRatio>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* Modal for enlarged screenshot */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
              <ModalBody p={0} display="flex" justifyContent="center" alignItems="center" onClick={onClose} cursor="pointer">
                {selectedScreenshot && (
                  <img
                    src={selectedScreenshot}
                    alt="Enlarged Screenshot"
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '80vh',
                      borderRadius: '24px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.35)'
                    }}
                  />
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        {/* About Section */}
        <Box mb={10}>
          <Heading as="h2" size="md" mb={2}>About this app</Heading>
          <Text color="gray.700" mb={4}>
            PixsBliss is your ultimate source for stunning anime wallpapers. Browse, search, and download high-quality HD wallpapers, organized by category. Enjoy a smooth, modern experience with offline support, dark/light mode, and more!
          </Text>
          <Heading as="h3" size="sm" mb={2}>Highlights</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {features.map((feature, index) => (
              <Card key={index} boxShadow="sm" borderRadius="md">
                <CardBody>
                  <HStack align="start" spacing={4}>
                    <Icon as={feature.icon} boxSize={6} color="blue.500" />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold" fontSize="lg">
                        {feature.title}
                      </Text>
                      <Text color="gray.700">{feature.description}</Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          gap={4}
          py={4}
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <Link as={RouterLink} to="/contact-us" color="gray.600" fontSize="sm">
            Contact Us
          </Link>
          <Link as={RouterLink} to="/privacy-policy" color="gray.600" fontSize="sm">
            Privacy Policy
          </Link>
          <Text color="gray.500" fontSize="sm">
            © 2025 PixsBliss. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Box>
  );
}

export default App;
