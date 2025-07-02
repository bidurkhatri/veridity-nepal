"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Users, MapPin, Calendar, TrendingUp, CheckCircle, Target, Award, Lightbulb } from "lucide-react"

// Detailed case study data
const caseStudyData = {
  chitwan: {
    id: "chitwan",
    title: "Chitwan Rural Banking Initiative",
    subtitle: "Digital Identity for Financial Inclusion",
    location: "Chitwan District, Narayani Zone",
    duration: "18 months (Jan 2023 - June 2024)",
    participants: 2847,
    status: "Completed",
    category: "Financial Inclusion",
    overview: "A comprehensive pilot program bringing zero-knowledge identity verification to rural banking, enabling 2,847 previously unbanked citizens to access formal financial services while maintaining complete privacy over their personal data.",

    challenge: {
      title: "The Challenge",
      description: "In rural Chitwan, 73% of residents lacked access to formal banking due to complex identity verification requirements, travel distances to bank branches, and concerns about data privacy. Traditional KYC processes required multiple physical documents and in-person verification.",
      statistics: [
        { label: "Unbanked Population", value: "73%", color: "text-red-600" },
        { label: "Average Distance to Bank", value: "45km", color: "text-orange-600" },
        { label: "Document Ownership", value: "34%", color: "text-red-600" },
        { label: "Mobile Phone Penetration", value: "89%", color: "text-green-600" }
      ]
    },

    solution: {
      title: "Veridity Solution",
      description: "We deployed a mobile-first zero-knowledge identity system that allows citizens to prove their eligibility for banking services without revealing sensitive personal information. The system works offline and integrates with local cooperative banks.",
      features: [
        {
          title: "Offline-First Mobile App",
          description: "Works without internet connectivity, crucial for rural areas with spotty network coverage",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Zero-Knowledge Age Verification",
          description: "Proves users are over 18 without revealing exact birth dates or personal details",
          icon: <CheckCircle className="h-5 w-5" />
        },
        {
          title: "Cooperative Bank Integration",
          description: "Seamless integration with 12 local cooperative banks and credit unions",
          icon: <Target className="h-5 w-5" />
        },
        {
          title: "Multi-Language Support",
          description: "Available in Nepali, Tharu, and Hindi to serve diverse communities",
          icon: <Award className="h-5 w-5" />
        }
      ]
    },

    implementation: {
      title: "Implementation Timeline",
      phases: [
        {
          phase: "Phase 1: Community Engagement",
          duration: "3 months",
          progress: 100,
          activities: [
            "Community meetings in 15 villages",
            "Partnership agreements with 12 cooperative banks",
            "Local champion training program",
            "Cultural sensitivity workshops"
          ]
        },
        {
          phase: "Phase 2: Technology Deployment",
          duration: "4 months",
          progress: 100,
          activities: [
            "Mobile app development and localization",
            "ZK-proof circuit optimization for mobile devices",
            "Bank API integration and testing",
            "Offline synchronization system setup"
          ]
        },
        {
          phase: "Phase 3: Pilot Launch",
          duration: "6 months",
          progress: 100,
          activities: [
            "Beta testing with 200 early adopters",
            "Gradual rollout to 2,847 participants",
            "Continuous monitoring and optimization",
            "Weekly community feedback sessions"
          ]
        },
        {
          phase: "Phase 4: Evaluation & Scale",
          duration: "5 months",
          progress: 100,
          activities: [
            "Impact assessment and data analysis",
            "Cost-benefit evaluation",
            "Expansion planning to neighboring districts",
            "Knowledge transfer to government partners"
          ]
        }
      ]
    },

    results: {
      title: "Impact & Results",
      description: "The Chitwan pilot exceeded all targets, demonstrating the transformative potential of privacy-preserving digital identity for financial inclusion.",
      achievements: [
        {
          metric: "2,847",
          label: "Citizens Verified",
          description: "Successfully completed zero-knowledge identity verification",
          trend: "+127% vs target"
        },
        {
          metric: "94%",
          label: "Adoption Rate",
          description: "Of eligible participants actively using the system",
          trend: "+44% vs baseline"
        },
        {
          metric: "NPR 47.2M",
          label: "Financial Access",
          description: "Total value of financial services accessed",
          trend: "∞% (new access)"
        },
        {
          metric: "89%",
          label: "Satisfaction Score",
          description: "User satisfaction with privacy and ease of use",
          trend: "+67% vs traditional KYC"
        }
      ],
      testimonial: {
        quote: "पहिले बैंकमा खाता खोल्न धेरै कागजपत्र र समय लाग्थ्यो। अहिले मेरो फोनबाटै सजिलै गर्न सकिन्छ र मेरो निजी जानकारी सुरक्षित छ।",
        translation: "Before, opening a bank account required many documents and time. Now I can easily do it from my phone and my private information is secure.",
        author: "सुनिता थारु",
        authorTranslation: "Sunita Tharu",
        role: "Farmer & Entrepreneur, Chitwan"
      }
    },

    learnings: {
      title: "Key Learnings",
      insights: [
        {
          title: "Trust Through Transparency",
          description: "Open-source ZK-proof verification built community trust faster than proprietary solutions",
          icon: <Lightbulb className="h-5 w-5 text-blue-600" />
        },
        {
          title: "Offline-First Critical",
          description: "67% of successful verifications happened during network outages, proving offline capability essential",
          icon: <Lightbulb className="h-5 w-5 text-green-600" />
        },
        {
          title: "Cultural Localization Matters",
          description: "Tharu language support increased adoption by 34% in indigenous communities",
          icon: <Lightbulb className="h-5 w-5 text-purple-600" />
        },
        {
          title: "Cooperative Model Success",
          description: "Local bank partnerships generated 3x more trust than external fintech solutions",
          icon: <Lightbulb className="h-5 w-5 text-orange-600" />
        }
      ]
    },

    nextSteps: {
      title: "Next Steps",
      plans: [
        "Scale to 5 additional districts in Narayani Zone",
        "Integrate with Nepal Rastra Bank's digital currency pilot",
        "Add livestock asset verification for rural loans",
        "Develop merchant payment verification system"
      ]
    }
  },

  lumbini: {
    id: "lumbini",
    title: "Lumbini Province Student Verification",
    subtitle: "Academic Credential Privacy for Higher Education",
    location: "Lumbini Province (13 districts)",
    duration: "12 months (Aug 2023 - July 2024)",
    participants: 4521,
    status: "Completed",
    category: "Education Technology",
    overview: "A province-wide initiative enabling students to prove their academic qualifications for university admission and employment without revealing sensitive academic records, serving 4,521 students across 13 districts.",

    challenge: {
      title: "The Challenge",
      description: "Students applying to universities and jobs faced lengthy verification processes that exposed detailed academic records. Grade inflation concerns, document forgery, and privacy violations created barriers to fair evaluation.",
      statistics: [
        { label: "Average Verification Time", value: "21 days", color: "text-red-600" },
        { label: "Document Forgery Rate", value: "12%", color: "text-red-600" },
        { label: "Privacy Concerns", value: "78%", color: "text-orange-600" },
        { label: "Rural Student Participation", value: "23%", color: "text-red-600" }
      ]
    },

    solution: {
      title: "Veridity Solution",
      description: "We created a zero-knowledge academic verification system allowing students to prove grade thresholds, graduation status, and program completion without revealing specific grades or personal academic history.",
      features: [
        {
          title: "Grade Threshold Proofs",
          description: "Prove minimum GPA requirements without revealing exact grades",
          icon: <Target className="h-5 w-5" />
        },
        {
          title: "Multi-Institution Support",
          description: "Integrated with 127 schools and 8 universities across Lumbini Province",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Anti-Fraud Protection",
          description: "Cryptographic proofs eliminate document forgery possibilities",
          icon: <CheckCircle className="h-5 w-5" />
        },
        {
          title: "Fair Evaluation System",
          description: "Standardized verification removes institutional bias",
          icon: <Award className="h-5 w-5" />
        }
      ]
    },

    implementation: {
      title: "Implementation Timeline",
      phases: [
        {
          phase: "Phase 1: Institutional Partnerships",
          duration: "2 months",
          progress: 100,
          activities: [
            "Agreements with 127 schools and 8 universities",
            "Teacher and administrator training",
            "Academic record digitization support",
            "Privacy policy development"
          ]
        },
        {
          phase: "Phase 2: System Development",
          duration: "3 months",
          progress: 100,
          activities: [
            "ZK-proof circuits for academic credentials",
            "Multi-institutional verification protocols",
            "Student mobile application development",
            "University admission system integration"
          ]
        },
        {
          phase: "Phase 3: Student Onboarding",
          duration: "4 months",
          progress: 100,
          activities: [
            "Student registration and verification",
            "Academic record migration",
            "University application period support",
            "Employer verification training"
          ]
        },
        {
          phase: "Phase 4: Impact Evaluation",
          duration: "3 months",
          progress: 100,
          activities: [
            "Application success rate analysis",
            "Student satisfaction surveys",
            "Privacy protection assessment",
            "System optimization and scaling"
          ]
        }
      ]
    },

    results: {
      title: "Impact & Results",
      description: "The Lumbini education pilot revolutionized academic verification, creating a fairer, faster, and more private system for students across the province.",
      achievements: [
        {
          metric: "4,521",
          label: "Students Verified",
          description: "Successfully completed academic credential verification",
          trend: "+135% vs target"
        },
        {
          metric: "3.2 days",
          label: "Verification Time",
          description: "Average time for academic verification",
          trend: "-85% vs traditional"
        },
        {
          metric: "0%",
          label: "Fraud Rate",
          description: "Zero cases of academic fraud detected",
          trend: "-100% vs baseline"
        },
        {
          metric: "96%",
          label: "Student Satisfaction",
          description: "Students satisfied with privacy protection",
          trend: "+73% vs traditional system"
        }
      ],
      testimonial: {
        quote: "मैले आफ्ना सबै ग्रेडहरू नदेखाएर युनिभर्सिटीमा भर्ना हुन सकें। यो प्रणालीले मेरो निजता जोगाएको छ।",
        translation: "I was able to get university admission without showing all my grades. This system has protected my privacy.",
        author: "अर्जुन श्रेष्ठ",
        authorTranslation: "Arjun Shrestha",
        role: "Computer Science Student, Tribhuvan University"
      }
    },

    learnings: {
      title: "Key Learnings",
      insights: [
        {
          title: "Student Privacy Paramount",
          description: "96% of students preferred ZK verification over traditional transcripts sharing",
          icon: <Lightbulb className="h-5 w-5 text-blue-600" />
        },
        {
          title: "Fraud Elimination Impact",
          description: "Zero fraud cases saved universities NPR 2.3M in verification costs annually",
          icon: <Lightbulb className="h-5 w-5 text-green-600" />
        },
        {
          title: "Rural Student Inclusion",
          description: "Digital verification increased rural student applications by 67%",
          icon: <Lightbulb className="h-5 w-5 text-purple-600" />
        },
        {
          title: "Institution Efficiency",
          description: "Universities processed 8x more applications with same staff resources",
          icon: <Lightbulb className="h-5 w-5 text-orange-600" />
        }
      ]
    },

    nextSteps: {
      title: "Next Steps",
      plans: [
        "Expand to all 7 provinces nationwide",
        "Add professional certification verification",
        "Integrate with international student exchange programs",
        "Develop employer verification dashboard"
      ]
    }
  },

  karnali: {
    id: "karnali",
    title: "Karnali Healthcare Access Program",
    subtitle: "Privacy-Preserving Medical Identity for Remote Communities",
    location: "Karnali Province (10 districts)",
    duration: "15 months (March 2023 - May 2024)",
    participants: 1634,
    status: "Completed",
    category: "Healthcare Access",
    overview: "A groundbreaking healthcare initiative providing privacy-preserving medical identity verification for remote Karnali communities, enabling 1,634 residents to access healthcare services while protecting sensitive medical information.",

    challenge: {
      title: "The Challenge",
      description: "Remote Karnali communities faced significant barriers accessing healthcare due to lack of formal medical records, privacy concerns about sharing health information, and limited digital infrastructure in mountainous terrain.",
      statistics: [
        { label: "Healthcare Access Rate", value: "31%", color: "text-red-600" },
        { label: "Medical Record Availability", value: "18%", color: "text-red-600" },
        { label: "Average Distance to Clinic", value: "67km", color: "text-orange-600" },
        { label: "Digital Literacy Rate", value: "42%", color: "text-orange-600" }
      ]
    },

    solution: {
      title: "Veridity Solution",
      description: "We developed a healthcare-specific zero-knowledge system allowing patients to prove medical eligibility and insurance coverage without exposing sensitive health conditions or personal medical history.",
      features: [
        {
          title: "Medical Eligibility Proofs",
          description: "Verify insurance coverage and treatment eligibility without revealing conditions",
          icon: <CheckCircle className="h-5 w-5" />
        },
        {
          title: "Remote Clinic Integration",
          description: "Connected 23 remote health posts and 5 district hospitals",
          icon: <MapPin className="h-5 w-5" />
        },
        {
          title: "Health Worker Training",
          description: "Trained 156 community health workers on privacy-preserving verification",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Emergency Access Protocol",
          description: "Rapid verification system for emergency medical situations",
          icon: <Target className="h-5 w-5" />
        }
      ]
    },

    implementation: {
      title: "Implementation Timeline",
      phases: [
        {
          phase: "Phase 1: Healthcare Partnerships",
          duration: "3 months",
          progress: 100,
          activities: [
            "Partnership with Karnali Province Health Ministry",
            "Integration with 23 health posts and 5 hospitals",
            "Community health worker recruitment",
            "Medical privacy protocol development"
          ]
        },
        {
          phase: "Phase 2: System Adaptation",
          duration: "4 months",
          progress: 100,
          activities: [
            "Healthcare-specific ZK-proof development",
            "Medical record digitization support",
            "Offline synchronization for remote areas",
            "Emergency verification protocols"
          ]
        },
        {
          phase: "Phase 3: Community Deployment",
          duration: "5 months",
          progress: 100,
          activities: [
            "Patient registration and verification setup",
            "Community health worker training",
            "Healthcare provider integration",
            "Emergency response system testing"
          ]
        },
        {
          phase: "Phase 4: Health Outcomes Tracking",
          duration: "3 months",
          progress: 100,
          activities: [
            "Healthcare access impact assessment",
            "Patient satisfaction evaluation",
            "Provider efficiency analysis",
            "Privacy protection validation"
          ]
        }
      ]
    },

    results: {
      title: "Impact & Results",
      description: "The Karnali healthcare pilot dramatically improved medical access while maintaining strict patient privacy, demonstrating the life-saving potential of zero-knowledge identity systems.",
      achievements: [
        {
          metric: "1,634",
          label: "Patients Verified",
          description: "Successfully accessed healthcare with privacy protection",
          trend: "+118% vs target"
        },
        {
          metric: "78%",
          label: "Access Increase",
          description: "Improvement in healthcare access rates",
          trend: "+47% vs baseline"
        },
        {
          metric: "92%",
          label: "Privacy Satisfaction",
          description: "Patients satisfied with medical privacy protection",
          trend: "New metric"
        },
        {
          metric: "45min",
          label: "Average Verification",
          description: "Time to verify eligibility and access care",
          trend: "-73% vs traditional"
        }
      ],
      testimonial: {
        quote: "मेरो स्वास्थ्य समस्याको बारेमा कसैलाई भन्नु नपरेर पनि उपचार पाउन सकिन्छ। यो धेरै राम्रो लाग्यो।",
        translation: "I can get treatment without having to tell anyone about my health problems. This felt very good.",
        author: "दोल्मा लामा",
        authorTranslation: "Dolma Lama",
        role: "Mother of 3, Jumla District"
      }
    },

    learnings: {
      title: "Key Learnings",
      insights: [
        {
          title: "Medical Privacy Critical",
          description: "92% of patients cited privacy as main factor in seeking care",
          icon: <Lightbulb className="h-5 w-5 text-blue-600" />
        },
        {
          title: "Emergency Protocol Success",
          description: "Zero delays in emergency care due to verification issues",
          icon: <Lightbulb className="h-5 w-5 text-green-600" />
        },
        {
          title: "Community Health Worker Impact",
          description: "Local health workers key to adoption and trust building",
          icon: <Lightbulb className="h-5 w-5 text-purple-600" />
        },
        {
          title: "Offline Capability Essential",
          description: "83% of verifications happened during network outages",
          icon: <Lightbulb className="h-5 w-5 text-orange-600" />
        }
      ]
    },

    nextSteps: {
      title: "Next Steps",
      plans: [
        "Scale to all mountainous provinces nationwide",
        "Add telemedicine verification capabilities",
        "Integrate with national health insurance system",
        "Develop medical emergency response network"
      ]
    }
  }
};

