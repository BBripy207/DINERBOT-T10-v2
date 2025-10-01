import {
    Container,
    Heading,
    Text,
    Image,
    VStack,
    HStack,
    AspectRatio,
    Flex,
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
                    </Heading>

                    {/* Hero Image */}
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

                    {/* Second Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/1hho2BwvPBM?autoplay=1&mute=1&loop=1&playlist=1hho2BwvPBM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Video 2"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

                    {/* Self Service */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Auto servicio sin esfuerzo, diseñado con esmero
                    </Heading>

                    <VStack gap={2}>
                        <Text color="#b0b0b0" fontWeight={300}>a. Control táctil</Text>
                        <Text color="#b0b0b0" fontWeight={300}>b. Detección de bandejas con IA</Text>
                    </VStack>

                    {/* Third Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/FUW1yCr49ss?autoplay=1&mute=1&loop=1&playlist=FUW1yCr49ss&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Video 3"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

                    {/* Safety */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Salvaguardando cada paso
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Reconocimiento 360°, equipado con cuatro sensores de visión Stereo + VSLAM + 1 cámara RGB
                        para una visión Ultralarga y más clara
                    </Text>

                    {/* Fourth Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/dQ0lTmMw4iA?autoplay=1&mute=1&loop=1&playlist=dQ0lTmMw4iA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Video 4"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

                    {/* Simplicity */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Despreocúpate, disfruta de la sencillez
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Detección de bandeja 300°, gracias a la detección visual avanzada de platos,
                        con bandejas iluminadas avanzados, con guía en Pantalla y voz
                    </Text>

                    {/* Fifth Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/-m1Br0bGXM0?autoplay=1&mute=1&loop=1&playlist=-m1Br0bGXM0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Video 5"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

                    {/* Styles */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Estilos versátiles, a tu gusto
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Elige entre varias opciones: accesorios para la cabeza, expresiones, voz, Skins y una{' '}
                        <Text as="span" color="#4A9EFF" fontWeight={500}>
                            Pantalla grande
                        </Text>
                    </Text>

                    <Container w="full" maxW="600px">
                        <Image
                            src="/2.png"
                            alt="DINERBOT T10 Estilos y Accesorios"
                            w="full"
                            borderRadius="lg"
                            shadow="2xl"
                        />
                    </Container>

                    {/* Navigation */}
                    <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontWeight={700}
                        color="#4A9EFF"
                        mt={8}
                    >
                        Navegación y posicionamiento precisos
                    </Heading>

                    <Text
                        fontSize={{ base: '1rem', md: '1.1rem' }}
                        fontWeight={300}
                        color="#b0b0b0"
                        lineHeight={1.6}
                        maxW="600px"
                    >
                        Elaboración de mapas de posicionamiento precisos, con recolección de datos especiales,
                        sin interrupciones para máxima fiabilidad
                    </Text>

                    {/* Navigation Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/U2mV5ni_K9c?autoplay=1&mute=1&loop=1&playlist=U2mV5ni_K9c&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Navegación y Mapeo"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

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

                    {/* Algorithms Video */}
                    <Container w="full" maxW="700px">
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.youtube.com/embed/MqtkzA1MbYc?autoplay=1&mute=1&loop=1&playlist=MqtkzA1MbYc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="DINERBOT T10 Algoritmos y IA"
                                style={{ borderRadius: '8px' }}
                            />
                        </AspectRatio>
                    </Container>

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