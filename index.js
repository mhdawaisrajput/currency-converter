#!/usr/bin/env node
const currency = {
    KWD: 1,
    PKR: 904.01,
    USD: 3.26,
    EURO: 3,
    GBP: 2.58,
    INR: 271.36,
    DIRHAM: 11.94,
    RIYAL: 12.22,
    TAKA: 357.05,
    YUAN: 23.56,
};
import inquirer from "inquirer";
let user_result = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: [
            "KWD",
            "PKR",
            "USD",
            "EURO",
            "GBP",
            "INR",
            "DIRHAM",
            "RIYAL",
            "TAKA",
            "YUAN",
        ],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: [
            "KWD",
            "PKR",
            "USD",
            "EURO",
            "GBP",
            "INR",
            "DIRHAM",
            "RIYAL",
            "TAKA",
            "YUAN",
        ],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
//Dynamic Approach:
let from_currency = currency[user_result.from]; // exchange rate
let to_currency = currency[user_result.to]; // exchange rate
let amount = user_result.amount;
let base_currency = amount / from_currency; // USD base currency
let convert_currency = base_currency * to_currency; // converted rate
console.log(convert_currency);
