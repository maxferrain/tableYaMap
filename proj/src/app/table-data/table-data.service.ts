import { Injectable } from '@angular/core';

export class District {
  REGION_ID: string;
  VALUE_SUM: string;
  VALUE_WOMEN_KID: string;
  VALUE_WOMEN_ADULT: string;
  VALUE_WOMEN_SENIOR: string;
  VALUE_MEN_KID: string;
  VALUE_MEN_ADULT: string;
  VALUE_MEN_SENIOR: string;
  REGION_NAME: string;
  CURATOR_ID: string;
  OPERATOR_ID: string;
}

export class Region {
  REGION_ID: string;
  PARENT_REGION_ID: string;
  VALUE_SUM: string;
  VALUE_WOMEN_KID: string;
  VALUE_WOMEN_ADULT: string;
  VALUE_WOMEN_SENIOR: string;
  VALUE_MEN_KID: string;
  VALUE_MEN_ADULT: string;
  VALUE_MEN_SENIOR: string;
  REGION_NAME: string;
  ISO: string;
}

export class Route {
  ID: string;
  PARENT_REGION_ID: string;
  VALUE_SUM: string;
  VALUE_WOMEN_KID: string;
  VALUE_WOMEN_ADULT: string;
  VALUE_WOMEN_SENIOR: string;
  VALUE_MEN_KID: string;
  VALUE_MEN_ADULT: string;
  VALUE_MEN_SENIOR: string;
  REGION_NAME: string;
  CITY_FROM_ID: string;
  CITY_TO_ID: string;
  CITY_FROM: string;
  CITY_TO: string;
}

var districts: District[] = [
  {
    REGION_ID: '9000001',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Центральный федеральный округ',
    CURATOR_ID: '1',
    OPERATOR_ID: '1'
  },
  {
    REGION_ID: '9000002',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Южный федеральный округ',
    CURATOR_ID: '2',
    OPERATOR_ID: '2'
  },
  {
    REGION_ID: '9000003',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Северо-Западный федеральный округ',
    CURATOR_ID: '1',
    OPERATOR_ID: '3'
  },
  {
    REGION_ID: '9000004',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Дальневосточный федеральный округ',
    CURATOR_ID: '3',
    OPERATOR_ID: '4'
  },
  {
    REGION_ID: '9000005',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Сибирский федеральный округ',
    CURATOR_ID: '3',
    OPERATOR_ID: '5'
  },
  {
    REGION_ID: '9000006',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Уральский федеральный округ',
    CURATOR_ID: '3',
    OPERATOR_ID: '6'
  },
  {
    REGION_ID: '9000007',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Приволжский федеральный округ',
    CURATOR_ID: '1',
    OPERATOR_ID: '7'
  },
  {
    REGION_ID: '9000008',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Северо-Кавказский федеральный округ',
    CURATOR_ID: '2',
    OPERATOR_ID: '8'
  }
];

var regions: Region[] = [
  {
    REGION_ID: '1209975',
    PARENT_REGION_ID: '9000001',
    VALUE_SUM: '2342',
    VALUE_WOMEN_KID: '240',
    VALUE_WOMEN_ADULT: '580',
    VALUE_WOMEN_SENIOR: '285',
    VALUE_MEN_KID: '99999999',
    VALUE_MEN_ADULT: '655',
    VALUE_MEN_SENIOR: '383',
    REGION_NAME: 'Москва',
    ISO: 'RU-MOW'
  },
  {
    REGION_ID: '1210475',
    PARENT_REGION_ID: '9000001',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Московская область',
    ISO: 'RU-MOS'
  },
  {
    REGION_ID: '1171031',
    PARENT_REGION_ID: '9000001',
    VALUE_SUM: '179',
    VALUE_WOMEN_KID: '10',
    VALUE_WOMEN_ADULT: '57',
    VALUE_WOMEN_SENIOR: '23',
    VALUE_MEN_KID: '1111111',
    VALUE_MEN_ADULT: '55',
    VALUE_MEN_SENIOR: '23',
    REGION_NAME: 'Тверская область',
    ISO: 'RU-TVE'
  },
  {
    REGION_ID: '1181365',
    PARENT_REGION_ID: '9000001',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Калужская область',
    ISO: 'RU-KLU'
  },
  {
    REGION_ID: '1262864',
    PARENT_REGION_ID: '9000001',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Смоленская область',
    ISO: 'RU-SMO'
  },
  {
    REGION_ID: '1120524',
    PARENT_REGION_ID: '9000002',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Краснодарский край',
    ISO: 'RU-KDA'
  },
  {
    REGION_ID: '1143778',
    PARENT_REGION_ID: '9000002',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Волгоградская область',
    ISO: 'RU-VGG'
  },
  {
    REGION_ID: '2200002',
    PARENT_REGION_ID: '9000002',
    VALUE_SUM: '1063',
    VALUE_WOMEN_KID: '103',
    VALUE_WOMEN_ADULT: '240',
    VALUE_WOMEN_SENIOR: '200',
    VALUE_MEN_KID: '122',
    VALUE_MEN_ADULT: '261',
    VALUE_MEN_SENIOR: '137',
    REGION_NAME: 'Республика Крым',
    ISO: 'RU-KRU'
  },
  {
    REGION_ID: '2200003',
    PARENT_REGION_ID: '9000002',
    VALUE_SUM: '1339',
    VALUE_WOMEN_KID: '165',
    VALUE_WOMEN_ADULT: '330',
    VALUE_WOMEN_SENIOR: '200',
    VALUE_MEN_KID: '145',
    VALUE_MEN_ADULT: '360',
    VALUE_MEN_SENIOR: '139',
    REGION_NAME: 'Севастополь',
    ISO: 'RU-SEV'
  },
  {
    REGION_ID: '1249220',
    PARENT_REGION_ID: '9000002',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Ростовская область',
    ISO: 'RU-ROS'
  },
  {
    REGION_ID: '1203936',
    PARENT_REGION_ID: '9000003',
    VALUE_SUM: '1995',
    VALUE_WOMEN_KID: '200',
    VALUE_WOMEN_ADULT: '490',
    VALUE_WOMEN_SENIOR: '340',
    VALUE_MEN_KID: '210',
    VALUE_MEN_ADULT: '490',
    VALUE_MEN_SENIOR: '265',
    REGION_NAME: 'Санкт-Петербург',
    ISO: 'RU-SPE'
  },
  {
    REGION_ID: '1204092',
    PARENT_REGION_ID: '9000003',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Ленинградская область',
    ISO: 'RU-LEN'
  },
  {
    REGION_ID: '1300033',
    PARENT_REGION_ID: '9000003',
    VALUE_SUM: '767',
    VALUE_WOMEN_KID: '95',
    VALUE_WOMEN_ADULT: '205',
    VALUE_WOMEN_SENIOR: '50',
    VALUE_MEN_KID: '92',
    VALUE_MEN_ADULT: '265',
    VALUE_MEN_SENIOR: '60',
    REGION_NAME: 'Республика Карелия',
    ISO: 'RU-KR'
  },
  {
    REGION_ID: '1217738',
    PARENT_REGION_ID: '9000003',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Мурманская область',
    ISO: 'RU-MUR'
  },
  {
    REGION_ID: '1217915',
    PARENT_REGION_ID: '9000003',
    VALUE_SUM: '0',
    VALUE_WOMEN_KID: '0',
    VALUE_WOMEN_ADULT: '0',
    VALUE_WOMEN_SENIOR: '0',
    VALUE_MEN_KID: '0',
    VALUE_MEN_ADULT: '0',
    VALUE_MEN_SENIOR: '0',
    REGION_NAME: 'Новгородская область',
    ISO: 'RU-NGR'
  }
];

