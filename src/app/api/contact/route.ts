import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would connect to MongoDB or an email service here.
    // Example: await db.collection('messages').insertOne(body);
    console.log('Received contact message:', body);

    return NextResponse.json({ message: 'Message received successfully!', success: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
