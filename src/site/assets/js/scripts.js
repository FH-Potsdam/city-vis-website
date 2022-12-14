const rawData = [
"Oranjestad,Aruba,ABW,12.508,-70.018",
"Kabul,Afghanistan,AFG,34.520,69.162",
"Luanda,Angola,AGO,-8.827,13.244",
"The Valley,Anguilla,AIA,18.215,-63.052",
"Mariehamn,Åland Islands,ALA,60.095,19.908",
"Tirana,Albania,ALB,41.331,19.783",
"Andorra la Vella,Andorra,AND,42.507,1.521",
"Abu Dhabi,United Arab Emirates,ARE,24.475,54.371",
"Buenos Aires,Argentina,ARG,-34.613,-58.446",
"Yerevan,Armenia,ARM,40.178,44.513",
"Pago Pago,American Samoa,ASM,-14.278,-170.708",
"Port-aux-Français,French Southern and Antarctic Lands,ATF,-49.349,70.214",
"Saint John's,Antigua and Barbuda,ATG,17.118,-61.845",
"Canberra,Australia,AUS,-35.281,149.129",
"Vienna,Austria,AUT,48.208,16.373",
"Baku,Azerbaijan,AZE,40.393,49.847",
"Bujumbura,Burundi,BDI,-3.364,29.368",
"Brussels,Belgium,BEL,50.847,4.352",
"Porto-Novo,Benin,BEN,6.499,2.625",
"Ouagadougou,Burkina Faso,BFA,12.368,-1.527",
"Dhaka,Bangladesh,BGD,23.759,90.379",
"Sofia,Bulgaria,BGR,42.698,23.323",
"Manama,Bahrain,BHR,26.224,50.582",
"Nassau,Bahamas,BHS,25.078,-77.338",
"Sarajevo,Bosnia and Herzegovina,BIH,43.852,18.387",
"Gustavia,Saint Barthélemy,BLM,17.897,-62.853",
"Minsk,Belarus,BLR,53.902,27.562",
"Belmopan,Belize,BLZ,17.250,-88.769",
"Hamilton,Bermuda,BMU,32.295,-64.783",
"Sucre,Bolivia,BOL,-19.048,-65.260",
"Brasília,Brazil,BRA,-15.793,-47.882",
"Bridgetown,Barbados,BRB,13.098,-59.618",
"Bandar Seri Begawan,Brunei,BRN,4.890,114.942",
"Thimphu,Bhutan,BTN,27.473,89.630",
"Gaborone,Botswana,BWA,-24.655,25.909",
"Bangui,Central African Republic,CAF,4.391,18.551",
"Ottawa,Canada,CAN,45.421,-75.690",
"West Island,Cocos Keeling Islands,CCK,12.191,96.833",
"Bern,Switzerland,CHE,46.948,7.452",
"Santiago,Chile,CHL,-33.438,-70.650",
"Beijing,China,CHN,39.906,116.391",
"Yamoussoukro,Ivory Coast,CIV,6.809,-5.273",
"Yaoundé,Cameroon,CMR,3.869,11.521",
"Kinshasa,DR Congo,COD,-4.322,15.313",
"Brazzaville,Republic of the Congo,COG,-4.269,15.271",
"Avarua,Cook Islands,COK,-21.207,-159.771",
"Bogotá,Colombia,COL,4.598,-74.076",
"Moroni,Comoros,COM,-11.693,43.254",
"Praia,Cape Verde,CPV,14.916,-23.510",
"San José,Costa Rica,CRI,9.933,-84.080",
"Havana,Cuba,CUB,23.138,-82.366",
"Willemstad,Curaçao,CUW,12.129,-68.969",
"Flying Fish Cove,Christmas Island,CXR,-10.423,105.668",
"George Town,Cayman Islands,CYM,19.295,-81.381",
"Nicosia,Cyprus,CYP,35.180,33.374",
"Prague,Czech Republic,CZE,50.087,14.421",
"Berlin,Germany,DEU,52.517,13.389",
"Djibouti,Djibouti,DJI,11.594,43.147",
"Roseau,Dominica,DMA,15.298,-61.388",
"Copenhagen,Denmark,DNK,55.687,12.570",
"Santo Domingo,Dominican Republic,DOM,18.480,-69.942",
"Algiers,Algeria,DZA,36.775,3.060",
"Quito,Ecuador,ECU,-0.155,-78.486",
"Cairo,Egypt,EGY,30.049,31.244",
"Asmara,Eritrea,ERI,15.339,38.933",
"El Aaiún,Western Sahara,ESH,27.124,-13.246",
"Madrid,Spain,ESP,40.417,-3.704",
"Tallinn,Estonia,EST,59.437,24.745",
"Addis Ababa,Ethiopia,ETH,9.011,38.761",
"Helsinki,Finland,FIN,60.167,24.944",
"Suva,Fiji,FJI,-18.142,178.442",
"Stanley,Falkland Islands,FLK,-51.695,-57.849",
"Paris,France,FRA,48.857,2.351",
"Tórshavn,Faroe Islands,FRO,62.012,-6.768",
"Palikir,Micronesia,FSM,6.921,158.163",
"Libreville,Gabon,GAB,0.390,9.454",
"London,United Kingdom,GBR,51.529,-0.242",
"Tbilisi,Georgia,GEO,41.693,44.801",
"St. Peter Port,Guernsey,GGY,49.457,-2.539",
"Accra,Ghana,GHA,5.560,-0.206",
"Gibraltar,Gibraltar,GIB,36.145,-5.348",
"Conakry,Guinea,GIN,9.517,-13.700",
"Basse-Terre,Guadeloupe,GLP,16.010,-61.731",
"Banjul,Gambia,GMB,13.455,-16.576",
"Bissau,Guinea-Bissau,GNB,11.861,-15.583",
"Malabo,Equatorial Guinea,GNQ,3.753,8.780",
"Athens,Greece,GRC,37.984,23.728",
"St. George's,Grenada,GRD,12.054,-61.752",
"Nuuk,Greenland,GRL,64.175,-51.736",
"Guatemala City,Guatemala,GTM,14.642,-90.513",
"Cayenne,French Guiana,GUF,4.920,-52.330",
"Hagåtña,Guam,GUM,13.473,144.752",
"Georgetown,Guyana,GUY,6.803,-58.163",
"Tegucigalpa,Honduras,HND,14.093,-87.201",
"Zagreb,Croatia,HRV,45.813,15.977",
"Port-au-Prince,Haiti,HTI,18.547,-72.340",
"Budapest,Hungary,HUN,47.498,19.040",
"Jakarta,Indonesia,IDN,-6.175,106.827",
"Douglas,Isle of Man,IMN,54.150,-4.478",
"New Delhi,India,IND,28.614,77.216",
"Diego Garcia,British Indian Ocean Territory,IOT,-7.343,72.359",
"Dublin,Ireland,IRL,53.350,-6.260",
"Tehran,Iran,IRN,35.686,51.422",
"Baghdad,Iraq,IRQ,33.302,44.379",
"Reykjavik,Iceland,ISL,64.146,-21.942",
"Jerusalem,Israel,ISR,31.779,35.227",
"Rome,Italy,ITA,41.893,12.483",
"Kingston,Jamaica,JAM,17.971,-76.793",
"Saint Helier,Jersey,JEY,49.186,-2.110",
"Amman,Jordan,JOR,31.952,35.924",
"Tokyo,Japan,JPN,35.683,139.759",
"Astana,Kazakhstan,KAZ,51.151,71.439",
"Nairobi,Kenya,KEN,-1.283,36.817",
"Bishkek,Kyrgyzstan,KGZ,42.877,74.607",
"Phnom Penh,Cambodia,KHM,11.568,104.922",
"South Tarawa,Kiribati,KIR,1.329,172.978",
"Basseterre,Saint Kitts and Nevis,KNA,17.296,-62.722",
"Seoul,South Korea,KOR,37.565,126.978",
"Pristina,Kosovo,UNK,42.666,21.124",
"Kuwait City,Kuwait,KWT,29.380,47.974",
"Vientiane,Laos,LAO,17.964,102.613",
"Beirut,Lebanon,LBN,33.896,35.478",
"Monrovia,Liberia,LBR,6.328,-10.798",
"Tripoli,Libya,LBY,32.773,13.414",
"Castries,Saint Lucia,LCA,14.010,-60.990",
"Vaduz,Liechtenstein,LIE,47.139,9.523",
"Colombo,Sri Lanka,LKA,6.934,79.853",
"Maseru,Lesotho,LSO,-29.310,27.478",
"Vilnius,Lithuania,LTU,54.684,25.285",
"Luxembourg,Luxembourg,LUX,49.611,6.130",
"Riga,Latvia,LVA,56.949,24.105",
"Macau,Macau,MAC,22.197,113.540",
"Marigot,Saint Martin,MAF,18.069,-63.092",
"Rabat,Morocco,MAR,34.023,-6.839",
"Monaco,Monaco,MCO,43.731,7.420",
"Chișinău,Moldova,MDA,47.012,28.861",
"Antananarivo,Madagascar,MDG,-18.910,47.526",
"Malé,Maldives,MDV,4.178,73.511",
"Mexico City,Mexico,MEX,19.433,-99.133",
"Majuro,Marshall Islands,MHL,7.091,171.382",
"Skopje,Macedonia,MKD,41.996,21.432",
"Bamako,Mali,MLI,12.649,-8.000",
"Valletta,Malta,MLT,35.899,14.513",
"Naypyidaw,Myanmar,MMR,19.754,96.134",
"Podgorica,Montenegro,MNE,42.442,19.262",
"Ulan Bator,Mongolia,MNG,47.918,106.918",
"Saipan,Northern Mariana Islands,MNP,15.191,145.747",
"Maputo,Mozambique,MOZ,-25.966,32.567",
"Nouakchott,Mauritania,MRT,18.079,-15.978",
"Plymouth,Montserrat,MSR,16.742,-62.192",
"Fort-de-France,Martinique,MTQ,14.649,-61.104",
"Port Louis,Mauritius,MUS,-20.164,57.505",
"Lilongwe,Malawi,MWI,-13.973,33.788",
"Kuala Lumpur,Malaysia,MYS,3.089,101.665",
"Mamoudzou,Mayotte,MYT,-12.781,45.223",
"Windhoek,Namibia,NAM,-22.574,17.079",
"Nouméa,New Caledonia,NCL,-22.264,166.410",
"Niamey,Niger,NER,13.517,2.150",
"Kingston,Norfolk Island,NFK,-29.064,167.957",
"Abuja,Nigeria,NGA,9.064,7.489",
"Managua,Nicaragua,NIC,12.146,-86.274",
"Alofi,Niue,NIU,-19.053,-169.919",
"Amsterdam,Netherlands,NLD,52.374,4.898",
"Oslo,Norway,NOR,59.913,10.739",
"Kathmandu,Nepal,NPL,27.708,85.315",
"Yaren,Nauru,NRU,-0.545,166.922",
"Wellington,New Zealand,NZL,-41.289,174.777",
"Muscat,Oman,OMN,23.600,58.545",
"Islamabad,Pakistan,PAK,33.695,73.064",
"Panama City,Panama,PAN,8.971,-79.534",
"Adamstown,Pitcairn Islands,PCN,-25.067,-130.100",
"Lima,Peru,PER,-12.046,-77.031",
"Manila,Philippines,PHL,14.591,120.980",
"Ngerulmud,Palau,PLW,7.500,134.622",
"Port Moresby,Papua New Guinea,PNG,-9.474,147.160",
"Warsaw,Poland,POL,52.232,21.007",
"San Juan,Puerto Rico,PRI,18.385,-66.128",
"Pyongyang,North Korea,PRK,39.020,125.753",
"Lisbon,Portugal,PRT,38.713,-9.138",
"Asunción,Paraguay,PRY,-25.296,-57.631",
"Ramallah,Palestine,PSE,31.903,35.195",
"Papeetē,French Polynesia,PYF,-17.560,-149.573",
"Doha,Qatar,QAT,25.301,51.500",
"Saint-Denis,Réunion,REU,-20.882,55.442",
"Bucharest,Romania,ROU,44.436,26.103",
"Moscow,Russia,RUS,55.752,37.619",
"Kigali,Rwanda,RWA,-1.951,30.062",
"Riyadh,Saudi Arabia,SAU,24.632,46.715",
"Khartoum,Sudan,SDN,15.593,32.536",
"Dakar,Senegal,SEN,14.693,-17.448",
"Singapore,Singapore,SGP,1.290,103.852",
"King Edward Point,South Georgia,SGS,-54.283,-36.496",
"Longyearbyen,Svalbard and Jan Mayen,SJM,78.225,15.418",
"Honiara,Solomon Islands,SLB,-9.431,159.955",
"Freetown,Sierra Leone,SLE,8.479,-13.268",
"San Salvador,El Salvador,SLV,13.698,-89.193",
"City of San Marino,San Marino,SMR,43.936,12.447",
"Mogadishu,Somalia,SOM,2.043,45.339",
"Saint-Pierre,Saint Pierre and Miquelon,SPM,46.946,-56.542",
"Belgrade,Serbia,SRB,44.818,20.457",
"Juba,South Sudan,SSD,4.847,31.595",
"São Tomé,São Tomé and Príncipe,STP,0.339,6.731",
"Paramaribo,Suriname,SUR,5.822,-55.177",
"Bratislava,Slovakia,SVK,48.154,17.110",
"Ljubljana,Slovenia,SVN,46.050,14.507",
"Stockholm,Sweden,SWE,59.325,18.071",
"Lobamba,Swaziland,SWZ,-26.562,31.399",
"Philipsburg,Sint Maarten,SXM,18.042,-63.055",
"Victoria,Seychelles,SYC,-4.622,55.453",
"Damascus,Syria,SYR,33.513,36.310",
"Cockburn Town,Turks and Caicos Islands,TCA,21.461,-71.140",
"N'Djamena,Chad,TCD,12.119,15.050",
"Lomé,Togo,TGO,6.126,1.225",
"Bangkok,Thailand,THA,13.754,100.493",
"Dushanbe,Tajikistan,TJK,38.535,68.780",
"Fakaofo,Tokelau,TKL,-9.364,-171.203",
"Ashgabat,Turkmenistan,TKM,37.940,58.387",
"Dili,Timor-Leste,TLS,-8.554,125.578",
"Nuku'alofa,Tonga,TON,-21.134,-175.202",
"Port of Spain,Trinidad and Tobago,TTO,10.657,-61.518",
"Tunis,Tunisia,TUN,36.800,10.185",
"Ankara,Turkey,TUR,39.922,32.854",
"Funafuti,Tuvalu,TUV,-8.525,179.195",
"Taipei,Taiwan,TWN,25.038,121.564",
"Dodoma,Tanzania,TZA,-6.179,35.747",
"Kampala,Uganda,UGA,0.318,32.581",
"Kiev,Ukraine,UKR,50.450,30.524",
"Montevideo,Uruguay,URY,-34.906,-56.191",
"Washington D.C.,United States,USA,38.895,-77.037",
"Tashkent,Uzbekistan,UZB,41.312,69.279",
"Vatican City,Vatican City,VAT,41.903,12.453",
"Kingstown,Saint Vincent and the Grenadines,VCT,13.156,-61.228",
"Caracas,Venezuela,VEN,10.506,-66.915",
"Road Town,British Virgin Islands,VGB,18.426,-64.623",
"Charlotte Amalie,United States Virgin Islands,VIR,18.341,-64.939",
"Hanoi,Vietnam,VNM,21.029,105.852",
"Port Vila,Vanuatu,VUT,-17.741,168.315",
"Mata-Utu,Wallis and Futuna,WLF,-13.283,-176.180",
"Apia,Samoa,WSM,-13.834,-171.769",
"Sana'a,Yemen,YEM,15.342,44.201",
"Pretoria,South Africa,ZAF,-25.746,28.187",
"Lusaka,Zambia,ZMB,-15.417,28.281",
"Harare,Zimbabwe,ZWE,-17.832,31.046"
];

