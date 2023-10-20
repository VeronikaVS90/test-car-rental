import List from 'components/List/List';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import { Container } from 'components/Container/Container.styled';

const CatalogPage = () => {
  return (
    <CatalogSection>
      <Container>
        <List />
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
