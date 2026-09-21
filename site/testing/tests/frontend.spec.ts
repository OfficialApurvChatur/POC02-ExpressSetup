import { test, expect } from "@playwright/test";
import { getEnv } from "../src/aConnection/EnvironmentConnection";


const FRONTEND_URL = getEnv.FRONTEND_URL
  
test.describe("React Connection", () => {

  test("should load React connection page", async ({ page }) => {
    const response = await page.goto(FRONTEND_URL);

    expect(response?.status()).toBe(200);
  });

  test("should display React Connection heading", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    await expect(
      page.getByText("React Connection", { exact: true })
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
    ).toContainText("App Name:");
  });

  test("should have four environment details", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    const listItems = page.locator("ul li");

    await expect(listItems).toHaveCount(4);
  });

});

test.describe("Shadcn Connection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(FRONTEND_URL);
  });

  test("should display Shadcn connection title", async ({ page }) => {
    await expect(
      page.getByText("Shadcn Connection", { exact: true })
    ).toBeVisible();
  });

  test("should display Shadcn connection description", async ({ page }) => {
    await expect(
      page.getByText(
        "Shadcn connection created successfully...",
        { exact: true }
      )
    ).toBeVisible();
  });

  test("should display Hello button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Hello..." })
    ).toBeVisible();
  });

  test("should display complete Shadcn connection", async ({ page }) => {
    const alert = page.getByRole("alert");

    await expect(alert).toBeVisible();

    await expect(alert).toContainText("Shadcn Connection");
    await expect(alert).toContainText(
      "Shadcn connection created successfully..."
    );

    await expect(
      alert.getByRole("button", { name: "Hello..." })
    ).toBeVisible();
  });
});
