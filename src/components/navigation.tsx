"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/LanguageContext"

export function Navigation() {
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/demo", label: t.nav.tryDemo },
    { href: "/case-studies", label: t.nav.caseStudies },
    { href: "/admin", label: t.nav.adminDashboard },
    { href: "/app", label: t.nav.userApp },
    { href: "/pitch", label: t.nav.investorPitch },
    { href: "/api-docs", label: t.nav.apiDocs },
    { href: "/onboarding", label: t.nav.onboarding }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Shield className="h-6 w-6 text-emerald-600" />
            <span className="hidden font-bold sm:inline-block">Veridity</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link className="flex items-center space-x-2" href="/">
              <Shield className="h-6 w-6 text-emerald-600" />
              <span className="font-bold">Veridity</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="inline-flex items-center space-x-2 md:hidden" href="/">
              <Shield className="h-6 w-6 text-emerald-600" />
              <span className="font-bold">Veridity</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/demo">{t.nav.tryDemo}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
