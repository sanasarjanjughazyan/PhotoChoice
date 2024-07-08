import { ChoiceWithoutId, Choice } from "../models/Choice";

export let MY_CHOISES: Choice[] = [];

export const addChoice = async (choice: ChoiceWithoutId) => {
  // TODO: post choice, get the data
  const newChoice: Choice = {
    ...choice,
    id: new Date().toString() + Math.random(),
  };

  MY_CHOISES = [...MY_CHOISES, newChoice];
  console.log(MY_CHOISES);
};

export const getChoices = async () => {
  return MY_CHOISES;
};
