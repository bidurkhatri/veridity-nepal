"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Zap, Lock, Globe, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: t.home.features.zkProofs.title,
      description: t.home.features.zkProofs.description
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: t.home.features.mobileFirst.title,
      description: t.home.features.mobileFirst.description
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: t.home.features.privacyPreserving.title,
      description: t.home.features.privacyPreserving.description
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t.home.features.instantVerification.title,
      description: t.home.features.instantVerification.description
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t.home.features.crossPlatform.title,
      description: t.home.features.crossPlatform.description
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t.home.features.financialInclusion.title,
      description: t.home.features.financialInclusion.description
    }
  ]

  const stats = [
    { value: "10M+", label: t.home.stats.unbankedCitizens },
    { value: "40%", label: t.home.stats.ruralPopulation },
    { value: "<3s", label: t.home.stats.proofGeneration },
    { value: "$0.05", label: t.home.stats.costPerVerification }
  ]

  const useCases = [
    {
      title: t.home.useCases.ageVerification.title,
      description: t.home.useCases.ageVerification.description,
      example: t.home.useCases.ageVerification.example
    },
    {
      title: t.home.useCases.educationalCredentials.title,
      description: t.home.useCases.educationalCredentials.description,
      example: t.home.useCases.educationalCredentials.example
    },
    {
      title: t.home.useCases.residencyProof.title,
      description: t.home.useCases.residencyProof.description,
      example: t.home.useCases.residencyProof.example
    },
    {
      title: t.home.useCases.incomeVerification.title,
      description: t.home.useCases.incomeVerification.description,
      example: t.home.useCases.incomeVerification.example
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              {t.home.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t.home.hero.title}{" "}
              <span className="text-emerald-600">{t.home.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/demo">
                  {t.home.hero.tryDemo} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pitch">{t.home.hero.viewPitch}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.home.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.home.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.home.useCases.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.home.useCases.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>{t.common.view}:</strong> {useCase.example}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/demo">{t.home.cta.tryDemo}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Link href="/onboarding">{t.home.cta.startOnboarding}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">{t.home.explore.title}</h2>
            <p className="text-muted-foreground">
              {t.home.explore.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>{t.home.explore.forCitizens.title}</CardTitle>
                <CardDescription>{t.home.explore.forCitizens.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/app">{t.home.explore.forCitizens.button}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>{t.home.explore.forOrganizations.title}</CardTitle>
                <CardDescription>{t.home.explore.forOrganizations.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin">{t.home.explore.forOrganizations.button}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>{t.home.explore.forDevelopers.title}</CardTitle>
                <CardDescription>{t.home.explore.forDevelopers.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/api-docs">{t.home.explore.forDevelopers.button}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
