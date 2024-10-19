"use strict";

/**Функция вывода ошибок вычисления в методах
 * @param {string} functionName
 * @param {string} messageFromFunction
 */
function viewingFunctionErrors(functionName, messageFromFunction) {
  console.log(`execution errors of ${functionName}  method because: ${messageFromFunction}`)
}

/**Функция проверки переданных в функцию значений аргументов 
 * @param {Array} argumentValues
 * @param {Array} ErrorMessages
 * 
 * @returns {string}
 */
function checkingReceivedArgumentValues(argumentValues, ErrorMessages) {
  let errorMessage = null;
  for (let i = 0; i < argumentValues.length; i++) {
    (typeof (argumentValues[i]) !== 'number') ? errorMessage = `The value '${argumentValues[i]}' was entered as the '${(i + 1 + "'").padEnd(2)} argument, and therefore: ${ErrorMessages[i]}` : null;
    //console.log ( `The value ${argumentValues [ i ]} was entered as the '${ ( i + "'" ).padEnd ( 2 ) } argument, and therefore: ${ErrorMessages[i]}` )
  }
  errorMessage == null ? errorMessage = `${ErrorMessages[ErrorMessages.length - 1]}` : null
  return errorMessage
}

/**Функция округления до сотых долей
 * @param {number} argument
 *
 * @returns {number}
 */
function roundingFunctionToHundredths(argument) {
  let arrayOfErrorMessages = ["argument is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  let errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const argumentRoundedToHundredths = Math.round(argument * 100) / 100;
    return argumentRoundedToHundredths;
  } catch (error) { viewingFunctionErrors(roundingFunctionToHundredths.name, errorMessage) };
}

const flareCombustionCalculationParameters = {
  0: ["tableTorchBuring", "Vikhidni Dan for the script  'Torch Gorinnya' | Вихідні дані для сценарію 'Факельне горіння'"],
  1: ["The average surface density of thermal radiation of the flame of the torch | Середньоповерхнева густина теплового випромінювання полум'я факелу", "kW/m<sup>2</sup> | кВт/м<sup>2</sup>", ["input", "averageSurfaceDensityOfThermalRadiationOfTheFlameOfTheTorch", "number", "100"]]
}

const explosionCalculationParameters = {
  0: ["tableExplosion", "Output for scenario 'Explosion' | Вихідні дані для сценарію 'Вибух'"],
  1: ["Participation ratio in accordance with DSTU B V.1.1-36:2016 (p. 43) | Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)", " - ", ["input", "theCoefficientOfParticipationInTheExplosion", "number", "0.1"]],
  2: ["Air flow velocity over the evaporation mirror | Швидкість повітряного потоку над дзеркалом випаровування", " m/s | м/с ", ["select", "flowVelocityOverTheEvaporationMirror", ["0:0", "0.1:0,1", "0.2:0,2", "0.5:0,5", "1.0:1,0" ]]]
}

const straitFireCalculationParameters = {
  0: ["tableStraitFire", "Output for scenario 'Strait Fire' | Вихідні дані для сценарію 'Пожежа проливу'"],
  1: ["The length of the roll | Довжина обвалування", " m | м", ["input", "lengthOfTheBund", "number", "0"]],
  2: ["The width of the collapse | Ширина обвалування", " m | м", ["input", "theWidthOfTheBund", "number", "0"]],
  3: ["The height of the collapse | Висота обвалування", " m | м", ["input", "theHeightOfTheBund", "number", "0"]],
  4: ["The average surface density of thermal radiation of the flame of the torch fires of shed in accordance with DSTU B V.1.1-36:2016 (p. 55)| Середньоповерхнева густина теплового випромінювання полум'я пожежі проливу відповідно до ДСТУ Б В.1.1-36:2016 (стор. 55)", "kW/m<sup>2</sup> | кВт/м<sup>2</sup>", ["input", "averageSurfaceDensityOfThermalRadiationOfTheFlameFiresOfShed", "number", "0"]]
}

const fireballCalculationParameters = {
  0: ["tableFireball", "Output for scenario 'Fireball' | Вихідні дані для сценарію 'Вогняна куля'"],
  1: ["Average surface density of thermal radiation of the 'fireball' flame | Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі'", "kW/m<sup>2</sup> | кВт/м<sup>2</sup>", ["input", "averageSurfaceDensityOfThermalRadiationOfTheFireballFlame", "number", "450"]]
}

const evaporationOfAHazardousChemicalSubstanceCalculationParameters = {
  0: ["tableEvaporationOfAHazardousChemicalSubstance", "Output for scenario 'Evaporation of a hazardous chemical substance' | Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"],
  1: ["The nature of the task | Характер задачі", " - ", ["select", "natureOfTheTask", ["longTermForecasting:Довгострокове прогнозування", "emergencyForecasting:Аварійне прогнозування", "noOutputData:Відсутності вихідні дані"]]],
  2: ["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі", " - ", ["select", "stateOfTheAtmosphereInTheSurfaceLayer", ["Інверсія:Інверсія", "Ізотермія:Ізотермія", "Конвекція:Конвекція"]]],
  3: ["Type of relief | Вид рельєфу", " - ", ["select", "typeOfRelief", ["Рівнинний:Рівнинний", "Рівниннохвилястий:Рівниннохвилястий", "Рівнинногорбистий:Рівнинногорбистий", "Горбистобалочний:Горбистобалочний", "Горбистний:Горбистий", "Предгір'я:Предгір'я"]]],
  4: ["Type of vegetation | Вид рослинності", " - ", ["select", "typeOfVegetation", ["Лісиста:Лісиста", "Лісиста-степова:Лісиста-степова", "Степова:Степова", "Напівпустиня:Напівпустиня"]]],
  5: ["Forest type | Тип лісу", " - ", ["select", "forestType", ["Хвойний:Хвойний", "Змішаний:Змішаний:", "Листяний:Листяний"]]],
  6: ["Time of year | Пора року", " - ", ["select", "timeOfYear", ["Літо:Літо", "Зима:Зима:"]]],
  7: ["Wind speed at a height of 1-10 m | Швидкість вітру на висоті 1-10 м", "m/s | м/c", ["input", "windSpeedAtAHeightOf1_10m", "number", "5"]],
  8: ["Presence of bunding | Наявність обвалування", " - ", ["select", "presenceOfBunding", ["false:Ні", "true:Так"]]],
  9: ["The height of the collapse (for tanks with a volume of more than 2000 tons) | Висота обвалування (для ємностей об'ємом більше 2000 т)", " m | м", ["input", "heightOfBund", "number", "0"]]
}

const roomExplosionCalculationParameters = {
  0: ["tableRoomExplosion", "Output for scenario 'An explosion in the room' | Вихідні дані для сценарію 'Вибух в приміщенні'"],
  1: ["The length of the room | Довжина приміщення", " m | м", ["input", "theLengthOfTheRoom", "number", "5"]],
  2: ["The width of the room | Ширина приміщення", " m | м", ["input", "theWidthOfTheRoom", "number", "5"]],
  3: ["Room height | Висота приміщення", " m | м", ["input", "roomHeight", "number", "2.7"]],
  4: ["The volume is occupied by auxiliary equipment | Об'єм зайнятий допоміжним обладнанням", " m<sup>3 | м<sup>3", ["input", "theVolumeIsOccupiedByAuxiliaryEquipment", "number", "0"]],
  5: ["Maximum explosion pressure of a stoichiometric mixture in a closed volume | Максимальний тиск вибуху стехіометричної суміші у замкнутому об'ємі", " - ", ["input", "maximumExplosionPressureOfAStoichiometricMixtureInAClosedVolume", "number", "900"]]
}

/**Функция наполнения таблиц исходных данных сценариев расчета
 * @param {object} optionsObject
 *
 * @returns 
 */