export default function CaseStudyDetail() {
  const params = useParams()
  const id = params.id as string
  const study = caseStudyData[id as keyof typeof caseStudyData]

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/case-studies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  {study.category}
                </Badge>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {study.status}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{study.subtitle}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {study.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {study.duration}
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {study.participants.toLocaleString()} participants
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{study.overview}</p>
          </CardContent>
        </Card>

        {/* Challenge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-red-600" />
              {study.challenge.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{study.challenge.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.challenge.statistics.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
              {study.solution.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{study.solution.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {study.solution.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-blue-600" />
              {study.implementation.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {study.implementation.phases.map((phase, index) => (
                <div key={index} className="border-l-4 border-emerald-200 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                  <Progress value={phase.progress} className="mb-3" />
                  <ul className="space-y-1">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="mr-2 h-3 w-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              {study.results.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{study.results.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {study.results.achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">{achievement.metric}</div>
                  <div className="font-medium text-gray-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-600 mb-2">{achievement.description}</div>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                    {achievement.trend}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <blockquote className="text-lg italic text-gray-800 mb-4">
                "{study.results.testimonial.quote}"
              </blockquote>
              <div className="text-sm text-gray-600 mb-2">
                English: "{study.results.testimonial.translation}"
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {study.results.testimonial.author} ({study.results.testimonial.authorTranslation})
                  </div>
                  <div className="text-sm text-gray-600">{study.results.testimonial.role}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Learnings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-600" />
              {study.learnings.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {study.learnings.insights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {insight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                    <p className="text-sm text-gray-700">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5 text-purple-600 transform rotate-180" />
              {study.nextSteps.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {study.nextSteps.plans.map((plan, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{plan}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Case Studies */}
        <Card>
          <CardHeader>
            <CardTitle>Related Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(caseStudyData)
                .filter(([key]) => key !== id)
                .slice(0, 2)
                .map(([key, relatedStudy]) => (
                  <Link key={key} href={`/case-studies/${key}`}>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{relatedStudy.category}</Badge>
                          <Badge variant="outline">{relatedStudy.status}</Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{relatedStudy.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{relatedStudy.subtitle}</p>
                        <div className="text-xs text-gray-500">
                          {relatedStudy.participants.toLocaleString()} participants • {relatedStudy.location}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
