import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import axios from "axios";

const PRODUCT_SELECTORS = {
  coupang: [
    "span.total-price > strong",
    "#contents > div.prod-buy > div.prod-price > span.total-price > strong",
    ".prod-price .total-price strong",
  ],
  eleven: [
    "div.price_wrap > span.price > strong",
    ".price_wrap .price strong",
    "span.value",
  ],
  naver: [
    "span._price_reload > em",
    "._price_reload em",
    ".lowestPrice_price__2Vx_q",
  ],
};

async function scrapePrice(url: string, marketplace: string): Promise<number> {
  try {
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
      "Cache-Control": "no-cache",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
    };

    console.log(`Scraping price from ${url} for ${marketplace}`);
    const response = await axios.get(url, {
      headers,
      timeout: 10000,
      maxRedirects: 5,
    });

    const $ = cheerio.load(response.data);
    const selectors =
      PRODUCT_SELECTORS[marketplace as keyof typeof PRODUCT_SELECTORS];

    let price: number | null = null;
    for (const selector of selectors) {
      const element = $(selector);
      if (element.length > 0) {
        const priceText = element.text().replace(/[^0-9]/g, "");
        if (priceText) {
          price = parseInt(priceText, 10);
          console.log(`Found price: ${price} using selector: ${selector}`);
          break;
        }
      }
    }

    if (!price) {
      throw new Error(`Price not found for ${marketplace} at ${url}`);
    }

    return price;
  } catch (error) {
    console.error(`Error scraping price from ${marketplace}:`, error);
    throw error;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const marketplace = searchParams.get("marketplace");

    if (!url || !marketplace) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    if (!PRODUCT_SELECTORS[marketplace as keyof typeof PRODUCT_SELECTORS]) {
      return NextResponse.json(
        { error: "Invalid marketplace" },
        { status: 400 }
      );
    }

    const price = await scrapePrice(url, marketplace);
    return NextResponse.json({ price });
  } catch (error) {
    console.error("Price scraping failed:", error);
    return NextResponse.json(
      { error: "Failed to scrape price" },
      { status: 500 }
    );
  }
}
