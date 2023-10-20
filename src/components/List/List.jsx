import CarCard from 'components/Card/Card';
import { ItemsList } from './List.styled';

const CarsList = ({ allCars }) => {
  return (
    <ItemsList>
      {allCars.map(car => (
        <CarCard car={car} key={car.id + car.mileage} />
      ))}
    </ItemsList>
  );
};

export default CarsList;
