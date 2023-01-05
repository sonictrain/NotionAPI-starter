// import .env file
require("dotenv").config();

// initialize the Notion client
const { Client } = require("@notionhq/client");

// use our NOTION_API_KEY from .env
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// use our DATABASE_ID from .env
const databaseId = process.env.DATABASE_ID;

// async function which takes a database ID as an input and return all the entries
async function getDatabase(id) {
    const response = await notion.databases.retrieve({ database_id: id })
    console.log(response);
}

getDatabase(databaseId);