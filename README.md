# Black-Girls-Code-P3

[Deployed Link](https://blackgirlscodep3.netlify.app/)

# Overview
Our goal is to bring to life the design layout of the Black Girls Code (BGC) website created by the GA UX team. Our SEI group will create a fully functional, redesigned frontend interface of the Home, About Us, and Events pages with an enhanced user experience and complementary elements. In addition, we will create two new pages which allow users to add and/or edit their review of BGC events. This information will be updated in real time on the Events page while being stored on backend servers. 

# Whimsical Diagram

[Link to Diagram](https://whimsical.com/MsVKJDv1g2dHBPELTRqXay)

# Team expectations

[Link to Google Doc](https://docs.google.com/document/d/1LkQzTVNNa0z429dkOtN4aGk9bbcmO6NvVNjhyjP6p9c/edit?ts=5f3e78af)

# MongoDB Schema

For CRUD functionality in Donation info screen/"Where your money goes" component

```
const Event = new Schema(
  {
    imgURL: { type: String, required: true },
    title: { type: String, required: true },
    funds: { type: Integer, required: true },
    content: { type: String, required: true },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    age: { type: Integer, required: true }
  },
  { timestamps: true }
)

```

# MVP

BGC Screens:
- Home (with image carousel)
- About Us
- Donation info (Full CRUD functionality will be implemented in "Where Your Money Goes" component)

# PMVP

BGC Screens:
- Mobile Layout with CSS
- Donation screen
- Limited CRUD functionality in Donor Wall component
