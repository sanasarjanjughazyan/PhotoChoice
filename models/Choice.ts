export type ChoiceItemWithIndex = {
  index: number;
  imageUrl: string;
};

export type ChoiceItem = Omit<ChoiceItemWithIndex, "index">;

export type Choice = {
  id: string;
  title: string;
  items: ChoiceItem[];
};

export type ChoiceWithoutId = Omit<Choice, "id">;
