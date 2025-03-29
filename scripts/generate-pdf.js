import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the resume config file to get the PDF filename
const configPath = resolve(__dirname, "../src/config/resumeConfig.ts");
const configContent = readFileSync(configPath, "utf8");

// Extract PDF filename from config using regex
const pdfFilenameMatch = configContent.match(/pdfFilename:\s*['"]([^'"]+)['"]/);
const pdfFilename = pdfFilenameMatch ? pdfFilenameMatch[1] : "resume.pdf";

async function createPdf(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  const savePath = `./public/${pdfFilename}`;
  await page.pdf({
    path: savePath,
    scale: 0.888, // Adjust scale as much as you'd want depending on your resume size, and make it fit into A4
    printBackground: true,
  });
  await browser.close();
  console.log(`PDF generated successfully. Saved in: ${savePath}`);
}

const URL = "http://localhost:3000";
createPdf(URL);
