export function formatDate(date: string): string {
  let splitDate: string[];

  if (date.match(/[0-9]*\/[0-9]*\/[0-9]*/) != null) splitDate = date.split('/');
  else if (date.match(/[0-9]*\.[0-9]*\.[0-9]*/) != null) splitDate = date.split('.');
  else { return 'Unknown' }

  let [day, month, year] = splitDate;

  if( isNaN(+day) || isNaN(+month) || isNaN(+year) ) return "Unknown";
  if( +day <= 0 || +month <= 0 || +year <= 1500 ) return "Unknown";

  day = +day > 9 ? day : '0' + day;
  month = +month > 9 ? month : '0' + month;

  return `${day}.${month}.${year}`;
}
