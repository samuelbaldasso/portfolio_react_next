import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getRepos();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-6 md:px-10">
        <Hero />
        <About />
        <Experience />
        <Projects repos={repos} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
