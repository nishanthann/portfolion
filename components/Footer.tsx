"use client";
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          {/* Column 1: Company Info and Social Links */}
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <Image
                src="/nyellow.png"
                alt="logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-2xl font-semibold">Nishanthan</span>
            </div>

            <p className="text-foreground/50  mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              Available for freelance work, collaborations, and new
              opportunities.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {/* Social Links */}
              <li>
                <Link
                  href="https://facebook.com/mvpblocks"
                  className="text-primary hover:text-primary/80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/mvpblocks"
                  className="text-primary hover:text-primary/80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/mvpblocks"
                  className="text-primary hover:text-primary/80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com/mvpblocks"
                  className="text-primary hover:text-primary/80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Dribbble</span>
                  <Dribbble className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/mvpblocks"
                  className="text-primary hover:text-primary/80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="size-6" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2/3/4 combined in a grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 ">
            {/* About Us Links */}
            <div className="sm:col-start-2 text-center sm:text-left">
              <p className="text-lg font-medium">About Page</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/company-history"
                  >
                    Company History
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/meet-the-team"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/employee-handbook"
                  >
                    Employee Handbook
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services Links */}
            {/* <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/web-development"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/web-design"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/marketing"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/70 transition hover:text-primary"
                    href="/google-ads"
                  >
                    Google Ads
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Helpful Links */}
            <div className="text-center sm:text-left hidden sm:block ">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    href="/faqs"
                    className="text-secondary-foreground/70 transition hover:text-primary"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-secondary-foreground/70 transition hover:text-primary"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/live-chat"
                    className="group flex items-center justify-center gap-1.5 sm:justify-start text-secondary-foreground/70 hover:text-primary transition cursor-pointer"
                  >
                    <span>Live Chat</span>
                    {/* Live indicator */}
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Info */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Me</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 sm:justify-start hover:text-primary transition"
                    href="mailto:nizhanth23@gmail.com"
                  >
                    <Mail className="text-primary size-5 shrink-0 shadow-sm" />
                    <span className="text-secondary-foreground/70 flex-1 transition">
                      nizhanth23@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 sm:justify-start hover:text-primary transition"
                    href="tel:+918637373116"
                  >
                    <Phone className="text-primary size-5 shrink-0 shadow-sm" />
                    <span className="text-secondary-foreground/70 flex-1 transition">
                      +94 772113037
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 sm:justify-start hover:text-primary transition"
                    href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="text-primary size-5 shrink-0 shadow-sm" />
                    <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                      Colombo, Srilanka
                    </address>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              © 2025 Nishanthan Krishnarasa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