function fillingParameterTables(optionsObject) {
  const table = document.createElement('table');
  table.id = optionsObject["0"][0];
  const caption = document.createElement('caption');
  caption.innerHTML = optionsObject["0"][1];
  table.appendChild(caption);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const tr = document.createElement('tr');
  const theOne = document.createElement('th');
  theOne.innerHTML = "Parameter | Параметер";
  theOne.style = "width: 60%";
  tr.appendChild(theOne);
  const theTwo = document.createElement('th');
  theTwo.innerHTML = "Units | Одиниці виміру";
  theTwo.style = "width: 20%";
  tr.appendChild(theTwo);
  const theThree = document.createElement('th');
  theThree.innerHTML = "Мeaning | Значення";
  theThree.style = "width: 20%";
  tr.appendChild(theThree);
  tbody.appendChild(tr);
  const numberOfParametersInTables = Object.keys(optionsObject)
  for (let i = 1; i < numberOfParametersInTables.length; i++) {
    const tr = document.createElement('tr');
    const parameter = optionsObject[i];
    for (const iterator of parameter) {
      if (typeof (iterator) == 'string') {
        const td = document.createElement('td');
        td.innerHTML = iterator;
        td.className = "pr";
        tr.appendChild(td);
      } else {
        const td = document.createElement('td');
        const element = document.createElement(`${iterator[0]}`);
        element.id = iterator[1];
        if (iterator[0] == 'select') {
          for (let j = 0; j < iterator[2].length; j++) {
            let option = document.createElement('option');
            option.innerHTML = iterator[2][j].split(':')[1];
            option.value = iterator[2][j].split(':')[0];
            element.appendChild(option)
          }
        } else {
          element.type = iterator[2];
          element.value = iterator[3];
        }
        td.appendChild(element);
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  //let calc = document.getElementById ('calc');
  return table
}
/** Дані за замовчуванням що використано в розрахунку
 * 
 */
const defaultData = {
  accelerationOfGravity: "9.81 m/c^2",
  antoinesCoefficients: {
    A: {
      gasCondensate: "4.195",
      diesel: 5.07818,
      ethylMercaptan: 7.3527, // по метанолу
      methanol: "7.3527", //https://mybibliotekf.su/tom3/3-5822.html
      oil: 5.07020
    },
    B: {
      gasCondensate: "682",
      diesel: 1255.73,
      ethylMercaptan: 1660.454, // по метанолу
      methanol: "1660.454",
      oil: 682.876
    },
    C: {
      gasCondensate: "222.066",
      diesel: 199.523,
      ethylMercaptan: 245.818, // по метанолу 
      methanol: "245.818",
      oil: 222.066
    }
  },
  atmosphericPressure: "101.3 kPa",
  boilingPoint: {
    ethylMercaptan: "37 degrees Celsius"
  },
  constantQ0: "4520 kJ",
  densityUnderNormalConditions: {
    gasesAndVapors: {
      air: "1.293 kg/m^3",
      ethylMercaptan: "2.7153 kg/m^3",
      methane: "0.77 kg/m^3",
      methanolVapor: "0.79 kg/m^3",
      propaneButane: "2.019 kg/m^3",
    },
    liquids: {
      diesel: "860 kg/m^3",
      gasCondensate: "760 kg/m^3",
      ethylMercaptan: "840 kg/m^3",
      methanol: "792 kg/m^3",
      oil: "730 kg/m^3",
    }
  },
  lowerConcentrationAisleOfFireSpread: {
    gasCondensate: "5.28 %",
    diesel: "0.6 %",
    ethylMercaptan: "5.28 %", // пока по метану
    methane: "5.28 %",
    methanol: "6.7 %",
    oil: "1.4 %",
    propaneButane: "1.7 %",
  },
  maximumAllowableConcentrationInAtmosphericAir: {
    ethylMercaptan: "1 mg/m^3",
    methanol: "1 mg/m^3",
    propaneButane: "1 mg/m^3",
  },
  maximumAllowableConcentrationInTheAirOfTheWrkingArea: {
    gasCondensate: "300 mg/m^3",
    ethylMercaptan: "1 mg/m^3",
    methanol: "5 mg/m^3",
    propaneButane: "300 mg/m^3",
  },
  molarMass: {
    gasCondensate: "98.2 kg/kmol",
    diesel: "173.3 kg/kmol" ,
    ethylMercaptan: "62.1 kg/kmol",
    methane: "16.04 kg/kmol",
    methanol: "32.04 kg/kmol",
    oil: "220—400 г/моль",
    propaneButane: "51 kg/kmol",
  },  
  molarVolume: "22.413 m^3/kmol",
  pressuresAtNormalConditions: "0.101325 MPa",
  pressureAtStandardConditions: "0.101325 MPa",
  specificExplosiveHeatOfTNT: "4200 kJ/kg",
  specificHeat: {
    ethylMercaptan: "1.498 kJ/(kg*degr)",
  },
  specificHeatOfVaporization: {
    ethylMercaptan: "427.36 kJ/kg",
  },
  temperatureAtNormalConditions: "273.15 K",
  temperatureAtStandardConditions: "293.15 K",
  universalGasConstant: "8.31 kJ/(kmol*K)",
  "Висота слою розливу": "0.05 m",
  "Густина повітря за разрахункової температури (61 гарус С)": "1.060 kg/m^3",
  "Значення поправного коефіцієнта Кt1, що враховує вплив температури повітря на глибину поширення первинної хмари НХР": {
    temperature: [-20, -10, 0, 10, 20, 30],
    ethylMercaptan: [0, 0, 0, 1, 1, 1],
    methylMercaptan: [0, 0, 0, 0.5, 1.0, 2.4]
  },
  "Коефіцієнт учачсті":{
    methane: 0.5,
  },
  "Коефіцієнт що враховує негерметчність приміщення й неадіабатичність процесу горіння": 3,
  "Питома теплота згорання, кДж/кг": {
    diesel: 42700,
    gasCondensate: 22331,
    hydrogen: 141000,
    ethylMercaptan: "50125 принята как у метана",
    kerosine: 40800,
    methane: 50125,
    methanol: 22700,
    oil: 41000,
    propaneButane: 47540
  },
  "Питома швидкість вигорання, кг/(м.кв * с)": {
    diesel: 0.04,
    gasCondensate: 0.06,
    hydrogen: "ХЗ",
    ethylMercaptan: "ХЗ",
    methane: 0.08,
    oil: 0.04,
    propaneButane: 0.1
  },
  "Середньоповерхнева густина теплового випромінювання полум'я Ef, кВт/м.кв": {
    diameters: [10, 20, 30, 40, 50],
    diesel: [40, 32, 25, 21, 18],
    gasCondensate: [60, 47, 35, 28, 25],
    hydrogen: "ХЗ",
    ethylMercaptan: "ХЗ",
    methane: [220, 180, 150, 130, 120],
    oil: [25, 19, 15, 12, 10],
    propaneButane: [80, 63, 50, 43, 40]
  },
  "Число атомів в молекулі сполуки":{
    "шаблон": ["углеро", "водород", "кислород", "гологени"],
    methane: [1,4,0,0],
  }
}

/**Функция добавления исходных параметров для всех сценариев !!!! НАДО ДОПИЛИТЬ
 * @param {}
 *
 * @returns 
 */
/*
function checkboxHandler() {
  let torchBuring = document.getElementById ('torchBuring');
  let explosion = document.getElementById ('explosion');
  let calc = document.getElementById ('calc');
  let parameters = document.getElementById ('parameters');
  if (torchBuring.checked) {
      let tableTorchBuring = fillingParameterTables (flareCombustionCalculationParameters);
      parameters.insertBefore(tableTorchBuring, calc);
  } else {
      let tableTorchBuring = document.getElementById ('tableTorchBuring');
      parameters.removeChild(tableTorchBuring)
  }
  if (explosion.checked) {
      let tableExplosion = fillingParameterTables (flareCombustionCalculationParameters);
      parameters.insertBefore(tableExplosion, calc);
  } else {
      let tableExplosion = document.getElementById ('tableExplosion');
      parameters.removeChild(tableExplosion)
  }
}
*/

/**Функция добавления исходных параметров для расчета факельного горения
 * @param {}
 *
 * @returns 
 */
function addDateForTorchBuring() {
  const torchBuring = document.getElementById('torchBuring');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (torchBuring.checked) {
    const tableTorchBuring = fillingParameterTables(flareCombustionCalculationParameters);
    parameters.insertBefore(tableTorchBuring, calc);
  } else {
    const tableTorchBuring = document.getElementById('tableTorchBuring');
    parameters.removeChild(tableTorchBuring);
  }
}

/**Функция добавления исходных параметров для расчета взрыва
 * @param {}
 *
 * @returns 
 */
function addDateForExplosion() {
  const explosion = document.getElementById('explosion');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (explosion.checked) {
    const tableExplosion = fillingParameterTables(explosionCalculationParameters);
    parameters.insertBefore(tableExplosion, calc);
  } else {
    const tableExplosion = document.getElementById('tableExplosion');
    parameters.removeChild(tableExplosion);
  }
}

/**Функция добавления исходных параметров для пожара разлива
 * @param {}
 *
 * @returns 
 */
function addDateForStraitFire() {
  const straitFire = document.getElementById('straitFire');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (straitFire.checked) {
    const tableStraitFire = fillingParameterTables(straitFireCalculationParameters);
    parameters.insertBefore(tableStraitFire, calc);
  } else {
    const tableStraitFire = document.getElementById('tableStraitFire');
    parameters.removeChild(tableStraitFire);
  }
}

/**Функция добавления исходных параметров для расчета "огненного шара"
 * @param {}
 *
 * @returns 
 */
function addDateForFireball() {
  const fireball = document.getElementById('fireball');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (fireball.checked) {
    const tableFireball = fillingParameterTables(fireballCalculationParameters);
    parameters.insertBefore(tableFireball, calc);
  } else {
    const tableFireball = document.getElementById('tableFireball');
    parameters.removeChild(tableFireball);
  }
}

/**Функция добавления исходных параметров для расчета "Випаровування небезпечної хімічної речовини" 
 * @param {}
 *
 * @returns 
 */
function addDateForEvaporationOfAHazardousChemicalSubstance() {
  const evaporationOfAHazardousChemicalSubstance = document.getElementById('evaporationOfAHazardousChemicalSubstance');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (evaporationOfAHazardousChemicalSubstance.checked) {
    const tableEvaporationOfAHazardousChemicalSubstance = fillingParameterTables(evaporationOfAHazardousChemicalSubstanceCalculationParameters);
    parameters.insertBefore(tableEvaporationOfAHazardousChemicalSubstance, calc);
  } else {
    const tableEvaporationOfAHazardousChemicalSubstance = document.getElementById('tableEvaporationOfAHazardousChemicalSubstance');
    parameters.removeChild(tableEvaporationOfAHazardousChemicalSubstance);
  }
}

/**Функция добавления исходных параметров для расчета взрыва в помещении
 * @param {}
 *
 * @returns 
 */
function addDateForAnExplosionInTheRoom() {
  const anExplosionInTheRoom = document.getElementById('anExplosionInTheRoom');
  const calc = document.getElementById('calc');
  const parameters = document.getElementById('parameters');
  if (anExplosionInTheRoom.checked) {
    const tableRoomExplosion = fillingParameterTables(roomExplosionCalculationParameters);
    parameters.insertBefore(tableRoomExplosion, calc);
  } else {
    const tableRoomExplosion = document.getElementById('tableRoomExplosion');
    parameters.removeChild(tableRoomExplosion);
  }
}

/**Функция определения относительной плотности паров вещества относительно воздуха
 * @param {number} density
 * 
 * @returns {number}
 */
function determinationOfTheDensityRelativeToAir(density) {
  const arrayOfErrorMessages = ["density is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const densityRelativeToAir = density / parseFloat(defaultData.densityUnderNormalConditions.gasesAndVapors.air);
    return densityRelativeToAir;
  } catch (error) { viewingFunctionErrors(determinationOfTheDensityRelativeToAir.name, errorMessage) };
}

/**Функция определения плотности при стандартных условиях по известной плотности в нормальных условиях
 * @param {number} densityAtNormalConditions
 * 
 * @returns {number}
 */
function determinationOfTheDensityAtStandardConditions(densityAtNormalConditions) {
  const arrayOfErrorMessages = ["densityAtNormalConditions is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const densityAtStandardConditions = densityAtNormalConditions * defaultData.temperatureAtNormalConditions / defaultData.temperatureAtStandardConditions;
    return densityAtStandardConditions;
  } catch (error) { viewingFunctionErrors(determinationOfTheDensityAtStandardConditions.name, errorMessage) };
}

/**Функция определения коэффициента сжимаемости при заданных температуре и давлении
 * @param {number} pressure
 * @param {number} temperature
 * @param {string} substance
 * 
 * @return {number}
 */
function determiningTheCompressibilityCoefficientAtAGivenTemperatureAndPressure(pressure, temperature, substance) {
  const arrayOfErrorMessages = ["pressure is incorrect", "temperature is incorrect", "substance is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const compressibilityCoefficient = 1 - 5.5 * Math.pow(10, 6) * pressure * Math.pow(determinationOfTheDensityRelativeToAir(parseFloat(defaultData.densityUnderNormalConditions.gasesAndVapors[substance])), 1.3) / Math.pow(temperature, 3.3);
    return compressibilityCoefficient
  } catch (error) { viewingFunctionErrors(determiningTheCompressibilityCoefficientAtAGivenTemperatureAndPressure.name, errorMessage) };
}

/**Функция определения плотности газа при заданных температуре и давлении
 * @param {number} pressure
 * @param {number} temperature
 * @param {number} compressibilityCoefficient 
 * @param {string} substance
 * 
 * @return {number}* 
 */
function determiningTheDensity(pressure, temperature, compressibilityCoefficient, substance) {
  const arrayOfErrorMessages = ["pressure is incorrect", "temperature is incorrect", "compressibilityCoefficient is incorrect", "substance is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const densityAtWorkConditions = pressure / temperature * parseFloat(defaultData.temperatureAtNormalConditions) / parseFloat(defaultData.pressuresAtNormalConditions) / compressibilityCoefficient * parseFloat(defaultData.densityUnderNormalConditions.gasesAndVapors[substance]);
    return densityAtWorkConditions;
  } catch (error) { viewingFunctionErrors(determiningTheDensity.name, errorMessage) };
}

/** Функция определения плотность ГГ или ЛВЖ при расчетной температуре (в град С)
 * @param {number} molarMass
 * @param {number} designTemperature
 * 
 * @return {number}
 */
function determiningOfGasDensityAtDesignTemperature(molarMass, designTemperature) {
  const arrayOfErrorMessages = ["molarMass is incorrect", "designTemperature is incorrect", "substance is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const gasDensity = molarMass / (parseFloat(defaultData.molarVolume) * (1 + 0.00367 * designTemperature));
    return gasDensity;
  } catch (error) { viewingFunctionErrors(determiningOfGasDensityAtDesignTemperature.name, errorMessage) };
}


/** Функция определения давления насыщенного пара
 * @param {string} substance
 * @param {number} designTemperature
 * 
 * @return {number}
 */
function determiningTheSaturatedSteamPressure(substance, designTemperature) {
  const arrayOfErrorMessages = ["substance is incorrect", "designTemperature is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const saturatedSteamPressure = Math.pow(10, (parseFloat(defaultData.antoinesCoefficients.A[substance]) - (parseFloat(defaultData.antoinesCoefficients.B[substance]) / (parseFloat(defaultData.antoinesCoefficients.C[substance]) + designTemperature))));
    return saturatedSteamPressure;
  } catch (error) { viewingFunctionErrors(determiningTheSaturatedSteamPressure.name, errorMessage) };
}

/** Функция определения объема цилиндра по диаметру и длине (для определения обемов цилиндирческих трубных участков)
 * @param {number} diameter
 * @param {number} length
 * 
 * @return {number}
 */
function determiningTheVolumeOfTheCylinderByDiameterAndLength(diameter, length) {
  const arrayOfErrorMessages = ["diameter is incorrect", "length is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let volumeOfTheCylinder = Math.PI * Math.pow ( diameter, 2 ) * Math.pow (10, -6) / 4 * length
    return volumeOfTheCylinder
  } catch (error) { viewingFunctionErrors(determiningTheVolumeOfTheCylinderByDiameterAndLength.name, errorMessage) };
}

/**Функция определения площади поперечного сечения трубопровода. Исходный диаметр в мм. Площадь в м.кв.
 * @param {number} tubeDiameter
 * 
 * @returns {number}
 */
function determiningThePipeArea(tubeDiameter) {
  const arrayOfErrorMessages = ["tubeDiameter is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const pipeArea = Math.PI * Math.pow(tubeDiameter, 2) / 4 * Math.pow (10, -6);
    return pipeArea;
  } catch (error) { viewingFunctionErrors(determiningThePipeArea.name, errorMessage) };
}

/**Функция определения категории взрывоопасности блоку
 * @param {number} relativeEnergyPotentialOfExplosiveness
 * @param {number} totalCombustibleGasesReducedToSpecificCombustionEnergy
 *
 * @returns {string}
 */
function blockExplosionCategoryCalculation(relativeEnergyPotentialOfExplosiveness, totalCombustibleGasesReducedToSpecificCombustionEnergy) {
  const arrayOfErrorMessages = ["relativeEnergyPotentialOfExplosiveness is incorrect", "totalCombustibleGasesReducedToSpecificCombustionEnergy is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let blockExplosionCategory = "III";
    if (27 <= relativeEnergyPotentialOfExplosiveness && 2000 <= totalCombustibleGasesReducedToSpecificCombustionEnergy < 5000) { blockExplosionCategory = "II" };
    if (37 >= relativeEnergyPotentialOfExplosiveness && totalCombustibleGasesReducedToSpecificCombustionEnergy >= 5000) { blockExplosionCategory = "I" };
    return blockExplosionCategory
  } catch (error) { viewingFunctionErrors(blockExplosionCategoryCalculation.name, errorMessage) };
}

/**определения значения коэффициетна ню по таблице 3
 * @param {number} flowVelocityOverTheEvaporationMirror 
 * @param {number} temperature // в град Цельсия
 * 
 * @returns {number}
 */
function determiningTheValueOfTheNu (flowVelocityOverTheEvaporationMirror, temperature) {
  let valueOfTheNu
  const arrayOfErrorMessages = ["flowVelocityOverTheEvaporationMirror is incorrect", "temperature is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    if (flowVelocityOverTheEvaporationMirror = 0) {valueOfTheNu = 1}
    if (flowVelocityOverTheEvaporationMirror = 0.1){
      if (temperature = 10) {valueOfTheNu = 3}
      if (temperature = 15) {valueOfTheNu = 2.6}
      if (temperature = 20) {valueOfTheNu = 2.4}
      if (temperature = 30) {valueOfTheNu = 1.8}
      if (temperature = 35) {valueOfTheNu = 1.6}
    }
    if (flowVelocityOverTheEvaporationMirror = 0.2){
      if (temperature = 10) {valueOfTheNu = 4.6}
      if (temperature = 15) {valueOfTheNu = 3.8}
      if (temperature = 20) {valueOfTheNu = 3.5}
      if (temperature = 30) {valueOfTheNu = 2.4}
      if (temperature = 35) {valueOfTheNu = 2.3}
    }
    if (flowVelocityOverTheEvaporationMirror = 0.5){
      if (temperature = 10) {valueOfTheNu = 6.6}
      if (temperature = 15) {valueOfTheNu = 5.7}
      if (temperature = 20) {valueOfTheNu = 5.4}
      if (temperature = 30) {valueOfTheNu = 3.6}
      if (temperature = 35) {valueOfTheNu = 3.2}
    }
    if (flowVelocityOverTheEvaporationMirror = 1){
      if (temperature = 10) {valueOfTheNu = 10}
      if (temperature = 15) {valueOfTheNu = 8.7}
      if (temperature = 20) {valueOfTheNu = 7.7}
      if (temperature = 30) {valueOfTheNu = 5.6}
      if (temperature = 35) {valueOfTheNu = 4.6}
    }
    if (temperature > 35) {valueOfTheNu = 4.6}
    return valueOfTheNu
  } catch (error) { viewingFunctionErrors(determiningTheValueOfTheNu.name, errorMessage) };
}


/**Функция определения условного радиуса зоны разрушения при взрыве в зависимости от массы парогазового облака, которое принимает участие во взрыве
 * @param {number} vapourMassReducedToTNTEquivalent
 * @param {number} reducedMass
 * 
 * @returns {number}
 */
function determinationOfTheConditionalRadiusOfTheBlastFractureZone(vapourMassReducedToTNTEquivalent, reducedMass) {
  const arrayOfErrorMessages = ["vapourMassReducedToTNTEquivalent is incorrect", "reducedMass is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const theConditionalRadiusOfTheBlastFractureZone = reducedMass >= 5000 ? Math.pow(vapourMassReducedToTNTEquivalent, 1 / 3) : Math.pow(vapourMassReducedToTNTEquivalent, 1 / 3) / Math.pow((1 + Math.pow(3180 / vapourMassReducedToTNTEquivalent, 2)), 1 / 6);
    return roundingFunctionToHundredths (theConditionalRadiusOfTheBlastFractureZone);
  } catch (error) { viewingFunctionErrors(determinationOfTheConditionalRadiusOfTheBlastFractureZone.name, errorMessage) };
}

/**Функция определения перепада давления во фронте на расстоянии r от эпицентра взрыва газовоздушного облака
 * @param {number} reducedMass
 * @param {number} radius
 * 
 * @returns {number}
 */
function determinationTheFrontalPressureDifferentialAtDistanceRFromTheEpicentreOfTheGasAirCloudExplosion(reducedMass, radius) {
  const arrayOfErrorMessages = ["reducedMass is incorrect", "radius is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const frontPressure = parseFloat(defaultData.atmosphericPressure) * (0.8 * Math.pow(reducedMass, 0.33) / radius + 3 * Math.pow(reducedMass, 0.66) / Math.pow(radius, 2) + 5 * reducedMass / Math.pow(radius, 3));
    return frontPressure;
  } catch (error) { viewingFunctionErrors(determinationTheFrontalPressureDifferentialAtDistanceRFromTheEpicentreOfTheGasAirCloudExplosion.name, errorMessage) };
}

/**Функция определения расстояния от эпицентра взрыва до фронта ударной волны с заданным перепадом давления 
 * @param {number} frontPressure
 * @param {number} reducedMass
 * 
 * @returns {number}
 */
function determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(frontPressure, reducedMass) {
  const arrayOfErrorMessages = ["frontPressure is incorrect", "reducedMass is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let selectableRadius = 0.5;
    do {
      var calculatedPressureDrop = determinationTheFrontalPressureDifferentialAtDistanceRFromTheEpicentreOfTheGasAirCloudExplosion(reducedMass, selectableRadius);
      selectableRadius += 0.1
    } while (frontPressure <= calculatedPressureDrop);
    return roundingFunctionToHundredths (selectableRadius);
  } catch (error) { viewingFunctionErrors(determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop.name, errorMessage) };
}

/** Функция определения вертикальной площадки
 * @param {number} S
 * @param {number} h
 * @param {number} A
 * 
 * @returns {number}
 */
function determiningTheVerticalSite(S, h, A) {
  const arrayOfErrorMessages = ["S is incorrect", "h is incorrect", "A is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const theVerticalSite = 1 / Math.PI * (1 / S * Math.atan(h / Math.pow((Math.pow(S, 2) - 1), 0.5)) - h / S * (Math.atan(Math.pow((S - 1) / (S + 1), 0.5)) - (A / Math.pow(Math.pow(A, 2) - 1, 0.5)) * Math.atan(Math.pow((A + 1) * (S - 1) / (A - 1) / (S + 1), 0.5))))
    return theVerticalSite
  } catch (error) { viewingFunctionErrors(determiningTheVerticalSite.name, errorMessage) };
}

/** Функция определения вертикальной площадки
 * @param {number} S
 * @param {number} A
 * @param {number} B
 * 
 * @returns {number}
 */
function determiningTheHorisontalSite(S, A, B) {
  const arrayOfErrorMessages = ["S is incorrect", "A is incorrect", "B is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const theHorisontalSite = 1 / Math.PI * ((B - 1 / S) / Math.pow(Math.pow(B, 2) - 1, 0.5) * Math.atan(Math.pow((B + 1) * (S - 1) / (B - 1) / (S + 1), 0.5)) - ((A - 1 / S) / Math.pow(Math.pow(A, 2) - 1, 0.5)) * Math.atan(Math.pow((A + 1) * (S - 1) / (A - 1) / (S + 1), 0.5)))
    return theHorisontalSite;
  } catch (error) { viewingFunctionErrors(determiningTheHorisontalSite.name, errorMessage) };
}

/**Функция определения интенсивности теплового излучения  при факельном горении
 * @param {number} initialRadius
 * @param {number} flareWidth
 * @param {number} averageSurfaceDensityOfThermalRadiation
 *  
 * @returns {number}
 */
function determiningTheIntensityOfThermalRadiation(initialRadius, flareWidth, averageSurfaceDensityOfThermalRadiation) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "flareWidth is incorrect", "averageSurfaceDensityOfThermalRadiation is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const parameterS = 2 * initialRadius / flareWidth;
    const parameterH = 2 * initialRadius / flareWidth;
    const parameterA = (Math.pow(parameterH, 2) + Math.pow(parameterS, 2) + 1) / (2 * parameterS);
    const parameterB = (1 + Math.pow(parameterS, 2)) / (2 * parameterS);
    const theVerticalSite = determiningTheVerticalSite(parameterS, parameterH, parameterA);
    const theHorisontalSite = determiningTheHorisontalSite(parameterS, parameterA, parameterB);
    const irradiance = Math.pow((Math.pow(theVerticalSite, 2) + Math.pow(theHorisontalSite, 2)), 0.5);
    const thermalTransmittanceThroughTheAtmosphere = Math.exp(-7 * Math.pow(10, -4) * (initialRadius - 0.5 * flareWidth));
    const theIntensityOfThermalRadiation = averageSurfaceDensityOfThermalRadiation * irradiance * thermalTransmittanceThroughTheAtmosphere;
    return theIntensityOfThermalRadiation;
  } catch (error) { viewingFunctionErrors(determiningTheIntensityOfThermalRadiation.name, errorMessage) };
}

/**Функция определения радиуса зоны интенсивности теплового излучения при факельном горении
 * @param {number} initialRadius
 * @param {number} thermalRadiationIntensities
 * @param {number} flareWidth
 * @param {number} averageSurfaceDensityOfThermalRadiation
 *  
 * @returns {number}
 */
function determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity(initialRadius, thermalRadiationIntensities, flareWidth, averageSurfaceRadiationDensityOfTheFire) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "thermalRadiationIntensities is incorrect", "flareWidth is incorrect", "averageSurfaceRadiationDensityOfTheFire is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let theIntensityOfThermalRadiation = determiningTheIntensityOfThermalRadiation(initialRadius, flareWidth, averageSurfaceRadiationDensityOfTheFire);
    while (theIntensityOfThermalRadiation > thermalRadiationIntensities) {
      initialRadius += 0.01;
      theIntensityOfThermalRadiation = determiningTheIntensityOfThermalRadiation(initialRadius, flareWidth, averageSurfaceRadiationDensityOfTheFire);
    }
    while (theIntensityOfThermalRadiation <= thermalRadiationIntensities) {
      initialRadius -= 0.01;
      theIntensityOfThermalRadiation = determiningTheIntensityOfThermalRadiation(initialRadius, flareWidth, averageSurfaceRadiationDensityOfTheFire);
    }
    return roundingFunctionToHundredths(initialRadius)
  } catch (error) { viewingFunctionErrors(determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity.name, errorMessage) };
}

/**Функция определения среднеповерхностной плотности теплового излучения пламени в зависимости от диаметра разлива
 * @param {number} spillDiameter
 * @param {string} substance
 * 
 * @returns {number}
 */
function determinationOfFlameThermalRadiationDensityAsAFunctionOfSpillDiameter (spillDiameter, substance){
  const arrayOfErrorMessages = ["spillDiameter is incorrect", "spillDiameter is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const densityArray = defaultData["Середньоповерхнева густина теплового випромінювання полум'я Ef, кВт/м.кв"][substance]
    const diametersArray = defaultData["Середньоповерхнева густина теплового випромінювання полум'я Ef, кВт/м.кв"].diameters
    let flameThermalRadiationDensity = null
    if (spillDiameter <= diametersArray[0]) { flameThermalRadiationDensity = densityArray[0] }
    if (spillDiameter >= diametersArray[diametersArray.length-1]) { flameThermalRadiationDensity = densityArray[diametersArray.length-1] }
    if (spillDiameter > diametersArray[0]) {
      let i = 0
      while (spillDiameter > diametersArray[i] && spillDiameter >= diametersArray[i+1]) {
        i++
      }
      flameThermalRadiationDensity = densityArray[i] - (densityArray[i] - densityArray[i+1]) / (diametersArray[i+1] - diametersArray[i]) * (spillDiameter - diametersArray[i])
    }
    return roundingFunctionToHundredths (flameThermalRadiationDensity)
  } catch (error) { viewingFunctionErrors(determinationOfFlameThermalRadiationDensityAsAFunctionOfSpillDiameter.name, errorMessage) };
}

/**Функция определения интенсивности теплового излучения при пожаре пролива
 * @param {number} initialRadius
 * @param {number} spillDiameter
 * @param {number} factorH
 * @param {number} averageSurfaceRadiationDensityOfTheFire
 *  
 * @returns {number}
 */
function determiningTheIntensityOfThermalRadiationInASpillFire(initialRadius, spillDiameter, factorH, averageSurfaceRadiationDensityOfTheFire) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "spillDiameter is incorrect", "factorH is incorrect", "averageSurfaceRadiationDensityOfTheFire is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const parameterS = 2 * initialRadius / spillDiameter;
    const parameterA = (Math.pow(factorH, 2) + Math.pow(parameterS, 2) + 1) / (2 * parameterS);
    const parameterB = (1 + Math.pow(parameterS, 2)) / (2 * parameterS);
    const theVerticalSite = determiningTheVerticalSite(parameterS, factorH, parameterA);
    const theHorisontalSite = determiningTheHorisontalSite(parameterS, parameterA, parameterB);
    const irradiance = Math.pow((Math.pow(theVerticalSite, 2) + Math.pow(theHorisontalSite, 2)), 0.5);
    const thermalTransmittanceThroughTheAtmosphere = Math.exp(-7 * Math.pow(10, -4) * (initialRadius - 0.5 * spillDiameter));
    const theIntensityOfThermalRadiation = averageSurfaceRadiationDensityOfTheFire * irradiance * thermalTransmittanceThroughTheAtmosphere;
    return theIntensityOfThermalRadiation;
  } catch (error) { viewingFunctionErrors(determiningTheIntensityOfThermalRadiationInASpillFire.name, errorMessage) };
}

/**Функция определения радиуса зоны интенсивности теплового излучения при пожаре пролива
 * @param {number} initialRadius
 * @param {number} thermalRadiationIntensities
 * @param {number} factorH
 * @param {number} averageSurfaceRadiationDensityOfTheFire
 *  
 * @returns {number}
 */
function determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire(initialRadius, thermalRadiationIntensities, spillDiameter, factorH, averageSurfaceRadiationDensityOfTheFire) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "thermalRadiationIntensities is incorrect", "spillDiameter is incorrect", "factorH is incorrect", "averageSurfaceRadiationDensityOfTheFire is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let theIntensityOfThermalRadiationInASpillFire = determiningTheIntensityOfThermalRadiationInASpillFire(initialRadius, spillDiameter, factorH, averageSurfaceRadiationDensityOfTheFire);
    while (theIntensityOfThermalRadiationInASpillFire <= thermalRadiationIntensities) {
      initialRadius -= 0.01;
      theIntensityOfThermalRadiationInASpillFire = determiningTheIntensityOfThermalRadiationInASpillFire(initialRadius, spillDiameter, factorH, averageSurfaceRadiationDensityOfTheFire);
    }
    while (theIntensityOfThermalRadiationInASpillFire > thermalRadiationIntensities) {
      initialRadius += 0.01;
      theIntensityOfThermalRadiationInASpillFire = determiningTheIntensityOfThermalRadiationInASpillFire(initialRadius, spillDiameter, factorH, averageSurfaceRadiationDensityOfTheFire);
    }
    return  initialRadius;
  } catch (error) { viewingFunctionErrors(determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire.name, errorMessage) };
}

/**Функция определения интенсивности теплового излучения при огненном шаре
 * @param {number} initialRadius
 * @param {number} fireballDiameter
 * @param {number} fireballHeight
 * @param {number} fireballExistenceTime
 * @param {number} averageSurfaceRadiationDensityOfTheFireball
 * 
 * @returns {number}
 */
