export const getClearNumber = value => {
  return Number(value.replace(',', ''));
};

export const formatMileage = value => {
  const noCommaValue = getClearNumber(value);

  if (!noCommaValue || value === '') {
    return '';
  }

  return Number(noCommaValue).toLocaleString('en-US');
};