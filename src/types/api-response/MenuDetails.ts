export type ModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
};

export type ItemModifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
};

export type SectionItem = {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  images?: { id: number; image: string }[];
  available: boolean;
  modifiers?: ItemModifier[];
};

export type MenuSection = {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible?: number;
  images?: { id: number; image: string }[];
  items: SectionItem[];
};

export type MenuDetails = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: MenuSection[];
};
