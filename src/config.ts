export const METEO_API_URL = 'https://api.open-meteo.com/v1/forecast';
export const GEO_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
export const REVERSE_GEO_API_URL =
  'https://nominatim.openstreetmap.org/reverse?accept-language=en';
export const TIMEZONE_API_URL = 'https://worldtimeapi.org/api/timezone/';
export const HOUR_CARDS_QUANTITY = 24;
export const DAWN_TIME = 7;
export const DUSK_TIME = 20;
export const DELAY_TO_DAYTIME = 15;
export const DELAY_TO_NIGHTTIME = 3;
export const HOURS_PER_DAY = 24;
export const DAY_ICON_NAME = 'day';
export const SCROLL_OFFSET = 100;
export const SEARCH_ERROR = "Woops! Can't find such a city, try another one";
export const FETCH_ERROR = 'Woops! Some network error... try again later';
export const GEOLOCATION_ERROR =
  'Woops! Geodata turned off, pick city or use search';
export const WEEK_DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const CAPITALS = [
  'Abu Dhabi',
  'Abuja',
  'Accra',
  'Adamstown',
  'Addis Ababa',
  'Algiers',
  'Alofi',
  'Amman',
  'Amsterdam',
  'Andorra la Vella',
  'Ankara',
  'Antananarivo',
  'Apia',
  'Ashgabat',
  'Asmara',
  'Asunción',
  'Athens',
  'Avarua',
  'Baghdad',
  'Baku',
  'Bamako',
  'Bandar Seri Begawan',
  'Bangkok',
  'Bangui',
  'Banjul',
  'Basse-Terre',
  'Basseterre',
  'Beijing',
  'Beirut',
  'Belgrade',
  'Belmopan',
  'Berlin',
  'Bern',
  'Bishkek',
  'Bissau',
  'Bloemfontein',
  'Bogotá',
  'Brasília',
  'Bratislava',
  'Brazzaville',
  'Bridgetown',
  'Brussels',
  'Bucharest',
  'Budapest',
  'Buenos Aires',
  'Cairo',
  'Canberra',
  'Cape Town',
  'Caracas',
  'Castries',
  'Cayenne',
  'Charlotte Amalie',
  'Chișinău',
  'City of San Marino',
  'City of Victoria',
  'Cockburn Town',
  'Conakry',
  'Copenhagen',
  'Dakar',
  'Damascus',
  'Dhaka',
  'Diego Garcia',
  'Dili',
  'Djibouti',
  'Dodoma',
  'Doha',
  'Douglas',
  'Dublin',
  'Dushanbe',
  'El Aaiún',
  'Fakaofo',
  'Flying Fish Cove',
  'Fort-de-France',
  'Freetown',
  'Funafuti',
  'Gaborone',
  'George Town',
  'Georgetown',
  'Gibraltar',
  'Gitega',
  'Guatemala City',
  'Gustavia',
  'Hagåtña',
  'Hamilton',
  'Hanoi',
  'Harare',
  'Havana',
  'Helsinki',
  'Honiara',
  'Islamabad',
  'Jakarta',
  'Jamestown',
  'Jerusalem',
  'Juba',
  'Kabul',
  'Kampala',
  'Kathmandu',
  'Khartoum',
  'Kigali',
  'King Edward Point',
  'Kingston',
  'Kingstown',
  'Kinshasa',
  'Kralendijk',
  'Kuala Lumpur',
  'Kuwait City',
  'Kyiv',
  'Libreville',
  'Lilongwe',
  'Lima',
  'Lisbon',
  'Ljubljana',
  'Lomé',
  'London',
  'Longyearbyen',
  'Luanda',
  'Lusaka',
  'Luxembourg',
  'Madrid',
  'Majuro',
  'Malabo',
  'Malé',
  'Mamoudzou',
  'Managua',
  'Manama',
  'Manila',
  'Maputo',
  'Mariehamn',
  'Marigot',
  'Maseru',
  'Mata-Utu',
  'Mbabane',
  'Mexico City',
  'Minsk',
  'Mogadishu',
  'Monaco',
  'Monrovia',
  'Montevideo',
  'Moroni',
  'Moscow',
  'Muscat',
  "N'Djamena",
  'Nairobi',
  'Nassau',
  'Naypyidaw',
  'New Delhi',
  'Ngerulmud',
  'Niamey',
  'Nicosia',
  'Nouakchott',
  'Nouméa',
  "Nuku'alofa",
  'Nur-Sultan',
  'Nuuk',
  'Oranjestad',
  'Oslo',
  'Ottawa',
  'Ouagadougou',
  'Pago Pago',
  'Palikir',
  'Panama City',
  'Papeetē',
  'Paramaribo',
  'Paris',
  'Philipsburg',
  'Phnom Penh',
  'Plymouth',
  'Podgorica',
  'Port Louis',
  'Port Moresby',
  'Port of Spain',
  'Port Vila',
  'Port-au-Prince',
  'Port-aux-Français',
  'Porto-Novo',
  'Prague',
  'Praia',
  'Pretoria',
  'Pristina',
  'Pyongyang',
  'Quito',
  'Rabat',
  'Ramallah',
  'Reykjavik',
  'Riga',
  'Riyadh',
  'Road Town',
  'Rome',
  'Roseau',
  'Saint Helier',
  "Saint John's",
  'Saint-Denis',
  'Saint-Pierre',
  'Saipan',
  'San José',
  'San Juan',
  'San Salvador',
  "Sana'a",
  'Santiago',
  'Santo Domingo',
  'São Tomé',
  'Sarajevo',
  'Seoul',
  'Singapore',
  'Skopje',
  'Sofia',
  'South Tarawa',
  "St. George's",
  'St. Peter Port',
  'Stanley',
  'Stockholm',
  'Sucre',
  'Suva',
  'Taipei',
  'Tallinn',
  'Tashkent',
  'Tbilisi',
  'Tegucigalpa',
  'Tehran',
  'The Valley',
  'Thimphu',
  'Tirana',
  'Tokyo',
  'Tórshavn',
  'Tripoli',
  'Tunis',
  'Ulan Bator',
  'Vaduz',
  'Valletta',
  'Vatican City',
  'Victoria',
  'Vienna',
  'Vientiane',
  'Vilnius',
  'Warsaw',
  'Washington DC',
  'Washington, D.C.',
  'Wellington',
  'West Island',
  'Willemstad',
  'Windhoek',
  'Yamoussoukro',
  'Yaoundé',
  'Yaren',
  'Yerevan',
  'Zagreb',
];
