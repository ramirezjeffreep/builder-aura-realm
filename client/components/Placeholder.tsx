import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 text-muted-foreground">{description}</p>
        ) : null}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Go to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="#">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