function determinationOfThermalRadiationAtTheFireBall(initialRadius, fireballDiameter, fireballHeight, fireballExistenceTime, averageSurfaceRadiationDensityOfTheFireball) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "fireballDiameter is incorrect", "fireballHeight is incorrect", "fireballExistenceTime is incorrect", "averageSurfaceRadiationDensityOfTheFireball is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const angleCoefficientOfIrradiationAtTheFireball = (fireballHeight / fireballDiameter + 0.5) / 4 / Math.pow((Math.pow(fireballHeight / (fireballDiameter + 0.5), 2) + Math.pow(initialRadius / fireballDiameter, 2)), 1.5);
    const thermalTransmittanceThroughTheAtmosphere = Math.exp(-7 * Math.pow(10, -4) * (Math.pow(Math.pow(initialRadius, 2) + Math.pow(fireballHeight, 2), 0.5) - fireballDiameter / 2));
    const theIntensityOfThermalRadiation = averageSurfaceRadiationDensityOfTheFireball * angleCoefficientOfIrradiationAtTheFireball * thermalTransmittanceThroughTheAtmosphere;
    const thermalRadiationAtTheFireBall = theIntensityOfThermalRadiation * fireballExistenceTime;
    return thermalRadiationAtTheFireBall;
  } catch (error) { viewingFunctionErrors(determinationOfThermalRadiationAtTheFireBall.name, errorMessage) };
}

/** определения радиуса зоны интенсивности теплового излучения при огненном шаре
 * @param {number} initialRadius
 * @param {number} fireballDiameter
 * @param {number} fireballHeight
 * @param {number} fireballExistenceTime
 * @param {number} averageSurfaceRadiationDensityOfTheFireball
 * @param {number} intensityOfHeatRadiation
 * 
 * @returns {Array}
 */
function determiningTheRadiusOfTheHeatRadiantIntensityZoneInAFireball(initialRadius, fireballDiameter, fireballHeight, fireballExistenceTime, averageSurfaceRadiationDensityOfTheFireball, intensityOfHeatRadiation) {
  const arrayOfErrorMessages = ["initialRadius is incorrect", "fireballDiameter is incorrect", "fireballHeight is incorrect", "fireballExistenceTime is incorrect", "averageSurfaceRadiationDensityOfTheFireball is incorrect", "intensityOfHeatRadiation is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const resultsArray = [];
    let theIntensityOfThermalRadiationOfTheFireball = determinationOfThermalRadiationAtTheFireBall(initialRadius, fireballDiameter, fireballHeight, fireballExistenceTime, averageSurfaceRadiationDensityOfTheFireball);
    while (theIntensityOfThermalRadiationOfTheFireball <= intensityOfHeatRadiation) {
      initialRadius -= 0.1;
      theIntensityOfThermalRadiationOfTheFireball = determinationOfThermalRadiationAtTheFireBall(initialRadius, fireballDiameter, fireballHeight, fireballExistenceTime, averageSurfaceRadiationDensityOfTheFireball);
    }
    while (theIntensityOfThermalRadiationOfTheFireball > intensityOfHeatRadiation) {
      initialRadius += 0.1;
      theIntensityOfThermalRadiationOfTheFireball = determinationOfThermalRadiationAtTheFireBall(initialRadius, fireballDiameter, fireballHeight, fireballExistenceTime, averageSurfaceRadiationDensityOfTheFireball);
    }
    resultsArray.push(roundingFunctionToHundredths(theIntensityOfThermalRadiationOfTheFireball));
    resultsArray.push(roundingFunctionToHundredths(initialRadius));
    return resultsArray;
  } catch (error) { viewingFunctionErrors(determiningTheRadiusOfTheHeatRadiantIntensityZoneInAFireball.name, errorMessage) };
}

/**Функция определения поправочного коэффициента Кt1, который учитывает влияние температуры воздуха на глубину распространения первичного облака НХР
 * @param {number} temperature
 * @param {string} substance
 * 
 * @returns {number}
 */
function determinationOfTheCorrectionFactorKt1 (temperature, substance){
  const arrayOfErrorMessages = ["temperature is incorrect", "temperature is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    const factorKt1Array = defaultData["Значення поправного коефіцієнта Кt1, що враховує вплив температури повітря на глибину поширення первинної хмари НХР"][substance]
    const temperatureArray = defaultData["Значення поправного коефіцієнта Кt1, що враховує вплив температури повітря на глибину поширення первинної хмари НХР"].temperature
    let factorKt1 = null
    if (temperature <= temperatureArray[0]) { factorKt1 = factorKt1Array[0] }
    if (temperature >= temperatureArray[temperatureArray.length-1]) { factorKt1 = factorKt1Array[temperatureArray.length-1] }
    if (temperature > temperatureArray[0]) {
      let i = 0
      while (temperature > temperatureArray[i] && temperature >= temperatureArray[i+1]) {
        i++
      }
      factorKt1 = factorKt1Array[i] - (factorKt1Array[i] - factorKt1Array[i+1]) / (temperatureArray[i+1] - temperatureArray[i]) * (temperature - temperatureArray[i])
    }
    return roundingFunctionToHundredths (factorKt1)
  } catch (error) { viewingFunctionErrors(determinationOfTheCorrectionFactorKt1.name, errorMessage) };
}

/**Функция определения комплексного показателя Кр,
 * @param {string} typeOfRelief
 * @param {string} typeOfVegetation
 * @param {string} forestType
 * @param {string} timeOfYear
 * 
 * @returns {number}
 */
function determinationOfTheComplexIndicatorKp (typeOfRelief, typeOfVegetation, forestType, timeOfYear){
  const arrayOfErrorMessages = ["typeOfRelief is incorrect", "typeOfVegetation is incorrect", "forestType is incorrect", "timeOfYear is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let factorKp = null
    if (timeOfYear == "Літо") {
      if (typeOfVegetation == "Лісиста"){
        if (forestType == "Хвойний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.9}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 1.1}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 1.2}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 1.3}
          if (typeOfRelief == "Горбистний") {factorKp = 1.4}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.6}
        }
        if (forestType == "Змішаний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.6}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.8}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.9}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 0.9}
          if (typeOfRelief == "Горбистний") {factorKp = 1}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.2}
        }
      }
      if (typeOfVegetation == "Лісиста-степова"){
        if (forestType == "Хвойний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.6}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.8}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 1}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 1.1}
          if (typeOfRelief == "Горбистний") {factorKp = 1.2}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.5}
        }
        if (forestType == "Листяний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.4}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.6}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.8}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 0.9}
          if (typeOfRelief == "Горбистний") {factorKp = 0.9}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.1}
        }
      }
      if (typeOfVegetation == "Степова"){
        if (typeOfRelief == "Рівнинний") {factorKp = 0.3}
        if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.4}
        if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.7}
        if (typeOfRelief == "Горбистобалочний") {factorKp = 0.8}
        if (typeOfRelief == "Горбистний") {factorKp = 0.8}
        if (typeOfRelief == "Предгір'я") {factorKp = 1}
      }
      if (typeOfVegetation == "Напівпустиня"){
        if (typeOfRelief == "Рівнинний") {factorKp = 0.1}
        if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.2}
        if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.4}
        if (typeOfRelief == "Горбистобалочний") {factorKp = 0.5}
        if (typeOfRelief == "Горбистний") {factorKp = 0.6}
        if (typeOfRelief == "Предгір'я") {factorKp = 0.8}
      }
    }
    if (timeOfYear == "Зима") {
      if (typeOfVegetation == "Лісиста"){
        if (forestType == "Хвойний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.9}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 1.1}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 1.2}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 1.3}
          if (typeOfRelief == "Горбистний") {factorKp = 1.4}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.6}
        }
        if (forestType == "Змішаний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.4}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.6}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.7}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 1}
          if (typeOfRelief == "Горбистний") {factorKp = 0.9}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.1}
        }
      }
      if (typeOfVegetation == "Лісиста-степова"){
        if (forestType == "Хвойний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.5}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.7}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.8}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 0.9}
          if (typeOfRelief == "Горбистний") {factorKp = 1}
          if (typeOfRelief == "Предгір'я") {factorKp = 1.3}
        }
        if (forestType == "Листяний") {
          if (typeOfRelief == "Рівнинний") {factorKp = 0.2}
          if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.3}
          if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.5}
          if (typeOfRelief == "Горбистобалочний") {factorKp = 0.6}
          if (typeOfRelief == "Горбистний") {factorKp = 0.7}
          if (typeOfRelief == "Предгір'я") {factorKp = 1}
        }
      }
      if (typeOfVegetation == "Степова"){
        if (typeOfRelief == "Рівнинний") {factorKp = 0.1}
        if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.2}
        if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.4}
        if (typeOfRelief == "Горбистобалочний") {factorKp = 0.5}
        if (typeOfRelief == "Горбистний") {factorKp = 0.6}
        if (typeOfRelief == "Предгір'я") {factorKp = 0.9}
      }
      if (typeOfVegetation == "Напівпустиня"){
        if (typeOfRelief == "Рівнинний") {factorKp = 0.05}
        if (typeOfRelief == "Рівниннохвилястий") {factorKp = 0.1}
        if (typeOfRelief == "Рівнинногорбистий") {factorKp = 0.3}
        if (typeOfRelief == "Горбистобалочний") {factorKp = 0.5}
        if (typeOfRelief == "Горбистний") {factorKp = 0.6}
        if (typeOfRelief == "Предгір'я") {factorKp = 0.8}
      }
    }
    return factorKp
  } catch (error) { viewingFunctionErrors(determinationOfTheComplexIndicatorKp.name, errorMessage) };
}

/**Функция определения коэфициента влияния местности Км,
 * @param {number} factorKp
 * @param {string} stateOfTheAtmosphereInTheSurfaceLayer
 * 
 * @returns {number}
 */
function determinationOfTheTerrainInfluenceCoefficientKm (factorKp, stateOfTheAtmosphereInTheSurfaceLayer){
  const arrayOfErrorMessages = ["factorKp is incorrect", "stateOfTheAtmosphereInTheSurfaceLayer is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let coefficientKm = null
      if (factorKp == 0.05) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 1}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 1}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 1}
      }
      if (factorKp == 0.1) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.8}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.8}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.9}
      }
      if (factorKp == 0.2) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.5}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.6}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.6}
      }
      if (factorKp == 0.3) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.4}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.5}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.5}
      }
      if (factorKp == 0.4) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.4}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.5}
      }
      if (factorKp == 0.5) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.4}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.4}
      }
      if (factorKp == 0.6) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.4}
      }
      if (factorKp == 0.7) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.4}
      }
      if (factorKp == 0.8) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.3}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.4}
      }
      if (factorKp == 0.9) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.3}
      }
      if (factorKp == 1) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.1}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.3}
      }
      if (factorKp == 1.1) {
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Конвекція") {coefficientKm = 0.1}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Ізотермія") {coefficientKm = 0.2}
        if (stateOfTheAtmosphereInTheSurfaceLayer == "Інверсія") {coefficientKm = 0.2}
      }
      if (factorKp == 1.2 || factorKp == 1.3) {
        coefficientKm = 0.1
      }
      if (factorKp == 1.4 || factorKp == 1.5 || factorKp == 1.6) {
        coefficientKm = 0.05
      }
    return coefficientKm
  } catch (error) { viewingFunctionErrors(determinationOfTheTerrainInfluenceCoefficientKm.name, errorMessage) };
}

/** определение приведенного диаметра площади поверхности пролива ОХВ
 * @param {boolean} bundling
 * @param {number} theVolumeOfTheSubstanceContainer
 * @param {number} substanceMass
 * @param {number} amountOfSubstanceTransferredToThePrimaryCloud
 * @param {number} materialDensity
 * @param {number} bundleHeight
 * 
 * @returns {number}
 */
function determiningTheReducedDiameterOfTheSurfaceAreaOfAHazardousChemicalSpill(bundling, theVolumeOfTheSubstanceContainer, substanceMass, amountOfSubstanceTransferredToThePrimaryCloud, materialDensity, bundleHeight) {
  const arrayOfErrorMessages = ["bundling is incorrect", "theVolumeOfTheSubstanceContainer is incorrect", "substanceMass is incorrect", "amountOfSubstanceTransferredToThePrimaryCloud is incorrect", "materialDensity is incorrect", "bundleHeight is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let diameter = null;
    if (bundling == "false") { diameter = 5.04 * Math.pow((substanceMass - amountOfSubstanceTransferredToThePrimaryCloud) / materialDensity, 0.5) };
    if (bundling == "true" && theVolumeOfTheSubstanceContainer <= 20000) { diameter = 1.22 * Math.pow((substanceMass - amountOfSubstanceTransferredToThePrimaryCloud) / materialDensity, 0.5) };
    if (bundling == "true" && theVolumeOfTheSubstanceContainer > 20000) { diameter = 1.22 / Math.pow(bundleHeight, 0.5) * Math.pow((substanceMass - amountOfSubstanceTransferredToThePrimaryCloud) / materialDensity, 0.5) };
    return diameter;
  } catch (error) { viewingFunctionErrors(determiningTheReducedDiameterOfTheSurfaceAreaOfAHazardousChemicalSpill.name, errorMessage) };
}

/** определение угла сектора в котором возможно распространение первичного облака ОХВ с заданной вероятностью
 * @param {string} atmosphericState
 * @param {number} aGivenConfidenceLevel
 * 
 * @returns {number}
 */
function determineTheHalfAngleOfTheSectorWithinWhichThePrimaryCloudCanPropagate(atmosphericState, aGivenConfidenceLevel) {
  const arrayOfErrorMessages = ["atmosphericState is incorrect", "aGivenConfidenceLevel is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let TheHalfAngleOfTheSector = null
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.5) TheHalfAngleOfTheSector = 9;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.5) TheHalfAngleOfTheSector = 12;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.5) TheHalfAngleOfTheSector = 15;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.75) TheHalfAngleOfTheSector = 15;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.75) TheHalfAngleOfTheSector = 20;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.75) TheHalfAngleOfTheSector = 25;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.9) TheHalfAngleOfTheSector = 20;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.9) TheHalfAngleOfTheSector = 25;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.9) TheHalfAngleOfTheSector = 30;
    return TheHalfAngleOfTheSector;
  } catch (error) { viewingFunctionErrors(determineTheHalfAngleOfTheSectorWithinWhichThePrimaryCloudCanPropagate.name, errorMessage) };
}

/**определение угла сектора в котором возможно распространение вторичного облака ОХВ с заданной вероятностью
 * @param {string} atmosphericState
 * @param {number} aGivenConfidenceLevel
 * @param {number} evaporationTime
 * 
 * @returns {number}
 */
function determineTheHalfAngleOfTheSectorWithinWhichTheSecondaryCloudCanPropagate(atmosphericState, aGivenConfidenceLevel, evaporationTime) {
  const arrayOfErrorMessages = ["atmosphericState is incorrect", "aGivenConfidenceLevel is incorrect", "evaporationTime is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let TheHalfAngleOfTheSector = null
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.5 && evaporationTime <= 6) TheHalfAngleOfTheSector = 12;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.5 && evaporationTime <= 6) TheHalfAngleOfTheSector = 15;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.5 && evaporationTime <= 6) TheHalfAngleOfTheSector = 20;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.75 && evaporationTime <= 6) TheHalfAngleOfTheSector = 20;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.75 && evaporationTime <= 6) TheHalfAngleOfTheSector = 25;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.75 && evaporationTime <= 6) TheHalfAngleOfTheSector = 35;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.9 && evaporationTime <= 6) TheHalfAngleOfTheSector = 30;
    if (atmosphericState == "Ізотермія" && aGivenConfidenceLevel == 0.9 && evaporationTime <= 6) TheHalfAngleOfTheSector = 40;
    if (atmosphericState == "Конвекція" && aGivenConfidenceLevel == 0.9 && evaporationTime <= 6) TheHalfAngleOfTheSector = 50;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.5 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 22;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.75 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 37;
    if (atmosphericState == "Інверсія" && aGivenConfidenceLevel == 0.9 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 52;
    if (atmosphericState == ("Інверсія" || "Ізотермія" || "Конвекція") && aGivenConfidenceLevel == 0.5 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 30;
    if (atmosphericState == ("Інверсія" || "Ізотермія" || "Конвекція") && aGivenConfidenceLevel == 0.75 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 50;
    if (atmosphericState == ("Інверсія" || "Ізотермія" || "Конвекція") && aGivenConfidenceLevel == 0.9 && 6 < evaporationTime <= 12) TheHalfAngleOfTheSector = 70;
    return TheHalfAngleOfTheSector;
  } catch (error) { viewingFunctionErrors(determineTheHalfAngleOfTheSectorWithinWhichTheSecondaryCloudCanPropagate.name, errorMessage) };
}
/**первая функция для расчета площади зони химического загрязнения
 *@param {number} radiusOfTheAccidentArea
 *@param {number} cloudSpreadingDepth
 *@param {number} HalfOfTheSectorAngleWithinWhichTheCloudCanSpread
 *
 * @returns {number}
 */
function firstFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, cloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichTheCloudCanSpread) {
  const arrayOfErrorMessages = ["radiusOfTheAccidentArea is incorrect", "cloudSpreadingDepth is incorrect", "HalfOfTheSectorAngleWithinWhichTheCloudCanSpread is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let rezult = Math.PI * (radiusOfTheAccidentArea ** 2 + (cloudSpreadingDepth ** 2 - radiusOfTheAccidentArea ** 2 ) * HalfOfTheSectorAngleWithinWhichTheCloudCanSpread /180)
    return roundingFunctionToHundredths(rezult)
  } catch (error) { viewingFunctionErrors(firstFunctionToCalculateTheAreaOfTheChemicalPollutiZonone.name, errorMessage) };
}

/**вторая функция для расчета площади зони химического загрязнения
 *@param {number} radiusOfTheAccidentArea
 *@param {number} primaryCloudSpreadingDepth
 *@param {number} secondaryCloudSpreadingDepth
 *@param {number} HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread
 *@param {number} HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread
 */
 function secondFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, primaryCloudSpreadingDepth, secondaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread, HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread) {
  const arrayOfErrorMessages = ["radiusOfTheAccidentArea is incorrect", "primaryCloudSpreadingDepth is incorrect", "secondaryCloudSpreadingDepth is incorrect", "HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread is incorrect", "HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    if ( primaryCloudSpreadingDepth < secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread > HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread) {
      let rezult = Math.PI * (radiusOfTheAccidentArea ** 2 + ((primaryCloudSpreadingDepth ** 2 - radiusOfTheAccidentArea ** 2 ) * HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread + (primaryCloudSpreadingDepth ** 2 - secondaryCloudSpreadingDepth ** 2) * HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread) /180)
    }
    if ( primaryCloudSpreadingDepth > secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread < HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread) {
      let rezult = Math.PI * (radiusOfTheAccidentArea ** 2 + ((secondaryCloudSpreadingDepth ** 2 - radiusOfTheAccidentArea ** 2 ) * HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread + (secondaryCloudSpreadingDepth ** 2 - primaryCloudSpreadingDepth ** 2) * HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread) /180)
    }
    return roundingFunctionToHundredths(rezult)
  } catch (error) { viewingFunctionErrors(secondFunctionToCalculateTheAreaOfTheChemicalPollutiZonone.name, errorMessage) };
}

/**функция для расчета площади зони химического загрязнения
 *@param {number} radiusOfTheAccidentArea
 *@param {number} primaryCloudSpreadingDepth
 *@param {number} secondaryCloudSpreadingDepth
 *@param {number} HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread
 *@param {number} HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread
 *
 * @returns {number}
 */
function calculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, primaryCloudSpreadingDepth, secondaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread, HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread) {
  const arrayOfErrorMessages = ["radiusOfTheAccidentArea is incorrect", "primaryCloudSpreadingDepth is incorrect", "secondaryCloudSpreadingDepth is incorrect", "HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread is incorrect", "HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let rezult = null;
    if ( primaryCloudSpreadingDepth < secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread < HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)
      {rezult = firstFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, secondaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)}
    if ( primaryCloudSpreadingDepth < secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread > HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)
      {rezult = secondFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, primaryCloudSpreadingDepth, secondaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread, HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)}
    if ( primaryCloudSpreadingDepth > secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread < HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)
      {rezult = secondFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, primaryCloudSpreadingDepth, secondaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread, HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)}
    if ( primaryCloudSpreadingDepth > secondaryCloudSpreadingDepth && HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread > HalfOfTheSectorAngleWithinWhichSecondaryCloudCanSpread)
      {rezult = firstFunctionToCalculateTheAreaOfTheChemicalPollutiZonone (radiusOfTheAccidentArea, primaryCloudSpreadingDepth, HalfOfTheSectorAngleWithinWhichPrimaryCloudCanSpread)}
    return rezult
  } catch (error) { viewingFunctionErrors(secondFunctionToCalculateTheAreaOfTheChemicalPollutiZonone.name, errorMessage) };
}

