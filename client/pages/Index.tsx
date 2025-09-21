import { useEffect, useState } from "react";
import { DemoResponse } from "@shared/api";
import SearchBar from "@/components/home/SearchBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Clapperboard,
  Lightbulb,
  Mic2,
  Truck,
  Wrench,
  UsersRound,
} from "lucide-react";

const categories = [
  { name: "Cameras", icon: Camera },
  { name: "Lenses", icon: Clapperboard },
  { name: "Lighting", icon: Lightbulb },
  { name: "Audio", icon: Mic2 },
  { name: "Grip & Electric", icon: Wrench },
  { name: "Production", icon: Truck },
];

const heroImage =
  "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg";

const gear = [
  {
    title: "Cinema Camera Body",
    price: 95,
    img: "https://images.pexels.com/photos/11480034/pexels-photo-11480034.jpeg",
  },
  {
    title: "Zoom Cine Lens 24-70mm",
    price: 60,
    img: "https://images.pexels.com/photos/13826490/pexels-photo-13826490.jpeg",
  },
  {
    title: "LED Panel Light",
    price: 35,
    img: "https://images.pexels.com/photos/6238608/pexels-photo-6238608.jpeg",
  },
  {
    title: "Wireless Lav Kit",
    price: 28,
    img: "https://images.pexels.com/photos/8866726/pexels-photo-8866726.jpeg",
  },
  {
    title: "Portable Audio Recorder",
    price: 32,
    img: "https://images.pexels.com/photos/11713445/pexels-photo-11713445.jpeg",
  },
  {
    title: "Carbon Fiber Tripod",
    price: 22,
    img: "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg",
  },
];

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-zinc-900">
        <img
          src={heroImage}
          alt="Film production lighting"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />
        <div className="container">
          <div className="py-16 md:py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20">
                Trusted community marketplace
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Rent, buy and share film gear with Film Stock
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                The largest, most trusted film production rental community. Find
                the gear you need or list yours to earn more.
              </p>
            </div>
            <div className="mt-8">
              <SearchBar />
            </div>
            <div className="mt-6 text-xs text-white/60">
              {exampleFromServer}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* CATEGORIES */}
      <section className="container py-10 md:py-14">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Browse categories
          </h2>
          <Button variant="ghost" className="hidden md:inline-flex">
            View all
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((c) => (
            <Card
              key={c.name}
              className="group border-0 bg-gradient-to-br from-zinc-50 to-white shadow hover:shadow-md dark:from-zinc-900 dark:to-zinc-900"
            >
              <CardContent className="flex h-28 flex-col items-center justify-center gap-2">
                <c.icon className="h-6 w-6 text-primary group-hover:scale-105 transition-transform" />
                <div className="text-sm font-medium">{c.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* POPULAR FOR RENT */}
      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">
            Popular products for rent
          </h2>
          <Button variant="ghost" className="hidden md:inline-flex">
            See more
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((g, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{g.title}</h3>
                    <p className="text-xs text-muted-foreground">Boston, MA</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${g.price}</div>
                    <div className="text-xs text-muted-foreground">per day</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="border-y bg-muted/30 py-14">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              A trusted community for filmmakers
            </h2>
            <p className="mt-3 text-muted-foreground">
              Verified users, secure payments and insurance-backed rentals keep
              your gear safe. Join thousands of professionals earning with Film
              Stock.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>
                <UsersRound className="mr-2" /> Join now
              </Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Insurance",
              "ID Verification",
              "24/7 Support",
              "Secure Payments",
            ].map((f) => (
              <Card key={f} className="bg-white/60 dark:bg-zinc-900/60">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold">{f}</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Protection and peace of mind for every rental.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">
                Rent or sell your camera gear
              </h3>
              <p className="mt-2 text-muted-foreground">
                Turn idle equipment into revenue. List in minutes and get booked
                by local filmmakers.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Button>List your gear</Button>
              <Button variant="outline">How it works</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
