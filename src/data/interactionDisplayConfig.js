export const interactionDisplayConfig = {
  doorClicks: {
    label: "Door Interactions",
    formatMessage: (count) => `You have opened the door ${count} times!` + (count >= 10?` Why?`:``),
    image: "dooropen.png"
  },
  whiteChickenClicks: {
    label: "White Chicken Interactions",
    formatMessage: (count) => `You have poked the white chicken ${count} times!` + (count >= 10?` It will have its revenge >:(`:``),
    image: "sprites/chicken.png"
  },
  brownChickenClicks: {
    label: "Brown Chicken Interactions",
    formatMessage: (count) => `You have poked the brown chicken ${count} times!` + (count >= 10?` It is sad now :'(`:``),
    image: "sprites/rooster.png"
  },
  cupsPickedup: {
    label: "Cup Interactions",
    formatMessage: (count) => `You have picked up ${count} cups!` + (count >= 5?` Thanks for helping!`:``),
    image: "cup.png"
  },
  chairsPushed: {
    label: "Chairs Pushed",
    formatMessage: (count) => `You have pushed in ${count} chairs!` + (count >= 6?` You sir are a good human.`:``),
    image: "sprites/chair.png"
  }
};
