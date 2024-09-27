import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section>
      <span className={title({size: "lg"})}>Welcome to </span>
      <span className={title({size: "lg", color: 'yellow'})}>Silly Little Guys</span>
      <span className={title({size:"lg"})}>!</span>
    </section>
  );
}
