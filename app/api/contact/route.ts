import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.json();
        console.log("Form data received:", formData);

        // Use AbortController for timeout handling
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

        const response = await fetch(`http://localhost:5000/api/contacts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            signal: controller.signal,

        });

        clearTimeout(timeout);

        if (!response.ok) {
            const contentType = response.headers.get("content-type");

            let errorMessage = "Something went wrong. Please try again.";

            if (contentType && contentType.includes("application/json")) {
                const errorResponse = await response.json();
                errorMessage = errorResponse.error || errorResponse.message || errorMessage;
            } else {
                errorMessage = await response.text();
            }

            console.error("Backend error:", errorMessage);
            return NextResponse.json({ error: errorMessage }, { status: response.status });
        }

        const data = await (async () => {
            try {
                return await response.json();
            } catch (err) {
                console.warn("No JSON response from backend:", err);
                return {};
            }
        })();

        console.log("Backend response:", data);

        return NextResponse.json({ message: "Registration successful!" }, { status: 200 });

    } catch (error) {
        console.error("API route error:", error);

        let errorMessage = "An unexpected error occurred. Please try again later.";
        if (error instanceof Error) {
            errorMessage = error.message.includes("aborted")
                ? "Request timed out. Please try again."
                : error.message;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
