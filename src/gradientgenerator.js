const ThemeIndex = {
  'Purple Love': ['#cc2b5e', '#753a88'],
  DIMIGO: ['#ec008c', '#fc6767'],
  'Orange Fun': ['#fc4a1a', '#f7b733'],
  'Digital Water': ['#74ebd5', '#ACB6E5'],
  Summer: ['#22c1c3', '#fdbb2d'],
  Purpink: ['#7F00FF', '#E100FF'],
  Socialive: ['#06beb6', '#48b1bf'],
  Scooter: ['#36D1DC', '#5B86E5'],
  'Blue Skies': ['#56CCF2', '#2F80ED'],
  'Vice City': ['#3494E6', '#EC6EAD'],
  Timber: ['#fc00ff', '#00dbde'],
  Messenger: ['#00c6ff', '#0072ff']
};

export const gradientGenerator = theme => `linear-gradient(to right,${ThemeIndex[theme][0]}, ${ThemeIndex[theme][1]})`;
export const inverseGradientGenerator = theme => `linear-gradient(${ThemeIndex[theme][1]}, ${ThemeIndex[theme][0]})`;
