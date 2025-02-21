import {NextResponse} from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      {username: 'toms1', email: 'toms.vogel@gmail.com'},
      {username: 'sepp', email: 'sepp@gmail.com'},
    ],
  });
}
