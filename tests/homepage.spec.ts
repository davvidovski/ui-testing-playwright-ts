import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';  // Import the HomePage class to handle homepage interactions
import fs from 'fs';
import path from 'path';

// Group all Telerik homepage-related tests under this suite
test.describe('Telerik Homepage Tests', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let homePage: HomePage;

  // Set up a new browser, context, and page before each test
  test.beforeEach(async () => {
    browser = await chromium.launch();  // Launch browser
    context = await browser.newContext();  // Create a new browser context (isolated session)
    page = await context.newPage();  // Create a new page instance
    homePage = new HomePage(page);  // Initialize homepage interaction
  });

  // Tear down browser context, take screenshot on failure, and close browser after each test
  test.afterEach(async () => {
    if (test.info().status === 'failed') {
      const screenshotDir = './error-screenshots';  // Directory to save screenshots
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);  // Create directory if it doesn't exist
      }
      const testName = test.info().title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '');  // Clean up test name
      const timestamp = new Date().toISOString().replace(/:/g, "-");  // Timestamp for unique file names
      const screenshotPath = path.join(screenshotDir, `fail-${testName}-${timestamp}.png`);

      await page.screenshot({ path: screenshotPath });  // Capture screenshot on failure
      console.log(`Screenshot saved to ${screenshotPath}`);
    }
    await context.close();  // Close browser context
    await browser.close();  // Close browser
  });

  // Test cases for validating key aspects of the Telerik homepage
  // Load the homepage, validate title, and URL
  test('should load the home page and validate title and URL', async () => {
    await homePage.load();  // Load the homepage
    const currentUrl = await page.url();
    expect(currentUrl).toBe('https://www.telerik.com/');  // Assert correct URL
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Telerik & Kendo UI');  // Assert title contains expected text
  });

  // Test case to handle cookie consent acceptance
  test('should accept cookie consent', async () => {
    await homePage.load();
    await homePage.acceptCookieConsent();  // Handle cookie consent interaction
    // Optionally validate the absence of the cookie consent button to confirm acceptance
  });

  // Validate Telerik logo visibility
  test('should validate Telerik logo visibility', async () => {
    await homePage.load();
    await homePage.validateTelerikLogo();  // Ensure the Telerik logo is visible
  });

  // Visibility tests for key links on the homepage
  test('should validate demos link visibility', async () => {
    await homePage.load();
    await homePage.validateDemosLink();  // Ensure demos link is visible
  });

  test('should validate services link visibility', async () => {
    await homePage.load();
    await homePage.validateServicesLink();  // Ensure services link is visible
  });

  test('should validate blogs link visibility', async () => {
    await homePage.load();
    await homePage.validateBlogsLink();  // Ensure blogs link is visible
  });

  test('should validate docs and support link visibility', async () => {
    await homePage.load();
    await homePage.validateDocsAndSupportLink();  // Ensure docs and support link is visible
  });

  test('should validate pricing link visibility', async () => {
    await homePage.load();
    await homePage.validatePricingLink();  // Ensure pricing link is visible
  });

  // Additional tests for other important links
  test('should validate search input visibility', async () => {
    await homePage.load();
    await homePage.validateSearchInput();  // Ensure search input is visible
  });

  test('should validate shopping cart link visibility', async () => {
    await homePage.load();
    await homePage.validateShoppingCartLink();  // Ensure shopping cart link is visible
  });

  test('should validate login link visibility', async () => {
    await homePage.load();
    await homePage.validateLoginLink();  // Ensure login link is visible
  });

  test('should validate contact us link visibility', async () => {
    await homePage.load();
    await homePage.validateContactUsLink();  // Ensure contact us link is visible
  });

  test('should validate free trial link visibility', async () => {
    await homePage.load();
    await homePage.validateFreeTrialLink();  // Ensure free trial link is visible
  });

  // Test cases for redirection and navigation
  test('should validate Telerik logo redirection', async () => {
    await homePage.load();
    await homePage.validateTelerikLogoRedirection();  // Ensure the logo redirects to the homepage
  });

  test('should validate free trial link navigation', async () => {
    await homePage.load();
    await homePage.validateFreeTrialLinkNavigation();  // Validate Free Trial link functionality
  });

  // Responsive design and other validation tests
  test('should validate responsive design', async () => {
    await homePage.load();
    await homePage.validateResponsiveDesign();  // Ensure website is responsive across different viewports
  });

  test('should validate navigation links', async () => {
    await homePage.load();
    await homePage.validateNavigationLinks();  // Ensure navigation links work as expected
  });

  test('should validate footer links', async () => {
    await homePage.load();
    await homePage.validateFooterLinks();  // Validate footer navigation links
  });

  // Validate cookie consent button disappearance
  test('should validate cookie consent button disappearance', async () => {
    await homePage.load();
    await homePage.validateCookieConsentButtonDisappears();  // Ensure the consent button disappears after acceptance
  });

  // Test case to validate page load time
  test('should validate page load time', async () => {
    await homePage.validatePageLoadTime();  // Check page load time against expectations
  });

  // Test case to validate SEO meta tags
  test('should validate SEO meta tags', async () => {
    await homePage.load();
    await homePage.validateSeoMetaTags();  // Verify presence of important SEO meta tags
  });
});
