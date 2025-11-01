import Head from "next/head";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import LandingHero from "@/components/landing-hero";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Er. Dipendra Singh Bist | Software Developer"
        description="Explore the professional portfolio of Er. Dipendra Singh Bist, a skilled Software Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Er. Dipendra Singh Bist - Software Developer",
          description:
            "Dive into the world of web development with Er. Dipendra Singh Bist. Discover a Software Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Er. Dipendra Singh Bist - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>

      {/* Sound Wave Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <SoundWaveBackground />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <LandingHero />
      </main>
    </>
  );
}

/* --------------------------------------------------------------- */
/*  Sound Wave Background – Golden Audio Visualizer                */
/* --------------------------------------------------------------- */
const SoundWaveBackground = () => {
  const bars = Array.from({ length: 36 }, (_, i) => i);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden Gradient */}
          <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor="hsl(var(--accent))"
              stopOpacity="0.8"
            />
            <stop
              offset="50%"
              stopColor="hsl(var(--accent))"
              stopOpacity="0.6"
            />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.1)" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(var(--accent))" floodOpacity="0.5" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sound Bars */}
        <g transform="translate(100, 300)">
          {bars.map((_, i) => {
            const delay = i * 0.05;
            const height = 20 + (i % 3) * 15;
            const isTall = i % 4 === 0;

            return (
              <motion.rect
                key={i}
                x={i * 28}
                y={-height / 2}
                width="20"
                height={height}
                rx="10"
                fill="url(#goldGlow)"
                filter="url(#glow)"
                initial={{ height }}
                animate={{
                  height: isTall
                    ? [height, height * 3.5, height]
                    : [height, height * 2, height],
                  y: isTall
                    ? [-height * 1.75, -height * 1.75, -height / 2]
                    : [-height, -height, -height / 2],
                }}
                transition={{
                  duration: 1.2 + Math.random() * 0.6,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </g>

        {/* Mirrored Bottom (Reflection) */}
        <g transform="translate(100, 300) scale(1, -1)" opacity="0.2">
          {bars.map((_, i) => {
            const delay = i * 0.05 + 0.3;
            const height = 20 + (i % 3) * 15;
            const isTall = i % 4 === 0;

            return (
              <motion.rect
                key={`ref-${i}`}
                x={i * 28}
                y={-height / 2}
                width="20"
                height={height}
                rx="10"
                fill="url(#goldGlow)"
                initial={{ height }}
                animate={{
                  height: isTall
                    ? [height, height * 2.5, height]
                    : [height, height * 1.5, height],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </g>
      </svg>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
    </div>
  );
};
