/**
 * Transforing the Date object to a formated string.
 * @param {object} currentDate is a Date object.
 * @param {string} pattern is a string that repersents the output format.
 * @return {string} Return a format date string based on the pattern.
 */
function getFormatedDate(currentDate, pattern) {
  let month = currentDate.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let date = currentDate.getDate();
  date = date < 10 ? `0${date}` : date;
  return pattern.replace('yyyy', currentDate.getFullYear()).replace('mm', month).replace('dd', date);
}

module.exports = {
  getCurrentDateString: pattern => getFormatedDate(new Date(), pattern),
  getDateString: (date, pattern) => {
    if (typeof date === 'string') return getFormatedDate(new Date(date), pattern);
    else if (date instanceof Date) return getFormatedDate(date, pattern);
    throw new Error('Please offer a date string or Date object for the param.');
  }
};