const data = rawData.map(d => {
  const el = d.split(",");
  return {
    city: el[1],
    country: el[2],
    code: el[2],
    lat: parseFloat(el[3]),
    lng: parseFloat(el[4])
  }
});

class MapFun {
  constructor() {
    this.hero = document.getElementById('hero');
    this.mapLayers = document.getElementsByClassName('hero__map-layer');
    this.shuffleButton = document.getElementsByClassName(
      'hero__shuffle-button'
    )[0];
    this.streets = document.getElementById('hero__map-streets');
    this.buildings = document.getElementById('hero__map-buildings');
    this.locationCity = document.getElementById('hero__map-location--city');
    this.locationCoord = document.getElementById('hero__map-location--coord');
    this.countriesData = undefined;

    if (this.hero !== null) {
      this.initial();
    }
  }
  initial() {
    this.addEvents();
    this.countriesData = data;
    this.setRandomCity();
  }
  setRandomCity() {
    this.hero.classList.add('loading');

    const randomIndex = Math.floor(Math.random() * this.countriesData.length);
    const repoPath =
      'https://sebastian-meier.github.io/capitals-of-the-world/export/';

    const { code, city, country, lat, lng } = this.countriesData[randomIndex];
    const mapUrls = {
      streets: `${repoPath}${code}_highway_white.png`,
      buildings: `${repoPath}${code}_building_white.png`
    };

    this.streets.src = mapUrls.streets;
    this.buildings.src = mapUrls.buildings;

    this.streets.onload = () => {
      setTimeout(() => {
        this.locationCity.innerHTML = `${city}, ${country}`;
        this.locationCoord.innerHTML = `Lat ${lat}, Long ${lng}`;
        this.hero.classList.remove('loading');
      }, 350);
    };
  }
  addEvents() {
    this.hero.addEventListener(
      'mousemove',
      event => {
        const rotationValueX = event.clientX / window.innerWidth - 0.5;
        const rotationValueY = event.clientY / window.innerHeight - 0.5;

        this.mapLayers[0].style.transform = `perspective(750px) rotate3d(1,-0.1,${-1 *
          rotationValueY},65deg)`;
        this.mapLayers[1].style.transform = `perspective(750px) rotate3d(1,-0.1,${1 *
          rotationValueX},65deg)`;
      }
    );

    this.shuffleButton.addEventListener('click', () => {
      this.setRandomCity();
    });
  }
}

