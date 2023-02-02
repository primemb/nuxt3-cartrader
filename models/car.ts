export interface Car {
  id: number;
  year: number;
  name: string;
  price: number;
  city: string;
  make: string;
  image: string;
  numberOfSeats: number;
  miles: number;
  features: string[];
  description: string;
}

export interface IListing {
  id: number;
  name: string;
  make: string;
  model: string;
  price: string;
  year: number;
  city: string;
  image: string;
  seats: number;
  miles: string;
  features: string;
  description: string;
}
