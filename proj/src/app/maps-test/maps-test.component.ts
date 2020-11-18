import { Component, OnInit } from '@angular/core';
import {District, Region, Service} from 'src/app/table-data/table-data.service';

declare var ymaps: any;

const districtByIso = {
  'RU-BEL': 'cfo',
  'RU-BRY': 'cfo',
  'RU-VLA': 'cfo',
  'RU-VOR': 'cfo',
  'RU-IVA': 'cfo',
  'RU-KLU': 'cfo',
  'RU-KOS': 'cfo',
  'RU-KRS': 'cfo',
  'RU-LIP': 'cfo',
  'RU-MOS': 'cfo',
  'RU-MOW': 'cfo',
  'RU-ORL': 'cfo',
  'RU-RYA': 'cfo',
  'RU-SMO': 'cfo',
  'RU-TAM': 'cfo',
  'RU-TVE': 'cfo',
  'RU-TUL': 'cfo',
  'RU-YAR': 'cfo',
  'RU-ARK': 'szfo',
  'RU-VLG': 'szfo',
  'RU-KGD': 'szfo',
  'RU-KR': 'szfo',
  'RU-KO': 'szfo',
  'RU-LEN': 'szfo',
  'RU-MUR': 'szfo',
  'RU-NEN': 'szfo',
  'RU-NGR': 'szfo',
  'RU-PSK': 'szfo',
  'RU-SPE': 'szfo',
  'RU-AD': 'yfo',
  'RU-AST': 'yfo',
  'RU-VGG': 'yfo',
  'RU-KL': 'yfo',
  'RU-KDA': 'yfo',
  'RU-SEV': 'yfo',
  'RU-KRY': 'yfo',
  'RU-ROS': 'yfo',
  'RU-DA': 'skfo',
  'RU-IN': 'skfo',
  'RU-KB': 'skfo',
  'RU-KC': 'skfo',
  'RU-SE': 'skfo',
  'RU-STA': 'skfo',
  'RU-CE': 'skfo',
  'RU-BA': 'pfo',
  'RU-KIR': 'pfo',
  'RU-ME': 'pfo',
  'RU-MO': 'pfo',
  'RU-NIZ': 'pfo',
  'RU-ORE': 'pfo',
  'RU-PNZ': 'pfo',
  'RU-PER': 'pfo',
  'RU-SAM': 'pfo',
  'RU-SAR': 'pfo',
  'RU-TA': 'pfo',
  'RU-UD': 'pfo',
  'RU-ULY': 'pfo',
  'RU-CU': 'pfo',
  'RU-KGN': 'urfo',
  'RU-SVE': 'urfo',
  'RU-TYU': 'urfo',
  'RU-KHM': 'urfo',
  'RU-CHE': 'urfo',
  'RU-YAN': 'urfo',
  'RU-ALT': 'sfo',
  'RU-AL': 'sfo',
  'RU-BU': 'sfo',
  'RU-ZAB': 'sfo',
  'RU-IRK': 'sfo',
  'RU-KEM': 'sfo',
  'RU-KYA': 'sfo',
  'RU-NVS': 'sfo',
  'RU-OMS': 'sfo',
  'RU-TOM': 'sfo',
  'RU-TY': 'sfo',
  'RU-KK': 'sfo',
  'RU-AMU': 'dfo',
  'RU-YEV': 'dfo',
  'RU-KAM': 'dfo',
  'RU-MAG': 'dfo',
  'RU-PRI': 'dfo',
  'RU-SA': 'dfo',
  'RU-SAK': 'dfo',
  'RU-KHA': 'dfo',
  'RU-CHU': 'dfo'
};

const sumReg = [
  {
    REGION_ID: '9000001',
    VALUE_SUM: '0',
    REGION_NAME: 'Центральный федеральный округ',
    SHORT_NAME: 'cfo',
    HUE: 60,
    LIGHTNESS: 0.72,
  },
  {
    REGION_ID: '9000002',
    VALUE_SUM: '0',
    REGION_NAME: 'Южный федеральный округ',
    SHORT_NAME: 'yfo',
    HUE: 171,
    LIGHTNESS: 0.56,
  },
  {
    REGION_ID: '9000003',
    VALUE_SUM: '0',
    REGION_NAME: 'Северо-Западный федеральный округ',
    SHORT_NAME: 'szfo',
    HUE: 349,
    LIGHTNESS: 0.72,
  },
  {
    REGION_ID: '9000004',
    VALUE_SUM: '0',
    REGION_NAME: 'Дальневосточный федеральный округ',
    SHORT_NAME: 'dfo',
    HUE: 303,
    LIGHTNESS: 0.47,
  },
  {
    REGION_ID: '9000005',
    VALUE_SUM: '0',
    REGION_NAME: 'Сибирский федеральный округ',
    SHORT_NAME: 'sfo',
    HUE: 107,
    LIGHTNESS: 0.41,
  },
  {
    REGION_ID: '9000006',
    VALUE_SUM: '0',
    REGION_NAME: 'Уральский федеральный округ',
    SHORT_NAME: 'ufo',
    HUE: 217,
    LIGHTNESS: 0.76,
  },
  {
    REGION_ID: '9000007',
    VALUE_SUM: '0',
    REGION_NAME: 'Приволжский федеральный округ',
    SHORT_NAME: 'pfo',
    HUE: 194,
    LIGHTNESS: 0.47,
  },
  {
    REGION_ID: '9000008',
    VALUE_SUM: '0',
    REGION_NAME: 'Северо-Кавказский федеральный округ',
    SHORT_NAME: 'skfo',
    HUE: 45,
    LIGHTNESS: 0.55,
  }
];

