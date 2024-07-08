import { Choice } from "../models/Choice";

export const DUMMY_CHOICES: Choice[] = [
  {
    id: "0",
    title: "Boots",
    items: [
      {
        imageUrl:
          "https://ae01.alicdn.com/kf/S532d9894112f4989a7909c914e30118f5.jpg_640x640Q90.jpg_.webp",
      },
      {
        imageUrl:
          "https://pics.craiyon.com/2023-07-18/19ef5828a2504f81a55bdc39240e94ca.webp",
      },
    ],
  },
  {
    id: "1",
    title: "Presidents",
    items: [
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg",
      },
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg",
      },
    ],
  },
];

let choices = DUMMY_CHOICES;
let currentIndex = 0;

export const getChoice = async () => {
  await fetchChoices();
  return choices[currentIndex++];
};

const fetchChoices = async () => {
  if (currentIndex >= choices.length) {
    choices = DUMMY_CHOICES;
    currentIndex = 0;
  }
};
