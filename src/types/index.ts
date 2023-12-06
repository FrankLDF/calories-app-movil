export type RootStackParamList = {
  Home: undefined;
  AddFood: undefined;
};

export type Meal = {
  calories: string;
  name: string;
  portion: string;
  date?: string;
};

const Person = {
  colls: 'Enmanuel and frank',
  url: 'https://avatars.githubusercontent.com/u/126710550 ?v=4',
  matricula: '2021-0618 / 2021-0226',
};

export const {colls, url, matricula} =  Person;