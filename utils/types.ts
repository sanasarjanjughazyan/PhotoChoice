export type ImageData = {
  imageUrl: string;
  isValid: boolean;
};

export type Images = Omit<ImageData, "isValid">[];