new MapFun();

let visibleMenu = false;
const menuButton = document.getElementsByClassName('header__button')[0];
const menuList = document.getElementsByClassName('header__navigation')[0];

if (menuButton !== undefined) {
  menuButton.addEventListener('click', event => {
    visibleMenu = !visibleMenu;
    if (visibleMenu) {
      menuList.classList.add('active');
    } else {
      menuList.classList.remove('active');
    }
  });
}

const logoShapes = document.getElementsByClassName(
  'home-section__shapes__shape'
);
const homeSection = document.getElementsByClassName('home-section')[0];
let expanded = false;
if (homeSection) {
  homeSection.addEventListener('click', () => {
    [...logoShapes].forEach((shape, index) => {
      const translateValueX = window.innerWidth <= 900 ? -50 : 0;
      if (expanded) {
        logoShapes[0].style.transform = `translate(${translateValueX}%, 10%)`;
        logoShapes[1].style.transform = `translate(${translateValueX}%, 5%)`;
        logoShapes[2].style.transform = `translate(${translateValueX}%, 0)`;
        logoShapes[3].style.transform = `translate(${translateValueX}%, -5%)`;
        logoShapes[4].style.transform = `translate(${translateValueX}%, -10%)`;
      } else {
        logoShapes[0].style.transform = `translate(${translateValueX}%, 60%)`;
        logoShapes[1].style.transform = `translate(${translateValueX}%, 30%)`;
        logoShapes[2].style.transform = `translate(${translateValueX}%, 0)`;
        logoShapes[3].style.transform = `translate(${translateValueX}%, -30%)`;
        logoShapes[4].style.transform = `translate(${translateValueX}%, -60%)`;
      }
    });
    expanded = !expanded;
  });

  const logoContainerOffset = homeSection.getBoundingClientRect().top;

  if (logoContainerOffset !== undefined) {
    document.addEventListener('scroll', event => {
      if (
        window.scrollY >= window.innerHeight - logoContainerOffset &&
        window.scrollY > 150
      ) {
        homeSection.classList.add('active');
      } else {
        homeSection.classList.remove('active');
      }
    });
  }
}

