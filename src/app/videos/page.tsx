import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Download,
  Share,
  Clock,
  Users,
  Eye,
  Smartphone,
  Shield,
  QrCode,
  CheckCircle,
  Star
} from "lucide-react"

export default function VideosPage() {
  const videoCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn the basics of Veridity",
      videos: [
        {
          id: "onboarding",
          title: "Complete Onboarding Process",
          description: "Step-by-step guide to setting up your Veridity identity wallet",
          duration: "4:32",
          views: "12.3K",
          rating: 4.8,
          level: "Beginner",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Account Setup", "Identity Verification", "Security Setup"],
          transcript: "Learn how to create your Veridity account, verify your identity with government documents, and set up security features including PIN and biometric authentication."
        },
        {
          id: "first-verification",
          title: "Your First Identity Verification",
          description: "Generate and share your first zero-knowledge proof",
          duration: "3:15",
          views: "8.7K",
          rating: 4.9,
          level: "Beginner",
          thumbnail: "/api/placeholder/320/180",
          topics: ["ZK Proofs", "QR Codes", "Privacy"],
          transcript: "See how to create your first privacy-preserving proof to verify your age without revealing your birth date."
        }
      ]
    },
    {
      id: "use-cases",
      title: "Real-World Use Cases",
      description: "See Veridity in action",
      videos: [
        {
          id: "banking-demo",
          title: "Opening a Bank Account",
          description: "Complete bank account opening using Veridity verification",
          duration: "6:45",
          views: "15.2K",
          rating: 4.7,
          level: "Intermediate",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Banking", "KYC", "Financial Inclusion"],
          transcript: "Watch a real user open a bank account remotely using Veridity's privacy-preserving identity verification, reducing the process from weeks to minutes."
        },
        {
          id: "job-application",
          title: "Verifying Education for Job Applications",
          description: "Prove your university degree to employers privately",
          duration: "4:18",
          views: "9.4K",
          rating: 4.6,
          level: "Intermediate",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Education", "Employment", "Credentials"],
          transcript: "See how job seekers can prove their educational qualifications to employers without sharing sensitive personal information."
        },
        {
          id: "government-services",
          title: "Accessing Government Services",
          description: "Use Veridity for digital government service applications",
          duration: "5:23",
          views: "11.8K",
          rating: 4.8,
          level: "Intermediate",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Government", "Digital Services", "Citizenship"],
          transcript: "Learn how citizens can access government services online by proving their citizenship and residency without exposing sensitive data."
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Features",
      description: "Power user capabilities",
      videos: [
        {
          id: "multiple-credentials",
          title: "Managing Multiple Credentials",
          description: "Organize and use different identity credentials effectively",
          duration: "7:12",
          views: "5.3K",
          rating: 4.5,
          level: "Advanced",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Credential Management", "Organization", "Privacy Controls"],
          transcript: "Discover how to manage multiple identity credentials from different issuers and control what information is shared in each verification."
        },
        {
          id: "offline-verification",
          title: "Offline Verification in Rural Areas",
          description: "Using Veridity without internet connectivity",
          duration: "5:55",
          views: "6.7K",
          rating: 4.9,
          level: "Advanced",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Offline Mode", "Rural Access", "QR Codes"],
          transcript: "See how Veridity works in areas with limited internet connectivity using offline proof generation and QR code verification."
        }
      ]
    },
    {
      id: "case-studies",
      title: "Field Stories",
      description: "Real stories from Nepal",
      videos: [
        {
          id: "chitwan-farmer",
          title: "Chitwan Farmer Success Story",
          description: "Ram Bahadur's journey from cash-only to digital banking",
          duration: "8:30",
          views: "18.5K",
          rating: 4.9,
          level: "Story",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Rural Banking", "Financial Inclusion", "Impact Story"],
          transcript: "Follow Ram Bahadur Thapa, a farmer from Chitwan, as he opens his first bank account using Veridity and transforms his agricultural business."
        },
        {
          id: "student-scholarship",
          title: "Student Wins Scholarship with Veridity",
          description: "How Sita from Lumbini secured education funding",
          duration: "6:15",
          views: "13.2K",
          rating: 4.8,
          level: "Story",
          thumbnail: "/api/placeholder/320/180",
          topics: ["Education", "Scholarships", "Youth Empowerment"],
          transcript: "Meet Sita Kumari Sharma, who used Veridity to verify her academic credentials and secure a merit scholarship for higher studies."
        }
      ]
    }
  ]

  const stats = {
    totalVideos: videoCategories.reduce((sum, cat) => sum + cat.videos.length, 0),
    totalViews: "147.3K",
    avgRating: 4.7,
    totalDuration: "52 minutes"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Video Library
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Veridity in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch real demonstrations of Veridity's privacy-preserving identity verification
            system in action across Nepal
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600">{stats.totalVideos}</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.totalViews}</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{stats.avgRating}</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{stats.totalDuration}</div>
            <div className="text-sm text-muted-foreground">Total Runtime</div>
          </div>
        </div>

        {/* Video Categories */}
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {videoCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {videoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Video Thumbnail */}
                    <div className="relative group cursor-pointer">
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="lg" className="rounded-full">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      <Badge
                        variant={video.level === 'Beginner' ? 'default' : video.level === 'Story' ? 'secondary' : 'outline'}
                        className="absolute top-2 left-2"
                      >
                        {video.level}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {video.description}
                      </p>

                      {/* Video Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{video.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{video.duration}</span>
                        </div>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Playlist */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>📱 Complete Mobile App Tutorial Playlist</CardTitle>
            <CardDescription>
              Full walkthrough of all Veridity mobile features (23 minutes)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">What You'll Learn:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>Setting up your digital identity wallet</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>Generating zero-knowledge proofs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>Verifying identity with QR codes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>Managing multiple credentials</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>Privacy and security best practices</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Complete Tutorial Playlist</p>
                    <p className="text-xs text-gray-400">23:45 total runtime</p>
                  </div>
                </div>
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Start Tutorial Series
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🌐 Available Languages</CardTitle>
            <CardDescription>
              All videos available with subtitles and narration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 border rounded-lg">
                <div className="text-2xl mb-1">🇳🇵</div>
                <div className="font-medium">नेपाली</div>
                <div className="text-xs text-muted-foreground">Nepali</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="text-2xl mb-1">🇺🇸</div>
                <div className="font-medium">English</div>
                <div className="text-xs text-muted-foreground">English</div>
              </div>
              <div className="text-center p-3 border rounded-lg opacity-50">
                <div className="text-2xl mb-1">🇮🇳</div>
                <div className="font-medium">हिन्दी</div>
                <div className="text-xs text-muted-foreground">Coming Soon</div>
              </div>
              <div className="text-center p-3 border rounded-lg opacity-50">
                <div className="text-2xl mb-1">🇧🇩</div>
                <div className="font-medium">বাংলা</div>
                <div className="text-xs text-muted-foreground">Coming Soon</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Try Veridity?</h2>
          <p className="text-muted-foreground mb-6">
            Start your privacy-preserving digital identity journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/app">Try User App</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/onboarding">Start Onboarding</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
