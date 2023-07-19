// Import stylesheets
import { showReviewTotal, populateUser } from './utils'
import './style.css';


let isOpen: boolean

const reviews: {
    name: string,
    stars: number,
    loyaltyUser: boolean;
    date: string
} [] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]






//Typscript Object type and array type object (stayedat)
const you: {
  firstName: string,
  lastName: string,
  isReturning: boolean,
  age: number,
  stayedAt:string[] // or [string,string,string] to specify type for each array value or stayedAt: (string | number)[] to accept both strings and numbers

} = {
   firstName: 'Bobby',
   lastName: "two",
   isReturning: true,
   age: 26,
   stayedAt: ["florida-home", "oman-flat", "tokyo-flat"]
  
}

//properties


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)