const infoReg = {
  'RU-BEL':  '0',
  'RU-BRY': '0',
  'RU-VLA': '0',
  'RU-VOR': '0',
  'RU-IVA': '0',
  'RU-KLU': '0',
  'RU-KOS': '0',
  'RU-KRS': '0',
  'RU-LIP': '0',
  'RU-MOS': '0',
  'RU-MOW': '0',
  'RU-ORL': '0',
  'RU-RYA': '0',
  'RU-SMO': '0',
  'RU-TAM': '0',
  'RU-TVE': '0',
  'RU-TUL': '0',
  'RU-YAR': '0',
  'RU-ARK': '0',
  'RU-VLG': '0',
  'RU-KGD': '0',
  'RU-KR': '0',
  'RU-KO': '0',
  'RU-LEN': '0',
  'RU-MUR': '0',
  'RU-NEN': '0',
  'RU-NGR': '0',
  'RU-PSK': '0',
  'RU-SPE': '0',
  'RU-AD': '0',
  'RU-AST': '0',
  'RU-VGG': '0',
  'RU-KL': '0',
  'RU-KDA': '0',
  'RU-SEV': '0',
  'RU-KRY': '0',
  'RU-ROS': '0',
  'RU-DA': '0',
  'RU-IN': '0',
  'RU-KB': '0',
  'RU-KC': '0',
  'RU-SE': '0',
  'RU-STA': '0',
  'RU-CE': '0',
  'RU-BA': '0',
  'RU-KIR': '0',
  'RU-ME': '0',
  'RU-MO': '0',
  'RU-NIZ': '0',
  'RU-ORE': '0',
  'RU-PNZ': '0',
  'RU-PER': '0',
  'RU-SAM': '0',
  'RU-SAR': '0',
  'RU-TA': '0',
  'RU-UD': '0',
  'RU-ULY': '0',
  'RU-CU': '0',
  'RU-KGN': '0',
  'RU-SVE': '0',
  'RU-TYU': '0',
  'RU-KHM': '0',
  'RU-CHE': '0',
  'RU-YAN': '0',
  'RU-ALT': '0',
  'RU-AL': '0',
  'RU-BU': '0',
  'RU-ZAB': '0',
  'RU-IRK': '0',
  'RU-KEM': '0',
  'RU-KYA': '0',
  'RU-NVS': '0',
  'RU-OMS': '0',
  'RU-TOM': '0',
  'RU-TY': '0',
  'RU-KK': '0',
  'RU-AMU': '0',
  'RU-YEV': '0',
  'RU-KAM': '0',
  'RU-MAG': '0',
  'RU-PRI': '0',
  'RU-SA': '0',
  'RU-SAK': '0',
  'RU-KHA': '0',
  'RU-CHU': '0'
};

const maxDistricts = {
  cfo: 0,
  szfo: 0,
  yfo: 0,
  skfo: 0,
  pfo: 0,
  urfo: 0,
  sfo: 0,
  dfo: 0,
}

