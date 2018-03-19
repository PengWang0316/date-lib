/**
 * Getting a pattern array for the giving pattern string.
 * @param {string} pattern is a string that repersents the output date format.
 * @return {array} return an date format array. If input is yyyy/mm/dd, the output should be ['yyyy/mm/dd', 'yyyy', '/', 'mm', '/', 'dd']
 */
/*
function getPatternArray(pattern) {
  const patternArray = pattern.match(/(\w+)(\W+)(\w+)(\W+)(\w+)/);
  if (!patternArray) throw new Error('Please offer a correct date pattern.');
  return patternArray;
}
*/

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
  // return `${month}/${date}/${currentDate.getFullYear()}`;
  return pattern.replace('yyyy', currentDate.getFullYear()).replace('mm', month).replace('dd', date);
}

module.exports = {
  getCurrentDateString: pattern => getFormatedDate(new Date(), pattern)
};
