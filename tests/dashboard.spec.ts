import { test } from '@playwright/test'

test('dashboard is on homepage', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.getByText('קיבוץ לפי שעה').click()
})
