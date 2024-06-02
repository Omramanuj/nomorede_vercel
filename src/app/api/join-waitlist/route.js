import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const {name,email,message } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const response = await fetch('https://nomorede-backend-wxlxpjor2a-el.a.run.app/customer/waitlist ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name,email,message }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to join waitlist');
    }

    const data = await response.json();
    console.log('Data:', data);
    return NextResponse.json({ message: 'Successfully joined the waitlist', data }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
