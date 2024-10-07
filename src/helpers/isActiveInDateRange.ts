import { isAfter, isBefore, parseISO, isEqual } from 'date-fns';

const isActiveInDateRange = (startDate: string, endDate?: string): boolean => {
  const nowUTC = new Date(); 
  const startUTC = parseISO(startDate); 
  const endUTC = endDate ? parseISO(endDate) : undefined; 

  if (!endUTC) {
    return isAfter(nowUTC, startUTC) || isEqual(nowUTC, startUTC);
  }

  return (isAfter(nowUTC, startUTC) || isEqual(nowUTC, startUTC)) &&
    (isBefore(nowUTC, endUTC) || isEqual(nowUTC, endUTC));
};

export { isActiveInDateRange };