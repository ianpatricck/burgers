type MenuDetailsItems = {
  id: number;
  name: string;
  description?: string;
  price: number;
  images?: Array<{ id: number; image: string }>;
};

export type MenuDetails = {
  name: string;
  image: string;
  isSelected: boolean;
  items: MenuDetailsItems[];
};
