import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import { db } from "@/lib/firebase-admin";
import { waitlistSchema } from "@/validators/waitlist";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const parsed = waitlistSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid data" },
                { status: 400 }
            );
        }

        const { email, name } = parsed.data;

        const existing = await db
            .collection("waitlist")
            .where("email", "==", email)
            .limit(1)
            .get();

        if (!existing.empty) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 }
            );
        }

        await db.collection("waitlist").add({
            email,
            name: name ?? null,
            source: "landing-page",
            createdAt: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}