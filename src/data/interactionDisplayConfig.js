export const interactionDisplayConfig = {
  whiteChickenClicks: {
    label: "White Chicken Interactions",
    formatMessage: (count) => `You have poked the white chicken ${count} times!`,
    image: "sprites/chicken.png"
  },
  brownChickenClicks: {
    label: "Brown Chicken Interactions",
    formatMessage: (count) => `You have poked the brown chicken ${count} times!`,
    image: "sprites/rooster.png"
  },
  cupsPickedup: {
    label: "Cup Interactions",
    formatMessage: (count) => `You have picked up ${count} cups!`,
    image: "cup.png"
  },
  doorClicks: {
    label: "Door Interactions",
    formatMessage: (count) => `You have opened the door ${count} times!`,
    image: "dooropen.png"
  },
  chairsPushed: {
    label: "Chairs Pushed",
    formatMessage: (count) => `You have pushed in ${count} chairs!`,
    image: "sprites/chair.png"
  }
};
