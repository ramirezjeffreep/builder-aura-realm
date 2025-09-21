import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-2 rounded-xl border bg-white/95 p-2 shadow-lg backdrop-blur md:grid-cols-[1fr,200px,160px,auto] dark:bg-zinc-900/80">
      <div className="flex items-center gap-2 rounded-md border bg-background px-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input className="border-0 focus-visible:ring-0" placeholder="Search gear (e.g. Alexa Mini, 24-70mm)" />
      </div>
      <div className="flex items-center gap-2 rounded-md border bg-background px-3">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <Input className="border-0 focus-visible:ring-0" placeholder="Location" />
      </div>
      <div className="flex items-center gap-2 rounded-md border bg-background px-3">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <Input className="border-0 focus-visible:ring-0" placeholder="Dates" />
      </div>
      <Button className="h-12 md:h-auto">Search</Button>
    </form>
  );
}
