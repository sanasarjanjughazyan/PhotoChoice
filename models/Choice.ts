export type ChoiceItem = {
  index: number;
  imageUrl: string;
};

export type Choice = {
  id: string;
  items: ChoiceItem[];
};
