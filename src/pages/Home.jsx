import Hero from 'components/Hero/Hero';
import { HeroSection } from 'components/Hero/Hero.styled';
import { Container } from 'components/Container/Container.styled';

const HomePage = () => {
  return (
    <HeroSection>
      <Container>
        <Hero />
      </Container>
    </HeroSection>
  );
};

export default HomePage;