const routes: Route[] = [
  {
    ID: '1',
    PARENT_REGION_ID: '1209975',
    VALUE_SUM: '167',
    VALUE_WOMEN_KID: '10',
    VALUE_WOMEN_ADULT: '40',
    VALUE_WOMEN_SENIOR: '25',
    VALUE_MEN_KID: '9',
    VALUE_MEN_ADULT: '50',
    VALUE_MEN_SENIOR: '33',
    REGION_NAME: 'Москва',
    CITY_FROM_ID: '45000000000',
    CITY_TO_ID: '46221501000',
    CITY_FROM: 'Москва',
    CITY_TO: 'Клин'
  },
  {
    ID: '2',
    PARENT_REGION_ID: '1209975',
    VALUE_SUM: '167',
    VALUE_WOMEN_KID: '60',
    VALUE_WOMEN_ADULT: '190',
    VALUE_WOMEN_SENIOR: '40',
    VALUE_MEN_KID: '50',
    VALUE_MEN_ADULT: '185',
    VALUE_MEN_SENIOR: '50',
    REGION_NAME: 'Москва',
    CITY_FROM_ID: '45000000000',
    CITY_TO_ID: '46241501000',
    CITY_FROM: 'Москва',
    CITY_TO: 'Одинцово'
  },
  {
    ID: '3',
    PARENT_REGION_ID: '1209975',
    VALUE_SUM: '575',
    VALUE_WOMEN_KID: '170',
    VALUE_WOMEN_ADULT: '350',
    VALUE_WOMEN_SENIOR: '220',
    VALUE_MEN_KID: '140',
    VALUE_MEN_ADULT: '420',
    VALUE_MEN_SENIOR: '300',
    REGION_NAME: 'Москва',
    CITY_FROM_ID: '45000000000',
    CITY_TO_ID: '46483000000',
    CITY_FROM: 'Москва',
    CITY_TO: 'Химки'
  },
  {
    ID: '4',
    PARENT_REGION_ID: '1171031',
    VALUE_SUM: '81',
    VALUE_WOMEN_KID: '2',
    VALUE_WOMEN_ADULT: '24',
    VALUE_WOMEN_SENIOR: '13',
    VALUE_MEN_KID: '3',
    VALUE_MEN_ADULT: '25',
    VALUE_MEN_SENIOR: '14',
    REGION_NAME: 'Тверская область',
    CITY_FROM_ID: '28401000000',
    CITY_TO_ID: '28222501000',
    CITY_FROM: 'Тверь',
    CITY_TO: 'Калязин'
  },
  {
    ID: '5',
    PARENT_REGION_ID: '1171031',
    VALUE_SUM: '55',
    VALUE_WOMEN_KID: '5',
    VALUE_WOMEN_ADULT: '18',
    VALUE_WOMEN_SENIOR: '7',
    VALUE_MEN_KID: '4',
    VALUE_MEN_ADULT: '15',
    VALUE_MEN_SENIOR: '6',
    REGION_NAME: 'Тверская область',
    CITY_FROM_ID: '28222501000',
    CITY_TO_ID: '28450000000',
    CITY_FROM: 'Калязин',
    CITY_TO: 'Торжок'
  },
  {
    ID: '6',
    PARENT_REGION_ID: '1171031',
    VALUE_SUM: '43',
    VALUE_WOMEN_KID: '3',
    VALUE_WOMEN_ADULT: '15',
    VALUE_WOMEN_SENIOR: '3',
    VALUE_MEN_KID: '4',
    VALUE_MEN_ADULT: '15',
    VALUE_MEN_SENIOR: '3',
    REGION_NAME: 'Тверская область',
    CITY_FROM_ID: '28401000000',
    CITY_TO_ID: '28445000000',
    CITY_FROM: 'Тверь',
    CITY_TO: 'Ржев'
  },
  {
    ID: '7',
    PARENT_REGION_ID: '1203936',
    VALUE_SUM: '805',
    VALUE_WOMEN_KID: '110',
    VALUE_WOMEN_ADULT: '180',
    VALUE_WOMEN_SENIOR: '120',
    VALUE_MEN_KID: '100',
    VALUE_MEN_ADULT: '190',
    VALUE_MEN_SENIOR: '105',
    REGION_NAME: 'Санкт-Петербург',
    CITY_FROM_ID: '40000000000',
    CITY_TO_ID: '41417000000',
    CITY_FROM: 'Санкт-Петербург',
    CITY_TO: 'Выборг'
  },
  {
    ID: '8',
    PARENT_REGION_ID: '1203936',
    VALUE_SUM: '370',
    VALUE_WOMEN_KID: '20',
    VALUE_WOMEN_ADULT: '90',
    VALUE_WOMEN_SENIOR: '70',
    VALUE_MEN_KID: '30',
    VALUE_MEN_ADULT: '110',
    VALUE_MEN_SENIOR: '50',
    REGION_NAME: 'Санкт-Петербург',
    CITY_FROM_ID: '40000000000',
    CITY_TO_ID: '41448000000',
    CITY_FROM: 'Санкт-Петербург',
    CITY_TO: 'Приозерск'
  },
  {
    ID: '9',
    PARENT_REGION_ID: '1203936',
    VALUE_SUM: '820',
    VALUE_WOMEN_KID: '70',
    VALUE_WOMEN_ADULT: '220',
    VALUE_WOMEN_SENIOR: '150',
    VALUE_MEN_KID: '80',
    VALUE_MEN_ADULT: '190',
    VALUE_MEN_SENIOR: '110',
    REGION_NAME: 'Санкт-Петербург',
    CITY_FROM_ID: '40000000000',
    CITY_TO_ID: '40277000000',
    CITY_FROM: 'Санкт-Петербург',
    CITY_TO: 'Колпино'
  },
  {
    ID: '10',
    PARENT_REGION_ID: '1300033',
    VALUE_SUM: '220',
    VALUE_WOMEN_KID: '30',
    VALUE_WOMEN_ADULT: '60',
    VALUE_WOMEN_SENIOR: '15',
    VALUE_MEN_KID: '25',
    VALUE_MEN_ADULT: '80',
    VALUE_MEN_SENIOR: '10',
    REGION_NAME: 'Карелия',
    CITY_FROM_ID: '86401000000',
    CITY_TO_ID: '86215501000',
    CITY_FROM: 'Петрозаводск',
    CITY_TO: 'Кондопога'
  },
  {
    ID: '11',
    PARENT_REGION_ID: '1300033',
    VALUE_SUM: '165',
    VALUE_WOMEN_KID: '20',
    VALUE_WOMEN_ADULT: '45',
    VALUE_WOMEN_SENIOR: '10',
    VALUE_MEN_KID: '15',
    VALUE_MEN_ADULT: '55',
    VALUE_MEN_SENIOR: '20',
    REGION_NAME: 'Карелия',
    CITY_FROM_ID: '86224501000',
    CITY_TO_ID: '86410000000',
    CITY_FROM: 'Медвежьегорск',
    CITY_TO: 'Сортавала'
  },
  {
    ID: '12',
    PARENT_REGION_ID: '1300033',
    VALUE_SUM: '382',
    VALUE_WOMEN_KID: '45',
    VALUE_WOMEN_ADULT: '100',
    VALUE_WOMEN_SENIOR: '25',
    VALUE_MEN_KID: '52',
    VALUE_MEN_ADULT: '130',
    VALUE_MEN_SENIOR: '30',
    REGION_NAME: 'Карелия',
    CITY_FROM_ID: '86410000000',
    CITY_TO_ID: '86401000000',
    CITY_FROM: 'Сортавала',
    CITY_TO: 'Петрозаводск'
  },
  {
    ID: '13',
    PARENT_REGION_ID: '2200003',
    VALUE_SUM: '540',
    VALUE_WOMEN_KID: '55',
    VALUE_WOMEN_ADULT: '150',
    VALUE_WOMEN_SENIOR: '70',
    VALUE_MEN_KID: '50',
    VALUE_MEN_ADULT: '170',
    VALUE_MEN_SENIOR: '45',
    REGION_NAME: 'Севастополь',
    CITY_FROM_ID: '67269000000',
    CITY_TO_ID: '35419000000',
    CITY_FROM: 'Севастополь',
    CITY_TO: 'Ялта'
  },
  {
    ID: '14',
    PARENT_REGION_ID: '2200003',
    VALUE_SUM: '547',
    VALUE_WOMEN_KID: '80',
    VALUE_WOMEN_ADULT: '130',
    VALUE_WOMEN_SENIOR: '90',
    VALUE_MEN_KID: '70',
    VALUE_MEN_ADULT: '120',
    VALUE_MEN_SENIOR: '57',
    REGION_NAME: 'Севастополь',
    CITY_FROM_ID: '67269000000',
    CITY_TO_ID: '35401000000',
    CITY_FROM: 'Севастополь',
    CITY_TO: 'Симферополь'
  },
  {
    ID: '15',
    PARENT_REGION_ID: '2200003',
    VALUE_SUM: '252',
    VALUE_WOMEN_KID: '30',
    VALUE_WOMEN_ADULT: '50',
    VALUE_WOMEN_SENIOR: '40',
    VALUE_MEN_KID: '25',
    VALUE_MEN_ADULT: '70',
    VALUE_MEN_SENIOR: '37',
    REGION_NAME: 'Севастополь',
    CITY_FROM_ID: '67269000000',
    CITY_TO_ID: '67263505000',
    CITY_FROM: 'Севастополь',
    CITY_TO: 'Инкерман'
  },
  {
    ID: '13',
    PARENT_REGION_ID: '2200002',
    VALUE_SUM: '330',
    VALUE_WOMEN_KID: '30',
    VALUE_WOMEN_ADULT: '80',
    VALUE_WOMEN_SENIOR: '50',
    VALUE_MEN_KID: '40',
    VALUE_MEN_ADULT: '90',
    VALUE_MEN_SENIOR: '40',
    REGION_NAME: 'Крым',
    CITY_FROM_ID: '35412000000',
    CITY_TO_ID: '35419000000',
    CITY_FROM: 'Керчь',
    CITY_TO: 'Ялта'
  },
  {
    ID: '14',
    PARENT_REGION_ID: '2200002',
    VALUE_SUM: '392',
    VALUE_WOMEN_KID: '40',
    VALUE_WOMEN_ADULT: '90',
    VALUE_WOMEN_SENIOR: '70',
    VALUE_MEN_KID: '40',
    VALUE_MEN_ADULT: '105',
    VALUE_MEN_SENIOR: '47',
    REGION_NAME: 'Крым',
    CITY_FROM_ID: '35412000000',
    CITY_TO_ID: '35401000000',
    CITY_FROM: 'Керчь',
    CITY_TO: 'Симферополь'
  },
  {
    ID: '15',
    PARENT_REGION_ID: '2200002',
    VALUE_SUM: '341',
    VALUE_WOMEN_KID: '33',
    VALUE_WOMEN_ADULT: '70',
    VALUE_WOMEN_SENIOR: '80',
    VALUE_MEN_KID: '42',
    VALUE_MEN_ADULT: '66',
    VALUE_MEN_SENIOR: '50',
    REGION_NAME: 'Крым',
    CITY_FROM_ID: '35412000000',
    CITY_TO_ID: '35417000000',
    CITY_FROM: 'Керчь',
    CITY_TO: 'Феодосия'
  }
];

