import { Page, Locator, expect } from '@playwright/test';
import * as locators from '../locators/homepageLocators.json';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to the Telerik homepage
    async load(): Promise<void> {
        await this.page.goto('https://www.telerik.com/');
    }

    // Accept the cookie consent by clicking the button
    async acceptCookieConsent(): Promise<void> {
        const cookieConsentButton: Locator = this.page.locator(locators.agreeAndContinueButton);
        await cookieConsentButton.click();
    }

    // Validate the visibility of the Telerik logo
    async validateTelerikLogo(): Promise<void> {
        const logo: Locator = this.page.locator(locators.telerikLogo);
        await expect(logo).toBeVisible();
    }

    // Validate the visibility of the "Demos" link
    async validateDemosLink(): Promise<void> {
        const demosLink: Locator = this.page.locator(locators.demosLink);
        await expect(demosLink).toBeVisible();
    }

    // Validate the visibility of the "Services" link
    async validateServicesLink(): Promise<void> {
        const servicesLink: Locator = this.page.locator(locators.servicesLink);
        await expect(servicesLink).toBeVisible();
    }

    // Validate the visibility of the "Blogs" link
    async validateBlogsLink(): Promise<void> {
        const blogsLink: Locator = this.page.locator(locators.blogsLink);
        await expect(blogsLink).toBeVisible();
    }

    // Validate the visibility of the "Docs and Support" link
    async validateDocsAndSupportLink(): Promise<void> {
        const docsAndSupportLink: Locator = this.page.locator(locators.docsAndSupportLink);
        await expect(docsAndSupportLink).toBeVisible();
    }

    // Validate the visibility of the search input field
    async validateSearchInput(): Promise<void> {
        const searchInput: Locator = this.page.locator(locators.searchInput);
        await expect(searchInput).toBeVisible();
    }

    // Validate the visibility of the "Pricing" link
    async validatePricingLink(): Promise<void> {
        const pricingLink: Locator = this.page.locator(locators.pricingLink);
        await expect(pricingLink).toBeVisible();
    }

    // Validate the visibility of the "Shopping Cart" link
    async validateShoppingCartLink(): Promise<void> {
        const shoppingCartLink: Locator = this.page.locator(locators.shoppingCartLink);
        await expect(shoppingCartLink).toBeVisible();
    }

    // Validate the visibility of the "Login" link
    async validateLoginLink(): Promise<void> {
        const loginLink: Locator = this.page.locator(locators.loginLink);
        await expect(loginLink).toBeVisible();
    }

    // Validate the visibility of the "Contact Us" link
    async validateContactUsLink(): Promise<void> {
        const contactUsLink: Locator = this.page.locator(locators.contactUsLink);
        await expect(contactUsLink).toBeVisible();
    }

    // Validate the visibility of the "Free Trial" link
    async validateFreeTrialLink(): Promise<void> {
        const freeTrialLink: Locator = this.page.locator(locators.freeTrialLink);
        await expect(freeTrialLink).toBeVisible();
    }

    // Validate that clicking the Telerik logo redirects to the homepage
    async validateTelerikLogoRedirection(): Promise<void> {
        const logo: Locator = this.page.locator(locators.telerikLogo);
        await logo.click();
        const currentUrl: string = await this.page.url();
        await expect(currentUrl).toBe('https://www.telerik.com/');
    }

    // Validate that clicking the "Free Trial" link navigates to the correct page
    async validateFreeTrialLinkNavigation(): Promise<void> {
        const freeTrialLink: Locator = this.page.locator(locators.freeTrialLink);
        await freeTrialLink.click();
        const currentUrl: string = await this.page.url();
        await expect(currentUrl).toContain('https://www.telerik.com/download');
    }

    // Validate the responsiveness of the page for different viewport sizes (Desktop, Tablet, Mobile)
    async validateResponsiveDesign(): Promise<void> {
        const viewports = [
            { width: 1280, height: 1024 },  // Desktop
            { width: 768, height: 1024 },   // Tablet
            { width: 375, height: 667 },    // Mobile
        ];
        for (const viewport of viewports) {
            await this.page.setViewportSize(viewport);
            await this.page.reload();
            const isResponsive: boolean = await this.page.locator('body').isVisible();
            await expect(isResponsive).toBe(true);
        }
    }

    // Validate that each navigation link has a valid 'href' attribute
    async validateNavigationLinks(): Promise<void> {
        const links: Locator = this.page.locator(locators.navLinks);
        const count: number = await links.count();
        for (let i = 0; i < count; i++) {
            const link: Locator = await links.nth(i);
            const href: string | null = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate that each footer link has a valid 'href' attribute
    async validateFooterLinks(): Promise<void> {
        const footerLinks: Locator = this.page.locator(locators.footerLinks);
        const count: number = await footerLinks.count();
        for (let i = 0; i < count; i++) {
            const link: Locator = await footerLinks.nth(i);
            const href: string | null = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate that the cookie consent button disappears after it is clicked
    async validateCookieConsentButtonDisappears(): Promise<void> {
        const cookieConsentButton: Locator = this.page.locator(locators.agreeAndContinueButton);

        await cookieConsentButton.click();
        await this.page.waitForTimeout(500);  // Wait for 500ms
        await cookieConsentButton.waitFor({ state: 'hidden', timeout: 3000 });  // Wait for up to 3 seconds
        const isVisible: boolean = await cookieConsentButton.isVisible();

        await expect(isVisible).toBe(false);  // The button should now be hidden
    }

    // Validate that the page loads within a specified time (5 seconds)
    async validatePageLoadTime(): Promise<void> {
        const startTime: number = Date.now();
        await this.load();
        const loadTime: number = Date.now() - startTime;
        console.log(`Page load time: ${loadTime}ms`);
        await expect(loadTime).toBeLessThan(5000); // Ensure page loads within 5 seconds
    }

    // Validate the presence of SEO meta tags on the page
    async validateSeoMetaTags(): Promise<void> {
        const metaTag: Locator = this.page.locator(locators.seoMetaTag);
        const description: string | null = await metaTag.getAttribute('content');
        expect(description).toContain('Save time building sleek web, mobile and desktop apps with professional .NET UI Components, JavaScript UI Libraries, Reporting and Automated Testing solutions.'); // Check if description contains 'Telerik'
    }
}
