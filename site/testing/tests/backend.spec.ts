import { test, expect } from "@playwright/test";
import mongoose from "mongoose";


const BACKEND_URL =
  process.env.BACKEND_URL || "http://localhost:8000";
const MONGODB_URL = 
  process.env.MONGODB_URL || "mongodb+srv://ApurvChatur:ApurvChatur@cluster0.ohu59.mongodb.net/";
const APP_NAME =
  process.env.APP_NAME || "POC-02:ExpressConnection";

test.describe("Node Connection", () => {

  test("should load the backend page", async ({ page }) => {
    const response = await page.goto(BACKEND_URL);

    expect(response?.status()).toBe(200);
  });

  test("should have Backend title", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(page).toHaveTitle("Backend");
  });

  test("should have Node Connection heading", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.getByRole("heading", { name: "Node Connection" })
    ).toBeVisible();
  });

  test("should show successful connection message", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.getByText("Node connection created successfully...")
    ).toBeVisible();
  });

  test("should have environment list", async ({ page }) => {
    await page.goto(BACKEND_URL);

    const listItems = page.locator("ul li");

    await expect(listItems).toHaveCount(4);
  });

  test("should display Environment", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.locator("ul li").nth(0)
    ).toContainText("Environment:");
  });

  test("should display Machine", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.locator("ul li").nth(1)
    ).toContainText("Machine:");
  });

  test("should display PORT", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.locator("ul li").nth(2)
    ).toContainText("PORT:");
  });

  test("should display App", async ({ page }) => {
    await page.goto(BACKEND_URL);

    await expect(
      page.locator("ul li").nth(3)
    ).toContainText("App:");
  });

  test("should have backend favicon", async ({ request }) => {
    const response = await request.get(
      `${BACKEND_URL}/backend.png`
    );

    expect(response.status()).toBe(200);

    expect(
      response.headers()["content-type"]
    ).toContain("image/png");
  });

});

test.describe("Express Connection", () => {

  test("should return 200 status", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    expect(response.status()).toBe(200);
  });

  test("should return success as true", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    const body = await response.json();

    expect(body.success).toBe(true);
  });

  test("should return status as ok", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    const body = await response.json();

    expect(body.status).toBe("ok");
  });

  test("should return correct message", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    const body = await response.json();

    expect(body.message).toBe(
      "Node + Express server is healthy"
    );
  });

  test("should return JSON content type", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    expect(response.headers()["content-type"])
      .toContain("application/json");
  });

  test("should return complete health response", async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/health`);

    expect(await response.json()).toEqual({
      success: true,
      status: "ok",
      message: "Node + Express server is healthy"
    });
  });

});

test.describe("MongoDB Connection", () => {

  test("should create MongoDB connection", async () => {

    await mongoose.connect(MONGODB_URL, {
      dbName: APP_NAME
    });

    expect(mongoose.connection.readyState).toBe(1);

    await mongoose.disconnect();

  });

  test("should have database name", async () => {

    await mongoose.connect(MONGODB_URL, {
      dbName: APP_NAME
    });

    expect(mongoose.connection.name).toBe(APP_NAME);

    await mongoose.disconnect();

  });

});
