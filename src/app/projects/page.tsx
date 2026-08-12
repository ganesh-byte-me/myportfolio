import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ganesh Krishna",
  description: "Explore applications designed and developed by Ganesh Krishna.",
};

export default function ProjectsPage() {
  return <Projects />;
}
