// import .env file
require("dotenv").config();

// initialize the Notion client
const { Client } = require("@notionhq/client");

// use our NOTION_API_KEY from .env
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// use our DATABASE_ID from .env
const databaseId = process.env.DATABASE_ID;

// async function to handle page creation
async function newEntry(name) {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: {
      [process.env.NAME_ID]: {
        title: [
          {
            type: 'text',
            text: {
              content: name,
            }
          }
        ]
      }
    }
  })

  console.log(response)
}

newEntry("foo")