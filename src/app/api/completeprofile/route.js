import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        console.log('Received data:', data);  // Log the received data for debugging

        // Use the environment variable for the backend URL
        const apiUrl = `${process.env.backend_url}/user/customer/completeProfile`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json();
            console.log('Backend error response:', error);  // Log the backend error response
            return NextResponse.json({ message: error.message || 'Failed to complete profile' }, { status: response.status });
        }

        const result = await response.json();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Server error:', error);  // Log the server error
        return NextResponse.json({ message: 'Server error: ' + error.message }, { status: 500 });
    }
}

export async function GET(request) {
    return NextResponse.json({ message: 'This is a GET response' }, { status: 200 });
}
