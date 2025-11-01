import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-transparent via-zinc-50 to-zinc-100 px-6 py-16 dark:via-zinc-950 dark:to-black sm:px-14 md:px-20">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent/90 to-accent/80 p-1 shadow-2xl">
          <div className="rounded-[22px] bg-background p-8 sm:p-12 lg:p-16">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Get in touch
              </span>
            </motion.div>

            {/* Email Link */}
            <motion.a
              href={`mailto:${siteMetadata.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block w-full text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-6xl">
                <span className="inline-block transition-all duration-300 group-hover:translate-x-1">
                  dipendras.bist@
                </span>
                <span className="inline-block text-accent transition-all duration-300 group-hover:-translate-x-1">
                  gmail.com
                </span>
              </span>

              {/* Underline Glow Effect */}
              <span className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-accent/50 transition-all duration-500 group-hover:w-3/4"></span>
              <span className="absolute -bottom-3 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-accent/30 blur-md transition-all duration-500 group-hover:w-1/2"></span>
            </motion.a>

            {/* Contact Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
              className="mt-10 flex justify-center"
            >
              <ContactButton />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mx-auto mt-20 flex w-full max-w-7xl flex-col items-center justify-between gap-6 text-sm md:flex-row"
      >
        <p className="font-medium text-foreground/70">
          © {new Date().getFullYear()} Dipendra Singh Bist. All rights reserved.
        </p>

        <div className="flex gap-6">
          {[
            { Icon: GithubIcon, href: siteMetadata.github, label: "GitHub" },
            { Icon: TwitterIcon, href: siteMetadata.twitter, label: "Twitter" },
            {
              Icon: LinkedinIcon,
              href: siteMetadata.linkedin,
              label: "LinkedIn",
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${label}`}
              className="group relative p-2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon className="relative h-5 w-5 text-accent transition-all duration-300 group-hover:text-accent-foreground" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
