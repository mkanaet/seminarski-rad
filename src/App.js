import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Messages from "./components/Messages";
import RandomName from "./components/RandomName";

function App() {
  const [messages, setMessages] = useState([]);
  const [randomName, setRandomName] = useState("");
  const [randomColor, setRandomColor] = useState("#7fffd4");

  useEffect(() => {
    const animals = [
      "meerkat",
      "aardvark",
      "addax",
      "alligator",
      "alpaca",
      "anteater",
      "antelope",
      "aoudad",
      "ape",
      "argali",
      "armadillo",
      "baboon",
      "badger",
      "basilisk",
      "bat",
      "bear",
      "beaver",
      "bighorn",
      "bison",
      "boar",
      "budgerigar",
      "buffalo",
      "bull",
      "bunny",
      "burro",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "chamois",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "civet",
      "coati",
      "colt",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "doe",
      "dung beetle",
      "dog",
      "donkey",
      "dormouse",
      "dromedary",
      "duckbill platypus",
      "dugong",
      "eland",
      "elephant",
      "elk",
      "ermine",
      "ewe",
      "fawn",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gemsbok",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guanaco",
      "guinea pig",
      "hamster",
      "hare",
      "hartebeest",
      "hedgehog",
      "highland cow",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "jerboa",
      "kangaroo",
      "kitten",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lovebird",
      "lynx",
      "mandrill",
      "mare",
      "marmoset",
      "marten",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "musk deer",
      "musk-ox",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "okapi",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "peccary",
      "pig",
      "octopus",
      "thorny devil",
      "starfish",
      "blue crab",
      "snowy owl",
      "chicken",
      "rooster",
      "bumble bee",
      "eagle owl",
      "polar bear",
      "pony",
      "porcupine",
      "porpoise",
      "prairie dog",
      "pronghorn",
      "puma",
      "puppy",
      "quagga",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "springbok",
      "squirrel",
      "stallion",
      "steer",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "vicuna",
      "walrus",
      "warthog",
      "waterbuck",
      "weasel",
      "whale",
      "wildcat",
      "bald eagle",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra",
      "zebu",
    ];
    const items = [
      "apple",
      "bag",
      "balloon",
      "bananas",
      "bed",
      "beef",
      "blouse",
      "book",
      "bookmark",
      "boom box",
      "bottle",
      "bottle cap",
      "bow",
      "bowl",
      "box",
      "bracelet",
      "bread",
      "brocolli",
      "hair brush",
      "buckle",
      "button",
      "camera",
      "candle",
      "candy wrapper",
      "canvas",
      "car",
      "greeting card",
      "playing card",
      "carrots",
      "cat",
      "CD",
      "cell phone",
      "packing peanuts",
      "cinder block",
      "chair",
      "chalk",
      "newspaper",
      "soy sauce packet",
      "chapter book",
      "checkbook",
      "chocolate",
      "clay pot",
      "clock",
      "clothes",
      "computer",
      "conditioner",
      "cookie jar",
      "cork",
      "couch",
      "credit card",
      "cup",
      "deodorant ",
      "desk",
      "door",
      "drawer",
      "drill press",
      "eraser",
      "eye liner",
      "face wash",
      "fake flowers",
      "flag",
      "floor",
      "flowers",
      "food",
      "fork",
      "fridge",
      "glass",
      "glasses",
      "glow stick",
      "grid paper",
      "hair tie",
      "hanger",
      "helmet",
      "house",
      "ipod",
      "charger",
      "key chain",
      "keyboard",
      "keys",
      "knife",
      "lace",
      "lamp",
      "lamp shade",
      "leg warmers",
      "lip gloss",
      "lotion",
      "milk",
      "mirror",
      "model car",
      "money",
      "monitor",
      "mop",
      "mouse pad",
      "mp3 player",
      "nail clippers",
      "nail file",
      "needle",
      "outlet",
      "paint brush",
      "pants",
      "paper",
      "pen",
      "pencil",
      "perfume",
      "phone",
      "photo album",
      "picture frame",
      "pillow",
      "plastic fork",
      "plate",
      "pool stick",
      "soda can",
      "puddle",
      "purse",
      "blanket",
      "radio",
      "remote",
      "ring",
      "rubber band",
      "rubber duck",
      "rug",
      "rusty nail",
      "sailboat",
      "sand paper",
      "sandal",
      "scotch tape",
      "screw",
      "seat belt",
      "shampoo",
      "sharpie",
      "shawl",
      "shirt",
      "shoe lace",
      "shoes",
      "shovel",
      "sidewalk",
      "sketch pad",
      "slipper",
      "soap",
      "socks",
      "sofa",
      "speakers",
      "sponge",
      "spoon",
      "spring",
      "sticky note",
      "stockings",
      "stop sign",
      "street lights",
      "sun glasses",
      "table",
      "teddies",
      "television",
      "thermometer",
      "thread",
      "tire swing",
      "tissue box",
      "toe ring",
      "toilet",
      "tomato",
      "tooth picks",
      "toothbrush",
      "toothpaste",
      "towel",
      "tree",
      "truck",
      "tv",
      "twezzers",
      "twister",
      "vase",
      "video games",
      "wallet",
      "washing machine",
      "watch",
      "water bottle",
      "doll",
      "magnet",
      "wagon",
      "headphones",
      "clamp",
      "USB drive",
      "air freshener",
      "piano",
      "ice cube tray",
      "white out",
      "window",
      "controller",
      "coasters",
      "thermostat",
      "zipper",
    ];
    const firstName = animals[Math.floor(Math.random() * (animals.length - 1))];
    const lastName = items[Math.floor(Math.random() * (animals.length - 1))];
    return () => {
      setRandomName(firstName + " " + lastName);
      setRandomColor("#" + Math.floor(Math.random() * 0xffffff).toString(16));
    };
  }, [setRandomName, setRandomColor]);
  // console.log(randomColor);

  const [state, setState] = useState({
    messages: [],
    member: {
      username: randomName,
      color: randomColor,
    },
  });
  useEffect(() => {
    const drone = new window.Scaledrone("ySrn6lZfkjkdcEMk", {
      data: state.member,
    });
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Successfully connected to Scaledrone");
      const member = { ...state.member };
      member.id = drone.clientId;
      setState({ member });
    });
    const room = drone.subscribe("chat-room");
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Successfully joined room");
    });
    room.on("data", (data, member) => {
      const messages = state.messages;
      messages.push({ member, text: data });
      setState({ messages });
    });
  }, []);

  function getEnteredText(message) {
    setMessages((messages) => {
      return [message, ...messages];
    });
    //drone.publish({
    //  room: "chat-room",
    //  message: "text",
    //});
  } //dohvaća uneseni tekst iz Inputa

  return (
    <div className="App">
      <Messages
        text={messages}
        name={randomName}
        color={randomColor}
      ></Messages>
      <Input textInput={getEnteredText}></Input>
    </div>
  );
}

export default App;
