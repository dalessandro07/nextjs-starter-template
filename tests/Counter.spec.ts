import { test, expect } from '@playwright/test'

test('Counter test', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Get the counter number
  const counterNumber = page.getByRole('paragraph')

  // Click the increment button
  await page.getByRole('button').nth(1).click()

  // Expect the counter number to be 1
  await expect(counterNumber).toHaveText('1')

  // Click the decrement button
  await page.getByRole('button').first().click()

  // Expect the counter number to be 0
  await expect(counterNumber).toHaveText('0')
})
