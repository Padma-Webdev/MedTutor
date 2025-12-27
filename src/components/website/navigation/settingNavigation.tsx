import { NavigationProp, NavigationState } from "@react-navigation/native";

const navigator: NavigationProp<NavigationState> | null = null;
const state: NavigationState | null = null;

export interface NavigationEventSubscription {
  remove: () => void;
}
const subscribers: ((state: NavigationState) => void)[] = [];

let sideNavigationShown = false;
export const isSideNavigationShown = () => sideNavigationShown;

export const setSideNavigationShown = (value: boolean) => {
  const subscribers: ((state: boolean) => void)[] = [];
  if (sideNavigationShown !== value) {
    sideNavigationShown = value;
    subscribers
      .slice()
      .forEach((subscriber) => subscriber(sideNavigationShown));
  }
};

export const subscribeToSideNavigationStateChanges = (
  subscriber: (value: NavigationState) => void
) => {
  if (subscribers.indexOf(subscriber) < 0) {
    subscribers.push(subscriber);
  }
};

subscribeToSideNavigationStateChanges(() => {
  setSideNavigationShown(false);
});