/** определения коэффициента влияния местности по комплексному показателю (Додаток 5 методики прогнозирования последствий розлива (выброса) ОХВ во время аварий на химически опасных объектах и транспорте) 
 * @param {number} valueOfTheCompositeIndex
 * @param {number} atmosphericState
 * 
 * @returns {number}

function determiningTheTerrainInfluenceCoefficientForTheCompositeIndicator(valueOfTheCompositeIndex, atmosphericState) {
  const arrayOfErrorMessages = ["valueOfTheCompositeIndex is incorrect", "atmosphericState is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let terrainInfluenceCoefficient;
    if (valueOfTheCompositeIndex == 0.05 && atmosphericState) terrainInfluenceCoefficient = 1;
    if (valueOfTheCompositeIndex == 0.1 && atmosphericState == "Інверсія") terrainInfluenceCoefficient = 0.9;
    if (valueOfTheCompositeIndex == 0.1 && (atmosphericState == "Конвекція" || atmosphericState == "Ізотермія")) terrainInfluenceCoefficient = 0.8;
    if (valueOfTheCompositeIndex == 0.2 && (atmosphericState == "Ізотермія" || atmosphericState == "Інверсія")) terrainInfluenceCoefficient = 0.6;
    if ((valueOfTheCompositeIndex == 0.2 && atmosphericState == "Конвекція") ||
      (valueOfTheCompositeIndex == 0.3 && atmosphericState == "Ізотермія") ||
      ((valueOfTheCompositeIndex == 0.3 || valueOfTheCompositeIndex == 0.4) && atmosphericState == "Інверсія")
    ) terrainInfluenceCoefficient = 0.5;
    if ((valueOfTheCompositeIndex == 0.3 && atmosphericState == "Конвекція") ||
      ((valueOfTheCompositeIndex == 0.4 || valueOfTheCompositeIndex == 0.5) && atmosphericState == "Ізотермія") ||
      ((valueOfTheCompositeIndex == 0.5 || valueOfTheCompositeIndex == 0.6 || valueOfTheCompositeIndex == 0.7 || valueOfTheCompositeIndex == 0.8) && atmosphericState == "Інверсія")
    ) terrainInfluenceCoefficient = 0.4;
    if (((valueOfTheCompositeIndex == 0.4 || valueOfTheCompositeIndex == 0.5 || valueOfTheCompositeIndex == 0.6) && atmosphericState == "Конвекція") ||
      ((valueOfTheCompositeIndex == 0.6 || valueOfTheCompositeIndex == 0.7 || valueOfTheCompositeIndex == 0.8) && atmosphericState == "Ізотермія") ||
      ((valueOfTheCompositeIndex == 0.9 || valueOfTheCompositeIndex == 1.0) && atmosphericState == "Інверсія")
    ) terrainInfluenceCoefficient = 0.3;
    if (((valueOfTheCompositeIndex == 0.7 || valueOfTheCompositeIndex == 0.8 || valueOfTheCompositeIndex == 0.9) && atmosphericState == "Конвекція") ||
      ((valueOfTheCompositeIndex == 0.9 || valueOfTheCompositeIndex == 1.0 || valueOfTheCompositeIndex == 1.1) && atmosphericState == "Ізотермія") ||
      (valueOfTheCompositeIndex == 1.1 && atmosphericState == "Інверсія")
    ) terrainInfluenceCoefficient = 0.2;
    if (((valueOfTheCompositeIndex == 1.2 || valueOfTheCompositeIndex == 1.3) && atmosphericState) || ((valueOfTheCompositeIndex == 1.0 || valueOfTheCompositeIndex == 1.1) && atmosphericState == "Конвекція")) terrainInfluenceCoefficient = 0.1;
    if ((valueOfTheCompositeIndex == 1.4 || valueOfTheCompositeIndex == 1.5 || valueOfTheCompositeIndex == 1.6) && atmosphericState) terrainInfluenceCoefficient = 0.05;
    return terrainInfluenceCoefficient
  } catch (error) { viewingFunctionErrors(determiningTheTerrainInfluenceCoefficientForTheCompositeIndicator.name, errorMessage) };
}
*/

/** определения безразмерного коэффициента "Бетта1" учитывающего давление и показатель адиабаты
 * @param {number} pressure
 * @param {number} adiabaticIndex
 * 
 * @returns {number}
 */
function determiningTheDimensionlessFactorBettaFirst(pressure, adiabaticIndex) {
  const arrayOfErrorMessages = ["valueOfTheCompositeIndex is incorrect", "atmosphericState is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let bettaFirst
    if (adiabaticIndex == 1.1) {
      if (0.07 <= pressure && pressure < 0.5) bettaFirst = 1.6;
      if (0.5 <= pressure && pressure < 1.0) bettaFirst = 1.95;
      if (1.0 <= pressure && pressure < 5.0) bettaFirst = 2.95;
      if (5.0 <= pressure && pressure < 10.0) bettaFirst = 3.38;
      if (10.0 <= pressure && pressure < 20.0) bettaFirst = 3.8;
      if (20.0 <= pressure && pressure < 30.0) bettaFirst = 4.02;
      if (30.0 <= pressure && pressure < 40.0) bettaFirst = 4.16;
      if (40.0 <= pressure && pressure < 50.0) bettaFirst = 4.28;
      if (50.0 <= pressure && pressure < 75.0) bettaFirst = 4.46;
      if (75.0 <= pressure && pressure <= 100.0) bettaFirst = 4.63;
    }
    if (adiabaticIndex == 1.2) {
      if (0.07 <= pressure && pressure < 0.5) bettaFirst = 1.4;
      if (0.5 <= pressure && pressure < 1.0) bettaFirst = 1.53;
      if (1.0 <= pressure && pressure < 5.0) bettaFirst = 2.13;
      if (5.0 <= pressure && pressure < 10.0) bettaFirst = 2.68;
      if (10.0 <= pressure && pressure < 20.0) bettaFirst = 2.94;
      if (20.0 <= pressure && pressure < 30.0) bettaFirst = 3.07;
      if (30.0 <= pressure && pressure < 40.0) bettaFirst = 3.16;
      if (40.0 <= pressure && pressure < 50.0) bettaFirst = 3.23;
      if (50.0 <= pressure && pressure < 75.0) bettaFirst = 3.36;
      if (75.0 <= pressure && pressure <= 100.0) bettaFirst = 3.42;
    }
    if (adiabaticIndex == 1.3) {
      if (0.07 <= pressure && pressure < 0.5) bettaFirst = 1.21;
      if (0.5 <= pressure && pressure < 1.0) bettaFirst = 1.42;
      if (1.0 <= pressure && pressure < 5.0) bettaFirst = 1.97;
      if (5.0 <= pressure && pressure < 10.0) bettaFirst = 2.18;
      if (10.0 <= pressure && pressure < 20.0) bettaFirst = 2.36;
      if (20.0 <= pressure && pressure < 30.0) bettaFirst = 2.44;
      if (30.0 <= pressure && pressure < 40.0) bettaFirst = 2.5;
      if (40.0 <= pressure && pressure < 50.0) bettaFirst = 2.54;
      if (50.0 <= pressure && pressure < 75.0) bettaFirst = 2.62;
      if (75.0 <= pressure && pressure <= 100.0) bettaFirst = 2.65;
    }
    if (adiabaticIndex == 1.4) {
      if (0.07 <= pressure && pressure < 0.5) bettaFirst = 1.08;
      if (0.5 <= pressure && pressure < 1.0) bettaFirst = 1.24;
      if (1.0 <= pressure && pressure < 5.0) bettaFirst = 1.68;
      if (5.0 <= pressure && pressure < 10.0) bettaFirst = 2.83;
      if (10.0 <= pressure && pressure < 20.0) bettaFirst = 1.95;
      if (20.0 <= pressure && pressure < 30.0) bettaFirst = 2.00;
      if (30.0 <= pressure && pressure < 40.0) bettaFirst = 2.05;
      if (40.0 <= pressure && pressure < 50.0) bettaFirst = 2.08;
      if (50.0 <= pressure && pressure < 75.0) bettaFirst = 2.12;
      if (75.0 <= pressure && pressure <= 100.0) bettaFirst = 2.15;
    }
    return bettaFirst
  } catch (error) { viewingFunctionErrors(determiningTheDimensionlessFactorBettaFirst.name, errorMessage) };
}

/** определения приведенной массы ГГ
 * @param {number} specificHeatOfCombustion 
 * @param {number} massOfCombustibleGas 
 * @param {number} theCoefficientOfParticipationInTheExplosion 
 * 
 * @returns {number}
 */
function determinationOfTheReducedMassOfFlammableGases (specificHeatOfCombustion, massOfCombustibleGas, theCoefficientOfParticipationInTheExplosion) {
  const arrayOfErrorMessages = ["specificHeatOfCombustion is incorrect", "massOfCombustibleGas is incorrect", "theCoefficientOfParticipationInTheExplosion is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let reducedMassOfFlammableGases = specificHeatOfCombustion / parseFloat (defaultData.constantQ0) * massOfCombustibleGas * theCoefficientOfParticipationInTheExplosion
    return reducedMassOfFlammableGases
  } catch (error) { viewingFunctionErrors(determinationOfTheReducedMassOfFlammableGases.name, errorMessage) };
}

/** определения безразмерного коэффициента "Бетта2" учитывающего давление и показатель адиабаты
 * @param {number} pressure
 * @param {number} adiabaticIndex
 * 
 * @returns {number}
 */
function determiningTheDimensionlessFactorBettaSecond(pressure, adiabaticIndex) {
  const arrayOfErrorMessages = ["valueOfTheCompositeIndex is incorrect", "atmosphericState is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {
    let bettaSecond
    if (adiabaticIndex == 1.1) {
      if (0.07 <= pressure && pressure < 0.5) bettaSecond = 1.76;
      if (0.5 <= pressure && pressure < 1.0) bettaSecond = 2.14;
      if (1.0 <= pressure && pressure < 5.0) bettaSecond = 3.25;
      if (5.0 <= pressure && pressure < 10.0) bettaSecond = 3.72;
      if (10.0 <= pressure && pressure < 20.0) bettaSecond = 4.18;
      if (20.0 <= pressure && pressure < 30.0) bettaSecond = 4.42;
      if (30.0 <= pressure && pressure < 40.0) bettaSecond = 4.58;
      if (40.0 <= pressure && pressure < 50.0) bettaSecond = 4.71;
      if (50.0 <= pressure && pressure < 75.0) bettaSecond = 4.91;
      if (75.0 <= pressure && pressure <= 100.0) bettaSecond = 5.10;
    }
    if (adiabaticIndex == 1.2) {
      if (0.07 <= pressure && pressure < 0.5) bettaSecond = 1.68;
      if (0.5 <= pressure && pressure < 1.0) bettaSecond = 1.84;
      if (1.0 <= pressure && pressure < 5.0) bettaSecond = 2.56;
      if (5.0 <= pressure && pressure < 10.0) bettaSecond = 3.21;
      if (10.0 <= pressure && pressure < 20.0) bettaSecond = 3.52;
      if (20.0 <= pressure && pressure < 30.0) bettaSecond = 3.68;
      if (30.0 <= pressure && pressure < 40.0) bettaSecond = 3.79;
      if (40.0 <= pressure && pressure < 50.0) bettaSecond = 3.88;
      if (50.0 <= pressure && pressure < 75.0) bettaSecond = 4.02;
      if (75.0 <= pressure && pressure <= 100.0) bettaSecond = 4.10;
    }
    if (adiabaticIndex == 1.3) {
      if (0.07 <= pressure && pressure < 0.5) bettaSecond = 1.57;
      if (0.5 <= pressure && pressure < 1.0) bettaSecond = 1.85;
      if (1.0 <= pressure && pressure < 5.0) bettaSecond = 2.56;
      if (5.0 <= pressure && pressure < 10.0) bettaSecond = 2.83;
      if (10.0 <= pressure && pressure < 20.0) bettaSecond = 3.07;
      if (20.0 <= pressure && pressure < 30.0) bettaSecond = 3.18;
      if (30.0 <= pressure && pressure < 40.0) bettaSecond = 3.26;
      if (40.0 <= pressure && pressure < 50.0) bettaSecond = 3.30;
      if (50.0 <= pressure && pressure < 75.0) bettaSecond = 3.40;
      if (75.0 <= pressure && pressure <= 100.0) bettaSecond = 3.46;
    }
    if (adiabaticIndex == 1.4) {
      if (0.07 <= pressure && pressure < 0.5) bettaSecond = 1.515;
      if (0.5 <= pressure && pressure < 1.0) bettaSecond = 1.74;
      if (1.0 <= pressure && pressure < 5.0) bettaSecond = 2.35;
      if (5.0 <= pressure && pressure < 10.0) bettaSecond = 2.56;
      if (10.0 <= pressure && pressure < 20.0) bettaSecond = 2.74;
      if (20.0 <= pressure && pressure < 30.0) bettaSecond = 2.805;
      if (30.0 <= pressure && pressure < 40.0) bettaSecond = 2.87;
      if (40.0 <= pressure && pressure < 50.0) bettaSecond = 2.91;
      if (50.0 <= pressure && pressure < 75.0) bettaSecond = 2.97;
      if (75.0 <= pressure && pressure <= 100.0) bettaSecond = 3.02;
    }
    return bettaSecond
  } catch (error) { viewingFunctionErrors(determiningTheDimensionlessFactorBettaSecond.name, errorMessage) };
}

/** определения площади разлива 
 * @param {number} lengthOfTheBund 
 * @param {number} widthOfTheBund 
 * @param {number} theVolumeOfTheDevice 
 * @param {number} pipelineVolume  
 * 
 * @returns {number}
 */
function evaporationAreaDetermination (lengthOfTheBund, widthOfTheBund, heightOfTheBund, theVolumeOfTheDevice, pipelineVolume) {
  const arrayOfErrorMessages = ["lengthOfTheBund is incorrect", "widthOfTheBund is incorrect", "heightOfTheBund is incorrect", "theVolumeOfTheDevice is incorrect", "pipelineVolume is incorrect","Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {  
    let evaporationArea = (theVolumeOfTheDevice + pipelineVolume) / parseFloat (defaultData["Висота слою розливу"])
    if ( (lengthOfTheBund !== 0) && (widthOfTheBund !== 0 )) {
      if ((lengthOfTheBund * widthOfTheBund * heightOfTheBund) >= (theVolumeOfTheDevice + pipelineVolume)){
        evaporationArea = lengthOfTheBund * widthOfTheBund
      } else {
        evaporationArea = lengthOfTheBund * widthOfTheBund + (theVolumeOfTheDevice + pipelineVolume - lengthOfTheBund * widthOfTheBund) / parseFloat ( defaultData["Висота слою розливу"])
      }
    }
    return evaporationArea
  } catch (error) { viewingFunctionErrors(evaporationAreaDetermination.name, errorMessage) };  
}

