import List from 'components/List/List';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import { Container } from 'components/Container/Container.styled';
import { useCars } from 'context/context';

const CatalogPage = () => {
  const { allCars, isLoading } = useCars();

  return (
    <CatalogSection>
      <Container>
        {isLoading ? <div>Loading</div> : <List allCars={allCars} />}
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
