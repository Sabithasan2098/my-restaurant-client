export type TCard = {
  img: string;
  name: string;
  recipe: string;
  price: number;
};

export type TMenuData = {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
  isDeleted: boolean;
};
