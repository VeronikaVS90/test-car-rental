import { PageHeader, NavList, NavigationLink } from './Header.styled';
import { useCars } from 'context/context';
import { AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  const { wishlist } = useCars();

  return (
    <PageHeader>
      <nav>
        <NavList>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/catalog">Catalog</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/favorites">
              <span>Favorites </span>
              {wishlist.length > 0 && (
                <>
                  <AiOutlineHeart />
                  <span>{wishlist.length}</span>
                </>
              )}
            </NavigationLink>
          </li>
        </NavList>
      </nav>
    </PageHeader>
  );
};

export default Header;
