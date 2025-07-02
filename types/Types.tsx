export type TCard = {
  _id?: string;
  img: string;
  name: string;
  recipe: string;
  price: number;
};

export type TMenuData = {
  _id?: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
  isDeleted: boolean;
};

export type TReview = {
  _id: string;
  name: string;
  details: string;
  rating: string;
  isDeleted: boolean;
};

export type TOurMenu = {
  _id?: string;
  image: unknown;
  heading: string;
  subHeading: string;
};
