import {CitiesModel} from "src/types/common"

interface LibAndRoadsProps {
  n: number;
  c_lib: number;
  c_road: number;
  cities: CitiesModel[]
}

interface NewArrayValuesModel {
  cities: CitiesModel[];
  isVisited: boolean;
}

export const libAndRoads = ({
  n,
  c_lib,
  c_road,
  cities,
}: LibAndRoadsProps) => {

  if (c_lib <= c_road) return n * c_lib;
  const newArrayResult: any = getConnectedCities(cities);
  
  let libs = 0;
  let roads = 0;

  for (const values of newArrayResult.values()) {
    if (values.isVisited) continue;
    roads += roadsConntector(values, newArrayResult) - 1;
    libs++;
  }

  libs += n - newArrayResult.size;
  return c_lib * libs + c_road * roads;
};

const roadsConntector = (
  values: NewArrayValuesModel,
  newArray: any,
  roads = 0
) => {
  if (values.isVisited) return roads;
  values.isVisited = true;
  values.cities.forEach((c) => {
    roads += roadsConntector(newArray.get(c), newArray);
  });
  return roads + 1;
};

const getConnectedCities = (cities: CitiesModel[]) => {
  const newArray = new Map();

  cities.forEach((c) => {
    const [c1, c2] = c;
    if (newArray.has(c1)) newArray.get(c1).cities.push(c2);
    else newArray.set(c1, { cities: [c2], isVisited: false });
    if (newArray.has(c2)) newArray.get(c2).cities.push(c1);
    else newArray.set(c2, { cities: [c1], isVisited: false });
  });
  return newArray;
};
