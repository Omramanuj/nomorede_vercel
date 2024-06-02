import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log('Received request:', { email, password });

    if (!email || !email.includes('@') || !password) {
      console.log('Invalid email or password');
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
    }

    const response = await fetch('https://nomorede-backend-wxlxpjor2a-el.a.run.app/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
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
    console.log('Login successful:', data);
    return NextResponse.json({ message: 'Login successful', data }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
