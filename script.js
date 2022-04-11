"use strict";

//Task

let nameOfCompany = "Johns Group";
//1st way (async / await)

const getUser = async (nameOfCompany) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    console.log("data", data);
    const someUser = data.filter((item) => item.company.name === nameOfCompany);
    console.log(`User who works for the ${nameOfCompany}`, someUser);
  } catch (responseError) {
    console.error(error);
  }
};

getUser(nameOfCompany);

//2nd way (.then /.catch)

fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const someUser = data.filter((item) => item.company.name === nameOfCompany);
    console.log("data", data);
    console.log(`User who works for the ${nameOfCompany}`, someUser);
  })
  .catch((error) => console.error(error));
