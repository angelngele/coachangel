export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'A valid email is required' },
                { status: 400 }
            );
        }

        const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

        if (!HUBSPOT_TOKEN) {
            return NextResponse.json(
                { error: 'HubSpot token not configured' },
                { status: 500 }
            );
        }

        const response = await fetch(
            'https://api.hubapi.com/crm/v3/objects/contacts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${HUBSPOT_TOKEN}`,
                },
                body: JSON.stringify({
                    properties: { email },
                }),
            }
        );

        const data = await response.json();

        // Contact already exists
        if (!response.ok) {
            if (data?.category === 'CONFLICT') {
                return NextResponse.json(
                    { message: 'You are already subscribed.' },
                    { status: 200 }
                );
            }

            return NextResponse.json(
                { error: data?.message || 'Subscription failed' },
                { status: response.status }
            );
        }

        return NextResponse.json({ message: 'Subscription successful!' });
    } catch {
        return NextResponse.json(
            { error: 'Server error. Please try again later.' },
            { status: 500 }
        );
    }
}




// export const runtime = 'edge';

// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     try {
//         const { email } = await req.json();

//         if (!email || !email.includes('@')) {
//             return NextResponse.json(
//                 { error: 'A valid email is required' },
//                 { status: 400 }
//             );
//         }

//         const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

//         if (!HUBSPOT_TOKEN) {
//             console.error('❌ Missing HUBSPOT_ACCESS_TOKEN');

//             return NextResponse.json(
//                 { error: 'HubSpot token not configured' },
//                 { status: 500 }
//             );
//         }

//         const response = await fetch(
//             'https://api.hubapi.com/crm/v3/objects/contacts',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${HUBSPOT_TOKEN}`,
//                 },
//                 body: JSON.stringify({
//                     properties: {
//                         email
//                     },
//                 }),
//             }
//         );

//         const data = await response.json();

//         if (!response.ok) {
//             console.error('❌ HubSpot API Error:', {
//                 status: response.status,
//                 response: data,
//             });

//             if (data?.category === 'CONFLICT') {
//                 return NextResponse.json(
//                     { message: 'You are already subscribed.' },
//                     { status: 200 }
//                 );
//             }

//             return NextResponse.json(
//                 { error: data?.message || 'Subscription failed' },
//                 { status: response.status }
//             );
//         }

//         return NextResponse.json({ message: 'Subscription successful!' });

//     } catch (err) {
//         console.error('🔥 Server Error in /api/subscribe:', err);

//         return NextResponse.json(
//             { error: 'Server error. Please try again later.' },
//             { status: 500 }
//         );
//     }
// }
