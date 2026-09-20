import { test, expect } from "@playwright/test";


const FRONTEND_URL = 
  process.env.FRONTEND_URL || "http://localhost:5173";
  
test.describe("React Connection", () => {

  test("should load React connection page", async ({ page }) => {
    const response = await page.goto(FRONTEND_URL);

    expect(response?.status()).toBe(200);
  });

  test("should display React Connection heading", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.getByRole("heading", { name: "React Connection" })
    ).toBeVisible();
  });

  test("should display successful connection message", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.getByText("React connection created successfully...")
    ).toBeVisible();
  });

  test("should display Environment", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.locator("ul li").nth(0)
    ).toContainText("Environment:");
  });

  test("should display Machine", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.locator("ul li").nth(1)
    ).toContainText("Machine:");
  });

  test("should display PORT", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.locator("ul li").nth(2)
    ).toContainText("PORT:");
  });

  test("should display App", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.locator("ul li").nth(3)
    ).toContainText("App:");
  });

  test("should have four environment details", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    const listItems = page.locator("ul li");

    await expect(listItems).toHaveCount(4);
  });

});