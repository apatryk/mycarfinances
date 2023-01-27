import axios from "axios";

export type CarBrandType = {
    logo: string;
    name: string;
}

export type CarProfileValuesType = {
    carName: string;
    carBrand: string;
    carMileage: number;
}

export const getCarBrandList = async () => {
    const response = await axios.get<CarBrandType[]>('https://gist.githubusercontent.com/shcyiza/71c64a33f3880e58980003c4c794db38/raw/febb04707f6ccc9ae3a445e147c5754e30f743fe/car_brands.json');
    return response.data
}

export const addCarProfile = (values: CarProfileValuesType) => {
    axios
      .post("http://localhost:4000/car", {
        carName: values.carName,
        carBrand: values.carBrand,
        carMileage: values.carMileage,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };