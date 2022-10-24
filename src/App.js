import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Messages from "./components/Messages";

const animals = ["meerkat", "aardvark", "addax", "alligator", "alpaca", "anteater", "antelope", "aoudad", "ape", "argali", "armadillo", "baboon", "badger", "basilisk", "bat", "bear", "beaver", "bighorn", "bison", "boar", "budgerigar", "buffalo", "bull", "bunny", "burro", "camel", "canary", "capybara", "cat", "chameleon", "chamois", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "civet", "coati", "colt", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "doe", "dung beetle", "dog", "donkey", "dormouse", "dromedary", "duckbill platypus", "dugong", "eland", "elephant", "elk", "ermine", "ewe", "fawn", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gemsbok", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guanaco", "guinea pig", "hamster", "hare", "hartebeest", "hedgehog", "highland cow", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "jerboa", "kangaroo", "kitten", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lovebird", "lynx", "mandrill", "mare", "marmoset", "marten", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "musk deer", "musk-ox", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "okapi", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "peccary", "pig", "octopus", "thorny devil", "starfish", "blue crab", "snowy owl", "chicken", "rooster", "bumble bee", "eagle owl", "polar bear", "pony", "porcupine", "porpoise", "prairie dog", "pronghorn", "puma", "puppy", "quagga", "rabbit", "raccoon", "ram", "rat", "reindeer", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "springbok", "squirrel", "stallion", "steer", "tapir", "tiger", "toad", "turtle", "vicuna", "walrus", "warthog", "waterbuck", "weasel", "whale", "wildcat", "bald eagle", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra", "zebu"];
const items = ["apple", "bag", "balloon", "bananas", "bed", "beef", "blouse", "book", "bookmark", "boom box", "bottle", "bottle cap", "bow", "bowl", "box", "bracelet", "bread", "brocolli", "hair brush", "buckle", "button", "camera", "candle", "candy wrapper", "canvas", "car", "greeting card", "playing card", "carrots", "cat", "CD", "cell phone", "packing peanuts", "cinder block", "chair", "chalk", "newspaper", "soy sauce packet", "chapter book", "checkbook", "chocolate", "clay pot", "clock", "clothes", "computer", "conditioner", "cookie jar", "cork", "couch", "credit card", "cup", "deodorant ", "desk", "door", "drawer", "drill press", "eraser", "eye liner", "face wash", "fake flowers", "flag", "floor", "flowers", "food", "fork", "fridge", "glass", "glasses", "glow stick", "grid paper", "hair tie", "hanger", "helmet", "house", "ipod", "charger", "key chain", "keyboard", "keys", "knife", "lace", "lamp", "lamp shade", "leg warmers", "lip gloss", "lotion", "milk", "mirror", "model car", "money", "monitor", "mop", "mouse pad", "mp3 player", "nail clippers", "nail file", "needle", "outlet", "paint brush", "pants", "paper", "pen", "pencil", "perfume", "phone", "photo album", "picture frame", "pillow", "plastic fork", "plate", "pool stick", "soda can", "puddle", "purse", "blanket", "radio", "remote", "ring", "rubber band", "rubber duck", "rug", "rusty nail", "sailboat", "sand paper", "sandal", "scotch tape", "screw", "seat belt", "shampoo", "sharpie", "shawl", "shirt", "shoe lace", "shoes", "shovel", "sidewalk", "sketch pad", "slipper", "soap", "socks", "sofa", "speakers", "sponge", "spoon", "spring", "sticky note", "stockings", "stop sign", "street lights", "sun glasses", "table", "teddies", "television", "thermometer", "thread", "tire swing", "tissue box", "toe ring", "toilet", "tomato", "tooth picks", "toothbrush", "toothpaste", "towel", "tree", "truck", "tv", "twezzers", "twister", "vase", "video games", "wallet", "washing machine", "watch", "water bottle", "doll", "magnet", "wagon", "headphones", "clamp", "USB drive", "air freshener", "piano", "ice cube tray", "white out", "window", "controller", "coasters", "thermostat", "zipper"];
const firstName = animals[Math.floor(Math.random() * (animals.length - 1))];
const lastName = items[Math.floor(Math.random() * (animals.length - 1))];

function randomName() {
  return (
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1)
  );
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    messages: [
      {
        member: {
          clientData: {
            color: "#adade2",
            username: "Help",
          },
          id: "ztO0HR6V89",
        },
        text: "Start conversation by typing message in the field below and then press Enter or click Send.",
      },
    ],
    //ovo je oblik kako izgleda koji Scaladrone šalje i prima. 
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("ySrn6lZfkjkdcEMk", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="header_items">Webchat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
        <br></br>
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}

export default App;
