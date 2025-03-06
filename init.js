const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        form: "Neha",  // Use "form" (not "from")
        to: "Priya",
        msg: "Send me your exam sheets",
        created_at: new Date()
    },
    {
        form: "Amit",
        to: "Rahul",
        msg: "Are you coming to the party tonight?",
        created_at: new Date()
    },
    {
        form: "Sita",
        to: "Gita",
        msg: "Did you complete the assignment?",
        created_at: new Date()
    },
    {
        form: "Raj",
        to: "Vikram",
        msg: "Let's meet at the cafe at 5 PM.",
        created_at: new Date()
    },
    {
        form: "Ananya",
        to: "Rohan",
        msg: "Can you share the notes from today's class?",
        created_at: new Date()
    },
    {
        form: "Pooja",
        to: "Aarav",
        msg: "Happy Birthday! Have a great year ahead.",
        created_at: new Date()
    },
    {
        form: "Kunal",
        to: "Meera",
        msg: "Don't forget about our project .",
        created_at: new Date()
    },
    {
        form: "Dev",
        to: "Kriti",
        msg: "Check out this new coding challenge!",
        created_at: new Date()
    },
    {
        form: "Tina",
        to: "Sahil",
        msg: "Let's plan for the weekend trip.",
        created_at: new Date()
    },
    {
        form: "Aryan",
        to: "Neha",
        msg: "Did you watch the new movie?",
        created_at: new Date()
    }
];

Chat.insertMany(allChats)
  .then(() => console.log("Chats inserted successfully"))
  .catch(err => console.log("Error:", err));


