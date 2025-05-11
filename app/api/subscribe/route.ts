export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const API_KEY = '1ac5b33efd5594eddbdc1ed0e8d591d1-us12';
        const LIST_ID = 'a72630b20e';
        const DATACENTER = API_KEY.split('-')[1];

        const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.detail }, { status: response.status });
        }

        return NextResponse.json({ message: 'Subscription successful!' });
    } catch (error) {
        return NextResponse.json({error:error}, { status: 500 });
    }
}
