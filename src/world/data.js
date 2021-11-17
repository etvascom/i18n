const raw = {
  AD: { full: 'Andorra' },
  AE: {
    full: 'United Arab Emirates',
    native: 'الإمارات العربيّة المتّحدة',
    dir: 'rtl',
  },
  AF: { full: 'Afghanistan', native: 'افغانستان', dir: 'rtl' },
  AG: { full: 'Antigua and Barbuda' },
  AI: { full: 'Anguilla' },
  AL: {
    full: 'Albania',
    native: 'Shqipëria',
    translations: { de: 'Albanien' },
  },
  AM: { full: 'Armenia', native: 'Hayastán' },
  AO: { full: 'Angola' },
  AQ: { full: 'Antarctica' },
  AR: { full: 'Argentina' },
  AS: { full: 'American Samoa' },
  AT: {
    full: 'Austria',
    native: 'Österreich',
    translations: { de: 'Österreich' },
  },
  AU: { full: 'Australia' },
  AW: { full: 'Aruba' },
  AX: { full: 'Åland Islands' },
  AZ: { full: 'Azerbaijan', native: 'Azərbaycan' },
  BA: { full: 'Bosnia and Herzegovina', native: 'Босна и Херцеговина' },
  BB: { full: 'Barbados' },
  BD: { full: 'Bangladesh', native: 'বাংলাদেশ' },
  BE: { full: 'Belgium', native: 'Belgique' },
  BF: { full: 'Burkina Faso' },
  BG: { full: 'Bulgaria', native: 'България' },
  BH: { full: 'Bahrain', native: 'البحرين', dir: 'rtl' },
  BI: { full: 'Burundi' },
  BJ: { full: 'Benin' },
  BL: { full: 'Saint Barthélemy' },
  BM: { full: 'Bermuda' },
  BN: { full: 'Brunei Darussalam', native: 'بروني', dir: 'rtl' },
  BO: {
    full: 'Bolivia (Plurinational State of)',
    short: 'Bolivia',
    native: 'Volívia',
  },
  BQ: { full: 'Bonaire, Sint Eustatius and Saba' },
  BR: { full: 'Brazil' },
  BS: { full: 'Bahamas' },
  BT: { full: 'Bhutan', native: 'འབྲུག་ཡུལ' },
  BV: { full: 'Bouvet Island' },
  BW: { full: 'Botswana' },
  BY: { full: 'Belarus', native: 'Беларусь' },
  BZ: { full: 'Belize' },
  CA: { full: 'Canada' },
  CC: { full: 'Cocos (Keeling) Islands' },
  CD: { full: 'Congo, Democratic Republic of the' },
  CF: { full: 'Central African Republic', native: 'Ködörösêse tî Bêafrîka' },
  CG: { full: 'Congo' },
  CH: { full: 'Switzerland', native: 'Schweiz' },
  CI: { full: "Côte d'Ivoire", translations: { de: 'Elfenbeinküste' } },
  CK: { full: 'Cook Islands' },
  CL: { full: 'Chile' },
  CM: { full: 'Cameroon' },
  CN: { full: 'China', native: '中国' },
  CO: { full: 'Colombia' },
  CR: { full: 'Costa Rica' },
  CU: { full: 'Cuba' },
  CV: { full: 'Cabo Verde' },
  CW: { full: 'Curaçao' },
  CX: { full: 'Christmas Island' },
  CY: { full: 'Cyprus', native: 'Κύπρος Kıbrıs' },
  CZ: { full: 'Czechia', native: 'Česko' },
  DE: {
    full: 'Germany',
    native: 'Deutschland',
    translations: { de: 'Deutschland' },
  },
  DJ: { full: 'Djibouti', native: 'جيبوتي', dir: 'rtl' },
  DK: { full: 'Denmark', native: 'Danmark', translations: { de: 'Dänemark' } },
  DM: { full: 'Dominica' },
  DO: { full: 'Dominican Republic' },
  DZ: { full: 'Algeria', native: 'Dzayer' },
  EC: { full: 'Ecuador' },
  EE: { full: 'Estonia', native: 'Eesti' },
  EG: { full: 'Egypt', native: 'مصر', translations: { de: 'Ägypten' } },
  EH: { full: 'Western Sahara' },
  ER: { full: 'Eritrea', native: 'إرتريا' },
  ES: { full: 'Spain', native: 'España' },
  ET: { full: 'Ethiopia', native: 'ኢትዮጵያ' },
  FI: { full: 'Finland' },
  FJ: { full: 'Fiji', native: 'फ़िजी' },
  FK: { full: 'Falkland Islands (Malvinas)' },
  FM: { full: 'Micronesia (Federated States of)', short: 'Micronesia' },
  FO: { full: 'Faroe Islands' },
  FR: { full: 'France' },
  GA: { full: 'Gabon' },
  GB: {
    full: 'United Kingdom of Great Britain and Northern Ireland',
    short: 'United Kingdom',
    translations: { de: 'Großbritannien' },
  },
  GD: { full: 'Grenada' },
  GE: { full: 'Georgia', native: 'საქართველო' },
  GF: { full: 'French Guiana' },
  GG: { full: 'Guernsey' },
  GH: { full: 'Ghana' },
  GI: { full: 'Gibraltar' },
  GL: { full: 'Greenland' },
  GM: { full: 'Gambia' },
  GN: { full: 'Guinea' },
  GP: { full: 'Guadeloupe' },
  GQ: { full: 'Equatorial Guinea' },
  GR: { full: 'Greece', native: 'Ελλάς' },
  GS: { full: 'South Georgia and the South Sandwich Islands' },
  GT: { full: 'Guatemala' },
  GU: { full: 'Guam' },
  GW: { full: 'Guinea-Bissau' },
  GY: { full: 'Guyana' },
  HK: { full: 'Hong Kong', native: '香港' },
  HM: { full: 'Heard Island and McDonald Islands' },
  HN: { full: 'Honduras' },
  HR: { full: 'Croatia', native: 'Hrvatska' },
  HT: { full: 'Haiti', native: 'Haïti' },
  HU: { full: 'Hungary' },
  ID: { full: 'Indonesia' },
  IE: { full: 'Ireland' },
  IL: { full: 'Israel', native: 'ישראל', dir: 'rtl' },
  IM: { full: 'Isle of Man' },
  IN: { full: 'India', native: 'ভাৰত' },
  IO: { full: 'British Indian Ocean Territory' },
  IQ: { full: 'Iraq', native: 'العراق', dir: 'rtl' },
  IR: {
    full: 'Iran (Islamic Republic of)',
    short: 'Iran',
    native: 'ایران',
    dir: 'rtl',
  },
  IS: { full: 'Iceland' },
  IT: { full: 'Italy' },
  JE: { full: 'Jersey' },
  JM: { full: 'Jamaica' },
  JO: { full: 'Jordan', native: 'الأردن' },
  JP: { full: 'Japan', native: '日本' },
  KE: { full: 'Kenya' },
  KG: { full: 'Kyrgyzstan', native: 'Кыргызстан' },
  KH: { full: 'Cambodia', native: 'កម្ពុជា' },
  KI: { full: 'Kiribati' },
  KM: { full: 'Comoros', native: 'جزر القمر', dir: 'rtl' },
  KN: { full: 'Saint Kitts and Nevis' },
  KP: {
    full: "Korea (Democratic People's Republic of)",
    short: 'North Korea',
    native: '북조선',
  },
  KR: { full: 'Korea, Republic of', short: 'South Korea', native: '남한' },
  KW: { full: 'Kuwait', native: 'دولة الكويت', dir: 'rtl' },
  KY: { full: 'Cayman Islands' },
  KZ: { full: 'Kazakhstan', native: 'Казахстан' },
  LA: {
    full: "Lao People's Democratic Republic",
    short: 'Laos',
    native: 'ປະເທດລາວ',
  },
  LB: { full: 'Lebanon', native: 'لبنان', dir: 'rtl' },
  LC: { full: 'Saint Lucia' },
  LI: { full: 'Liechtenstein' },
  LK: { full: 'Sri Lanka', native: 'ශ්‍රී ලංකාව இலங்கை' },
  LR: { full: 'Liberia' },
  LS: { full: 'Lesotho' },
  LT: { full: 'Lithuania' },
  LU: { full: 'Luxembourg' },
  LV: { full: 'Latvia' },
  LY: { full: 'Libya', native: 'ليبيا' },
  MA: { full: 'Morocco', native: 'المغرب' },
  MC: { full: 'Monaco', native: 'Múnegu' },
  MD: { full: 'Moldova, Republic of' },
  ME: { full: 'Montenegro', native: 'Црна Гора' },
  MF: { full: 'Saint Martin (French part)' },
  MG: { full: 'Madagascar' },
  MH: { full: 'Marshall Islands', native: 'Aorōkin M̧ajeļ' },
  MK: { full: 'North Macedonia', native: 'Северна Македонија' },
  ML: { full: 'Mali' },
  MM: { full: 'Myanmar', native: 'မြန်မာ' },
  MN: { full: 'Mongolia', native: 'Монгол Улс' },
  MO: { full: 'Macao' },
  MP: { full: 'Northern Mariana Islands' },
  MQ: { full: 'Martinique' },
  MR: { full: 'Mauritania', native: 'موريتانيا', dir: 'rt' },
  MS: { full: 'Montserrat' },
  MT: { full: 'Malta' },
  MU: { full: 'Mauritius' },
  MV: { full: 'Maldives', native: 'Dhivehi Raajje' },
  MW: { full: 'Malawi' },
  MX: { full: 'Mexico', native: 'Mēxihco' },
  MY: { full: 'Malaysia', native: 'மலேசியா' },
  MZ: { full: 'Mozambique', native: 'Moçambique' },
  NA: { full: 'Namibia' },
  NC: { full: 'New Caledonia' },
  NE: { full: 'Niger' },
  NF: { full: 'Norfolk Island' },
  NG: { full: 'Nigeria' },
  NI: { full: 'Nicaragua' },
  NL: { full: 'Netherlands', native: 'Nederlân' },
  NO: { full: 'Norway', native: 'Norge' },
  NP: { full: 'Nepal', native: 'नेपाल' },
  NR: { full: 'Nauru' },
  NU: { full: 'Niue' },
  NZ: { full: 'New Zealand', native: 'Aotearoa' },
  OM: { full: 'Oman', native: 'عُمان', dir: 'rtl' },
  PA: { full: 'Panama' },
  PE: { full: 'Peru', native: 'Perú' },
  PF: { full: 'French Polynesia' },
  PG: { full: 'Papua New Guinea' },
  PH: { full: 'Philippines' },
  PK: { full: 'Pakistan', native: 'پاکستان' },
  PL: { full: 'Poland', native: 'Polska' },
  PM: { full: 'Saint Pierre and Miquelon' },
  PN: { full: 'Pitcairn' },
  PR: { full: 'Puerto Rico' },
  PS: { full: 'Palestine, State of', native: 'فلسطين' },
  PT: { full: 'Portugal' },
  PW: { full: 'Palau' },
  PY: { full: 'Paraguay', native: 'Paraguái' },
  QA: { full: 'Qatar', native: 'قطر', dir: 'rtl' },
  RE: { full: 'Réunion' },
  RO: { full: 'Romania', native: 'România' },
  RS: { full: 'Serbia', native: 'Srbija Србија' },
  RU: { full: 'Russian Federation', native: 'Россия' },
  RW: { full: 'Rwanda' },
  SA: { full: 'Saudi Arabia', native: 'المملكة العربية السعودية' },
  SB: { full: 'Solomon Islands' },
  SC: { full: 'Seychelles' },
  SD: { full: 'Sudan', native: 'السودان' },
  SE: { full: 'Sweden', native: 'Sverige', translations: { de: 'Schweiz' } },
  SG: { full: 'Singapore', native: 'சிங்கப்பூர்' },
  SH: { full: 'Saint Helena, Ascension and Tristan da Cunha' },
  SI: { full: 'Slovenia' },
  SJ: { full: 'Svalbard and Jan Mayen' },
  SK: { full: 'Slovakia', native: 'Slovensko' },
  SL: { full: 'Sierra Leone' },
  SM: { full: 'San Marino' },
  SN: { full: 'Senegal', native: 'Sénégal' },
  SO: { full: 'Somalia', native: 'الصومال' },
  SR: { full: 'Suriname' },
  SS: { full: 'South Sudan', native: 'Sudan Kusini' },
  ST: { full: 'Sao Tome and Principe' },
  SV: { full: 'El Salvador' },
  SX: { full: 'Sint Maarten (Dutch part)' },
  SY: { full: 'Syrian Arab Republic', native: 'سورية', dir: 'rtl' },
  SZ: { full: 'Eswatini' },
  TC: { full: 'Turks and Caicos Islands' },
  TD: { full: 'Chad', native: 'تشاد', dir: 'rtl' },
  TF: { full: 'French Southern Territories' },
  TG: { full: 'Togo' },
  TH: { full: 'Thailand', native: 'ราชอาณาจักรไทย' },
  TJ: { full: 'Tajikistan', native: 'Тоҷикистон' },
  TK: { full: 'Tokelau' },
  TL: { full: 'Timor-Leste' },
  TM: { full: 'Turkmenistan', native: 'Türkiye' },
  TN: { full: 'Tunisia', native: 'تونس', dir: 'rtl' },
  TO: { full: 'Tonga' },
  TR: { full: 'Turkey', translations: { de: 'Türkei' } },
  TT: { full: 'Trinidad and Tobago' },
  TV: { full: 'Tuvalu' },
  TW: { full: 'Taiwan, Province of China' },
  TZ: { full: 'Tanzania, United Republic of' },
  UA: { full: 'Ukraine', native: 'Україна' },
  UG: { full: 'Uganda' },
  UM: { full: 'United States Minor Outlying Islands' },
  US: { full: 'United States of America' },
  UY: { full: 'Uruguay' },
  UZ: { full: 'Uzbekistan', native: 'Ўзбекистон' },
  VA: { full: 'Holy See' },
  VC: { full: 'Saint Vincent and the Grenadines' },
  VE: { full: 'Venezuela (Bolivarian Republic of)' },
  VG: { full: 'Virgin Islands (British)' },
  VI: { full: 'Virgin Islands (U.S.)' },
  VN: { full: 'Viet Nam' },
  VU: { full: 'Vanuatu' },
  WF: { full: 'Wallis and Futuna' },
  WS: { full: 'Samoa', native: 'Sāmoa' },
  YE: { full: 'Yemen', native: 'اليمن', dir: 'rtl' },
  YT: { full: 'Mayotte' },
  ZA: { full: 'South Africa', native: 'Afrika-Borwa' },
  ZM: { full: 'Zambia' },
  ZW: { full: 'Zimbabwe' },
}

