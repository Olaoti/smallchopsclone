import standard from "../Assets/specialimages/standard.jpg";
import deluxe from "../Assets/specialimages/deluxe.jpg";
import treatbox from "../Assets/packagesimg/treatbox.png";
import withlove from "../Assets/packagesimg/withlove.png";
import withlovesm from "../Assets/packagesimg/withlovesm.png";
import contentbox from "../Assets/packagesimg/contentbox.png";
import rolls from "../Assets/packagesimg/rolls.png";

const Packageslist = [
  {
    id: 1,
    pname: "standard treatbox",
    treatimg: standard,
    pimg: treatbox,
    price: 5500,
    puff: 15,
    beef: 4,
    bbq: 4,
    gizzard: 4,
    mosa: 10,
    springrolls: 4,
  },
  {
    id: 2,
    pname: "deluxe treatbox",
    treatimg: deluxe,
    pimg: treatbox,
    price: 8000,
    puff: 15,
    beef: 6,
    corndogs: 4,
    fish: 2,
    stickmeat: 4,
    gizzard: 4,
    mosa: 10,
    springrolls: 6,
  },
  {
    id: 3,
    pname: "deluxe seafood platter",
    pimg: withlove,
    price: 10000,
    puff: 20,
    croaker: 1,
    prawn: 2,
    corn: 3,
  },
  {
    id: 4,
    pname: "standard tray",
    pimg: contentbox,
    price: 10000,
    puff: 30,
    beef: 10,
    chickencut: 10,
    mosa: 20,
    springrolls: 10,
  },
  {
    id: 5,
    pname: "midi tray",
    pimg: contentbox,
    price: 12500,
    puff: 30,
    beef: 12,
    stickmeat: 4,
    gizzard: 6,
    mosa: 20,
    chickencut: 12,
    springrolls: 12,
  },
  {
    id: 6,
    pname: "deluxe tray",
    pimg: contentbox,
    price: 15000,
    puff: 30,
    chickencut: 12,
    beef: 12,
    corndogs: 6,
    gizzard: 10,
    mosa: 20,
    springrolls: 12,
    sausage: 6,
  },
  {
    id: 7,
    pname: "spring roll mini pack",
    pimg: withlovesm,
    price: 500,
    springrolls: 1,
    puff: 4,
    stickmeat: 1,
  },
  {
    id: 8,
    pname: "samosa mini pack",
    pimg: withlovesm,
    price: 500,
    beef: 1,
    puff: 4,
    stickmeat: 1,
  },
  {
    id: 9,
    pname: "everybody pack",
    pimg: withlovesm,
    price: 950,
    beef: 1,
    puff: 4,
    springrolls: 1,
    mosa: 3,
    chickencut: 1,
  },
  {
    id: 10,
    pname: "Treat pack",
    pimg: withlovesm,
    price: 1500,
    beef: 1,
    puff: 5,
    springrolls: 2,
    mosa: 3,
    corndogs: 1,
    stickmeat: 1,
    chickencut: 1,
  },
  {
    id: 11,
    pname: "urgent 2k pack",
    pimg: withlovesm,
    price: 2000,
    puff: 5,
    chickencut: 1,
    beef: 1,
    corndogs: 1,
    gizzard: 1,
    mosa: 3,
    springrolls: 2,
    sausage: 1,
    stickmeat: 1,
  },
  {
    id: 12,
    pname: "Raw Vegetable Spring Rolls",
    pimg: rolls,
    price: 2250,
    springrolls: 12,
  },
  {
    id: 13,
    pname: "Raw beef samosas",
    pimg: rolls,
    price: 2250,
    beef: 12,
  },
  {
    id: 14,
    pname: "Turkey Wing and Fries",
    pimg: withlovesm,
    price: 3000,
    bbq: 1,
    fries: 1,
  },
  {
    id: 15,
    pname: "akanna pack",
    pimg: withlovesm,
    price: 3000,
    puff: 7,
    beef: 2,
    corndogs: 1,
    bbq: 1,
    stickmeat: 1,
    prawn: 1,
    mosa: 5,
    springrolls: 2,
  },
  {
    id: 16,
    pname: "Turkey Wing and Yam Fries",
    pimg: withlovesm,
    price: 3000,
    turkeybbq: 1,
    yamfries: 1,
  },
  {
    id: 17,
    pname: "Full Chicken Lap and Yam Fries",
    pimg: withlovesm,
    price: 3500,
    bbq: 1,
    fries: 1,
  },
  {
    id: 18,
    pname: "Standard Seafood Platter",
    pimg: withlove,
    price: 5000,
    puff: 10,
    batterfish: 2,
    corn: 2,
    prawn: 1,
  },
  {
    id: 19,
    pname: "midi treatbox",
    pimg: treatbox,
    price: 6500,
    puff: 15,
    beef: 4,
    corndogs: 4,
    bbq: 4,
    stickmeat: 4,
    gizzard: 2,
    mosa: 10,
    springrolls: 4,
  },
  {
    id: 20,
    pname: "Raw beef samosas",
    pimg: rolls,
    price: 5500,
    prawn: 12,
  },
];

console.log(Packageslist);

export default Packageslist;
