import { Puff } from 'react-loader-spinner';
import { colors } from 'styles/common/vars';

const LoadingSpinner = () => (
  <Puff
    width={150}
    wrapperStyle={{ justifyContent: 'center', paddingTop: '5%' }}
    secondaryColor={colors.accentColor}
    color={colors.accentHoverColor}
    strokeWidth={4}
    strokeWidthSecondary={4}
  />
);

export default LoadingSpinner;
