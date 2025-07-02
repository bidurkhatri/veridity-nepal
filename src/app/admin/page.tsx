"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  Users,
  Shield,
  CheckCircle,
  AlertTriangle,
  Building2,
  FileText,
  Clock,
  TrendingUp,
  UserCheck,
  Globe,
  Smartphone
} from "lucide-react"

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")

  const stats = [
    {
      title: "Total Verifications",
      value: "24,847",
      change: "+12.5%",
      trend: "up",
      icon: <Shield className="h-4 w-4" />
    },
    {
      title: "Active Users",
      value: "8,342",
      change: "+8.2%",
      trend: "up",
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "Avg Proof Time",
      value: "2.1s",
      change: "-0.3s",
      trend: "up",
      icon: <Clock className="h-4 w-4" />
    },
    {
      title: "Success Rate",
      value: "99.7%",
      change: "+0.1%",
      trend: "up",
      icon: <CheckCircle className="h-4 w-4" />
    }
  ]

  const recentVerifications = [
    {
      id: "VER-001",
      type: "Age Verification",
      user: "Anonymous User",
      verifier: "Nepal Bank Ltd",
      status: "success",
      timestamp: "2 minutes ago"
    },
    {
      id: "VER-002",
      type: "Education Credential",
      user: "Anonymous User",
      verifier: "Tech Company XYZ",
      status: "success",
      timestamp: "5 minutes ago"
    },
    {
      id: "VER-003",
      type: "Residency Proof",
      user: "Anonymous User",
      verifier: "Government Portal",
      status: "pending",
      timestamp: "8 minutes ago"
    },
    {
      id: "VER-004",
      type: "Income Verification",
      user: "Anonymous User",
      verifier: "Insurance Co",
      status: "success",
      timestamp: "12 minutes ago"
    }
  ]

  const issuers = [
    {
      name: "Ministry of Home Affairs",
      type: "Government",
      credentials: "Citizenship, ID Cards",
      status: "active",
      totalIssued: "45,230",
      avatar: "MH"
    },
    {
      name: "Tribhuvan University",
      type: "Educational",
      credentials: "Degrees, Certificates",
      status: "active",
      totalIssued: "12,847",
      avatar: "TU"
    },
    {
      name: "Nepal Rastra Bank",
      type: "Financial",
      credentials: "Banking Records",
      status: "active",
      totalIssued: "8,923",
      avatar: "NR"
    },
    {
      name: "Lumbini Province",
      type: "Government",
      credentials: "Provincial ID",
      status: "pending",
      totalIssued: "0",
      avatar: "LP"
    }
  ]

  const verifiers = [
    {
      name: "Nepal Bank Limited",
      category: "Banking",
      verificationsToday: 523,
      totalVerifications: "15,847",
      status: "active",
      lastActive: "2 minutes ago"
    },
    {
      name: "Himalayan Airlines",
      category: "Aviation",
      verificationsToday: 89,
      totalVerifications: "2,341",
      status: "active",
      lastActive: "1 hour ago"
    },
    {
      name: "Ncell Pvt Ltd",
      category: "Telecommunications",
      verificationsToday: 1247,
      totalVerifications: "45,892",
      status: "active",
      lastActive: "5 minutes ago"
    },
    {
      name: "DFID Nepal",
      category: "NGO",
      verificationsToday: 34,
      totalVerifications: "1,056",
      status: "active",
      lastActive: "3 hours ago"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage the Veridity identity verification ecosystem
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}>
                    {stat.change}
                  </span> from last period
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="issuers">Issuers</TabsTrigger>
            <TabsTrigger value="verifiers">Verifiers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Verifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Verifications</CardTitle>
                  <CardDescription>Latest verification activities across the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentVerifications.map((verification) => (
                      <div key={verification.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div>
                            <p className="font-medium text-sm">{verification.type}</p>
                            <p className="text-xs text-muted-foreground">{verification.verifier}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={verification.status === 'success' ? 'default' : 'secondary'}
                            className="mb-1"
                          >
                            {verification.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground">{verification.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Real-time system performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">API Response Time</span>
                      <span className="text-sm text-muted-foreground">127ms</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proof Generation Success</span>
                      <span className="text-sm text-muted-foreground">99.7%</span>
                    </div>
                    <Progress value={99.7} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Network Connectivity</span>
                      <span className="text-sm text-muted-foreground">98.4%</span>
                    </div>
                    <Progress value={98.4} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Mobile App Performance</span>
                      <span className="text-sm text-muted-foreground">96.2%</span>
                    </div>
                    <Progress value={96.2} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Verification activities by province</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { province: "Bagmati", verifications: "8,234", percentage: 33 },
                    { province: "Gandaki", verifications: "3,567", percentage: 14 },
                    { province: "Lumbini", verifications: "4,892", percentage: 20 },
                    { province: "Koshi", verifications: "2,156", percentage: 9 },
                    { province: "Madhesh", verifications: "3,011", percentage: 12 },
                    { province: "Karnali", verifications: "1,234", percentage: 5 },
                    { province: "Sudurpashchim", verifications: "1,753", percentage: 7 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.province}</span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground">{item.verifications} verifications</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="issuers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Identity Issuers</h2>
              <Button>Add New Issuer</Button>
            </div>

            <div className="grid gap-4">
              {issuers.map((issuer, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-emerald-100 text-emerald-600">
                            {issuer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{issuer.name}</h3>
                          <p className="text-sm text-muted-foreground">{issuer.type} • {issuer.credentials}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{issuer.totalIssued}</p>
                          <p className="text-sm text-muted-foreground">Credentials Issued</p>
                        </div>
                        <Badge variant={issuer.status === 'active' ? 'default' : 'secondary'}>
                          {issuer.status}
                        </Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="verifiers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Verification Partners</h2>
              <Button>Add New Verifier</Button>
            </div>

            <div className="grid gap-4">
              {verifiers.map((verifier, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {verifier.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{verifier.name}</h3>
                          <p className="text-sm text-muted-foreground">{verifier.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="font-medium">{verifier.verificationsToday}</p>
                          <p className="text-sm text-muted-foreground">Today</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{verifier.totalVerifications}</p>
                          <p className="text-sm text-muted-foreground">Total</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="default">Active</Badge>
                          <p className="text-sm text-muted-foreground">{verifier.lastActive}</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verification Types</CardTitle>
                  <CardDescription>Distribution of verification requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Age Verification", count: "12,847", percentage: 52 },
                      { type: "Education Credentials", count: "6,234", percentage: 25 },
                      { type: "Residency Proof", count: "3,892", percentage: 16 },
                      { type: "Income Verification", count: "1,874", percentage: 7 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.type}</span>
                          <span className="text-muted-foreground">{item.count}</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>System performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Average Proof Generation Time</span>
                      <span className="font-medium text-emerald-600">2.1s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Average Verification Time</span>
                      <span className="font-medium text-blue-600">0.8s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Success Rate</span>
                      <span className="font-medium text-emerald-600">99.7%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>User Satisfaction</span>
                      <span className="font-medium text-emerald-600">4.8/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Growth Trends</CardTitle>
                <CardDescription>Platform adoption and usage trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-8 w-8 text-emerald-600 mx-auto" />
                    <p className="text-2xl font-bold">+127%</p>
                    <p className="text-sm text-muted-foreground">User Growth (3 months)</p>
                  </div>
                  <div className="text-center space-y-2">
                    <UserCheck className="h-8 w-8 text-blue-600 mx-auto" />
                    <p className="text-2xl font-bold">+89%</p>
                    <p className="text-sm text-muted-foreground">Verification Volume</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Globe className="h-8 w-8 text-purple-600 mx-auto" />
                    <p className="text-2xl font-bold">+156%</p>
                    <p className="text-sm text-muted-foreground">Partner Integrations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Audit Trail</CardTitle>
                <CardDescription>Compliance and security monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Issuer Verification",
                      entity: "Tribhuvan University",
                      timestamp: "2025-01-01 14:30:25",
                      status: "Completed",
                      details: "Degree credential issued to user"
                    },
                    {
                      action: "Legal Audit Request",
                      entity: "Nepal Police",
                      timestamp: "2025-01-01 13:45:12",
                      status: "Under Review",
                      details: "Court order #2025-001 identity disclosure"
                    },
                    {
                      action: "System Security Scan",
                      entity: "Internal Security",
                      timestamp: "2025-01-01 12:00:00",
                      status: "Passed",
                      details: "Automated security audit completed"
                    },
                    {
                      action: "Partner Integration",
                      entity: "Nepal Bank Ltd",
                      timestamp: "2025-01-01 10:15:33",
                      status: "Active",
                      details: "API access configured and tested"
                    }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{log.action}</p>
                          <p className="text-sm text-muted-foreground">{log.entity} • {log.details}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={log.status === 'Completed' || log.status === 'Passed' || log.status === 'Active' ? 'default' : 'secondary'}>
                          {log.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{log.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
