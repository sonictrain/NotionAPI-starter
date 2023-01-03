// import .env file
require("dotenv").config();

// initialize the Notion client
const { Client } = require("@notionhq/client");

// use our NOTION_API_KEY from .env
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// use our DATABASE_ID from .env
const databaseId = process.env.DATABASE_ID;

const getDatabase = async () => {
    const response = await notion.databases.query({ database_id: databaseId });
  
    console.log(response);
};
  
getDatabase();