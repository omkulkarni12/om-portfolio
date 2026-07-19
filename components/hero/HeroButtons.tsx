import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui";
import { portfolio } from "@/data/portfolio";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <Button href={portfolio.resume}>
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </Button>

      <Button
        href="#contact"
        variant="secondary"
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact Me
      </Button>

    </div>
  );
}