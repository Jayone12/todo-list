import { atom, DefaultValue } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

type TCallback<T> = (
  newValue: T,
  _: T | DefaultValue,
  isReset: boolean
) => void;

interface IEffect<T> {
  setSelf: (arg: T) => void;
  onSet: (callback: TCallback<T>) => void;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: IEffect<ITodo[]>) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const toDoState = atom<ITodo[]>({
  key: "toDoList",
  default: [],
  effects: [localStorageEffect("toDoList")],
});

export const categoryState = atom<string[]>({
  key: "category",
  default: [],
  effects: [localStorageEffect("category") as any],
});
