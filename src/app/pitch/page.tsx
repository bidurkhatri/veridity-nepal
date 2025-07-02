"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  TrendingUp,
  Target,
  DollarSign,
  Users,
  Globe,
  Shield,
  Zap,
  Building2,
  Award,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  ChevronDown
} from "lucide-react"

export default function InvestorPitch() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: "intro",
      title: "Veridity",
      subtitle: "Privacy-First Digital Identity for Nepal",
      content: "intro"
    },
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Identity Verification Challenges in Nepal",
      content: "problem"
    },
    {
      id: "solution",
      title: "Our Solution",
      subtitle: "Zero-Knowledge Proof Technology",
      content: "solution"
    },
    {
      id: "market",
      title: "Market Opportunity",
      subtitle: "Massive Underserved Market",
      content: "market"
    },
    {
      id: "business",
      title: "Business Model",
      subtitle: "Scalable Revenue Streams",
      content: "business"
    },
    {
      id: "traction",
      title: "Traction & Milestones",
      subtitle: "Proven Progress",
      content: "traction"
    },
    {
      id: "financials",
      title: "Financial Projections",
      subtitle: "Strong ROI Potential",
      content: "financials"
    },
    {
      id: "team",
      title: "Team & Advisors",
      subtitle: "Experienced Leadership",
      content: "team"
    },
    {
      id: "ask",
      title: "Investment Ask",
      subtitle: "Join Our Mission",
      content: "ask"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlideContent = () => {
    const slide = slides[currentSlide]

    switch(slide.content) {
      case "intro":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-emerald-600" />
              </div>
              <h1 className="text-5xl font-bold text-emerald-600">Veridity</h1>
              <p className="text-2xl text-muted-foreground">Privacy-First Digital Identity for Nepal</p>
            </div>
            <div className="space-y-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Zero-Knowledge Proof Technology
              </Badge>
              <p className="text-xl max-w-3xl mx-auto">
                Empowering 30 million Nepali citizens with secure, private identity verification
                using cutting-edge cryptography
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">10M+</div>
                <div className="text-muted-foreground">Unbanked Citizens</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$25M</div>
                <div className="text-muted-foreground">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.7%</div>
                <div className="text-muted-foreground">Privacy Protection</div>
              </div>
            </div>
          </div>
        )

      case "problem":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Identity Crisis in Nepal</h2>
              <p className="text-xl text-muted-foreground">
                Current identity systems exclude millions and compromise privacy
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-700">Current Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>40% of population remains unbanked</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>65% live in rural areas with limited access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Data breaches expose sensitive information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Bureaucratic inefficiencies waste time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Identity fraud costs $2.3M annually</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Market Opportunity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">30M</div>
                    <div className="text-emerald-700">Total Addressable Population</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Government Services</span>
                      <span className="font-medium">15M users</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Banking & Finance</span>
                      <span className="font-medium">8M potential</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employment Verification</span>
                      <span className="font-medium">5M workers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Education Credentials</span>
                      <span className="font-medium">3M students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "solution":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Zero-Knowledge Revolution</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Veridity uses advanced cryptography to enable privacy-preserving identity verification
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>How It Works</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">1</div>
                      <div>
                        <p className="font-medium">Credential Issuance</p>
                        <p className="text-sm text-muted-foreground">Government/institution issues digital credential</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">2</div>
                      <div>
                        <p className="font-medium">Proof Generation</p>
                        <p className="text-sm text-muted-foreground">User creates ZK proof locally on device</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">3</div>
                      <div>
                        <p className="font-medium">Verification</p>
                        <p className="text-sm text-muted-foreground">Verifier confirms claim without seeing data</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <span>Key Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Complete privacy protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Offline-capable mobile app</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Instant verification (&lt;3s)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Cryptographic security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Low cost (&lt;$0.05/verification)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm">Easy API integration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">Technical Advantage</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">zk-SNARKs</div>
                      <div className="text-sm text-muted-foreground">Cryptographic Proofs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">Mina Protocol</div>
                      <div className="text-sm text-muted-foreground">Blockchain Infrastructure</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">React Native</div>
                      <div className="text-sm text-muted-foreground">Mobile Platform</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "market":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">$25M Market Opportunity</h2>
              <p className="text-xl text-muted-foreground">
                Nepal's digital transformation creates massive identity verification demand
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Total Addressable Market</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Government Services</span>
                      <span className="font-bold">$8.5M</span>
                    </div>
                    <Progress value={34} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>Banking & Finance</span>
                      <span className="font-bold">$7.2M</span>
                    </div>
                    <Progress value={29} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>Employment & HR</span>
                      <span className="font-bold">$4.8M</span>
                    </div>
                    <Progress value={19} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>Education & NGOs</span>
                      <span className="font-bold">$4.5M</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total Market</span>
                      <span className="text-emerald-600">$25.0M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Drivers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium">Digital Nepal Initiative</p>
                      <p className="text-sm text-muted-foreground">Government push for digitalization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Mobile Penetration</p>
                      <p className="text-sm text-muted-foreground">125% mobile phone adoption rate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-medium">Fintech Growth</p>
                      <p className="text-sm text-muted-foreground">Rapid digital payment adoption</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium">Remittance Market</p>
                      <p className="text-sm text-muted-foreground">$8.8B annual remittances need KYC</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">Nepal Market Entry</div>
                  <div className="text-lg font-medium mt-2">$0.5M ARR</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Scale & Partnerships</div>
                  <div className="text-lg font-medium mt-2">$2.8M ARR</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2027</div>
                  <div className="text-sm text-muted-foreground">Regional Expansion</div>
                  <div className="text-lg font-medium mt-2">$8.5M ARR</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "business":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Scalable Revenue Model</h2>
              <p className="text-xl text-muted-foreground">
                Multiple revenue streams with strong unit economics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Streams</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">API Verification Fees</p>
                        <p className="text-sm text-muted-foreground">Per verification pricing</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$0.10</p>
                        <p className="text-sm text-muted-foreground">per call</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">SaaS Subscriptions</p>
                        <p className="text-sm text-muted-foreground">Monthly enterprise plans</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$500-5K</p>
                        <p className="text-sm text-muted-foreground">per month</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">Integration Services</p>
                        <p className="text-sm text-muted-foreground">Custom implementation</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$10-50K</p>
                        <p className="text-sm text-muted-foreground">per project</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">White-label Licensing</p>
                        <p className="text-sm text-muted-foreground">Brand partnerships</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$100K+</p>
                        <p className="text-sm text-muted-foreground">annual</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit Economics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-emerald-50 rounded">
                      <div className="text-2xl font-bold text-emerald-600">$0.05</div>
                      <div className="text-sm text-muted-foreground">Cost per verification</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">$0.10</div>
                      <div className="text-sm text-muted-foreground">Revenue per verification</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="text-2xl font-bold text-purple-600">50%</div>
                      <div className="text-sm text-muted-foreground">Gross margin</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded">
                      <div className="text-2xl font-bold text-orange-600">$1,200</div>
                      <div className="text-sm text-muted-foreground">Annual customer value</div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <h4 className="font-semibold">Customer Acquisition</h4>
                    <div className="flex justify-between">
                      <span>Customer Acquisition Cost</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payback Period</span>
                      <span className="font-medium">1.5 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer Lifetime Value</span>
                      <span className="font-medium">$4,800</span>
                    </div>
                    <div className="flex justify-between font-bold text-emerald-600">
                      <span>LTV/CAC Ratio</span>
                      <span>32x</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Go-to-Market Strategy</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="font-medium">Government First</h4>
                    <p className="text-sm text-muted-foreground">Partner with MoHA & provinces</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Financial Services</h4>
                    <p className="text-sm text-muted-foreground">Banks & fintech companies</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Enterprise</h4>
                    <p className="text-sm text-muted-foreground">Large employers & HR systems</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-medium">International</h4>
                    <p className="text-sm text-muted-foreground">NGOs & development orgs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "traction":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Strong Early Traction</h2>
              <p className="text-xl text-muted-foreground">
                Validated demand and growing partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-600">Product Milestones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm">MVP Development Complete</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm">ZK Proof Engine Optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm">Mobile App Beta Released</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-sm">Pilot Program in Chitwan</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Partnerships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">MoU with Lumbini Province</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">Tribhuvan University Agreement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-sm">Nepal Bank Ltd Pilot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-sm">UNDP Partnership Discussion</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">User Adoption</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-purple-600">2,847</div>
                    <div className="text-sm text-muted-foreground">Beta Users</div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Retention Rate</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">NPS Score</span>
                    <span className="font-medium">+67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg. Verifications/User</span>
                    <span className="font-medium">8.3</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>12-Month Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold text-sm">Q1</span>
                      </div>
                      <h4 className="font-medium">Public Launch</h4>
                      <p className="text-sm text-muted-foreground">5,000 users in 2 provinces</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold text-sm">Q2</span>
                      </div>
                      <h4 className="font-medium">Enterprise API</h4>
                      <p className="text-sm text-muted-foreground">5 major partnerships</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 font-bold text-sm">Q3</span>
                      </div>
                      <h4 className="font-medium">Scale Operations</h4>
                      <p className="text-sm text-muted-foreground">25,000 users nationally</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-600 font-bold text-sm">Q4</span>
                      </div>
                      <h4 className="font-medium">Series A Prep</h4>
                      <p className="text-sm text-muted-foreground">$2.5M ARR target</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "financials":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Strong Financial Projections</h2>
              <p className="text-xl text-muted-foreground">
                Path to profitability with attractive returns
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>5-Year Financial Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 gap-2 text-xs font-medium border-b pb-2">
                      <div>Year</div>
                      <div>2025</div>
                      <div>2026</div>
                      <div>2027</div>
                      <div>2028</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm">
                      <div className="font-medium">Revenue</div>
                      <div>$0.5M</div>
                      <div>$2.8M</div>
                      <div>$8.5M</div>
                      <div>$18.2M</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm">
                      <div className="font-medium">Users</div>
                      <div>5K</div>
                      <div>25K</div>
                      <div>85K</div>
                      <div>180K</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm">
                      <div className="font-medium">Gross Margin</div>
                      <div>45%</div>
                      <div>52%</div>
                      <div>58%</div>
                      <div>63%</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm">
                      <div className="font-medium">EBITDA</div>
                      <div>-$0.8M</div>
                      <div>-$0.2M</div>
                      <div>$2.1M</div>
                      <div>$7.3M</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use of Funds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Product Development</span>
                        <span className="font-bold">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span>Sales & Marketing</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span>Operations & Infrastructure</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <Progress value={20} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span>Working Capital</span>
                        <span className="font-bold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>

                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-emerald-800">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                        <div>
                          <div className="font-medium">CAC Payback</div>
                          <div className="text-emerald-600">1.5 months</div>
                        </div>
                        <div>
                          <div className="font-medium">LTV/CAC</div>
                          <div className="text-emerald-600">32x</div>
                        </div>
                        <div>
                          <div className="font-medium">Churn Rate</div>
                          <div className="text-emerald-600">&lt;5%</div>
                        </div>
                        <div>
                          <div className="font-medium">Gross Retention</div>
                          <div className="text-emerald-600">95%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center bg-emerald-50">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-600">15x</div>
                  <div className="text-sm text-muted-foreground">Expected Return Multiple</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-blue-50">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">18 months</div>
                  <div className="text-sm text-muted-foreground">Time to Profitability</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-purple-50">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">$25M</div>
                  <div className="text-sm text-muted-foreground">5-Year Revenue Target</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "team":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">World-Class Team</h2>
              <p className="text-xl text-muted-foreground">
                Experienced founders with domain expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-emerald-100 text-emerald-600">SK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Suman KC</h4>
                      <p className="text-sm text-emerald-600">CEO & Co-founder</p>
                      <p className="text-sm text-muted-foreground">
                        Former fintech lead at Khalti, 8+ years in Nepal's digital payments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">AR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Anish Regmi</h4>
                      <p className="text-sm text-blue-600">CTO & Co-founder</p>
                      <p className="text-sm text-muted-foreground">
                        Blockchain engineer, MIT graduate, former Protocol Labs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-purple-100 text-purple-600">PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Priya Sharma</h4>
                      <p className="text-sm text-purple-600">Head of Partnerships</p>
                      <p className="text-sm text-muted-foreground">
                        Former UNDP program manager, deep government relations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advisory Board</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-green-100 text-green-600">BB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Dr. Binay Bhattarai</h4>
                      <p className="text-sm text-green-600">Digital Identity Expert</p>
                      <p className="text-sm text-muted-foreground">
                        Former joint secretary, Ministry of Home Affairs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-orange-100 text-orange-600">RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Ranjana Khadka</h4>
                      <p className="text-sm text-orange-600">Fintech Advisor</p>
                      <p className="text-sm text-muted-foreground">
                        Co-founder of IME Digital, payments industry veteran
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">MT</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Mark Thompson</h4>
                      <p className="text-sm text-indigo-600">Tech Advisor</p>
                      <p className="text-sm text-muted-foreground">
                        Former Mina Foundation, zero-knowledge proof expert
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Team Strengths</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Lightbulb className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="font-medium">Deep Tech Expertise</h4>
                    <p className="text-sm text-muted-foreground">ZK proofs, blockchain, cryptography</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Local Market Knowledge</h4>
                    <p className="text-sm text-muted-foreground">Nepal fintech & government relations</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Product Experience</h4>
                    <p className="text-sm text-muted-foreground">Built & scaled consumer products</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-medium">Execution Track Record</h4>
                    <p className="text-sm text-muted-foreground">Multiple successful exits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "ask":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Investment Opportunity</h2>
              <p className="text-xl text-muted-foreground">
                Join us in revolutionizing digital identity for Nepal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Seed Round Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$2.5M</div>
                    <div className="text-emerald-700">Raising Amount</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Valuation</span>
                      <span className="font-medium">$10M pre-money</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equity Offered</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum Investment</span>
                      <span className="font-medium">$50K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Use of Funds</span>
                      <span className="font-medium">18-month runway</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Invest Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">First-Mover Advantage</p>
                      <p className="text-sm text-muted-foreground">Only ZK-proof identity solution in Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Proven Team</p>
                      <p className="text-sm text-muted-foreground">Track record in Nepal's fintech market</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Strong Partnerships</p>
                      <p className="text-sm text-muted-foreground">Government and university backing</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Massive Market</p>
                      <p className="text-sm text-muted-foreground">$25M+ addressable opportunity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Join us in building the future of digital identity for Nepal.
                  Together, we can bring privacy-preserving verification to 30 million citizens.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Schedule Meeting
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                    Request Due Diligence Pack
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600">15x</div>
                <div className="text-sm text-muted-foreground">Expected Return Multiple</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5 years</div>
                <div className="text-sm text-muted-foreground">Investment Horizon</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">$100M+</div>
                <div className="text-sm text-muted-foreground">Series A Target Valuation</div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Slide content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Slide Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} of {slides.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Slide Content */}
          <Card className="min-h-[600px]">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold">
                {slides[currentSlide].title}
              </CardTitle>
              <CardDescription className="text-lg">
                {slides[currentSlide].subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              {renderSlideContent()}
            </CardContent>
          </Card>

          {/* Slide Progress */}
          <div className="mt-6">
            <Progress value={(currentSlide + 1) / slides.length * 100} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
