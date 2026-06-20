# API & Module Mocking

API & module mocking means faking external API calls or libraries in tests, so you can control responses without relying on real servers or slow networks.

Real API calls are unpredictable (network issues, server downtime).

In tests, you want fast and reliable results.

With Vitest, you can mock:

fetch → built-in browser API.

axios → popular HTTP library.

This lets you test your logic without making real requests.

# Mocking fetch

```

export async function getUser() {
  const response = await fetch('/user');
  return response.json();
}
```

- Test with Mocked fetch

```

import { test, expect, vi } from 'vitest';
import { getUser } from './api.js';

test('returns mocked user data', async () => {
  // Step 1: Mock fetch
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'Sumit' }),
    })
  );

  // Step 2: Call function
  const user = await getUser();

  // Step 3: Assert result
  expect(user).toEqual({ name: 'Sumit' });
  expect(fetch).toHaveBeenCalledWith('/user');
});
```

# Mocking axios

```

import axios from 'axios';

export async function getUserAxios() {
  const response = await axios.get('/user');
  return response.data;
}
```

- Test with Mocked axios

```
import { test, expect, vi } from 'vitest';
import axios from 'axios';
import { getUserAxios } from './apiAxios.js';

// Step 1: Mock axios
vi.mock('axios');

test('returns mocked user data with axios', async () => {
  // Step 2: Define fake response
  axios.get.mockResolvedValue({ data: { name: 'Sumit' } });

  // Step 3: Call function
  const user = await getUserAxios();

  // Step 4: Assert result
  expect(user).toEqual({ name: 'Sumit' });
  expect(axios.get).toHaveBeenCalledWith('/user');
});
```