const colorsReg = {
  'RU-BEL':  '0',
  'RU-BRY': '0',
  'RU-VLA': '0',
  'RU-VOR': '0',
  'RU-IVA': '0',
  'RU-KLU': '0',
  'RU-KOS': '0',
  'RU-KRS': '0',
  'RU-LIP': '0',
  'RU-MOS': '0',
  'RU-MOW': '0',
  'RU-ORL': '0',
  'RU-RYA': '0',
  'RU-SMO': '0',
  'RU-TAM': '0',
  'RU-TVE': '0',
  'RU-TUL': '0',
  'RU-YAR': '0',
  'RU-ARK': '0',
  'RU-VLG': '0',
  'RU-KGD': '0',
  'RU-KR': '0',
  'RU-KO': '0',
  'RU-LEN': '0',
  'RU-MUR': '0',
  'RU-NEN': '0',
  'RU-NGR': '0',
  'RU-PSK': '0',
  'RU-SPE': '0',
  'RU-AD': '0',
  'RU-AST': '0',
  'RU-VGG': '0',
  'RU-KL': '0',
  'RU-KDA': '0',
  'RU-SEV': '0',
  'RU-KRY': '0',
  'RU-ROS': '0',
  'RU-DA': '0',
  'RU-IN': '0',
  'RU-KB': '0',
  'RU-KC': '0',
  'RU-SE': '0',
  'RU-STA': '0',
  'RU-CE': '0',
  'RU-BA': '0',
  'RU-KIR': '0',
  'RU-ME': '0',
  'RU-MO': '0',
  'RU-NIZ': '0',
  'RU-ORE': '0',
  'RU-PNZ': '0',
  'RU-PER': '0',
  'RU-SAM': '0',
  'RU-SAR': '0',
  'RU-TA': '0',
  'RU-UD': '0',
  'RU-ULY': '0',
  'RU-CU': '0',
  'RU-KGN': '0',
  'RU-SVE': '0',
  'RU-TYU': '0',
  'RU-KHM': '0',
  'RU-CHE': '0',
  'RU-YAN': '0',
  'RU-ALT': '0',
  'RU-AL': '0',
  'RU-BU': '0',
  'RU-ZAB': '0',
  'RU-IRK': '0',
  'RU-KEM': '0',
  'RU-KYA': '0',
  'RU-NVS': '0',
  'RU-OMS': '0',
  'RU-TOM': '0',
  'RU-TY': '0',
  'RU-KK': '0',
  'RU-AMU': '0',
  'RU-YEV': '0',
  'RU-KAM': '0',
  'RU-MAG': '0',
  'RU-PRI': '0',
  'RU-SA': '0',
  'RU-SAK': '0',
  'RU-KHA': '0',
  'RU-CHU': '0'
};



@Component({
  selector: 'app-maps-test',
  templateUrl: './maps-test.component.html',
  styleUrls: ['./maps-test.component.css'],
  providers: [Service]
})

export class MapsTestComponent implements OnInit {

