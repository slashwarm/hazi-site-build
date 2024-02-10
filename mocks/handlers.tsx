import { http, HttpResponse } from 'msw'
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const handlers = [
  http.post('/subscribe', async ({ request, params }) => {
    const data = await request.json();
    const email = data['email'];

    if (!email || !regex.test(email)) {
      return HttpResponse.json({ error: 'Hibás e-mail cím!' }, { status: 400 });
    }

    return HttpResponse.json({}, { status: 200 });
  }),
]