import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const {
      first_name,
      last_name,
      user_type,
      email,
      account_status,
      password,
      partner_id,
      language,
      last_login: []
    } = await request.json();

    // Basic validation (you can add more robust validation as needed)
    if (!email || !email.includes('@') || !password) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
    }

    // Use the environment variable for the backend URL
    const backendUrl = process.env.backend_url + 'user/signup';

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        user_type,
        email,
        account_status,
        password,
        partner_id,
        language,
        last_login: []
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      if (response.status === 422) {
        return NextResponse.json({ message: 'Validation Error', details: error.detail }, { status: 422 });
      }
      throw new Error(error.message || 'Failed to sign up');
    }

    const data = await response.json();
    return NextResponse.json({ message: 'Signup successful', data }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
