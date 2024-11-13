// app/api/getUser/route.js
import { NextResponse } from 'next/server';
import User from '@/app/_authModules/_dbFunctions/User';

// Named export for the GET method
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get('uid');

  if (!uid) {
    return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
  }

  try {
    const user = new User(uid);
    const userData = await user.getUserData();
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
