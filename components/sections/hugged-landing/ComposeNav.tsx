"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "@/lib/locale-context";
import Image from "next/image";
import huggedLogo from '@/public/hugged-logo.png'

export function ComposeNav({ onNavigate }: { onNavigate: (id: string) => void }) {
  const messages = useTranslations();
  const [open, setOpen] = useState(false);
  const navItems = [
    [messages.nav.theProblem, "problem"],
    [messages.nav.howHuggedHelps, "how-hugged-helps"],
    [messages.nav.ecosystem, "ecosystem"],
    [messages.nav.ageWiseGuidance, "age-wise"],
    [messages.nav.features, "features"],
    [messages.nav.homeschooling, "homeschooling"],
    [messages.nav.community, "community"],
    [messages.nav.meetups, "meetups"],
    [messages.nav.experts, "experts"],
    [messages.nav.events, "events"],
    [messages.nav.waitlist, "waitlist"],
    [messages.nav.faq, "faq"],
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <button
          type="button"
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-soft text-coral shadow-[0_8px_28px_rgba(255,122,107,0.16)] font-semibold">
            <Image src={huggedLogo} alt="Hugged logo" width={20} height={20} />
          </span>
          <span>
            <span className="block font-heading text-lg font-semibold tracking-tight text-foreground">
              Hugged
            </span>
            <span className="block text-xs uppercase tracking-[0.28em] text-neutral-600">
              soft support system
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-3 md:flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-foreground px-5 text-background shadow-[0_16px_42px_rgba(17,17,17,0.12)] hover:bg-foreground/90">
                Join Hugged
              </Button>
            </DialogTrigger>
            <DialogContent className="border-border/80 bg-background p-6 sm:max-w-md">
              <DialogHeader>
                <Badge className="w-fit bg-mint-soft text-foreground hover:bg-mint-soft">
                  Safe Space for Modern Motherhood
                </Badge>
                <DialogTitle className="mt-2 font-heading text-2xl tracking-tight">
                  Start your calm parenting journey
                </DialogTitle>
                <DialogDescription className="text-sm leading-7 text-neutral-600">
                  Hugged is built for mothers who want emotional support,
                  structured guidance, and a community that does not ask them
                  to perform perfection.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 rounded-[28px] bg-white/70 p-4 ring-1 ring-foreground/10">
                {[
                  "Anonymous venting and emotional safety",
                  "Homeschooling and early learning support",
                  "Audio webinars, experts, and group circles",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-600"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 text-coral" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <DialogFooter className="mt-1 border-0 bg-transparent px-0 pb-0 pt-2">
                <Button className="rounded-full bg-coral px-5 text-white hover:bg-coral/90">
                  Request access
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="h-11 rounded-full border-border/80 bg-white/70 px-4 lg:hidden"
            >
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-border/80 bg-background p-5">
            <SheetHeader className="px-0 pt-2">
              <SheetTitle className="font-heading text-2xl">Hugged</SheetTitle>
            </SheetHeader>
            <div className="mt-6 grid gap-2">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => {
                    onNavigate(id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-left text-sm text-neutral-700 ring-1 ring-foreground/10"
                >
                  <span>{label}</span>
                  <ChevronRight className="size-4 text-neutral-400" />
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-[28px] bg-coral-soft p-4 text-sm text-neutral-700">
              A calm support ecosystem for mothers raising the next generation.
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
