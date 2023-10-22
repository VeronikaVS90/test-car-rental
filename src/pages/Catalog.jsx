import List from 'components/List/List';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Container/Container.styled';
import LoadingSpinner from 'components/Loader/Loader';
import { useCars } from 'context/context';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
  const { allCars, isLoading } = useCars();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredCars(allCars);
    }
  }, [allCars, isLoading]);

  return (
    <CatalogSection>
      <Container>
        <Filter cars={allCars} setFiltered={setFilteredCars} />
        {!isLoading && allCars.length > 0 ? (
          <List allCars={filteredCars} />
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