/** определение стехиометрического коэффициента кислорода в реакции горения 
 *
 * @returns {number}
*/
function determinationOfOxygenStoichiometricCoefficientInTheCombustionReaction () {
  const arrayOfErrorMessages = ["substance is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  const errorMessage = checkingReceivedArgumentValues(arguments, arrayOfErrorMessages);
  try {  
    let coefficientAtom = defaultData["Число атомів в молекулі сполуки"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]
    // "шаблон": ["углеро", "водород", "кислород", "гологени"],
    let stoichiometricCoefficientOfOxygenInTheCombustionReaction = coefficientAtom[0] + (coefficientAtom[1] - coefficientAtom[3]) / 4 - coefficientAtom[2] / 2
    return stoichiometricCoefficientOfOxygenInTheCombustionReaction
  } catch (error) { viewingFunctionErrors(determinationOfOxygenStoichiometricCoefficientInTheCombustionReaction.name, errorMessage) };  
}

const initialDate = {
  "Main general parameters": {
    "2.00 Назва об'єкту": null,
    "2.01 Назва установки": null,
    "2.02 Назва блоку": null,
    "2.03 Назва апарату": null,
    "2.04 Тиск абсолютний в апараті, МПа": null,
    "2.05 Температура в апараті	, 0 C": null,
    "2.06 Показник адіабати середовища в апараті": null,
    "2.07 Середовище в апараті": null,
    "2.08 Діаметр підвідного трубопроводу, мм": null,
    "2.09 Товщина стінки підвідного трубопроводу, мм": null,
    "2.10 Довжина підвідного трубопроводу, м": null,
    "2.11 Діаметр відвідного трубопроводу, мм": null,
    "2.12 Товщина стінки відвідного трубопроводу, мм": null,
    "2.13 Довжина відвідного трубопроводу, м": null,
    "2.14 Об'єм апарату, м3": null,
    "2.15 Об'єм конденсатозбірника апарату, м3": null,
    "2.16 Розрахункова температура, 0 C": null,
    "2.17 Витрата середовища за нормальних умов, м3/добу": null,
    "2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки": null,
    "2.19 Імовірність відмови системи відключення трубопроводів": null,
    "2.20 Густина повітря за разрахункової температури, кг/м3": null,
  },
  "Вихідні дані для сценарію 'Факельне горіння'": {
    "The average surface density of thermal radiation of the flame of the torch": null
  },
  "Вихідні дані для сценарію 'Вибух'": {
    "Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)": null,
    "Швидкість повітряного потоку над дзеркалом випаровуванн, м/с": null
  },
  "Вихідні дані для сценарію 'Пожежа проливу'": {
    "The length of the roll | Довжина обвалування": null,
    "The width of the collapse | Ширина обвалування": null,
    "The height of the collapse | Висота обвалування": null,
    "The average surface density of thermal radiation of the flame of the torch fires of shed in accordance with DSTU B V.1.1-36:2016 (p. 55)| Середньоповерхнева густина теплового випромінювання полум'я пожежі проливу відповідно до ДСТУ Б В.1.1-36:2016 (стор. 55)": null
  },
  "Вихідні дані для сценарію 'Вогняна куля'": {
    "Average surface density of thermal radiation of the 'fireball' flame | Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі'": null
  },
  "Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини": {
    "The nature of the task | Характер задачі": null,
    "State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі": null,
    "Вид рельєфу": null,
    "Вид рослинності": null,
    "Тип лісу": null,
    "Пора року": null,
    "Швидкість вітру на висоті 1-10 м, м/с": null,
    "Наявність обвалування": null,
    "Висота обвалування (для ємностей об'ємом більше 2000 т), м": null
  },
  "Вихідні дані для сценарію 'Вибух в приміщенні'": {
    "Довжина приміщення, м": null,
    "Ширина приміщення, м": null,
    "Room height | Висота приміщення": null,
    "Об'єм зайнятий допоміжним обладнанням, м": null,
    "Максимальний тиск вибуху стехіометричної суміші у замкнутому об'ємі, кПа": null
  }
}

// об'єкт результатів розрахунків
const calculationResults = {
  "1. Вибух": {
    "1.1 Загальний енергетичний потенціал вибухонебезпечності, Е, кДж": null,
    "1.2 Загальна маса горючих парів вибухонебезпечної парогазової хмари, яка приведена до єдиної питомої енергії згоряння (дорівнює 46000 кДж/кг), кг": null,
    "1.3 Відносний енергетичний потенціал, вибухонебезпечності технологічного блоку, Qв, кДж": null,
    "1.4 Категорія вибухонебезпечності технологічного блоку": null,
    "1.5 Тротиловий еквівалент вибухонебезпечності парогазового середовища, Wт, кг": null,
    "1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах": {
      "1.6.1 Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій, R1, м": null,
      "1.6.2 Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу, R2, м": null,
      "1.6.3 Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу R3, м": null,
      "1.6.4 Надлишковий тиск 14 кПа, помірне руйнування перегородок, дверей, рам, легкі травми обслуговуючого персоналу, R4, м": null,
      "1.6.5 Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може привести до травмування обслуговуючого персоналу, R5, м": null,
    }
  },
  "2. Факельне горіння": {
    "2.1 Довжина факела, м": null,
    "2.2 Максимальна ширина факела, м": null,
    "2.3 Опіки ІІІ ступеня:": {
      "2.3.1 радіус ураження, м": null,
      "2.3.2 інтенсивність теплового випромінювання, кВт/м.кв": 49
    },
    "2.4 Опіки ІІ ступеня:": {
      "2.4.1 радіус ураження, м": null,
      "2.4.2 інтенсивність теплового випромінювання, кВт/м.кв": 27.4
    },
    "2.5 Опіки І ступеня:": {
      "2.5.1 радіус ураження, м": null,
      "2.5.2 інтенсивність теплового випромінювання, кВт/м.кв": 9
    },
    "2.6 Безпечний поріг для людини у брезентовому одязі:": {
      "2.6.1 радіус ураження, м": null,
      "2.6.2 інтенсивність теплового випромінювання, кВт/м.кв": 4
    },
    "2.7 Без негативних наслідків для людини у брезентовому одязі:": {
      "2.7.1 радіус ураження, м": null,
      "2.7.2 інтенсивність теплового випромінювання, кВт/м.кв": 1.4
    },
  },
  "3. Можлива вибухонебезпечна зона": {
    "3.1 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м": null
  },
  "4. Пожежа проливу горючих рідин": {
    "4.1 Ефективний діаметр проливу, м": null,
    "4.2 Висота полум‘я, м": null,
    "4.3 Без негативних наслідків на протязі тривалого часу:": {
      "4.3.1 радіус ураження, м": null,
      "4.3.2 інтенсивність теплового випромінювання, кВт/м.кв": 1.4
    },
    "4.4 Безпечно для людини в брезентовому одязі:": {
      "4.4.1 радіус ураження, м": null,
      "4.4.2 інтенсивність теплового випромінювання, кВт/м.кв": 4.2
    },
    "4.5 Нестерпний біль через 20–30с; Опік 1-го ступ. через 15–20с; Опік 2-го ступ. через 30 –40с; Загорання бавовни-волокна через 15 хв.:": {
      "4.5.1 радіус ураження, м": null,
      "4.5.2 інтенсивність теплового випромінювання, кВт/м.кв": 7.0
    },
    "4.6 Нестерпний біль через 3–5с; Опік 1-го ступ. через 6– 8с; Опік 2-го ступ. через 12–16с:": {
      "4.6.1 радіус ураження, м": null,
      "4.6.2 інтенсивність теплового випромінювання, кВт/м.кв": 10.5
    },
    "4.7 Загорання деревини з шорсткою поверхнею (вологість 12%) при тривалості опромінення 15 хв.:": {
      "4.7.1 радіус ураження, м": null,
      "4.7.2 інтенсивність теплового випромінювання, кВт/м.кв": 12.9
    },
    "4.8 Загорання деревини, пофарбованою олійною фарбою по струганій поверхні, загоранні фанери:": {
      "4.8.1 радіус ураження, м": null,
      "4.8.2 інтенсивність теплового випромінювання, кВт/м.кв": 17.0
    },
  },
  "5. Параметри утворення вогняної кулі": {
    "5.1 Діаметр вогняної кулі при викиді, м": null,
    "5.2 Висота центру вогняної кулі, м": null,
    "5.3 Час існування вогняної кулі,  с": null,
    "5.4 Ступень ураження: опік І-го ступеня": {
      "5.4.1 радіус ураження, м": null,
      "5.4.2 інтенсивність теплового випромінювання, кВт/м.кв": null,
      "5.4.3 доза теплового випромінювання, кДж/м.кв": 120
    },
    "5.5 Ступень ураження: опік ІІ-го ступеня": {
      "5.5.1 радіус ураження, м": null,
      "5.5.2 інтенсивність теплового випромінювання, кВт/м.кв": null,
      "5.5.3 доза теплового випромінювання, кДж/м.кв": 220
    },
    "5.6 Ступень ураження: опік ІІІ-го ступеня": {
      "5.6.1 радіус ураження, м": null,
      "5.6.2 інтенсивність теплового випромінювання, кВт/м.кв": null,
      "5.6.3 доза теплового випромінювання, кДж/м.кв": 320
    },
  },
  "6. Розповсюдження хмари пари НХР": {
    "6.1 Кількість розлитої при аварії НХР, т": null,
    "6.2 Глибина зони хімічного забруднення, км": null,
    "6.3 Площа зони можливого хімічного забруднення, км.кв": null,
    "6.4 Площа зони прогнозованого хімічного забруднення, км.кв": null
  },
  "7. Вибух у приміщенні": {
    "7.1 Надлишковий тиск вибуху, кПа": null
  }
}

/*
"1. Вибух":{
  "1.1 Загальний енергетичний потенціал вибухонебезпечності, Е, кДж": null,
  "1.2 Загальна маса горючих парів вибухонебезпечної парогазової хмари, яка приведена до єдиної питомої енергії згоряння (дорівнює 46000 кДж/кг), кг": null,
  "1.3 Відносний енергетичний потенціал, вибухонебезпечності технологічного блоку, Qв, кДж": null,
  "1.4 Категорія вибухонебезпечності технологічного блоку": null,
  "1.5 Тротиловий еквівалент вибухонебезпечності парогазового середовища, Wт, кг": null,
  "1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах":null
},
"2. Факельне горіння": null,
"3. Можлива вибухонебезпечна зона": null,
"4. Пожежа проливу горючих рідин": null,
"5. Параметри утворення вогняної кулі": null,
"6. Розповсюдження хмари пари НХР": null,
"7. Вибух у приміщенні": null
}
*/

/** функция сохранения исходных данных в initialDate
 *
*/
function savingTheSourceDataInInitialDate () {
  let arrayOfErrorMessages = ["Something went wrong"];
  let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
  try {
    initialDate["Main general parameters"]["2.00 Назва об'єкту"] = objectName.value;
    initialDate["Main general parameters"]["2.01 Назва установки"] = installationsNamed.value;
    initialDate["Main general parameters"]["2.02 Назва блоку"] = blocksNamed.value;
    initialDate["Main general parameters"]["2.03 Назва апарату"] = deviceName.value;
    initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] = +absolutePressure.value
    initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"] = +temperature.value
    initialDate["Main general parameters"]["2.06 Показник адіабати середовища в апараті"] = +adiabaticExponent.value
    initialDate["Main general parameters"]["2.07 Середовище в апараті"] = theEnvironmentInTheDevice.value
    initialDate["Main general parameters"]["2.08 Діаметр підвідного трубопроводу, мм"] = +supplyPipelineDiameter.value
    initialDate["Main general parameters"]["2.09 Товщина стінки підвідного трубопроводу, мм"] = +theThicknessOfTheWallOfThePipeline.value
    initialDate["Main general parameters"]["2.10 Довжина підвідного трубопроводу, м"] = +theLengthOfThePipeline.value
    initialDate["Main general parameters"]["2.11 Діаметр відвідного трубопроводу, мм"] = +diameterOfOnePipeline.value
    initialDate["Main general parameters"]["2.12 Товщина стінки відвідного трубопроводу, мм"] = +wallThicknessOfOnePipeline.value
    initialDate["Main general parameters"]["2.13 Довжина відвідного трубопроводу, м"] = +theLengthOfOnePipeline.value
    initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] = +theVolumeOfTheDevice.value
    initialDate["Main general parameters"]["2.15 Об'єм конденсатозбірника апарату, м3"] = +theVolumeOfTheCondensateCollectorOfTheDevice.value
    initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"] = +estimatedTemperature.value
    initialDate["Main general parameters"]["2.17 Витрата середовища за нормальних умов, м3/добу"] = +mediaConsumptionUnderNormalConditions.value
    if (probabilityOfFailureOfThePipelineShutdownSystem.value == 1) {
      initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"] = +triggerTime.value
      initialDate["Main general parameters"]["2.19 Імовірність відмови системи відключення трубопроводів"] = "Меньш 10 <sup>-6</sup> або запеспечується рузервування елементів"
    } else {
      initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"] = +probabilityOfFailureOfThePipelineShutdownSystem.value
      if (probabilityOfFailureOfThePipelineShutdownSystem.value == 120){
        initialDate["Main general parameters"]["2.19 Імовірність відмови системи відключення трубопроводів"] = "Більш 10 <sup>-6</sup> або не запеспечується рузервування елементів"
      } else {
        initialDate["Main general parameters"]["2.19 Імовірність відмови системи відключення трубопроводів"] = "Ручне відключення"
      }
    }

    initialDate["Main general parameters"]["2.20 Густина повітря за разрахункової температури, кг/м3"] = +airDensityAtTheCalculatedTemperature.value
    let elementTorchBuring = document.getElementById('torchBuring');
    if (elementTorchBuring.checked) {
      initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"] = +averageSurfaceDensityOfThermalRadiationOfTheFlameOfTheTorch.value
    }
    let elementExplosion = document.getElementById('explosion');
    if (elementExplosion.checked) {
      initialDate["Вихідні дані для сценарію 'Вибух'"]["Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)"] = +theCoefficientOfParticipationInTheExplosion.value;
      initialDate["Вихідні дані для сценарію 'Вибух'"]["Швидкість повітряного потоку над дзеркалом випаровуванн, м/с"] = +flowVelocityOverTheEvaporationMirror.value;
    }
    let elementStraitFire = document.getElementById('straitFire');
    if (elementStraitFire.checked) {
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The average surface density of thermal radiation of the flame of the torch fires of shed in accordance with DSTU B V.1.1-36:2016 (p. 55)| Середньоповерхнева густина теплового випромінювання полум'я пожежі проливу відповідно до ДСТУ Б В.1.1-36:2016 (стор. 55)"] = +averageSurfaceDensityOfThermalRadiationOfTheFlameFiresOfShed.value;
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] = + lengthOfTheBund.value;
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"] = + theWidthOfTheBund.value;
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The height of the collapse | Висота обвалування"] = + theHeightOfTheBund.value;
    }
    let elementFireball = document.getElementById('fireball');
    if (elementFireball.checked) {
      initialDate["Вихідні дані для сценарію 'Вогняна куля'"]["Average surface density of thermal radiation of the 'fireball' flame | Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі'"] = + averageSurfaceDensityOfThermalRadiationOfTheFireballFlame.value;
    }
    let elementEvaporationOfAHazardousChemicalSubstance= document.getElementById('evaporationOfAHazardousChemicalSubstance');
    if (elementEvaporationOfAHazardousChemicalSubstance.checked) {
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["The nature of the task | Характер задачі"] = natureOfTheTask.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"] = stateOfTheAtmosphereInTheSurfaceLayer.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Вид рельєфу"] = typeOfRelief.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Вид рослинності"] = typeOfVegetation.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Тип лісу"] = forestType.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Пора року"] = timeOfYear.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Швидкість вітру на висоті 1-10 м, м/с"] = + windSpeedAtAHeightOf1_10m.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Наявність обвалування"] = presenceOfBunding.value;
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Висота обвалування (для ємностей об'ємом більше 2000 т), м"] = + heightOfBund.value;
    }
    let elementAnExplosionInTheRoom = document.getElementById('anExplosionInTheRoom');
    if (elementAnExplosionInTheRoom.checked) {
      initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Довжина приміщення, м"] = + theLengthOfTheRoom.value;
      initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Ширина приміщення, м"] = + theWidthOfTheRoom.value;
      initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Room height | Висота приміщення"] = + roomHeight.value;
      initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Об'єм зайнятий допоміжним обладнанням, м"] = + theVolumeIsOccupiedByAuxiliaryEquipment.value;
      initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Максимальний тиск вибуху стехіометричної суміші у замкнутому об'ємі, кПа"] = + maximumExplosionPressureOfAStoichiometricMixtureInAClosedVolume.value;
    }
  } catch (error) {viewingFunctionErrors(savingTheSourceDataInInitialDate.name, errorMessage)};
}

const intermediateValues = {
  "01. Об'єм трубопроводів, м.куб": null,
  "02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб": null,
  "03. Тиск насиченої пари ПГФ, кПа":  null,
  "04. Загальний енергетичний потенціал вибухонебезпеки блоку":{
    "04.01 Блоку з ПГФ або ГГ": {
      "04.01.01 Коєфіцієнт адіабатичного розширення за таблицею 1 НПАОП 0.00-1.41-88": null,
      "04.01.02 Геометричний об'єм ПГФ у блоці, м.куб": null,
      "04.01.03 Об'єм ПГФ приведений до нормальних умов, м.куб": null,
      "04.01.04 Масса ПГФ безпосередньо знаходящегося у блоці, кг": null,
      "04.01.05 Об'єм ГГ що вийшов з апарата, м.куб": null,
      "04.01.06 Об'єм ГГ що вийшов з трубопороводів до їх перекриття, м.куб": null,
      "04.01.07 Об'єм ГГ що вийшов з трубопороводів після їх перекриття, м.куб": null,
      "04.01.08 Об'єм ГГ що вийшов з трубопороводів, м.куб": null,
      "04.01.09 Масса ГГ що потрапила до навколишнього простору під час розрахункової аварії, кг": null,
      "04.01.10 Енергія адіабатичного розширення ПГФ, кДж": null,
      "04.01.11 Приведена маса ГГ, кг": null,
      "04.01.12 Сумма енергії адіабатичного розширення та згорання ПГФ, що знаходиться безпосередо у аварійному блоці, кДж": null,
      "04.01.13 Коефіцієнт Бетта 2 за таблицею 2 НПАОП 0.00-1.41-88": null,
      "04.01.14 Коефіцієнт стисловости середовища": null,
      "04.01.15 Гутсина ПГФ у робочих умовах, кг/м.куб": null,
      "04.01.16 Питомий об'єм робочого середовища, м.куб/кг": null,
      "04.01.17 Швидкість адіабатичного витікання ПГФ, м/с": null,
      "04.01.18 Площа перетину трубопроводу вхідного за його діаметром, м.кв": null,
      "04.01.19 Площа перетину трубопроводу вихідного за його діаметром, м.кв": null,
      "04.01.20 Кількість ГГ що може вийти з данного блоку до суміжного по вхідному трубопроводу за час до його перекритя, кг": null,
      "04.01.21 Кількість ГГ що може вийти з данного блоку до суміжного по вихідному трубопроводу за час до його перекритя, кг": null,
      "04.01.22 Сумма енергій згоряння ПГФ, що поступила до розгерметизованної ділянки від суміжних блоків, кДж": null,
      "04.01.23 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж": null,
      "04.01.24 Загальна маса ГГ приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг": null,
    },
    "04.02 Блоку з ЛЗР": {
      "04.02.01 Площа випаровування, м.кв": null,
      "04.02.02 Коефіціент Ню за таблицею 3": null,
      "04.02.03 Інтенсивність випаровування, кг/(с * м.кв)":null,
      "04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг": null,
    },
    "04.03 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж": null,
    "04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг": null,
    "04.05 Відносний енергетичний потенціал, кДж": null,
    "04.06 Категорія вибухонебезпечності блоку": null,
    "04.07 Тротиловий еквівалент вибухонебезпечності блоку, кг": null,
  },
  "05. Розрахунок вибуху зовнішніх утановок": {
    "05.01 Коефіцієнт участі": null,
    "05.02 Приведена маса ПГФ абоа ГГ, кг": null,
    "05.03 Умовний радіус зони руйнування під час вибуху, м": null,
    "05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах": {
      "05.04.01 Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій, R1, м": null,
      "05.04.02 Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу, R2, м": null,
      "05.04.03 Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу R3, м": null,
      "05.04.04 Надлишковий тиск 14 кПа, помірне руйнування перегородок, дверей, рам, легкі травми обслуговуючого персоналу, R4, м": null,
      "05.04.05 Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може привести до травмування обслуговуючого персоналу, R5, м": null,
    }
  },
  "06. Факельне горіння": {
    "06.01 Швидкысть витыкання середовища із вхідного трубопроводу, м/с": null,
    "06.02 Швидкысть витыкання середовища із вихідного трубопроводу, м/с": null,
    "06.03 Довжина факелу у вхідного тубопроводу, м": null,
    "06.04 Довжина факелу у вихідного тубопроводу, м": null,
    "06.05 Максимальна довжина факелу, м": null,
    "06.06 Довжина факилу для надкритичного витікання, коли газ витікає зі звуковою швидкістю, м": null,
    "06.07 Максимальна ширина факелу, м": null,
    "06.08 Діаметер факелу, м": null,
    "06.09 Довжина факелу для настильних факелів, м": null,
    "06.10 Довжина факелу для настильних факелів для надкритичного витікання, м": null,
    "06.11 Опіки ІІІ ступеня": {
      "радіус ураження, м": null,
      "інтенсивність теплового випромінювання, кВт/м.кв": 49
    },
    "06.12 Опіки ІІ ступеня": {
      "радіус ураження, м": null,
      "інтенсивність теплового випромінювання, кВт/м.кв": 27.4
    },
    "06.13 Опіки І ступеня": {
      "радіус ураження, м": null,
      "інтенсивність теплового випромінювання, кВт/м.кв": 9
    },
    "06.14 Безпечний поріг для людини у брезентовому одязі": {
      "радіус ураження, м": null,
      "інтенсивність теплового випромінювання, кВт/м.кв": 4
    },
    "06.15 Без негативних наслідків для людини у брезентовому одязі": {
      "радіус ураження, м": null,
      "інтенсивність теплового випромінювання, кВт/м.кв": 1.4
    },
  },
  "07. Можлива вибухонебезпечна зона": {
    "07.01 Коефіцієнт Кк": null,
    "07.02 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м": null
  }, 
  "08. Пожежа проливу": {
    "08.01 Площа проливу, м.кв": null,
    "08.02 Діаметр вогнища пожежі, м": null,
    "08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв": null,
    "08.04 Питома масова швидкість вигорання середовища, кг/(м.кв * с)": null,
    "08.05 Висота полум'я, м": null,
    "08.06 Коефіцієнт": null,
    "08.07 Радіус для початку розрахунку": null,
    "08.08 Радіуси зон інтенсивності випромінювання, м": {
      "08.08.01 Без негативних наслідків на протязі тривалого часу": null,
      "08.08.02 Безпечно для людини в брезентовому одязі": null,
      "08.08.03 Нестерпний біль через 20–30с; Опік 1-го ступ. через 15–20с; Опік 2-го ступ. через 30 –40с; Загорання бавовни-волокна через 15 хв.": null,
      "08.08.04 Нестерпний біль через 3–5с; Опік 1-го ступ. через 6– 8с; Опік 2-го ступ. через 12–16с": null,
      "08.08.05 Загорання деревини з шорсткою поверхнею (вологість 12%) при тривалості опромінення 15 хв.": null,
      "08.08.06 Загорання деревини, пофарбованою олійною фарбою по струганій поверхні, загоранні фанери": null,
    }
  },
  "09. Вогняна куля": {
    "09.01 Маса горючої речовини, кг": null,
    "09.02 Ефективний діаметр вогняної кулі, м": null,
    "09.03 Висота центру вогняної кулі, м": null,
    "09.04 Час існування вогняної кулі, с": null,
    "09.05 Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі, кВт/м.кв": null,
    "09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м": {
      "09.06.01 Ступень ураження: опік І-го ступеня": null,
      "09.06.02 Ступень ураження: опік ІІ-го ступеня": null,
      "09.06.03 Ступень ураження: опік ІІІ-го ступеня": null,
    }
  },
  "10. Випаровування НХР":{
    "10.01 Маса НХР у ємності, кг": null,
    "10.02 Радіус району аварії, км": null,
    "10.03 Площа району аварії, км.кв": null,
    "10.04 Значення поправного коефіцієнта Кt1, що враховує вплив температури повітря на глибину поширення первинної хмари НХР": null,
    "10.05 Кількість НХР, що перейшла в первинну хмару, кг": null,
    "10.06 Кількість НХР, що перейшала у вторинну хмару, кг": null,
    "10.07 Поправочний коефіцєнт К": null,
    "10.08 Порогова токсодоза, PCt50": null,
    "10.09 Комплексний показник Кр": null,
    "10.10 Коефіцієнт впливу місцевості Км": null,
    "10.11 Параметр вертикальної стійкості повітря в приземному шарі Єпсилант": null,
    "10.12 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, а": null,
    "10.13 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b1": null,
    "10.14 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b2": null,
    "10.15 Глибина поширення первинної хмари НХР на рівнинній місцевості, км": null,
    "10.16 Глибина поширення первинної хмари НХР з урахуванням типу місцевості, км": null,
    "10.17 Приведений діаметер площі поверхні проливу, км": null,
    "10.18 Питома швидкість випаровування, кг/(м.кв*с)": null,
    "10.19 Площа поверхні виливу, м.кв": null,
    "10.20 Час випаровування НХР з площі поверхні виливу, годин": null,
    "10.21 Довірча ймовірність": null,
    "10.22 Половина кута сектору у межах якого можливе поширення первинної хмари НХР із заданною довірчою імовірністю, градусів": null,
    "10.23 Половина кута сектору у межах якого можливе поширення вторинної хмари НХР із заданною довірчою імовірністю, градусів": null,
    "10.24 Площа поширення первинної хмари НХР, км.кв": null,
    "10.25 Глибина поширення вторинної хмари НХР на рівнинній місцевості, км": null,
    "10.26 Глибина поширення вторинної хмари НХР з урахуванням типу місцевості, км": null,
    "10.27 Площа поширення вторинної хмари, км.кв": null,
    "10.28 Площа прогнозованної зони хімічного забруднення, км.кв": null,
    "10.29 Глибина зони хімічного забруднення, км": null,
    "10.30 Площа зони можливого хімічного забрудення, км.кв": null,
  },
  "11. Вибух у приміщенні": {
    "11.01 Об'єм приміщення, м.куб": null,
    "11.02 Об'єм приміщення вільний, м.куб": null,
    "11.03 Коефіцієнт участі горючого газу у вибуху відповідно до таблиці 2 ДСТУ Б В.1.1-60-2016": null,
    "11.04 Стехіометричний коєфіцієнт кисню в реакції горіння Бетта": null,
    "11.05 Стехіометрична концентрація ГГ або парів ЛЗР та ГР, %(об.)": null,
    "11.06 Надлишковий тиск вибуху, кПа": null
  }
}