// const FORMATS = {
//   code: '{%i}',
//   full: '{%f}',
//   short: '{%s}',
//   native: '{%n}',
//   prefix: '{%p}',
//   currency: '{%c}',
//   symbol: '{%$}',
//   eu: '{%e}',
//   direction: '{%d}',
//   translation: language => `{%t${language}}`,
// }

const asArray = func =>
  Object.keys(raw).map(code => func({ code, ...raw[code] }))

const Currency = (code, defaultValue = '') =>
  raw[code.trim().toUpperCase()]?.currency || defaultValue
const Prefix = (code, defaultValue = '') =>
  raw[code.trim().toUpperCase()]?.prefix || defaultValue

export const Countries = {
  raw,
  asArray,
  Currency,
  Prefix,
}

// const dropdownOptions = Countries.asArray(raw => ({
//   currency: Countries.FORMATS.currency,
//   id: Countries.FORMATS.code,
//   label: Countries.FORMATS.short,
// }))

// const dropdownOptions = Countries.asArray({
//   currency: [`Current currency: ${Countries.FORMATS.currency}`, 'USD'],
//   id: Countries.FORMATS.code,
//   label: [
//     `${Countries.FORMATS.short} (${Countries.FORMATS.translation('de')})`,
//     Countries.FORMATS.short,
//     Countries.FORMATS.full,
//   ],
// })