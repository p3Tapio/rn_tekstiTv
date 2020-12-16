import { useState } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState<string | undefined>('portrait');

  Dimensions.addEventListener('change', () => {
    const dimensions = Dimensions.get('screen');
    setOrientation(dimensions.height >= dimensions.width ? 'portrait' : 'landscape');
  });

  return orientation;
};

export default useOrientation;