const filters = {
  t: null, // type
  a: null, // area
  m: null // medium 
};

const filterSection = document.getElementsByClassName('filter')[0];
if (filterSection) {
  Array.from(document.getElementsByClassName('filter__button')).forEach(b => {
    b.addEventListener('click', (e) => {
      const key = e.currentTarget.dataset.key;
      const id = e.currentTarget.dataset.filter;
      // TODO: Multi-Filters
      Object.keys(filters).forEach(f => {
        if (f !== key) {
          filters[f] = null;
        }
      });
      if (filters[key] === id) {
        filters[key] = null;
      } else {
        filters[key] = id;
      }
      filterCollection();
    }, false);
  });

  document.getElementsByClassName('filter__toggle')[0].addEventListener('click', () => {
    document.getElementsByClassName('filter-list')[0].classList.toggle('active');
  });
}

function filterCollection() {
  Array.from(document.getElementsByClassName('filter__button')).forEach(b => {
    if (filters[b.dataset.key] === b.dataset.filter) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  Array.from(document.getElementsByClassName('project-tiles__tile')).forEach(p => {
    if (!filters.t && !filters.a && !filters.m) {
      p.style.display = 'block';
    } else {
      let show = false;
      Object.keys(filters).forEach(f => {
        if (filters[f]) {
          if (p.classList.contains('f_' + f + '_' + filters[f])) {
            show = true;
          } else {
            show = false;
          }
        }
      });
      if (show) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    }
  });
}