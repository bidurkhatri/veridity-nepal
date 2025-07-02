import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  BarChart3,
  Smartphone,
  DollarSign
} from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "chitwan",
      title: "Chitwan Rural Banking Initiative",
      location: "Bharatpur, Chitwan District",
      duration: "March - August 2024",
      participants: 2847,
      status: "Completed",
      category: "Financial Inclusion",
      impact: {
        accountsOpened: 1923,
        loanApplications: 567,
        successRate: 94.3,
        timeReduction: 78
      },
      description: "Pioneering digital identity verification for rural banking access in Chitwan's farming communities.",
      problem: "Over 60% of farmers in rural Chitwan lacked proper documentation for bank account opening, requiring 3-4 trips to district headquarters.",
      solution: "Deployed Veridity mobile identity wallets with government partnership for citizenship verification and income proof via agricultural cooperative records.",
      results: [
        "1,923 new bank accounts opened in 6 months",
        "Average verification time reduced from 5 days to 2 hours",
        "₹2.3 crore in agricultural loans disbursed",
        "94.3% user satisfaction rate"
      ],
      testimonials: [
        {
          name: "Ram Bahadur Thapa",
          role: "Farmer, Chitwan",
          quote: "मेरो फोनबाट बैंक खाता खोल्न पाउँदा खुसी लाग्यो। अब जिल्ला सदरमुकाम जानु पर्दैन।",
          translation: "I was happy to open a bank account from my phone. Now I don't need to go to the district headquarters."
        }
      ],
      metrics: [
        { label: "Travel Cost Saved", value: "₹45,000", description: "per participant on average" },
        { label: "Time Saved", value: "12 hours", description: "per verification process" },
        { label: "Documentation Accuracy", value: "99.1%", description: "vs 87% traditional" }
      ],
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    },
    {
      id: "lumbini",
      title: "Lumbini Province Student Verification",
      location: "Multiple Districts, Lumbini Province",
      duration: "June - December 2024",
      participants: 4521,
      status: "Ongoing",
      category: "Education",
      impact: {
        certificatesVerified: 3891,
        scholarshipApplications: 892,
        successRate: 96.7,
        timeReduction: 85
      },
      description: "Streamlining university credential verification for scholarship applications and job placements.",
      problem: "Students from remote areas spent weeks traveling to universities for transcript verification, often missing scholarship deadlines.",
      solution: "Integrated Veridity with Tribhuvan University's credential database, enabling instant degree verification via zero-knowledge proofs.",
      results: [
        "3,891 academic credentials verified digitally",
        "892 scholarship applications processed faster",
        "85% reduction in verification time",
        "Zero fraudulent credential attempts detected"
      ],
      testimonials: [
        {
          name: "Sita Kumari Sharma",
          role: "Graduate Student, TU",
          quote: "मेरो डिग्री प्रमाणित गर्न काठमाडौं आउनु परेन। घरैबाट स्कॉलरशिपका लागि आवेदन दिन सकिन्छ।",
          translation: "I didn't have to come to Kathmandu to verify my degree. I can apply for scholarships from home."
        }
      ],
      metrics: [
        { label: "Fraud Prevention", value: "100%", description: "fraudulent attempts detected" },
        { label: "Cost Reduction", value: "67%", description: "in verification expenses" },
        { label: "Processing Speed", value: "3 minutes", description: "vs 2 weeks traditional" }
      ],
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    },
    {
      id: "karnali",
      title: "Karnali Healthcare Access Program",
      location: "Surkhet, Karnali Province",
      duration: "September 2024 - Ongoing",
      participants: 1634,
      status: "Active",
      category: "Healthcare",
      impact: {
        medicalRecords: 1456,
        insuranceClaims: 234,
        successRate: 91.8,
        timeReduction: 72
      },
      description: "Enabling secure medical record verification for remote healthcare access and insurance claims.",
      problem: "Patients in remote Karnali regions couldn't access specialized healthcare due to lack of verifiable medical history.",
      solution: "Created portable medical identity wallets linked to government health insurance, enabling instant medical history verification.",
      results: [
        "1,456 digital medical records created",
        "234 insurance claims processed successfully",
        "72% faster healthcare service delivery",
        "₹18 lakh in insurance claims processed"
      ],
      testimonials: [
        {
          name: "Dr. Prakash Kandel",
          role: "District Hospital, Surkhet",
          quote: "बिरामीको पुरानो रेकर्ड तुरुन्तै देख्न पाउँदा उपचारमा धेरै सहयोग भएको छ।",
          translation: "Being able to see patient's old records instantly has helped a lot in treatment."
        }
      ],
      metrics: [
        { label: "Emergency Response", value: "45%", description: "faster critical care" },
        { label: "Insurance Approval", value: "91.8%", description: "first-time approval rate" },
        { label: "Patient Satisfaction", value: "4.6/5", description: "user experience rating" }
      ],
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    }
  ]

  const overallStats = {
    totalParticipants: 9002,
    totalVerifications: 12847,
    averageTimeSaved: "8.4 hours",
    costSavings: "₹1.2 crore",
    userSatisfaction: 94.1
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Real-World Impact
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Case Studies from Rural Nepal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Veridity is transforming lives across Nepal's rural communities through
            privacy-preserving digital identity verification
          </p>
        </div>

        {/* Overall Impact Stats */}
        <Card className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-center">Collective Impact Across All Pilots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">{overallStats.totalParticipants.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{overallStats.totalVerifications.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Verifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">{overallStats.averageTimeSaved}</div>
                <div className="text-sm text-muted-foreground">Avg Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">{overallStats.costSavings}</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">{overallStats.userSatisfaction}%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{study.category}</Badge>
                        <Badge variant={study.status === 'Completed' ? 'default' : study.status === 'Ongoing' ? 'secondary' : 'outline'}>
                          {study.status}
                        </Badge>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{study.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{study.participants.toLocaleString()} participants</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Challenge</h3>
                      <p className="text-sm">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-blue-700 mb-2">Solution</h3>
                      <p className="text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-emerald-700 mb-2">Results</h3>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Quote className="h-5 w-5 text-emerald-600 mb-2" />
                      <blockquote className="text-sm italic mb-2">
                        "{study.testimonials[0].quote}"
                      </blockquote>
                      <p className="text-xs text-muted-foreground mb-1">
                        English: "{study.testimonials[0].translation}"
                      </p>
                      <footer className="text-sm font-medium">
                        — {study.testimonials[0].name}, {study.testimonials[0].role}
                      </footer>
                    </div>
                  </div>
                </div>

                {/* Metrics Sidebar */}
                <div className="lg:col-span-1 bg-gray-50 p-6">
                  <h3 className="font-semibold mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
                        <div className="text-sm font-medium">{metric.label}</div>
                        <div className="text-xs text-muted-foreground">{metric.description}</div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <h4 className="font-medium mb-3">Impact Breakdown</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Success Rate</span>
                        <span>{study.impact.successRate}%</span>
                      </div>
                      <Progress value={study.impact.successRate} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Time Reduction</span>
                        <span>{study.impact.timeReduction}%</span>
                      </div>
                      <Progress value={study.impact.timeReduction} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full" size="sm" asChild>
                      <Link href={`/case-studies/${study.id}`}>
                        View Full Report <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Upcoming Pilot Programs</CardTitle>
            <CardDescription>
              New initiatives launching in 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Gandaki Province Tourism</h4>
                <p className="text-sm text-muted-foreground">
                  Tourist identity verification for homestays and trekking permits
                </p>
                <Badge variant="outline">Q1 2025</Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Madhesh Agricultural Loans</h4>
                <p className="text-sm text-muted-foreground">
                  Crop insurance and agricultural loan verification system
                </p>
                <Badge variant="outline">Q2 2025</Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Sudurpashchim Migration</h4>
                <p className="text-sm text-muted-foreground">
                  Cross-border identity verification for migrant workers
                </p>
                <Badge variant="outline">Q3 2025</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Want to Implement Veridity in Your Community?</h2>
          <p className="text-muted-foreground mb-6">
            Join our growing network of partners transforming digital identity verification across Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/onboarding">Start Pilot Program</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Partnership Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
