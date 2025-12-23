import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";

dotenv.config(); // 🔴 THIS WAS MISSING

const API = process.env.LARAVEL_API;

if (!API) {
  console.error("LARAVEL_API is not defined in .env");
  process.exit(1);
}

async function run() {
  // 1. Fetch latest article
  const res = await axios.get(API);
  const article = res.data[0];

  if (!article) {
    console.error("No articles found in database");
    return;
  }

  // 2. External reference articles (EXACTLY 2)
  const referenceUrls = [
    "https://www.intercom.com/blog/ai-chatbots/",
    "https://www.salesforce.com/blog/what-is-an-ai-chatbot/"
  ];

  // 3. Scrape reference content
  let combinedText = "";
  for (const url of referenceUrls) {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
    combinedText += $("p").text();
  }

  // 4. Simulated LLM rewrite
  const updatedContent = `
${article.content}

--- Updated Version ---

${combinedText.slice(0, 1500)}

References:
${referenceUrls.join("\n")}
`;

  // 5. Publish updated article
  await axios.post(API, {
    title: article.title + " (Updated)",
    content: updatedContent,
    source_url: article.source_url,
    is_updated: true
  });

  console.log("Updated article published successfully.");
}

run().catch(err => {
  console.error("Script failed:", err.message);
});
