import { Component, OnInit } from '@angular/core';
import {DbServiceService} from '../db-service.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-seach-form',
  templateUrl: './seach-form.component.html',
  styleUrls: ['./seach-form.component.css']
})
export class SeachFormComponent implements OnInit {
  inputForm;
  countries;
  states;
  help: string;
  public result: any;
  processForm(form) :void {
    this.db.newSearch(form);
    this.inputForm.reset();
    console.log("Form sent!")
    this.result = this.db.newAPICall().subscribe({
      next: data =>  {this.result = data},
      error: err => console.log(err),
      complete: () => console.log("Got request")
    });

  }
  constructor(private db: DbServiceService, private formBuilder: FormBuilder) {
    this.states = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    };
    this.countries = {
      "none": "",
      "US": "United States",
      "AD": "Andorra",
      "AE": "United Arab Emirates",
      "AF": "Afghanistan",
      "AG": "Antigua and Barbuda",
      "AI": "Anguilla",
      "AL": "Albania",
      "AM": "Armenia",
      "AO": "Angola",
      "AQ": "Antarctica",
      "AR": "Argentina",
      "AS": "American Samoa",
      "AT": "Austria",
      "AU": "Australia",
      "AW": "Aruba",
      "AX": "Aland Islands",
      "AZ": "Azerbaijan",
      "BA": "Bosnia and Herzegovina",
      "BB": "Barbados",
      "BD": "Bangladesh",
      "BE": "Belgium",
      "BF": "Burkina Faso",
      "BG": "Bulgaria",
      "BH": "Bahrain",
      "BI": "Burundi",
      "BJ": "Benin",
      "BL": "Saint Barthelemy",
      "BM": "Bermuda",
      "BN": "Brunei",
      "BO": "Bolivia",
      "BQ": "Bonaire, Saint Eustatius and Saba ",
      "BR": "Brazil",
      "BS": "Bahamas",
      "BT": "Bhutan",
      "BV": "Bouvet Island",
      "BW": "Botswana",
      "BY": "Belarus",
      "BZ": "Belize",
      "CA": "Canada",
      "CC": "Cocos Islands",
      "CD": "Democratic Republic of the Congo",
      "CF": "Central African Republic",
      "CG": "Republic of the Congo",
      "CH": "Switzerland",
      "CI": "Ivory Coast",
      "CK": "Cook Islands",
      "CL": "Chile",
      "CM": "Cameroon",
      "CN": "China",
      "CO": "Colombia",
      "CR": "Costa Rica",
      "CU": "Cuba",
      "CV": "Cape Verde",
      "CW": "Curacao",
      "CX": "Christmas Island",
      "CY": "Cyprus",
      "CZ": "Czech Republic",
      "DE": "Germany",
      "DJ": "Djibouti",
      "DK": "Denmark",
      "DM": "Dominica",
      "DO": "Dominican Republic",
      "DZ": "Algeria",
      "EC": "Ecuador",
      "EE": "Estonia",
      "EG": "Egypt",
      "EH": "Western Sahara",
      "ER": "Eritrea",
      "ES": "Spain",
      "ET": "Ethiopia",
      "FI": "Finland",
      "FJ": "Fiji",
      "FK": "Falkland Islands",
      "FM": "Micronesia",
      "FO": "Faroe Islands",
      "FR": "France",
      "GA": "Gabon",
      "GB": "United Kingdom",
      "GD": "Grenada",
      "GE": "Georgia",
      "GF": "French Guiana",
      "GG": "Guernsey",
      "GH": "Ghana",
      "GI": "Gibraltar",
      "GL": "Greenland",
      "GM": "Gambia",
      "GN": "Guinea",
      "GP": "Guadeloupe",
      "GQ": "Equatorial Guinea",
      "GR": "Greece",
      "GS": "South Georgia and the South Sandwich Islands",
      "GT": "Guatemala",
      "GU": "Guam",
      "GW": "Guinea-Bissau",
      "GY": "Guyana",
      "HK": "Hong Kong",
      "HM": "Heard Island and McDonald Islands",
      "HN": "Honduras",
      "HR": "Croatia",
      "HT": "Haiti",
      "HU": "Hungary",
      "ID": "Indonesia",
      "IE": "Ireland",
      "IL": "Israel",
      "IM": "Isle of Man",
      "IN": "India",
      "IO": "British Indian Ocean Territory",
      "IQ": "Iraq",
      "IR": "Iran",
      "IS": "Iceland",
      "IT": "Italy",
      "JE": "Jersey",
      "JM": "Jamaica",
      "JO": "Jordan",
      "JP": "Japan",
      "KE": "Kenya",
      "KG": "Kyrgyzstan",
      "KH": "Cambodia",
      "KI": "Kiribati",
      "KM": "Comoros",
      "KN": "Saint Kitts and Nevis",
      "KP": "North Korea",
      "KR": "South Korea",
      "KW": "Kuwait",
      "KY": "Cayman Islands",
      "KZ": "Kazakhstan",
      "LA": "Laos",
      "LB": "Lebanon",
      "LC": "Saint Lucia",
      "LI": "Liechtenstein",
      "LK": "Sri Lanka",
      "LR": "Liberia",
      "LS": "Lesotho",
      "LT": "Lithuania",
      "LU": "Luxembourg",
      "LV": "Latvia",
      "LY": "Libya",
      "MA": "Morocco",
      "MC": "Monaco",
      "MD": "Moldova",
      "ME": "Montenegro",
      "MF": "Saint Martin",
      "MG": "Madagascar",
      "MH": "Marshall Islands",
      "MK": "Macedonia",
      "ML": "Mali",
      "MM": "Myanmar",
      "MN": "Mongolia",
      "MO": "Macao",
      "MP": "Northern Mariana Islands",
      "MQ": "Martinique",
      "MR": "Mauritania",
      "MS": "Montserrat",
      "MT": "Malta",
      "MU": "Mauritius",
      "MV": "Maldives",
      "MW": "Malawi",
      "MX": "Mexico",
      "MY": "Malaysia",
      "MZ": "Mozambique",
      "NA": "Namibia",
      "NC": "New Caledonia",
      "NE": "Niger",
      "NF": "Norfolk Island",
      "NG": "Nigeria",
      "NI": "Nicaragua",
      "NL": "Netherlands",
      "NO": "Norway",
      "NP": "Nepal",
      "NR": "Nauru",
      "NU": "Niue",
      "NZ": "New Zealand",
      "OM": "Oman",
      "PA": "Panama",
      "PE": "Peru",
      "PF": "French Polynesia",
      "PG": "Papua New Guinea",
      "PH": "Philippines",
      "PK": "Pakistan",
      "PL": "Poland",
      "PM": "Saint Pierre and Miquelon",
      "PN": "Pitcairn",
      "PR": "Puerto Rico",
      "PS": "Palestinian Territory",
      "PT": "Portugal",
      "PW": "Palau",
      "PY": "Paraguay",
      "QA": "Qatar",
      "RE": "Reunion",
      "RO": "Romania",
      "RS": "Serbia",
      "RU": "Russia",
      "RW": "Rwanda",
      "SA": "Saudi Arabia",
      "SB": "Solomon Islands",
      "SC": "Seychelles",
      "SD": "Sudan",
      "SE": "Sweden",
      "SG": "Singapore",
      "SH": "Saint Helena",
      "SI": "Slovenia",
      "SJ": "Svalbard and Jan Mayen",
      "SK": "Slovakia",
      "SL": "Sierra Leone",
      "SM": "San Marino",
      "SN": "Senegal",
      "SO": "Somalia",
      "SR": "Suriname",
      "SS": "South Sudan",
      "ST": "Sao Tome and Principe",
      "SV": "El Salvador",
      "SX": "Sint Maarten",
      "SY": "Syria",
      "SZ": "Swaziland",
      "TC": "Turks and Caicos Islands",
      "TD": "Chad",
      "TF": "French Southern Territories",
      "TG": "Togo",
      "TH": "Thailand",
      "TJ": "Tajikistan",
      "TK": "Tokelau",
      "TL": "East Timor",
      "TM": "Turkmenistan",
      "TN": "Tunisia",
      "TO": "Tonga",
      "TR": "Turkey",
      "TT": "Trinidad and Tobago",
      "TV": "Tuvalu",
      "TW": "Taiwan",
      "TZ": "Tanzania",
      "UA": "Ukraine",
      "UG": "Uganda",
      "UM": "United States Minor Outlying Islands",
      "UY": "Uruguay",
      "UZ": "Uzbekistan",
      "VA": "Vatican",
      "VC": "Saint Vincent and the Grenadines",
      "VE": "Venezuela",
      "VG": "British Virgin Islands",
      "VI": "U.S. Virgin Islands",
      "VN": "Vietnam",
      "VU": "Vanuatu",
      "WF": "Wallis and Futuna",
      "WS": "Samoa",
      "XK": "Kosovo",
      "YE": "Yemen",
      "YT": "Mayotte",
      "ZA": "South Africa",
      "ZM": "Zambia",
      "ZW": "Zimbabwe"
    }
    this.help = 'Please for the love of god'
    this.result = ""
    this.inputForm = this.formBuilder.group({
      event: ' ',
      country: '',
      city: '',
      state: ''
    })
  }

  ngOnInit() {
  }

}
