import CarCard from 'components/Card/Card';
import { ItemsList, LoadMoreBtn } from './List.styled';
import { useState } from 'react';
import EmptySection from 'components/Empty/Empty';

const CarsList = ({ allCars }) => {
  const [loadMore, setLoadMore] = useState(false);

  const carsToRender = allCars.slice(0, loadMore ? allCars.length : 8);

  if (carsToRender.length === 0)
    return (
      <EmptySection filter>
        No cars were found for your request, try again!
      </EmptySection>
    );

  return (
    <>
      <ItemsList>
        {carsToRender.map(car => (
          <CarCard car={car} key={car.id + car.mileage} />
        ))}
      </ItemsList>
      {!loadMore && allCars.length > 8 && (
        <LoadMoreBtn type="button" onClick={setLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CarsList;
