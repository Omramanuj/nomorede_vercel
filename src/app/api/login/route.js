import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!email || !emailRegex.test(email) || !password) {
      console.log('Invalid email or password');
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
    }

    // Include last_login as an empty array in the payload sent to the backend
    const payload = {
      email,
      password,
      last_login: []  // Initialize last_login as an empty array
    };

    // Use the environment variable for the backend URL
    const backendUrl = `${process.env.backend_url}user/login`;

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log('Response not ok:', response.status, error);

      if (response.status === 422) {
        return NextResponse.json({ message: 'Validation Error', details: error.detail }, { status: 422 });
      }

      throw new Error(error.message || 'Failed to log in');
    }

    const data = await response.json();
    return NextResponse.json({ message: 'Login successful', data }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: `Internal Server Error: ${error.message}` }, { status: 500 });
  }
}