let arrayOfTableColumnWidths = [5, 65, 10, 10, 10]; //массив значений ширин столбцов таблиц

/**Функция вывода результатов рассчета на страницу документа
* @param {Object} resultsObject
* @param {id} elementIntoWhichToInsert
* @param {number[]} arrayWidths
*/
function displayingTheResultOfTheCalculationToHtml (elementIntoWhichToInsert) {
  let arrayOfErrorMessages = ["resultsObject is incorrect", "elementIntoWhichToInsert is incorrect", "arrayWidths is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
  let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
  try {
    let keysOfTheResultingObject = Object.keys(calculationResults);
    //console.log (keysOfTheResultingObject)
    const tableCalculationResults = document.createElement("table");
    const tableHeader = document.createElement("caption");
    tableHeader.innerHTML = "3. Результати розрахунку";
    tableCalculationResults.appendChild(tableHeader);
    // заголовок таблицы
    const tr1 = document.createElement("tr");
    tr1.style.backgroundColor = "rgb(10, 255, 255, 0.98)";
    const th1 = document.createElement("th")
    th1.innerHTML = "Найменування"
    th1.style.width = "85%"
    
    tr1.appendChild(th1)
    const th2 = document.createElement("th")
    th2.innerHTML = initialDate["Main general parameters"]["2.03 Назва апарату"]
    th2.style.width = "15%"
    tr1.appendChild(th2)
    tableCalculationResults.appendChild(tr1)
    // строка 2
    const tr2 = document.createElement("tr");
    const td21 = document.createElement("td")
    td21.innerHTML = "1"
    td21.style.fontWeight = "bold"
    tr2.appendChild(td21)
    const td22 = document.createElement("td")
    td22.innerHTML = "2"
    td22.style.fontWeight = "bold"
    tr2.appendChild(td22)
    tableCalculationResults.appendChild(tr2)
    //цикл для вывода результатов из 
    for (const key in keysOfTheResultingObject){
      if ( calculationResults[keysOfTheResultingObject[key]] !== null ) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = keysOfTheResultingObject[key].slice ( 3, keysOfTheResultingObject[key].length )
        td.colSpan = "2"
        td.style.backgroundColor = "rgb(10, 255, 255, 0.98)";
        td.style.fontWeight = "bold"
        tr.appendChild(td)
        tableCalculationResults.appendChild(tr);
        if (typeof (calculationResults[keysOfTheResultingObject[key]]) == 'object') {
          const keysOfScenarion = Object.keys(calculationResults[keysOfTheResultingObject[key]]);
          for (const keyOfScenarion in keysOfScenarion) {
            if (typeof(calculationResults[keysOfTheResultingObject[key]][keysOfScenarion[keyOfScenarion]]) !=='object'){
              const tr = document.createElement("tr")
              const td1 = document.createElement("td");
              td1.innerHTML = keysOfScenarion[keyOfScenarion].slice ( 4, keysOfScenarion[keyOfScenarion].length);
              td1.style.textAlign = "left"
              tr.appendChild(td1);
              const td2 = document.createElement("td");
              //console.log (keysOfScenarion[keyOfScenarion])
              td2.innerHTML = calculationResults[keysOfTheResultingObject[key]][keysOfScenarion[keyOfScenarion]]
              tr.appendChild(td2);
              tableCalculationResults.appendChild(tr);
            } else {
              if (calculationResults[keysOfTheResultingObject[key]][keysOfScenarion[keyOfScenarion]] !== null){
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = keysOfScenarion[keyOfScenarion].slice ( 4, keysOfScenarion[keyOfScenarion].length);
                td.colSpan = "2"
                td.style.fontWeight = "bold"
                td.style.textAlign = "left"
                tr.appendChild(td)
                tableCalculationResults.appendChild(tr);
                const keysOfParameters = Object.keys(calculationResults[keysOfTheResultingObject[key]][keysOfScenarion[keyOfScenarion]]);
                for (const keyOfParameter in keysOfParameters) {
                  const tr = document.createElement("tr");
                  const td1 = document.createElement("td");
                  td1.innerHTML = keysOfParameters[keyOfParameter].slice(5, keysOfParameters[keyOfParameter].length);
                  td1.style.textAlign = "left"
                  tr.appendChild(td1);
                  const td2 = document.createElement("td");
                  td2.innerHTML = calculationResults[keysOfTheResultingObject[key]][keysOfScenarion[keyOfScenarion]][keysOfParameters[keyOfParameter]];
                  td2.style.verticalAlign = 'bottom' 
                  tr.appendChild(td2);
                  tableCalculationResults.appendChild(tr);
                }
              }
            }
          }
        }
      }
    }
    const trVersion = document.createElement("tr");
    const tdVersion1 = document.createElement("td");
    tdVersion1.innerHTML = "Версія програми розрахунку";
    trVersion.appendChild (tdVersion1);
    const tdVersion2 = document.createElement("td");
    tdVersion2.innerHTML = "v.1.01";
    trVersion.appendChild (tdVersion2);
    tableCalculationResults.appendChild(trVersion)

    tableCalculationResults.id = "tableResults";
    elementIntoWhichToInsert.appendChild(tableCalculationResults);

    const exportButton = document.createElement("button");
    exportButton.innerHTML = "Експорт до Excel";
    exportButton.id = 'resultToExcel';
    exportButton.classList = 'calc';

    const saveToDisk = document.createElement("button");
    saveToDisk.innerHTML = "Зберігти дані на диск";
    saveToDisk.id = 'saveToDisk';
    saveToDisk.classList = 'calc';

    elementIntoWhichToInsert.appendChild(exportButton);
    elementIntoWhichToInsert.appendChild(saveToDisk);

    resultsDate.classList.remove('resultsDate');
  } catch (error) { viewingFunctionErrors(displayingTheResultOfTheCalculationToHtml.name, errorMessage)};
 }
//calculationResults["1. Вибух"]["1.1 Загальний енергетичний потенціал вибухонебезпечності, Е, кДж"]

