export default function Footer() {
  return (
    <footer className="border-t bg-white/50 dark:bg-black/30">
      <div className="container py-12 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-lg font-semibold">Film Stock</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Film Stock is the trusted marketplace to rent and buy professional
            film production gear and connect with crew.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Marketplace</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/rent" className="hover:text-foreground">
                Rent Gear
              </a>
            </li>
            <li>
              <a href="/buy" className="hover:text-foreground">
                Buy & Sell
              </a>
            </li>
            <li>
              <a href="/crew" className="hover:text-foreground">
                Find Crew
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Support</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Film Stock. All rights reserved.
      </div>
    </footer>
  );
}
