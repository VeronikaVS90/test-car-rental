import { BsStackOverflow } from 'react-icons/bs';
import { SiAmazoncloudwatch } from 'react-icons/si';
import { Empty, EmptyDescription } from './Empty.styled';

const EmptySection = ({ children, filter = false }) => {
  return (
    <Empty>
      {filter ? (
        <SiAmazoncloudwatch size={100} />
      ) : (
        <BsStackOverflow size={100} />
      )}
      <EmptyDescription>{children}</EmptyDescription>
    </Empty>
  );
};

export default EmptySection;
