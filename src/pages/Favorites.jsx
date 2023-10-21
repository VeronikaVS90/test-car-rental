import CarsList from 'components/List/List';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Container/Container.styled';
import { useCars } from 'context/context';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const { wishlist, isLoading } = useCars();
  const [filteredWishlist, setFilteredWishlist] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredWishlist(wishlist);
    }
  }, [wishlist, isLoading]);

  return (
    <CatalogSection>
      <Container>
        <Filter cars={wishlist} setFiltered={setFilteredWishlist} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <CarsList allCars={filteredWishlist} />
        )}
      </Container>
    </CatalogSection>
  );
};

export default FavoritesPage;
