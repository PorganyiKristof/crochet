import hog from "@public/assets/main_img/hedgehog.jpg";
import hog_slider1 from "@public/assets/slider_img/hedgehog1.jpg";
import hog_slider2 from "@public/assets/slider_img/hedgehog2.jpg";
import hog_slider3 from "@public/assets/slider_img/hedgehog3.jpg";
import hog_slider4 from "@public/assets/slider_img/hedgehog4.jpg";
import hog_slider5 from "@public/assets/slider_img/hedgehog5.jpg";

import mu from "@public/assets/main_img/mu.jpg";
import mu_slider1 from "@public/assets/slider_img/mu1.jpg";
import mu_slider2 from "@public/assets/slider_img/mu2.jpg";

const data = {
  crochets: [
    {
      id: "1",
      name: "Leattle Bee",
      text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis exercitationem eaque quas ipsam laudantium accusamus quasi, ex excepturi nisi, quos molestias tenetur eligendi, nulla minima?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quam dolorum adipisci suscipit inventore asperiores labore laborum libero praesentium eius doloremque dignissimos debitis eveniet voluptatem illo non quaerat earum totam optio, quasi nam placeat explicabo, quia fugiat. Commodi repudiandae debitis voluptates laboriosam illum! Doloremque, magni saepe.",
      ],
      price: "5000$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "2 weeks",
      img: {
        main: hog,
        slider: [
          hog_slider1,
          hog_slider2,
          hog_slider3,
          hog_slider4,
          hog_slider5,
        ],
      },
    },
    {
      id: "2",
      name: "Mu",
      text: ["Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: mu,
        slider: [mu_slider1, mu_slider2],
      },
    },
    {
      id: "3",
      name: "Hedgehog",
      text: ["Very nice", "Very nice Very nice Very nice Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "cyan" },
        { title: "Not the Main Color", color: "violet" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
    {
      id: "4",
      name: "Hadgehog",
      text: ["Very nice", "Very nice Very nice Very nice Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
    {
      id: "5",
      name: "MUU",
      text: ["text", "good"],
      price: "500$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
    {
      id: "6",
      name: "Hadgehog",
      text: ["Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
    {
      id: "7",
      name: "Hadgehog",
      text: ["Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
    {
      id: "8",
      name: "Hadgehog",
      text: ["Very nice"],
      price: "200$",
      size: "150x120",
      colors: [
        { title: "Main Color", color: "white" },
        { title: "Not the Main Color", color: "red" },
      ],
      timetomake: "1 month",
      img: {
        main: hog,
        slider: [hog_slider1, hog_slider2, hog_slider3],
      },
    },
  ],
};
export { data };