  districtssum: District[];
  regionsum: Region[];
  constructor(private service: Service) {
    this.districtssum = service.getDistricts();
    this.regionsum = service.getRegions();
  }
  public map: any;
  // tslint:disable-next-line:typedef
  ngOnInit() {

    // tslint:disable-next-line:forin

    function hslToHex(h, s, l) {
      if(isNaN(s)) s = 0;
      console.log(h,s,l);
      h /= 360;
      // s /= 100;
      // l /= 100;
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      let res = '#'+`${toHex(r)}${toHex(g)}${toHex(b)}`;
      // console.log(res);
      return res;
    }


    for (let i in sumReg) {
      for(let j in this.districtssum){
        if(Number(sumReg[i].REGION_ID) === Number(this.districtssum[j].REGION_ID)){
          sumReg[i].VALUE_SUM = this.districtssum[j].VALUE_SUM;
        }
      }
    }

    for(let i in infoReg) {
      for (let j in this.regionsum) {
        // alert(i);
        if (i === this.regionsum[j].ISO) {
          infoReg[i] = Number(this.regionsum[j].VALUE_SUM);
        }
      }
    }

    for(let k in districtByIso) {
      for (let i in maxDistricts) {
          for (let j in infoReg) {
            if(i == districtByIso[k] && j == k && maxDistricts[i] < infoReg[j]){
                   maxDistricts[i] = Number(infoReg[j]);
          }
        }
      }
    }

    for(let k in districtByIso) {
      for (let i in maxDistricts) {
        for (let j in infoReg) {
          if(i == districtByIso[k] && j == k){
            colorsReg[j] = Number(infoReg[j] / maxDistricts[i]).toFixed(2);
          }
        }
      }
    }
    for(let i in colorsReg){
      if(isNaN(colorsReg[i])) colorsReg[i] = 0..toFixed(2);
    }

    for(let k in districtByIso) {
      for (let i in colorsReg) {
        for (let j = 0; j < sumReg.length; j++) {
          if(sumReg[j].SHORT_NAME == districtByIso[k] && i == k){
            colorsReg[i] = hslToHex(sumReg[j].HUE, Number(colorsReg[i]),sumReg[j].LIGHTNESS);
          }
        }
      }
    }

    ymaps.ready(init);
    function init() {
      const map = new ymaps.Map('map', {
        center: [65, 100],
        zoom: 1,
        type: null,
        controls: ['zoomControl']
      }, {
        restrictMapArea: [[10, 10], [85, -160]]
      });
      map.controls.get('zoomControl').options.set({size: 'small'});
      // Добавим заливку цветом.
      const pane = new ymaps.pane.StaticPane(map, {
        zIndex: 100, css: {
          width: '100%', height: '100%', backgroundColor: '#f7f7f7'
        }
      });
      map.panes.append('white', pane);
      // Зададим цвета федеральных округов.
      const districtColors = {
        cfo: '#ffff6f',
        szfo: '#54cbba',
        yfo: '#f9768e',
        skfo: '#9a5597',
        pfo: '#30cb05',
        urfo: '#bac1cc',
        sfo: '#16acdb',
        dfo: '#fbc520'
      };

      // Зададим подсказки при наведении на федеральный округ.
      const districtsHints = {
        cfo: 'ЦФО = ' + sumReg[0].VALUE_SUM ,
        szfo: 'СЗФО = ' + sumReg[2].VALUE_SUM,
        yfo: 'ЮФО = ' + sumReg[1].VALUE_SUM,
        skfo: 'СКФО = ' + sumReg[7].VALUE_SUM,
        pfo: 'ПФО =  ' + sumReg[6].VALUE_SUM,
        urfo: 'УрФО = ' + sumReg[5].VALUE_SUM,
        sfo: 'СФО = ' + sumReg[4].VALUE_SUM,
        dfo: 'ДФО = ' + sumReg[3].VALUE_SUM
      };
      // tslint:disable-next-line:forin
      for (const i in districtsHints){
        districtsHints[i] = 'Суммарный пассажиропоток по '.concat(districtsHints[i]);
      }
      // Создадим балун.
      const districtBalloon = new ymaps.Balloon(map);
      districtBalloon.options.setParent(map.options);
      // Загрузим регионы.
      ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
        // tslint:disable-next-line:only-arrow-functions
      }).then(function(result) {
        // Создадим объект, в котором будут храниться коллекции с нашими регионами.
        const districtCollections = {};
        // Для каждого федерального округа создадим коллекцию.
        // tslint:disable-next-line:forin
        for (const district in districtColors) {
          // console.log(districtColors[district]);
          districtCollections[district] = new ymaps.GeoObjectCollection(null, {
            fillColor: districtColors[district],
            strokeColor: districtColors[district],
            strokeOpacity: 0.5,
            fillOpacity: 0.3,
            hintCloseTimeout: 0,
            hintOpenTimeout: 0
          });

          // console.log(districtCollections[district]);
          // Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
          // districtCollections[district].properties.districts = [];
          districtCollections[district].properties.summas = [];
          // districtCollections[district].properties.regColors = [];
        }

        // tslint:disable-next-line:only-arrow-functions typedef
        result.features.forEach(function(feature) {

          const iso = feature.properties.iso3166;
          const name = feature.properties.name;



          const district = districtByIso[iso];
          const summa = infoReg[iso];


          // Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
          feature.properties.hintContent = districtsHints[district];
          feature.properties.summRegion = summa;

          // console.log(feature.properties.hintContent);

          // console.log(districtCollections[district].optrions);
          // Добавим субъект РФ в соответствующую коллекцию.
          districtCollections[district].add(new ymaps.GeoObject(feature));

          // console.log(districtCollections['szfo']);

          // Добавим имя субъекта РФ в массив.
          // districtCollections[district].properties.districts.push(name);
          districtCollections[district].properties.summas.push(name+ " = "+ summa);

          // console.log(districtCollections[district]);
        });
        // Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
        let highlightedDistrict;
        for (const districtName in districtCollections) {
          // Добавим коллекцию на карту.
          map.geoObjects.add(districtCollections[districtName]);
          // console.log(districtCollections[districtName]);
          // При наведении курсора мыши будем выделять федеральный округ.
          districtCollections[districtName].events.add(
            // tslint:disable-next-line:only-arrow-functions typedef
            'mouseenter', function(event)
            {
              const district = event.get('target').getParent();
              district.options.set({
                fillOpacity: 1
                // outline: 1,
                // strokeWidth:1
              });
            }
          );
          // При выводе курсора за пределы объекта вернем опции по умолчанию.
          districtCollections[districtName].events.add('mouseleave', function(event) {
            const district = event.get('target').getParent();
            if (district !== highlightedDistrict) {
              district.options.set({fillOpacity: 0.3});
            }
          });
          // Подпишемся на событие клика.
          districtCollections[districtName].events.add('click', function(event) {
            const target = event.get('target');
            const district = target.getParent();

            // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
            if (highlightedDistrict) {
              highlightedDistrict.options.set({fillOpacity: 0.3});
            }
            // Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
            // по которому кликнул пользователь.
            districtBalloon.open(
              event.get('coords'),
              {
                contentHeader: 'Сумм. по регионам:',
                contentBody: //district.properties.districts.join('<br>'),
                district.properties.summas.join('<br>'),

              }
            );
            // Выделим федеральный округ.
            district.options.set({fillOpacity: 1});
            // Сохраним ссылку на выделенный федеральный округ.
            highlightedDistrict = district;
          });
        }
      });

    }
  }
}


console.log(colorsReg);
