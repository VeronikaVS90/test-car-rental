const { HeroTitle, HeroDescription, HeroLink } = require('./Hero.styled');

const Hero = () => {
  return (
    <>
      <HeroTitle>The Car Rental App</HeroTitle>
      <HeroDescription>
        Discover the freedom of the open road with our premier car rental
        service. Whether you're planning a weekend getaway or a cross-country
        adventure, we've got the perfect vehicle to suit your needs. With a wide
        range of vehicles, competitive rates, and top-notch customer service,
        your journey begins here. Start exploring, start driving, and make
        unforgettable memories with us. Book your dream car today!
      </HeroDescription>
      <HeroLink to="/catalog">Start</HeroLink>
    </>
  );
};

export default Hero;
