"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DeleteAccountPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const body = {
            email: formData.get("email"),
            phone: formData.get("phone"),
            reason: formData.get("reason"),
        };

        // Replace with your API endpoint
        const res = await fetch("/api/delete-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        setLoading(false);

        if (res.ok) {
            alert("Your deletion request has been submitted.");
            e.currentTarget.reset();
        } else {
            alert("Something went wrong.");
        }
    }

    return (
        <div className="container w-full h-full py-12 flex justify-center flex-col items-center">

            <Card className="max-w-96">
                <CardHeader>
                    <CardTitle>Delete Your Hugged Account</CardTitle>

                    <CardDescription>
                        Submit a request to permanently delete your Hugged account and
                        associated personal data.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Registered Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Registered Phone (Optional)</Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="+91 9876543210"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="reason">Reason (Optional)</Label>
                            <Textarea
                                id="reason"
                                name="reason"
                                rows={4}
                                placeholder="Tell us why you're leaving..."
                            />
                        </div>

                        <Button
                            className="w-full"
                            disabled={loading}
                            type="submit"
                        >
                            {loading ? "Submitting..." : "Request Account Deletion"}
                        </Button>
                    </form>

                    <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                        <h3 className="font-semibold text-foreground">
                            What happens next?
                        </h3>

                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                We will verify that you own the account before processing the
                                request.
                            </li>

                            <li>
                                Your account and personal information will be permanently
                                deleted within <strong>60 days</strong>.
                            </li>

                            <li>
                                Some information may be retained where required by applicable
                                law or for fraud prevention.
                            </li>

                            <li>
                                Once deleted, your account cannot be recovered.
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}