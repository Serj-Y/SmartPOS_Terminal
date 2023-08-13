import {
  ItemProductOptionsType,
  ItemProductType,
} from "../reducer/productReducer";

export const selectItems = (
  items: Array<ItemProductType>,
  category: string
) => {
  return items.filter((item) => item.category === category);
};

export const selectItemById = (items: Array<ItemProductType>, id: string) => {
  return items.find((item) => item.id === id);
};

export const selectCategoriesItem = (
  items: Array<ItemProductOptionsType>,
  category: string
) => {
  return items.filter((item) => item.category.includes(category));
};
