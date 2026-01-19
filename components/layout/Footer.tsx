import { cn } from "@/lib/utils";

function Footer() {
  return (
    <footer
      className={cn(
        "text-fluid-xs relative bottom-0 bg-sidebar",
        "border-t",
        "flex justify-center items-center py-3",
      )}
    >
      © 2026 Lead DashBoard. All rights reserved.
    </footer>
  );
}

export default Footer;
