import { HomePage } from "@/components";
import { fetchHomePage } from "@/actions";

export default async function Home() {
  const heroSection = await fetchHomePage();

  return <HomePage heroSection={heroSection} />;
}
