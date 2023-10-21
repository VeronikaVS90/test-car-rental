import List from 'components/List/List';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Container/Container.styled';
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
        {isLoading ? <div>Loading</div> : <List allCars={filteredCars} />}
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
