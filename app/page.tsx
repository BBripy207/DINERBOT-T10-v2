import {
    Container,
    Heading,
    Text,
    Image,
    VStack,
    HStack,
    AspectRatio,
    Flex,
    Stack,
} from '@chakra-ui/react'

export default function Home() {
    return (
        <Flex minH="100vh" direction="column">
            {/* Header */}
            <Flex p={5} justify="flex-start" align="center">
                <Image
                    src="/simir.png"
                    alt="SIMIR Logo"
                    w="100px"
                    opacity={0.9}
                />
            </Flex>

            {/* Main Content */}
            <Container maxW="900px" centerContent py={10}>
                <VStack gap={8} textAlign="center">

                    {/* Main Title */}
                    <Heading
                        fontSize={{ base: '3.5rem', md: '6rem', lg: '8rem' }}
                        fontWeight={900}
                        letterSpacing="-0.02em"
                        bgGradient="linear(135deg, white 0%, #e0e0e0 100%)"
                        bgClip="text"
                        textShadow="0 0 30px rgba(255, 255, 255, 0.3)"
                        mb={4}
                    >
                        DINERBOT{' '}
                        <Text
                            as="span"
                            bgGradient="linear(135deg, #4A9EFF 0%, #007BFF 100%)"
                            bgClip="text"
                        >
                            T10
                        </Text>
                    </Heading>                    {/* Hero Image */}
                    <Container w="full" maxW="600px">
                        <Image
                            src="/1.png"
                            alt="DINERBOT T10 Introducción"
                            w="full"
                            borderRadius="lg"
                            shadow="2xl"
                        />
                    </Container>

                    {/* Interaction Title */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        textAlign="center"
                        maxW="700px"
                    >
                        Interactivo y atractivo, haciendo cada momento divertido
                    </Heading>

                    {/* Description */}
                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Los movimientos de la cabeza son adaptativos y responden a acciones como movimiento,
                        tacto y entrega, proporcionando feedback dinámico.
                    </Text>

                    {/* First Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/ZoWQ_Dj97HI?autoplay=1&mute=1&loop=1&playlist=ZoWQ_Dj97HI&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Video"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

                    {/* Enhanced Interaction */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Interacción mejorada
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Cabeza móvil, pantalla de 23,8 pulgadas y botones interactivos redefinen la funcionalidad.
                    </Text>

                    {/* Algorithms */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Algoritmos patentados y distribución multi-robot
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Los algoritmos de IA patentados permiten a los robots optimizar la planificación de rutas
                        para una ejecución eficiente de{' '}
                        <Text as="span" color="#4A9EFF" fontWeight={500}>
                            tareas
                        </Text>
                    </Text>

                    {/* Final Images */}
                    <VStack gap={6} mt={8}>
                        <Image
                            src="/5.png"
                            alt="DINERBOT T10 Final"
                            maxW="600px"
                            w="full"
                            borderRadius="lg"
                            shadow="2xl"
                        />
                        <Image
                            src="/6.png"
                            alt="DINERBOT T10 Conclusión"
                            maxW="600px"
                            w="full"
                            borderRadius="lg"
                            shadow="2xl"
                        />
                    </VStack>

                </VStack>
            </Container>

            {/* Footer */}
            <HStack gap={6} p={5} justify="flex-start" align="center" mt={10}>
                <Image
                    src="/simir.png"
                    alt="SIMIR Logo"
                    w="100px"
                    opacity={0.9}
                />
                <Text
                    fontSize="0.95rem"
                    fontWeight={300}
                    color="#a0a0a0"
                    letterSpacing="1px"
                    fontFamily="monospace"
                >
                    +52 614 551 8651
                </Text>
            </HStack>
        </Flex>
    )
}