/**Функция збереження вихідних даних та результатів розрахунку на диск користувача
* @param {string} fileName
* @param {JSON-string} data
*/
function downloadUserData(fileName, data) {
  const blob = new Blob([data], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

calc.onclick = function () {
  savingTheSourceDataInInitialDate ();
  let innerDiameterOfSupplyPipe = initialDate["Main general parameters"]["2.08 Діаметр підвідного трубопроводу, мм"] - 2 * initialDate["Main general parameters"]["2.09 Товщина стінки підвідного трубопроводу, мм"];
  let internalDiameterOfTheOutletPipe = initialDate["Main general parameters"]["2.11 Діаметр відвідного трубопроводу, мм"] - 2 * initialDate["Main general parameters"]["2.12 Товщина стінки відвідного трубопроводу, мм"];
  intermediateValues["01. Об'єм трубопроводів, м.куб"] = roundingFunctionToHundredths( determiningTheVolumeOfTheCylinderByDiameterAndLength(innerDiameterOfSupplyPipe , initialDate["Main general parameters"]["2.10 Довжина підвідного трубопроводу, м"]) + 
    determiningTheVolumeOfTheCylinderByDiameterAndLength(internalDiameterOfTheOutletPipe, initialDate["Main general parameters"]["2.13 Довжина відвідного трубопроводу, м"]));
  intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"] = roundingFunctionToHundredths(determiningOfGasDensityAtDesignTemperature(
    parseFloat(defaultData.molarMass[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]), 
    initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"]));
  // в случаи ГГ  
  if (initialDate["Main general parameters"]["2.07 Середовище в апараті"] == 'methane' || initialDate["Main general parameters"]["2.07 Середовище в апараті"] == 'propaneButane') {
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.01 Коєфіцієнт адіабатичного розширення за таблицею 1 НПАОП 0.00-1.41-88"] = determiningTheDimensionlessFactorBettaFirst(
      initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"],
      initialDate["Main general parameters"]["2.06 Показник адіабати середовища в апараті"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.02 Геометричний об'єм ПГФ у блоці, м.куб"] = roundingFunctionToHundredths (
      initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] + intermediateValues["01. Об'єм трубопроводів, м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.03 Об'єм ПГФ приведений до нормальних умов, м.куб"] = roundingFunctionToHundredths ( intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]
      ["04.01.02 Геометричний об'єм ПГФ у блоці, м.куб"] * initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] * parseFloat(defaultData.temperatureAtNormalConditions) / parseFloat(defaultData.pressureAtStandardConditions) / initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.04 Масса ПГФ безпосередньо знаходящегося у блоці, кг"] = roundingFunctionToHundredths ( intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]
      ["04.01.03 Об'єм ПГФ приведений до нормальних умов, м.куб"] * intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.05 Об'єм ГГ що вийшов з апарата, м.куб"] = roundingFunctionToHundredths ( initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] * Math.pow (10, 3) / 
      parseFloat (defaultData.atmosphericPressure) * (initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.06 Об'єм ГГ що вийшов з трубопороводів до їх перекриття, м.куб"] = roundingFunctionToHundredths ( initialDate["Main general parameters"]["2.17 Витрата середовища за нормальних умов, м3/добу"] / 24 / 3600 *
      initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.07 Об'єм ГГ що вийшов з трубопороводів після їх перекриття, м.куб"] = roundingFunctionToHundredths ( initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] * Math.pow (10, 3) / 
      parseFloat (defaultData.atmosphericPressure) * intermediateValues["01. Об'єм трубопроводів, м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.08 Об'єм ГГ що вийшов з трубопороводів, м.куб"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]
      ["04.01 Блоку з ПГФ або ГГ"]["04.01.06 Об'єм ГГ що вийшов з трубопороводів до їх перекриття, м.куб"] + intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.07 Об'єм ГГ що вийшов з трубопороводів після їх перекриття, м.куб"];
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.09 Масса ГГ що потрапила до навколишнього простору під час розрахункової аварії, кг"] = roundingFunctionToHundredths ((intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]
      ["04.01 Блоку з ПГФ або ГГ"]["04.01.05 Об'єм ГГ що вийшов з апарата, м.куб"] + intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.08 Об'єм ГГ що вийшов з трубопороводів, м.куб"]) * 
      intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.10 Енергія адіабатичного розширення ПГФ, кДж"] = roundingFunctionToHundredths ( intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]
      ["04.01.01 Коєфіцієнт адіабатичного розширення за таблицею 1 НПАОП 0.00-1.41-88"] * initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.02 Геометричний об'єм ПГФ у блоці, м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.11 Приведена маса ГГ, кг"]  = roundingFunctionToHundredths ( determinationOfTheReducedMassOfFlammableGases (parseFloat (defaultData["Питома теплота згорання, кДж/кг"][initialDate["Main general parameters"]
      ["2.07 Середовище в апараті"]]), intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.09 Масса ГГ що потрапила до навколишнього простору під час розрахункової аварії, кг"], initialDate["Вихідні дані для сценарію 'Вибух'"]
      ["Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.12 Сумма енергії адіабатичного розширення та згорання ПГФ, що знаходиться безпосередо у аварійному блоці, кДж"] = roundingFunctionToHundredths ( 
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.10 Енергія адіабатичного розширення ПГФ, кДж"] + intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.11 Приведена маса ГГ, кг"] 
      * parseFloat (defaultData["Питома теплота згорання, кДж/кг"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.13 Коефіцієнт Бетта 2 за таблицею 2 НПАОП 0.00-1.41-88"] = roundingFunctionToHundredths (determiningTheDimensionlessFactorBettaSecond(initialDate["Main general parameters"]
      ["2.04 Тиск абсолютний в апараті, МПа"], initialDate["Main general parameters"]["2.06 Показник адіабати середовища в апараті"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.14 Коефіцієнт стисловости середовища"] = roundingFunctionToHundredths (determiningTheCompressibilityCoefficientAtAGivenTemperatureAndPressure (
      initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"],
      initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"] + 273.15,
      initialDate["Main general parameters"]["2.07 Середовище в апараті"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.15 Гутсина ПГФ у робочих умовах, кг/м.куб"] = roundingFunctionToHundredths (determiningTheDensity (initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"], 
      initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"] + 273.15,
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.14 Коефіцієнт стисловости середовища"],
      initialDate["Main general parameters"]["2.07 Середовище в апараті"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.16 Питомий об'єм робочого середовища, м.куб/кг"] = roundingFunctionToHundredths (1 / intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]
      ["04.01.15 Гутсина ПГФ у робочих умовах, кг/м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.17 Швидкість адіабатичного витікання ПГФ, м/с"] = roundingFunctionToHundredths (Math.pow ( 2 * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]
      ["04.01.13 Коефіцієнт Бетта 2 за таблицею 2 НПАОП 0.00-1.41-88"] * initialDate["Main general parameters"]["2.04 Тиск абсолютний в апараті, МПа"] * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.16 Питомий об'єм робочого середовища, м.куб/кг"], 0.5 ));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.18 Площа перетину трубопроводу вхідного за його діаметром, м.кв"] = determiningThePipeArea (innerDiameterOfSupplyPipe);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.19 Площа перетину трубопроводу вихідного за його діаметром, м.кв"] = determiningThePipeArea (internalDiameterOfTheOutletPipe);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.20 Кількість ГГ що може вийти з данного блоку до суміжного по вхідному трубопроводу за час до його перекритя, кг"] = roundingFunctionToHundredths (
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.18 Площа перетину трубопроводу вхідного за його діаметром, м.кв"]
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.17 Швидкість адіабатичного витікання ПГФ, м/с"] 
      * initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"]
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.15 Гутсина ПГФ у робочих умовах, кг/м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.21 Кількість ГГ що може вийти з данного блоку до суміжного по вихідному трубопроводу за час до його перекритя, кг"] = 
      roundingFunctionToHundredths (intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.19 Площа перетину трубопроводу вихідного за його діаметром, м.кв"]
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.17 Швидкість адіабатичного витікання ПГФ, м/с"] 
      * initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"] 
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.15 Гутсина ПГФ у робочих умовах, кг/м.куб"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.23 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] = 
      roundingFunctionToHundredths (intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.12 Сумма енергії адіабатичного розширення та згорання ПГФ, що знаходиться безпосередо у аварійному блоці, кДж"]
      + intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.22 Сумма енергій згоряння ПГФ, що поступила до розгерметизованної ділянки від суміжних блоків, кДж"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.24 Загальна маса ГГ приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] = 
      roundingFunctionToHundredths (intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.23 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] / 46000);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.03 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] = 
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.23 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"];
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] = 
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.24 Загальна маса ГГ приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"];
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.05 Відносний енергетичний потенціал, кДж"] = roundingFunctionToHundredths (
      1/16.534 * Math.pow (intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.23 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] ,1/3));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.06 Категорія вибухонебезпечності блоку"] = blockExplosionCategoryCalculation (
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.25 Відносний енергетичний потенціал, кДж"],
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.24 Загальна маса ГГ приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.07 Тротиловий еквівалент вибухонебезпечності блоку, кг"] = roundingFunctionToHundredths (
      0.4 * parseFloat(defaultData["Питома теплота згорання, кДж/кг"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) / 0.9 / parseFloat (defaultData.specificExplosiveHeatOfTNT) * initialDate["Вихідні дані для сценарію 'Вибух'"]["Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)"] 
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.09 Масса ГГ що потрапила до навколишнього простору під час розрахункової аварії, кг"]);
  } else { // в случаи ЛЗР
    intermediateValues["03. Тиск насиченої пари ПГФ, кПа"] = roundingFunctionToHundredths( determiningTheSaturatedSteamPressure(initialDate["Main general parameters"]["2.07 Середовище в апараті"], initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.01 Площа випаровування, м.кв"] = roundingFunctionToHundredths ( evaporationAreaDetermination (
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"],
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"],
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The height of the collapse | Висота обвалування"],
      initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"], intermediateValues["01. Об'єм трубопроводів, м.куб"]));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.02 Коефіціент Ню за таблицею 3"] = determiningTheValueOfTheNu (
      initialDate["Вихідні дані для сценарію 'Вибух'"]["Швидкість повітряного потоку над дзеркалом випаровуванн, м/с"],
      initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"]);
      if (anExplosionInTheRoom.checked) {
        intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.03 Інтенсивність випаровування, кг/(с * м.кв)"] 
          = Math.pow(10, -6) 
          * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.02 Коефіціент Ню за таблицею 3"] 
          * Math.pow (parseFloat(defaultData.molarMass[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) ,0.5)
          * intermediateValues["03. Тиск насиченої пари ПГФ, кПа"];
      } else {
        intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.03 Інтенсивність випаровування, кг/(с * м.кв)"]
          = Math.pow(10, -6) 
          * Math.pow (parseFloat(defaultData.molarMass[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) ,0.5) 
          * intermediateValues["03. Тиск насиченої пари ПГФ, кПа"];
      }
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"] = roundingFunctionToHundredths(
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.03 Інтенсивність випаровування, кг/(с * м.кв)"] 
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.01 Площа випаровування, м.кв"] 
      * initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.03 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] = roundingFunctionToHundredths (
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"] * 46000);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] = 
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"];
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.05 Відносний енергетичний потенціал, кДж"] = roundingFunctionToHundredths (1/16.534 * Math.pow (
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.03 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"] ,1/3));
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.06 Категорія вибухонебезпечності блоку"] =  blockExplosionCategoryCalculation (
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.05 Відносний енергетичний потенціал, кДж"],
      intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"]);
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.07 Тротиловий еквівалент вибухонебезпечності блоку, кг"] = roundingFunctionToHundredths (
      0.4 * parseFloat(defaultData["Питома теплота згорання, кДж/кг"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) / 0.9 / parseFloat (defaultData.specificExplosiveHeatOfTNT)
      * initialDate["Вихідні дані для сценарію 'Вибух'"]["Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)"] * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"]);
  }
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.01 Коефіцієнт участі"] = initialDate["Вихідні дані для сценарію 'Вибух'"]["Коефіцієнт участі відповідно до ДСТУ Б В.1.1-36:2016 (стор. 43)"];
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"] = roundingFunctionToHundredths (
    parseFloat(defaultData["Питома теплота згорання, кДж/кг"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) / parseFloat (defaultData.constantQ0) 
    * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] * intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.01 Коефіцієнт участі"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.03 Умовний радіус зони руйнування під час вибуху, м"] = determinationOfTheConditionalRadiusOfTheBlastFractureZone (
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.07 Тротиловий еквівалент вибухонебезпечності блоку, кг"],
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.01 Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій, R1, м"] = 
    determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(100, intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.02 Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу, R2, м"] =
    determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(70, intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.03 Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу R3, м"] = 
    determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(28, intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.04 Надлишковий тиск 14 кПа, помірне руйнування перегородок, дверей, рам, легкі травми обслуговуючого персоналу, R4, м"] = 
    determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(14, intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.05 Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може привести до травмування обслуговуючого персоналу, R5, м"] = 
    determinationTheDistanceFromTheExplosionEpicentreToTheShockFrontAtAGivenPressureDrop(2, intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.02 Приведена маса ПГФ абоа ГГ, кг"]);
  // передача результатов в calculationResults
  calculationResults["1. Вибух"]["1.1 Загальний енергетичний потенціал вибухонебезпечності, Е, кДж"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.03 Загальний енергетичний потенціал вибухонебезпеки блоку, кДж"];
  calculationResults["1. Вибух"]["1.2 Загальна маса горючих парів вибухонебезпечної парогазової хмари, яка приведена до єдиної питомої енергії згоряння (дорівнює 46000 кДж/кг), кг"] = 
    intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"];
  calculationResults["1. Вибух"]["1.3 Відносний енергетичний потенціал, вибухонебезпечності технологічного блоку, Qв, кДж"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.05 Відносний енергетичний потенціал, кДж"];
  calculationResults["1. Вибух"]["1.4 Категорія вибухонебезпечності технологічного блоку"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.06 Категорія вибухонебезпечності блоку"];
  calculationResults["1. Вибух"]["1.5 Тротиловий еквівалент вибухонебезпечності парогазового середовища, Wт, кг"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.07 Тротиловий еквівалент вибухонебезпечності блоку, кг"];
  calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["1.6.1 Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій, R1, м"] =
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.01 Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій, R1, м"];
  calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["1.6.2 Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу, R2, м"] = 
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.02 Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу, R2, м"];
  calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["1.6.3 Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу R3, м"] = 
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.03 Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу R3, м"];
  calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["1.6.4 Надлишковий тиск 14 кПа, помірне руйнування перегородок, дверей, рам, легкі травми обслуговуючого персоналу, R4, м"] = 
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.04 Надлишковий тиск 14 кПа, помірне руйнування перегородок, дверей, рам, легкі травми обслуговуючого персоналу, R4, м"];
  calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["1.6.5 Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може привести до травмування обслуговуючого персоналу, R5, м"] = 
    intermediateValues["05. Розрахунок вибуху зовнішніх утановок"]["05.04 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"]["05.04.05 Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може привести до травмування обслуговуючого персоналу, R5, м"];
  // факельное горение
  if (initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]) {
    intermediateValues["06. Факельне горіння"]["06.01 Швидкысть витыкання середовища із вхідного трубопроводу, м/с"] = roundingFunctionToHundredths (4 * initialDate["Main general parameters"]["2.17 Витрата середовища за нормальних умов, м3/добу"] / 24 / 3600 / Math.PI / Math.pow (innerDiameterOfSupplyPipe / 1000, 2));
    intermediateValues["06. Факельне горіння"]["06.02 Швидкысть витыкання середовища із вихідного трубопроводу, м/с"] = roundingFunctionToHundredths (4 * initialDate["Main general parameters"]["2.17 Витрата середовища за нормальних умов, м3/добу"] / 24 / 3600 / Math.PI / Math.pow (internalDiameterOfTheOutletPipe / 1000, 2));
    intermediateValues["06. Факельне горіння"]["06.03 Довжина факелу у вхідного тубопроводу, м"] = roundingFunctionToHundredths (120 * Math.pow (innerDiameterOfSupplyPipe / 1000, 0.8) / (1 + 30 / intermediateValues["06. Факельне горіння"]["06.01 Швидкысть витыкання середовища із вхідного трубопроводу, м/с"]));
    intermediateValues["06. Факельне горіння"]["06.04 Довжина факелу у вихідного тубопроводу, м"] = roundingFunctionToHundredths (120 * Math.pow (internalDiameterOfTheOutletPipe / 1000, 0.8) / (1 + 30 / intermediateValues["06. Факельне горіння"]["06.02 Швидкысть витыкання середовища із вихідного трубопроводу, м/с"]));
    intermediateValues["06. Факельне горіння"]["06.05 Максимальна довжина факелу, м"] = Math.max (intermediateValues["06. Факельне горіння"]["06.03 Довжина факелу у вхідного тубопроводу, м"], intermediateValues["06. Факельне горіння"]["06.04 Довжина факелу у вихідного тубопроводу, м"]);
    intermediateValues["06. Факельне горіння"]["06.06 Довжина факилу для надкритичного витікання, коли газ витікає зі звуковою швидкістю, м"] = roundingFunctionToHundredths (10.5 * Math.pow (initialDate["Main general parameters"]["2.17 Витрата середовища за нормальних умов, м3/добу"] / 24 / 3600, 0/4));
    intermediateValues["06. Факельне горіння"]["06.07 Максимальна ширина факелу, м"] = roundingFunctionToHundredths (0.15 * intermediateValues["06. Факельне горіння"]["06.05 Максимальна довжина факелу, м"]);
    intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"] = intermediateValues["06. Факельне горіння"]["06.07 Максимальна ширина факелу, м"];
    intermediateValues["06. Факельне горіння"]["06.09 Довжина факелу для настильних факелів, м"] = roundingFunctionToHundredths (1.25 * intermediateValues["06. Факельне горіння"]["06.05 Максимальна довжина факелу, м"]);
    intermediateValues["06. Факельне горіння"]["06.10 Довжина факелу для настильних факелів для надкритичного витікання, м"] = roundingFunctionToHundredths (1.25 * intermediateValues["06. Факельне горіння"]["06.06 Довжина факилу для надкритичного витікання, коли газ витікає зі звуковою швидкістю, м"]);
    let startRadius = 1.9 // 1.9
    intermediateValues["06. Факельне горіння"]["06.11 Опіки ІІІ ступеня"]["радіус ураження, м"] = 
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity (startRadius, 49, intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"], initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]);
    intermediateValues["06. Факельне горіння"]["06.12 Опіки ІІ ступеня"]["радіус ураження, м"] = 
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity (startRadius, 27.4, intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"], initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]);
    intermediateValues["06. Факельне горіння"]["06.13 Опіки І ступеня"]["радіус ураження, м"] = 
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity (startRadius, 9, intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"], initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]);
    intermediateValues["06. Факельне горіння"]["06.14 Безпечний поріг для людини у брезентовому одязі"]["радіус ураження, м"] = 
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity (startRadius, 4, intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"], initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]);
    intermediateValues["06. Факельне горіння"]["06.15 Без негативних наслідків для людини у брезентовому одязі"]["радіус ураження, м"] = 
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensity (startRadius, 1.4, intermediateValues["06. Факельне горіння"]["06.08 Діаметер факелу, м"], initialDate["Вихідні дані для сценарію 'Факельне горіння'"]["The average surface density of thermal radiation of the flame of the torch"]);
  }
  // передача результатов в calculationResults
  calculationResults["2. Факельне горіння"]["2.1 Довжина факела, м"] = intermediateValues["06. Факельне горіння"]["06.05 Максимальна довжина факелу, м"];
  calculationResults["2. Факельне горіння"]["2.2 Максимальна ширина факела, м"] = intermediateValues["06. Факельне горіння"]["06.07 Максимальна ширина факелу, м"];
  calculationResults["2. Факельне горіння"]["2.3 Опіки ІІІ ступеня:"]["2.3.1 радіус ураження, м"] = intermediateValues["06. Факельне горіння"]["06.11 Опіки ІІІ ступеня"]["радіус ураження, м"];
  calculationResults["2. Факельне горіння"]["2.4 Опіки ІІ ступеня:"]["2.4.1 радіус ураження, м"] = intermediateValues["06. Факельне горіння"]["06.12 Опіки ІІ ступеня"]["радіус ураження, м"];
  calculationResults["2. Факельне горіння"]["2.5 Опіки І ступеня:"]["2.5.1 радіус ураження, м"] = intermediateValues["06. Факельне горіння"]["06.13 Опіки І ступеня"]["радіус ураження, м"];
  calculationResults["2. Факельне горіння"]["2.6 Безпечний поріг для людини у брезентовому одязі:"]["2.6.1 радіус ураження, м"] = intermediateValues["06. Факельне горіння"]["06.14 Безпечний поріг для людини у брезентовому одязі"]["радіус ураження, м"];
  calculationResults["2. Факельне горіння"]["2.7 Без негативних наслідків для людини у брезентовому одязі:"]["2.7.1 радіус ураження, м"] = intermediateValues["06. Факельне горіння"]["06.15 Без негативних наслідків для людини у брезентовому одязі"]["радіус ураження, м"];
  
  // расчет взрывоопасной зоны
  if (initialDate["Main general parameters"]["2.07 Середовище в апараті"] == 'methane' || initialDate["Main general parameters"]["2.07 Середовище в апараті"] ==  'propaneButane') {
    intermediateValues["07. Можлива вибухонебезпечна зона"]["07.02 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м"] = roundingFunctionToHundredths (
      14.5632 * Math.pow (intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] / intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"] / parseFloat (defaultData.lowerConcentrationAisleOfFireSpread[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) , 0.33))
  } else {
    intermediateValues["07. Можлива вибухонебезпечна зона"]["07.01 Коефіцієнт Кк"] = roundingFunctionToHundredths ( initialDate["Main general parameters"]["2.18 Час спрацювання системи автоматики відключення трубопроводів згідно з паспортними даними установки"] / 3600);
    intermediateValues["07. Можлива вибухонебезпечна зона"]["07.02 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м"] = roundingFunctionToHundredths (
      3.1501 * intermediateValues["07. Можлива вибухонебезпечна зона"]["07.01 Коефіцієнт Кк"] ** 0.5 * (intermediateValues["03. Тиск насиченої пари ПГФ, кПа"] / parseFloat (defaultData.lowerConcentrationAisleOfFireSpread[initialDate["Main general parameters"]["2.07 Середовище в апараті"]])) ** 0.813 
      * ( intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.04 Загальна маса ГГ або приведена до єдиної питомої енергії згорання (46000 кДж/кг), кг"] / intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"] 
      / intermediateValues["03. Тиск насиченої пари ПГФ, кПа"]) ** 0.333 + ( intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.01 Площа випаровування, м.кв"] / Math.PI ) ** 0.5 );
  }
  calculationResults["3. Можлива вибухонебезпечна зона"]["3.1 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м"] = 
    intermediateValues["07. Можлива вибухонебезпечна зона"]["07.02 Горизонтальні розміри зони, які обмежують область концентрацій, що перевищують нижню концентраційну межу поширення полум'я горючих газів, м"];

  // Расчет пожара пролива
  if (straitFire.checked) {
    if (initialDate["Main general parameters"]["2.15 Об'єм конденсатозбірника апарату, м3"] == 0) {
      if (initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"] !== 0) {
        if (initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"] 
            * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The height of the collapse | Висота обвалування"] > initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"]) {
          intermediateValues["08. Пожежа проливу"]["08.01 Площа проливу, м.кв"] = roundingFunctionToHundredths (
             initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"]);
        } else { 
          intermediateValues["08. Пожежа проливу"]["08.01 Площа проливу, м.кв"] = roundingFunctionToHundredths ( 
            initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"] + ( initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] 
            - initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The length of the roll | Довжина обвалування"] * initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The width of the collapse | Ширина обвалування"]) / parseFloat ( defaultData["Висота слою розливу"]));
        }
      } else {
        intermediateValues["08. Пожежа проливу"]["08.01 Площа проливу, м.кв"] = roundingFunctionToHundredths (initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] / parseFloat ( defaultData["Висота слою розливу"]));
      }
    } else {
      intermediateValues["08. Пожежа проливу"]["08.01 Площа проливу, м.кв"] = roundingFunctionToHundredths ( initialDate["Main general parameters"]["2.15 Об'єм конденсатозбірника апарату, м3"] / parseFloat ( defaultData["Висота слою розливу"] ));
    }
    intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"] = roundingFunctionToHundredths (( 4 * intermediateValues["08. Пожежа проливу"]["08.01 Площа проливу, м.кв"] / Math.PI ) ** 0.5);
    intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"] = 
      (initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]
        ["The average surface density of thermal radiation of the flame of the torch fires of shed in accordance with DSTU B V.1.1-36:2016 (p. 55)| Середньоповерхнева густина теплового випромінювання полум'я пожежі проливу відповідно до ДСТУ Б В.1.1-36:2016 (стор. 55)"] !==0)? 
      initialDate["Вихідні дані для сценарію 'Пожежа проливу'"]["The average surface density of thermal radiation of the flame of the torch fires of shed in accordance with DSTU B V.1.1-36:2016 (p. 55)| Середньоповерхнева густина теплового випромінювання полум'я пожежі проливу відповідно до ДСТУ Б В.1.1-36:2016 (стор. 55)"] 
      : determinationOfFlameThermalRadiationDensityAsAFunctionOfSpillDiameter (intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], initialDate["Main general parameters"]["2.07 Середовище в апараті"]);
    intermediateValues["08. Пожежа проливу"]["08.04 Питома масова швидкість вигорання середовища, кг/(м.кв * с)"] = parseFloat (defaultData["Питома швидкість вигорання, кг/(м.кв * с)"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]);
    intermediateValues["08. Пожежа проливу"]["08.05 Висота полум'я, м"] = roundingFunctionToHundredths( 
      42 * intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"] * (intermediateValues["08. Пожежа проливу"]["08.04 Питома масова швидкість вигорання середовища, кг/(м.кв * с)"] / parseFloat(defaultData["Густина повітря за разрахункової температури (61 гарус С)"])
      / (parseFloat(defaultData.accelerationOfGravity) * intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"]) ** 0.5) ** 0.61);
    intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"] = roundingFunctionToHundredths(2 * intermediateValues["08. Пожежа проливу"]["08.05 Висота полум'я, м"] / intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"]);
    intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"] = 20;
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.01 Без негативних наслідків на протязі тривалого часу"] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire ( intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 1.4, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"],
      intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.02 Безпечно для людини в брезентовому одязі"] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire ( intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 4.2, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"],
        intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.03 Нестерпний біль через 20–30с; Опік 1-го ступ. через 15–20с; Опік 2-го ступ. через 30 –40с; Загорання бавовни-волокна через 15 хв."] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire ( intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 7.0, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"],
        intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"], intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.04 Нестерпний біль через 3–5с; Опік 1-го ступ. через 6– 8с; Опік 2-го ступ. через 12–16с"] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire ( intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 10.5, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], 
        intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"], intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.05 Загорання деревини з шорсткою поверхнею (вологість 12%) при тривалості опромінення 15 хв."] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire (intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 12.9, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"],
        intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.06 Загорання деревини, пофарбованою олійною фарбою по струганій поверхні, загоранні фанери"] = roundingFunctionToHundredths(
      determiningTheRadiusOfImpactForAGivenThermalRadiationIntensityInASpillFire (intermediateValues["08. Пожежа проливу"]["08.07 Радіус для початку розрахунку"], 17, intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"], intermediateValues["08. Пожежа проливу"]["08.06 Коефіцієнт"],
        intermediateValues["08. Пожежа проливу"]["08.03 Густина теплового випромінювання полум'я в залежності від біаметру вогнища, кВт/м.кв"]));
  }
  // передача результатов в calculationResults
  calculationResults["4. Пожежа проливу горючих рідин"]["4.1 Ефективний діаметр проливу, м"] = intermediateValues["08. Пожежа проливу"]["08.02 Діаметр вогнища пожежі, м"];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.2 Висота полум‘я, м"] = intermediateValues["08. Пожежа проливу"]["08.05 Висота полум'я, м"];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.3 Без негативних наслідків на протязі тривалого часу:"]["4.3.1 радіус ураження, м"] = intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.01 Без негативних наслідків на протязі тривалого часу"];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.4 Безпечно для людини в брезентовому одязі:"]["4.4.1 радіус ураження, м"] = intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.02 Безпечно для людини в брезентовому одязі"];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.5 Нестерпний біль через 20–30с; Опік 1-го ступ. через 15–20с; Опік 2-го ступ. через 30 –40с; Загорання бавовни-волокна через 15 хв.:"]["4.5.1 радіус ураження, м"] = 
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.03 Нестерпний біль через 20–30с; Опік 1-го ступ. через 15–20с; Опік 2-го ступ. через 30 –40с; Загорання бавовни-волокна через 15 хв."];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.6 Нестерпний біль через 3–5с; Опік 1-го ступ. через 6– 8с; Опік 2-го ступ. через 12–16с:"]["4.6.1 радіус ураження, м"] = 
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.04 Нестерпний біль через 3–5с; Опік 1-го ступ. через 6– 8с; Опік 2-го ступ. через 12–16с"];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.7 Загорання деревини з шорсткою поверхнею (вологість 12%) при тривалості опромінення 15 хв.:"]["4.7.1 радіус ураження, м"] = 
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.05 Загорання деревини з шорсткою поверхнею (вологість 12%) при тривалості опромінення 15 хв."];
  calculationResults["4. Пожежа проливу горючих рідин"]["4.8 Загорання деревини, пофарбованою олійною фарбою по струганій поверхні, загоранні фанери:"]["4.8.1 радіус ураження, м"] = 
    intermediateValues["08. Пожежа проливу"]["08.08 Радіуси зон інтенсивності випромінювання, м"]["08.08.06 Загорання деревини, пофарбованою олійною фарбою по струганій поверхні, загоранні фанери"];
  
  //Расчет "Огненного шара"
  if (fireball.checked) {
    intermediateValues["09. Вогняна куля"]["09.01 Маса горючої речовини, кг"] = intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.02 Блоку з ЛЗР"]["04.02.04 Маса рідини що випарилась з поверхні розливу за час спрацювання автоматики, кг"];
    intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"] = roundingFunctionToHundredths( 5.33 * intermediateValues["09. Вогняна куля"]["09.01 Маса горючої речовини, кг"] ** 0.327);
    intermediateValues["09. Вогняна куля"]["09.03 Висота центру вогняної кулі, м"] = roundingFunctionToHundredths(intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"] / 2);
    intermediateValues["09. Вогняна куля"]["09.04 Час існування вогняної кулі, с"] = roundingFunctionToHundredths(0.92 * intermediateValues["09. Вогняна куля"]["09.01 Маса горючої речовини, кг"] ** 0.303);
    intermediateValues["09. Вогняна куля"]["09.05 Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі, кВт/м.кв"] = initialDate["Вихідні дані для сценарію 'Вогняна куля'"]
      ["Average surface density of thermal radiation of the 'fireball' flame | Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі'"];
    intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.01 Ступень ураження: опік І-го ступеня"] = determiningTheRadiusOfTheHeatRadiantIntensityZoneInAFireball (10, intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"], 
      intermediateValues["09. Вогняна куля"]["09.03 Висота центру вогняної кулі, м"], intermediateValues["09. Вогняна куля"]["09.04 Час існування вогняної кулі, с"], intermediateValues["09. Вогняна куля"]["09.05 Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі, кВт/м.кв"], 120 );
    intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.02 Ступень ураження: опік ІІ-го ступеня"] = determiningTheRadiusOfTheHeatRadiantIntensityZoneInAFireball (10, intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"], 
      intermediateValues["09. Вогняна куля"]["09.03 Висота центру вогняної кулі, м"], intermediateValues["09. Вогняна куля"]["09.04 Час існування вогняної кулі, с"], intermediateValues["09. Вогняна куля"]["09.05 Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі, кВт/м.кв"], 220 );
    intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.03 Ступень ураження: опік ІІІ-го ступеня"] = determiningTheRadiusOfTheHeatRadiantIntensityZoneInAFireball (10, intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"], 
      intermediateValues["09. Вогняна куля"]["09.03 Висота центру вогняної кулі, м"], intermediateValues["09. Вогняна куля"]["09.04 Час існування вогняної кулі, с"], intermediateValues["09. Вогняна куля"]["09.05 Середньоповерхнева густина теплового випромінювання полум'я 'вогняної кулі, кВт/м.кв"], 320 );
    // передача результатов в calculationResults
    calculationResults["5. Параметри утворення вогняної кулі"]["5.1 Діаметр вогняної кулі при викиді, м"] = intermediateValues["09. Вогняна куля"]["09.02 Ефективний діаметр вогняної кулі, м"];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.2 Висота центру вогняної кулі, м"] = intermediateValues["09. Вогняна куля"]["09.03 Висота центру вогняної кулі, м"];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.3 Час існування вогняної кулі,  с"] = intermediateValues["09. Вогняна куля"]["09.04 Час існування вогняної кулі, с"];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.4 Ступень ураження: опік І-го ступеня"]["5.4.1 радіус ураження, м"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.01 Ступень ураження: опік І-го ступеня"][1];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.4 Ступень ураження: опік І-го ступеня"]["5.4.2 інтенсивність теплового випромінювання, кВт/м.кв"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.01 Ступень ураження: опік І-го ступеня"][0];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.5 Ступень ураження: опік ІІ-го ступеня"]["5.5.1 радіус ураження, м"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.02 Ступень ураження: опік ІІ-го ступеня"][1];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.5 Ступень ураження: опік ІІ-го ступеня"]["5.5.2 інтенсивність теплового випромінювання, кВт/м.кв"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.02 Ступень ураження: опік ІІ-го ступеня"][0];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.6 Ступень ураження: опік ІІІ-го ступеня"]["5.6.1 радіус ураження, м"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.03 Ступень ураження: опік ІІІ-го ступеня"][1];
    calculationResults["5. Параметри утворення вогняної кулі"]["5.6 Ступень ураження: опік ІІІ-го ступеня"]["5.6.2 інтенсивність теплового випромінювання, кВт/м.кв"] = intermediateValues["09. Вогняна куля"]["09.06 Радіуси зон інтенсивності теплового пиромінювання при 'вогняній кулі', м"]["09.06.03 Ступень ураження: опік ІІІ-го ступеня"][0];
  }

  //Расчет параметров облака ОХВ
  if (evaporationOfAHazardousChemicalSubstance.checked && initialDate["Main general parameters"]["2.07 Середовище в апараті"] == "ethylMercaptan"){
    intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"] = 0.8 * initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] * parseFloat(defaultData.densityUnderNormalConditions.liquids[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]);
    intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"] = initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"] < 100 ? 0.5 : 1;
    intermediateValues["10. Випаровування НХР"]["10.03 Площа району аварії, км.кв"] = roundingFunctionToHundredths(Math.PI * intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"] ** 2);
    intermediateValues["10. Випаровування НХР"]["10.04 Значення поправного коефіцієнта Кt1, що враховує вплив температури повітря на глибину поширення первинної хмари НХР"] = determinationOfTheCorrectionFactorKt1 (initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"], 
                                                                                                                                                                                                                      initialDate["Main general parameters"]["2.07 Середовище в апараті"]);
    intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"] = (initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"] > parseFloat (defaultData.boilingPoint[initialDate["Main general parameters"]["2.07 Середовище в апараті"]])) ?
     intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"] * parseFloat(defaultData.specificHeatOfVaporization[initialDate["Main general parameters"]["2.07 Середовище в апараті"]])* (initialDate["Main general parameters"]["2.05 Температура в апараті	, 0 C"] 
     - parseFloat (defaultData.boilingPoint[initialDate["Main general parameters"]["2.07 Середовище в апараті"]])) / parseFloat(defaultData.specificHeatOfVaporization[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) : 0;
    intermediateValues["10. Випаровування НХР"]["10.06 Кількість НХР, що перейшала у вторинну хмару, кг"] = intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"] == 0 ? 
      intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"] 
      : intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"] - intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"];
    intermediateValues["10. Випаровування НХР"]["10.07 Поправочний коефіцєнт К"] = initialDate["Main general parameters"]["2.07 Середовище в апараті"] == "ethylMercaptan" ? 9 : 5
    intermediateValues["10. Випаровування НХР"]["10.08 Порогова токсодоза, PCt50"] = 14.4 * intermediateValues["10. Випаровування НХР"]["10.07 Поправочний коефіцєнт К"] * parseFloat(defaultData.maximumAllowableConcentrationInTheAirOfTheWrkingArea[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]);
    intermediateValues["10. Випаровування НХР"]["10.09 Комплексний показник Кр"] = determinationOfTheComplexIndicatorKp (initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Вид рельєфу"], initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Вид рослинності"], 
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Тип лісу"], initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Пора року"]);
    intermediateValues["10. Випаровування НХР"]["10.10 Коефіцієнт впливу місцевості Км"] = determinationOfTheTerrainInfluenceCoefficientKm (intermediateValues["10. Випаровування НХР"]["10.09 Комплексний показник Кр"], 
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"]);
    intermediateValues["10. Випаровування НХР"]["10.11 Параметр вертикальної стійкості повітря в приземному шарі Єпсилант"] = initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"] == "Ізотермія" ? 0 :
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"] == "Інверсія" ? 0.2 :-0.1;
    intermediateValues["10. Випаровування НХР"]["10.12 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, а"] = roundingFunctionToHundredths(0.57 * Math.E ** (0.86 * intermediateValues["10. Випаровування НХР"]["10.11 Параметр вертикальної стійкості повітря в приземному шарі Єпсилант"]));
    intermediateValues["10. Випаровування НХР"]["10.13 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b1"] = roundingFunctionToHundredths(15.4 * Math.E ** (6.96 * intermediateValues["10. Випаровування НХР"]["10.11 Параметр вертикальної стійкості повітря в приземному шарі Єпсилант"]));
    intermediateValues["10. Випаровування НХР"]["10.14 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b2"] = roundingFunctionToHundredths(16.84 * Math.E ** (6.87 * intermediateValues["10. Випаровування НХР"]["10.11 Параметр вертикальної стійкості повітря в приземному шарі Єпсилант"]));
    intermediateValues["10. Випаровування НХР"]["10.15 Глибина поширення первинної хмари НХР на рівнинній місцевості, км"] = intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"] > 0 ? 
    roundingFunctionToHundredths(intermediateValues["10. Випаровування НХР"]["10.13 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b1"] * (intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"] / 
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Швидкість вітру на висоті 1-10 м, м/с"] / intermediateValues["10. Випаровування НХР"]["10.08 Порогова токсодоза, PCt50"]) 
      ** intermediateValues["10. Випаровування НХР"]["10.12 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, а"]): 0;
    intermediateValues["10. Випаровування НХР"]["10.16 Глибина поширення первинної хмари НХР з урахуванням типу місцевості, км"] = roundingFunctionToHundredths (
                                                                                                                                   intermediateValues["10. Випаровування НХР"]["10.15 Глибина поширення первинної хмари НХР на рівнинній місцевості, км"] 
                                                                                                                                   * intermediateValues["10. Випаровування НХР"]["10.10 Коефіцієнт впливу місцевості Км"]);
    intermediateValues["10. Випаровування НХР"]["10.17 Приведений діаметер площі поверхні проливу, км"] = roundingFunctionToHundredths (
                                                                                                            determiningTheReducedDiameterOfTheSurfaceAreaOfAHazardousChemicalSpill (
                                                                                                              initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Наявність обвалування"], 
                                                                                                              initialDate["Main general parameters"]["2.14 Об'єм апарату, м3"],
                                                                                                              intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"],
                                                                                                              intermediateValues["10. Випаровування НХР"]["10.05 Кількість НХР, що перейшла в первинну хмару, кг"],
                                                                                                              parseFloat(defaultData.densityUnderNormalConditions.liquids[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]),
                                                                                                              initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Висота обвалування (для ємностей об'ємом більше 2000 т), м"]
                                                                                                            )
                                                                                                          );
    intermediateValues["10. Випаровування НХР"]["10.18 Питома швидкість випаровування, кг/(м.кв*с)"] = roundingFunctionToHundredths (
                                                                                                        0.041 * initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Швидкість вітру на висоті 1-10 м, м/с"] 
                                                                                                        * parseFloat (defaultData.molarMass[initialDate["Main general parameters"]["2.07 Середовище в апараті"]])
                                                                                                        / (intermediateValues["10. Випаровування НХР"]["10.17 Приведений діаметер площі поверхні проливу, км"] ** 0.14) 
                                                                                                        / (initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"] + 273.15)
                                                                                                        * Math.E ** (parseFloat(defaultData.specificHeatOfVaporization[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) 
                                                                                                                      * parseFloat (defaultData.molarMass[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) 
                                                                                                                      / parseFloat (defaultData.universalGasConstant)
                                                                                                                      * (1/(parseFloat (defaultData.boilingPoint[initialDate["Main general parameters"]["2.07 Середовище в апараті"]]) + 273.15) 
                                                                                                                          - 1/(initialDate["Main general parameters"]["2.16 Розрахункова температура, 0 C"] + 273.15) )
                                                                                                                    )
                                                                                                      )
    intermediateValues["10. Випаровування НХР"]["10.19 Площа поверхні виливу, м.кв"] = roundingFunctionToHundredths (Math.PI * intermediateValues["10. Випаровування НХР"]["10.17 Приведений діаметер площі поверхні проливу, км"] ** 2 / 4);
    intermediateValues["10. Випаровування НХР"]["10.20 Час випаровування НХР з площі поверхні виливу, годин"] = intermediateValues["10. Випаровування НХР"]["10.06 Кількість НХР, що перейшала у вторинну хмару, кг"] / 3600 / intermediateValues["10. Випаровування НХР"]["10.18 Питома швидкість випаровування, кг/(м.кв*с)"] / intermediateValues["10. Випаровування НХР"]["10.19 Площа поверхні виливу, м.кв"] <= 24 ?
      roundingFunctionToHundredths(intermediateValues["10. Випаровування НХР"]["10.06 Кількість НХР, що перейшала у вторинну хмару, кг"] / 3600 / intermediateValues["10. Випаровування НХР"]["10.18 Питома швидкість випаровування, кг/(м.кв*с)"] / intermediateValues["10. Випаровування НХР"]["10.19 Площа поверхні виливу, м.кв"]) : 24
    intermediateValues["10. Випаровування НХР"]["10.21 Довірча ймовірність"] = initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["The nature of the task | Характер задачі"] == "longTermForecasting" ? 0.9 :
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["The nature of the task | Характер задачі"] == "emergencyForecasting" ?  0.5 : 0.75;
    intermediateValues["10. Випаровування НХР"]["10.22 Половина кута сектору у межах якого можливе поширення первинної хмари НХР із заданною довірчою імовірністю, градусів"] = determineTheHalfAngleOfTheSectorWithinWhichThePrimaryCloudCanPropagate (
      initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"], intermediateValues["10. Випаровування НХР"]["10.21 Довірча ймовірність"]);
    intermediateValues["10. Випаровування НХР"]["10.23 Половина кута сектору у межах якого можливе поширення вторинної хмари НХР із заданною довірчою імовірністю, градусів"] = determineTheHalfAngleOfTheSectorWithinWhichTheSecondaryCloudCanPropagate (
      initialDate ["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["State of the atmosphere in the surface layer | Стан атмосфери у приземному шарі"], intermediateValues["10. Випаровування НХР"]["10.21 Довірча ймовірність"],
      intermediateValues["10. Випаровування НХР"]["10.20 Час випаровування НХР з площі поверхні виливу, годин"]);
    intermediateValues["10. Випаровування НХР"]["10.24 Площа поширення первинної хмари НХР, км.кв"] = roundingFunctionToHundredths (( intermediateValues["10. Випаровування НХР"]["10.15 Глибина поширення первинної хмари НХР на рівнинній місцевості, км"] + intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"]) ** 2 
      * intermediateValues["10. Випаровування НХР"]["10.22 Половина кута сектору у межах якого можливе поширення первинної хмари НХР із заданною довірчою імовірністю, градусів"] /60);
    intermediateValues["10. Випаровування НХР"]["10.25 Глибина поширення вторинної хмари НХР на рівнинній місцевості, км"] = roundingFunctionToHundredths ( intermediateValues["10. Випаровування НХР"]["10.14 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, b2"] 
      * intermediateValues["10. Випаровування НХР"]["10.20 Час випаровування НХР з площі поверхні виливу, годин"] ** -0.5
      * (intermediateValues["10. Випаровування НХР"]["10.06 Кількість НХР, що перейшала у вторинну хмару, кг"] * 10 **-3 / initialDate["Вихідні дані для сценарію 'Випаровування небезпечної хімічної речовини"]["Швидкість вітру на висоті 1-10 м, м/с"] 
      / intermediateValues["10. Випаровування НХР"]["10.08 Порогова токсодоза, PCt50"]) ** intermediateValues["10. Випаровування НХР"]["10.12 Коефіцієнт що залежить від вертикальної стійкості повітря в приземному шарі, а"])
    intermediateValues["10. Випаровування НХР"]["10.26 Глибина поширення вторинної хмари НХР з урахуванням типу місцевості, км"] = roundingFunctionToHundredths (intermediateValues["10. Випаровування НХР"]["10.25 Глибина поширення вторинної хмари НХР на рівнинній місцевості, км"] 
      * intermediateValues["10. Випаровування НХР"]["10.10 Коефіцієнт впливу місцевості Км"]);
    intermediateValues["10. Випаровування НХР"]["10.27 Площа поширення вторинної хмари, км.кв"] = roundingFunctionToHundredths (( intermediateValues["10. Випаровування НХР"]["10.26 Глибина поширення вторинної хмари НХР з урахуванням типу місцевості, км"] + intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"]) ** 2 
    * intermediateValues["10. Випаровування НХР"]["10.23 Половина кута сектору у межах якого можливе поширення вторинної хмари НХР із заданною довірчою імовірністю, градусів"] /60);
    intermediateValues["10. Випаровування НХР"]["10.28 Площа прогнозованної зони хімічного забруднення, км.кв"] = calculateTheAreaOfTheChemicalPollutiZonone (
                                                                                                                    intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"],
                                                                                                                    intermediateValues["10. Випаровування НХР"]["10.16 Глибина поширення первинної хмари НХР з урахуванням типу місцевості, км"],
                                                                                                                    intermediateValues["10. Випаровування НХР"]["10.26 Глибина поширення вторинної хмари НХР з урахуванням типу місцевості, км"],
                                                                                                                    intermediateValues["10. Випаровування НХР"]["10.22 Половина кута сектору у межах якого можливе поширення первинної хмари НХР із заданною довірчою імовірністю, градусів"],
                                                                                                                    intermediateValues["10. Випаровування НХР"]["10.23 Половина кута сектору у межах якого можливе поширення вторинної хмари НХР із заданною довірчою імовірністю, градусів"]
                                                                                                                  );
    intermediateValues["10. Випаровування НХР"]["10.29 Глибина зони хімічного забруднення, км"] = Math.max (intermediateValues["10. Випаровування НХР"]["10.16 Глибина поширення первинної хмари НХР з урахуванням типу місцевості, км"], intermediateValues["10. Випаровування НХР"]["10.26 Глибина поширення вторинної хмари НХР з урахуванням типу місцевості, км"])
     + intermediateValues["10. Випаровування НХР"]["10.02 Радіус району аварії, км"];
    intermediateValues["10. Випаровування НХР"]["10.30 Площа зони можливого хімічного забрудення, км.кв"] = roundingFunctionToHundredths (Math.PI * intermediateValues["10. Випаровування НХР"]["10.29 Глибина зони хімічного забруднення, км"] ** 2);
    // передача результатов в calculationResults
    calculationResults["6. Розповсюдження хмари пари НХР"]["6.1 Кількість розлитої при аварії НХР, т"] = intermediateValues["10. Випаровування НХР"]["10.01 Маса НХР у ємності, кг"];
    calculationResults["6. Розповсюдження хмари пари НХР"]["6.2 Глибина зони хімічного забруднення, км"] = intermediateValues["10. Випаровування НХР"]["10.29 Глибина зони хімічного забруднення, км"];
    calculationResults["6. Розповсюдження хмари пари НХР"]["6.3 Площа зони можливого хімічного забруднення, км.кв"] = intermediateValues["10. Випаровування НХР"]["10.30 Площа зони можливого хімічного забрудення, км.кв"];
    calculationResults["6. Розповсюдження хмари пари НХР"]["6.4 Площа зони прогнозованого хімічного забруднення, км.кв"] = intermediateValues["10. Випаровування НХР"]["10.30 Площа зони можливого хімічного забрудення, км.кв"]
  }
  // рассчет сценария "взырыв в помещении"
  if (anExplosionInTheRoom.checked){
    intermediateValues["11. Вибух у приміщенні"]["11.01 Об'єм приміщення, м.куб"] = roundingFunctionToHundredths (initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Довжина приміщення, м"] 
      * initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Ширина приміщення, м"] * initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Room height | Висота приміщення"]);
    intermediateValues["11. Вибух у приміщенні"]["11.02 Об'єм приміщення вільний, м.куб"] = roundingFunctionToHundredths (intermediateValues["11. Вибух у приміщенні"]["11.01 Об'єм приміщення, м.куб"] - initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Об'єм зайнятий допоміжним обладнанням, м"]);
    intermediateValues["11. Вибух у приміщенні"]["11.03 Коефіцієнт участі горючого газу у вибуху відповідно до таблиці 2 ДСТУ Б В.1.1-60-2016"] = defaultData["Коефіцієнт учачсті"][initialDate["Main general parameters"]["2.07 Середовище в апараті"]]
    intermediateValues["11. Вибух у приміщенні"]["11.04 Стехіометричний коєфіцієнт кисню в реакції горіння Бетта"] = determinationOfOxygenStoichiometricCoefficientInTheCombustionReaction ()
    intermediateValues["11. Вибух у приміщенні"]["11.05 Стехіометрична концентрація ГГ або парів ЛЗР та ГР, %(об.)"] = roundingFunctionToHundredths ( 100 / (1 + 4.84 * intermediateValues["11. Вибух у приміщенні"]["11.04 Стехіометричний коєфіцієнт кисню в реакції горіння Бетта"]));
    intermediateValues["11. Вибух у приміщенні"]["11.06 Надлишковий тиск вибуху, кПа"] = roundingFunctionToHundredths((initialDate["Вихідні дані для сценарію 'Вибух в приміщенні'"]["Максимальний тиск вибуху стехіометричної суміші у замкнутому об'ємі, кПа"] - parseFloat ( defaultData.atmosphericPressure)) 
      * intermediateValues["04. Загальний енергетичний потенціал вибухонебезпеки блоку"]["04.01 Блоку з ПГФ або ГГ"]["04.01.09 Масса ГГ що потрапила до навколишнього простору під час розрахункової аварії, кг"] 
      * intermediateValues["11. Вибух у приміщенні"]["11.03 Коефіцієнт участі горючого газу у вибуху відповідно до таблиці 2 ДСТУ Б В.1.1-60-2016"] *100 / intermediateValues["11. Вибух у приміщенні"]["11.02 Об'єм приміщення вільний, м.куб"] / defaultData["Коефіцієнт що враховує негерметчність приміщення й неадіабатичність процесу горіння"]
      / intermediateValues["11. Вибух у приміщенні"]["11.05 Стехіометрична концентрація ГГ або парів ЛЗР та ГР, %(об.)"] / intermediateValues["02. Густина горючих газів або пари ЛЗР або ГР при разрахунковій температурі, кг/м.куб"]);
    calculationResults["7. Вибух у приміщенні"]["7.1 Надлишковий тиск вибуху, кПа"] = intermediateValues["11. Вибух у приміщенні"]["11.06 Надлишковий тиск вибуху, кПа"] 
  }
  if (!anExplosionInTheRoom.checked) {calculationResults["7. Вибух у приміщенні"] = null};
  if (!evaporationOfAHazardousChemicalSubstance.checked) {calculationResults["6. Розповсюдження хмари пари НХР"] = null};
  if (!fireball.checked) {calculationResults["5. Параметри утворення вогняної кулі"] = null};
  if (!straitFire.checked) {calculationResults["4. Пожежа проливу горючих рідин"] = null}
  if (!torchBuring.checked) {calculationResults["2. Факельне горіння"] = null}
  if (!explosion.checked) {calculationResults["1. Вибух"]["1.6 Радіус руйнації в залежності від розміру надлишкового тиску по зонах"] = null}
  
  results.innerHTML = ""
  displayingTheResultOfTheCalculationToHtml (results)
  console.log (defaultData);
  console.log (initialDate)
  console.log (intermediateValues)
  console.log (calculationResults)

  //формування об'єкту данних для зберігання на диска
  const userData = {
    defaultData: defaultData,
    initialDate: initialDate,
    intermediateValues: intermediateValues,
    calculationResults: calculationResults
  };

  // Преобразуем объект в JSON-строку
  const dataStr = JSON.stringify(userData);

  resultToExcel.onclick = (() => {
    const uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      btoaUtf16 = (s) => {
        return btoa(unescape(encodeURIComponent(s)));
      },
      format = (s, c) => s.replace(/{(\w+)}/g, (m, p) => c[p]);
  
    return (name) => {
      const table = document.getElementById('tableResults');
      const ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
      window.location.href = uri + btoaUtf16(format(template, ctx));
    };
  })();
  
  saveToDisk.onclick = (()=> {
    const userFileName = initialDate["Main general parameters"]["2.00 Назва об'єкту"] + "_" + initialDate["Main general parameters"]["2.01 Назва установки"] + "_" + initialDate["Main general parameters"]["2.02 Назва блоку"] + "_" + initialDate["Main general parameters"]["2.03 Назва апарату"]
    return () => {
       downloadUserData(userFileName, dataStr);
    };
  })();
}