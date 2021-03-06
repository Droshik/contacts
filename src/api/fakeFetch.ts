import { IContact } from "../types";

//simulates that data isn`t loaded instantly
export const fakeFetch = async (): Promise<IContact[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return [{
    name: "John",
    lastname: "Dorian",
    age: 27,
    pager: 926545
  },
  {
    name: "Carla",
    lastname: "Espinosa",
    age: 28,
    pager: 945455
  },
  {
    name: "Perry",
    lastname: "Cox",
    age: 40,
    pager: 955654
  },
  {
    name: "Robert",
    lastname: "Celso",
    age: 58,
    pager: 128215
  }]
}