@Injectable()
export class Service {
  // tslint:disable-next-line:typedef
  calculateSumma(location) {
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < location.length; j++) {
      location[j].VALUE_SUM = Number(location[j].VALUE_MEN_KID) +
        Number(location[j].VALUE_MEN_ADULT) +
        Number(location[j].VALUE_MEN_SENIOR) +
        Number(location[j].VALUE_WOMEN_ADULT) +
        Number(location[j].VALUE_WOMEN_KID) +
        Number(location[j].VALUE_WOMEN_SENIOR) + '';
    }
  }

  // tslint:disable-next-line:typedef
  getDistricts() {
    this.getRegions();
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < districts.length; j++) {
      // tslint:disable-next-line:variable-name
      let sum_adult_man = 0;
      // tslint:disable-next-line:variable-name
      let sum_child_man = 0;
      // tslint:disable-next-line:variable-name
      let sum_senior_man = 0;
      // tslint:disable-next-line:variable-name
      let sum_adult_woman = 0;
      // tslint:disable-next-line:variable-name
      let sum_child_woman = 0;
      // tslint:disable-next-line:variable-name
      let sum_senior_woman = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < regions.length; i++) {
        if (regions[i].PARENT_REGION_ID === districts[j].REGION_ID) {
          sum_adult_man += Number(regions[i].VALUE_MEN_ADULT);
          sum_child_man += Number(regions[i].VALUE_MEN_KID);
          sum_senior_man += Number(regions[i].VALUE_MEN_SENIOR);
          sum_adult_woman += Number(regions[i].VALUE_WOMEN_ADULT);
          sum_child_woman += Number(regions[i].VALUE_WOMEN_KID);
          sum_senior_woman += Number(regions[i].VALUE_WOMEN_SENIOR);
        }
      }
      districts[j].VALUE_MEN_ADULT = sum_adult_man + '';
      districts[j].VALUE_MEN_KID = sum_child_man + '';
      districts[j].VALUE_MEN_SENIOR = sum_senior_man + '';
      districts[j].VALUE_WOMEN_ADULT = sum_adult_woman + '';
      districts[j].VALUE_WOMEN_KID = sum_child_woman + '';
      districts[j].VALUE_WOMEN_SENIOR = sum_senior_woman + '';
    }
    this.calculateSumma(routes);
    this.calculateSumma(regions);
    this.calculateSumma(districts);
    return districts;
  }
  // tslint:disable-next-line:typedef
  getRegions() {
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < regions.length; j++) {
      let sum_adult_man = 0;
      let sum_child_man = 0;
      let sum_senior_man = 0;
      let sum_adult_woman = 0;
      let sum_child_woman = 0;
      let sum_senior_woman = 0;
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].PARENT_REGION_ID === regions[j].REGION_ID) {
          sum_adult_man += Number(routes[i].VALUE_MEN_ADULT);
          sum_child_man += Number(routes[i].VALUE_MEN_KID);
          sum_senior_man += Number(routes[i].VALUE_MEN_SENIOR);
          sum_adult_woman += Number(routes[i].VALUE_WOMEN_ADULT);
          sum_child_woman += Number(routes[i].VALUE_WOMEN_KID);
          sum_senior_woman += Number(routes[i].VALUE_WOMEN_SENIOR);
        }
      }
      regions[j].VALUE_MEN_ADULT = sum_adult_man + '';
      regions[j].VALUE_MEN_KID = sum_child_man + '';
      regions[j].VALUE_MEN_SENIOR = sum_senior_man + '';
      regions[j].VALUE_WOMEN_ADULT = sum_adult_woman + '';
      regions[j].VALUE_WOMEN_KID = sum_child_woman + '';
      regions[j].VALUE_WOMEN_SENIOR = sum_senior_woman + '';
    }

    return regions;
  }
  // tslint:disable-next-line:typedef
  getRoutes() {
    return routes;
  }

  // totalDistricts()
}
