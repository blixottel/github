import { test, expect, Page } from '@playwright/test';
import { chromium } from 'playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.ibisworld.com/');
});

test.describe('IBISWorld', () => {
  test('Test 1', async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos'
        }
    });
  
    // Open new page
    const page = await context.newPage();
  
    // Go to https://www.ibisworld.com/
    await page.goto('https://www.ibisworld.com/');
  
    // Click text=Accept
    await page.locator('text=Accept').click();
  
    // Click text=Toggle navigation account_circle CONTACT US REQUEST DEMO Log In Industry Reports >> input[role="combobox"]
    await page.locator('text=Toggle navigation account_circle CONTACT US REQUEST DEMO Log In Industry Reports >> input[role="combobox"]').click();
  
    // Fill text=Toggle navigation account_circle CONTACT US REQUEST DEMO Log In Industry Reports >> input[role="combobox"]
    await page.locator('text=Toggle navigation account_circle CONTACT US REQUEST DEMO Log In Industry Reports >> input[role="combobox"]').fill('Supermarkets');
  
    // Press Enter
    await page.locator('text=Toggle navigation account_circle CONTACT US REQUEST DEMO Log In Industry Reports >> input[role="combobox"]').press('Enter');
  
    // Click text=OD5591 Supermarket Franchises in the US
    await page.locator('text=OD5591 Supermarket Franchises in the US').click();
  
    // Click #BtnPurchaseOptionsDesktopSpotlight >> text=PURCHASE OPTIONS
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://www.ibisworld.com/cart/purchase-options/' }*/),
      page.locator('#BtnPurchaseOptionsDesktopSpotlight >> text=PURCHASE OPTIONS').click()
    ]);
  
    // Click #btnSLODSingleReport
    await page.locator('#btnSLODSingleReport').click();
  
    // Click input[name="ctl00\$cartForm\$clFirstName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clFirstName"]').click();
  
    // Fill input[name="ctl00\$cartForm\$clFirstName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clFirstName"]').fill('Test_FirstName');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clFirstName"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clLastName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clLastName"]').fill('Test_LastName');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clLastName"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clCompany"]
    await page.locator('input[name="ctl00\\$cartForm\\$clCompany"]').fill('Test_Company');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clCompany"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clPosition"]
    await page.locator('input[name="ctl00\\$cartForm\\$clPosition"]').fill('Test_JobTitle');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clPosition"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clEmail"]
    await page.locator('input[name="ctl00\\$cartForm\\$clEmail"]').fill('Test@email.com');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clEmail"]').press('Tab');
  
    // Click input[name="ctl00\$cartForm\$clPhoneNumber"]
    await page.locator('input[name="ctl00\\$cartForm\\$clPhoneNumber"]').click();
  
    // Fill input[name="ctl00\$cartForm\$clPhoneNumber"]
    await page.locator('input[name="ctl00\\$cartForm\\$clPhoneNumber"]').fill('01-555-5937');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clPhoneNumber"]').press('Tab');
  
    // Click input[name="ctl00\$cartForm\$clBillingFirstName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingFirstName"]').click();
  
    // Fill input[name="ctl00\$cartForm\$clBillingFirstName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingFirstName"]').fill('Test_FirstName');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingFirstName"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clBillingLastName"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingLastName"]').fill('Test_LastName');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingLastName"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clBillingAddress"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingAddress"]').fill('Test_BillingAddress');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingAddress"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clBillingAddressCont"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingAddressCont"]').fill('Test_AptFloorUnit');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingAddressCont"]').press('Tab');
  
    // Fill input[name="ctl00\$cartForm\$clBillingCity"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingCity"]').fill('Test_City');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingCity"]').press('Tab');
  
    // Click #lstStates div:has-text("State")
    await page.locator('#lstStates div:has-text("State")').click();
  
    // Click text=Nebraska
    await page.locator('text=Nebraska').click();
  
    // Fill input[name="ctl00\$cartForm\$clBillingZipcode"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingZipcode"]').fill('36252');
  
    // Press Home with modifiers
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingZipcode"]').press('Shift+Home');
  
    // Fill input[name="ctl00\$cartForm\$clBillingZipcode"]
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingZipcode"]').fill('12345');
  
    // Press Tab
    await page.locator('input[name="ctl00\\$cartForm\\$clBillingZipcode"]').press('Tab');
  
    // Take screenshot
    await page.screenshot({path: 'screenshots\\Test 1.png'})
  
    // ---------------------
    await context.close();
    await browser.close();
  });

  test('Test 2', async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext({
      recordVideo: {
          dir: 'videos'
      }
  });
  
    // Open new page
    const page = await context.newPage();
  
    // Go to https://www.ibisworld.com/free-report-sample/
    await page.goto('https://www.ibisworld.com/free-report-sample/');
  
    // Click text=Accept
    await page.locator('text=Accept').click();
  
    // Select Australia
    await page.locator('select[name="country"]').selectOption('Australia');
  
    // Click [placeholder="First Name\*"]
    await page.locator('[placeholder="First Name\\*"]').click();
  
    // Fill [placeholder="First Name\*"]
    await page.locator('[placeholder="First Name\\*"]').fill('Test_FirstName');
  
    // Press Tab
    await page.locator('[placeholder="First Name\\*"]').press('Tab');
  
    // Fill [placeholder="Last Name\*"]
    await page.locator('[placeholder="Last Name\\*"]').fill('Test_Surname');
  
    // Press Tab
    await page.locator('[placeholder="Last Name\\*"]').press('Tab');
  
    // Fill [placeholder="Job Title\*"]
    await page.locator('[placeholder="Job Title\\*"]').fill('Test_JobTitle');
  
    // Press Tab
    await page.locator('[placeholder="Job Title\\*"]').press('Tab');
  
    // Fill [placeholder="Work Email Address\*"]
    await page.locator('[placeholder="Work Email Address\\*"]').fill('Test@email.com');
  
    // Press Tab
    await page.locator('[placeholder="Work Email Address\\*"]').press('Tab');
  
    // Fill [placeholder="Company Name\*"]
    await page.locator('[placeholder="Company Name\\*"]').fill('Test_CompanyName');
  
    // Select Other Corporates
    await page.locator('select[name="\\30 0N1W0000039xAr"]').selectOption('Other Corporates');
  
    // Click text=Yes, I would like to receive marketing communications from IBISWorld. IBISWorld
    await page.locator('text=Yes, I would like to receive marketing communications from IBISWorld. IBISWorld ').click();
  
    // Click span[role="checkbox"]
    await page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]').click();
  
    // Click input[name="submit"]
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.waitForEvent('download'),
      page.locator('input[name="submit"]').click()
    ]);
  
    // Take screenshot
    await page.screenshot({path: 'screenshots\\Test 2.png'})
  
    // Close page
    await page1.close();
  
    // ---------------------
    await context.close();
    await browser.close();
  });

});

