import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { useHistory } from "react-router-dom";
import {useStateValue} from '../../StateProvider';
import {reducer} from '../../reducer';
import { useStripe } from "@stripe/react-stripe-js";

function ChatbotComponent() {
const [opened,setOpened]= useState(false);

const toggleFloating = (opened) => {
   setOpened( ); 
  }

const [{ productId }, dispatch] = useStateValue();

  const history = useHistory();
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Arial",
    headerBgColor: "#2196f3",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#2196f3",
    botFontColor: "#fff",
    userBubbleColor: "#F2CEA5",
    userFontColor: "#fff",
  };



  const steps = [
    {
        id: "1",
        message: "Hi, how would you like me to call you?",
        trigger: "100",
      },
      {
        id: "100",
        user:true,
        trigger: "101",
      },
    {
      id: "101",
      message: "Hi {previousValue}, how can i help you?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        {
          value: 1,
          label: "I want to talk with Godo support agent",
          trigger: "10",
        },
        {
          value: 2,
          label: "Suggest me some Godo products",
          trigger: "19",
        },
      ],
    },
    {
      id: "10",
      message: "Okay. Just a second. The Godo support agent will connect in the chat in a few moments",
      trigger: "11",
    },
    {
      id: "11",
      message: "Hello, support agent David here. Do you need help with some of this options?",
      trigger: "12",
    },
    {
      id: "12",
      options: [
        {
          value: 1,
          label: "Where can I see my orders?",
          trigger: () => {
            history.push("/orders");
            return "13";
          },
        },
        {
          value: 2,
          label: "Where can I change my profile informations?",
          trigger: () => {
            history.push("/profile");
            return "13";
          },
        },
      ],
    },
    {
      id: "13",
      message: "Did I helped you?",
      trigger: "14",
    },
    {
      id: "14",
      options: [
        {
          value: 1,
          label: "Yes",
          trigger: "15",
        },
        { value: 2, label: "No", trigger: "16" },
      ],
    },
    {
      id: "15",
      message: "It's been a pleasure. Have a nice day!",
      trigger: "17",
    },
    {
      id: "16",
      message: "Okay! Let's go again!",
      trigger: "12",
    },
    {
      id: "17",
      options: [
        {
          value: 1,
          label: "Start chat again!",
          trigger: "1",
        },
      ],
    },
    {
        id: "19",
        message: "What are you looking for?",
        trigger: "20",
      },
    {
        id: "20",
        options: [
          {
            value: 1,
            label: "Laptops",
            trigger: "21",
          },
          {
            value: 2,
            label: "Phones",
            trigger: "22",
          },
          {
            value: 3,
            label: "Computer Acessories",
            trigger: "23",
          },
          {
            value: 4,
            label: "TVs",
            trigger: "24",
          },
          {
            value: 5,
            label: "Tablets",
            trigger: "25",
          },
        ],
      },
      {
        id: "21",
        options: [
          {
            value: 1,
            label: "Acer Portable Laptop 15''6'",
            trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "001"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 2,
            label: "HP Pavilion 17''6'",
            trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "002"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 3,
            label: "Asus Strix Laptop",
            trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "003"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 4,
            label: "Toshiba Grand",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "004"
                })
                history.push("/productDetails")
                return "26";
            },
          },
        ],
      },
      {
        id: "22",
        options: [
          {
            value: 1,
            label: "IPhone 11",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "005"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 2,
            label: "Samsung S20",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "006"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 3,
            label: "Huawei 20 mate PRO",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "007"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 4,
            label: "Xiaomi Remi Note",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "008"
                })
                history.push("/productDetails")
                return "26";
            },
          },
        ],
      },
      {
        id: "23",
        options: [
          {
            value: 1,
            label: "Headphones",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "009"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 2,
            label: "Bluetooth Keyboard",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "010"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 3,
            label: "Mouse with Wire",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "011"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 4,
            label: "LCD Monitor",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "012"
                })
                history.push("/productDetails")
                return "26";
            },
          },
        ],
      },
      {
        id: "24",
        options: [
          {
            value: 1,
            label: "LG Smart TV",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "013"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 2,
            label: "Samsung LED TV",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "014"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 3,
            label: "Philips EDGE TV",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "015"
                })
                history.push("/productDetails")
                return "26";
            },
          },
        ],
      },
      {
        id: "25",
        options: [
          {
            value: 1,
            label: "Asus Tablet",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "016"
                })
                history.push("/productDetails")
                return "26";
            },
          },
          {
            value: 2,
            label: "IPad 7",
             trigger: ()=>{
                dispatch({
                    type:'CHANGE_PRODUCT_ID',
                    item: "017"
                })
                history.push("/productDetails")
                return "26";
            },
          }
        ],
      },
      {
        id: "26",
        message: "Was i helpful?",
        trigger: "27",
      },
      {
        id: "27",
        options: [
          {
            value: 1,
            label: "Search for products again",
            trigger:"19",
          },
          {
            value: 2,
            label: "I found what i was looking for",
            trigger:"15",
          }
        ],
      },
  ];

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps}
        floating={true}
        opened={false}
        headerTitle="Godo Chat"
       />;
      </ThemeProvider>
    </div>
  );
}

export default ChatbotComponent;
