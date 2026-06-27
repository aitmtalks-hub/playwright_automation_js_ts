import { test as setup } from '@playwright/test';
import { loginAndSaveState } from '../utils/auth';

setup('authenticate', async ({ page }) => {
    await loginAndSaveState(page);
});