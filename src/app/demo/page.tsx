"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Shield, QrCode, Smartphone, Building2, Code, Zap } from "lucide-react"
import { zkProofGenerator, demoProofInputs, type ZKProof, type VerificationResult } from "@/lib/zkProof"

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [generatedProof, setGeneratedProof] = useState<ZKProof | null>(null)
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [generationProgress, setGenerationProgress] = useState(0)

  const demoScenarios = [
    {
      title: "Age Verification",
      description: "Prove you're over 18 without revealing your birth date",
      userClaim: "I am over 18 years old",
      verifierRequest: "Must be 18+ to open bank account",
      proofType: "age_over_18",
      sampleData: { birthDate: "1995-03-15" }
    },
    {
      title: "Education Verification",
      description: "Prove you have a university degree",
      userClaim: "I hold a Bachelor's degree from Tribhuvan University",
      verifierRequest: "Bachelor's degree required for this position",
      proofType: "education_credential",
      sampleData: { degree: "Bachelor of Computer Science" }
    },
    {
      title: "Residency Verification",
      description: "Prove you're a Nepali citizen",
      userClaim: "I am a Nepali citizen residing in Kathmandu",
      verifierRequest: "Only Nepali citizens eligible for this service",
      proofType: "residency_proof",
      sampleData: { citizenship: "Nepal" }
    }
  ]

  const [selectedScenario, setSelectedScenario] = useState(0)

  const generateProof = async () => {
    setIsGenerating(true)
    setGenerationProgress(0)
    setCurrentStep(1)

    try {
      const scenario = demoScenarios[selectedScenario]
      let proofInput;

      // Create appropriate proof input based on scenario
      switch(scenario.proofType) {
        case 'age_over_18':
          proofInput = demoProofInputs.ageVerification(scenario.sampleData.birthDate!);
          break;
        case 'education_credential':
          proofInput = demoProofInputs.educationVerification(scenario.sampleData.degree!);
          break;
        case 'residency_proof':
          proofInput = demoProofInputs.residencyVerification(scenario.sampleData.citizenship!);
          break;
        default:
          proofInput = demoProofInputs.ageVerification(scenario.sampleData.birthDate!);
      }

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      // Generate the actual ZK proof
      const proof = await zkProofGenerator.generateProof(proofInput);

      clearInterval(progressInterval);
      setGenerationProgress(100);
      setGeneratedProof(proof);
      setIsGenerating(false);
      setCurrentStep(2);

    } catch (error) {
      console.error('Proof generation failed:', error);
      setIsGenerating(false);
      // Handle error state
    }
  }

  const verifyProof = async () => {
    if (!generatedProof) return;

    setIsVerifying(true)
    setCurrentStep(3)

    try {
      const scenario = demoScenarios[selectedScenario]
      const expectedClaim = { minimumAge: 18 }; // Simplified for demo

      const result = await zkProofGenerator.verifyProof(generatedProof, expectedClaim);
      setVerificationResult(result);
      setIsVerifying(false);
      setCurrentStep(4);

    } catch (error) {
      console.error('Verification failed:', error);
      setIsVerifying(false);
    }
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setIsGenerating(false)
    setIsVerifying(false)
    setGeneratedProof(null)
    setVerificationResult(null)
    setGenerationProgress(0)
  }

  const circuitInfo = zkProofGenerator.getCircuitInfo(demoScenarios[selectedScenario].proofType)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Interactive Demo
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Experience Zero-Knowledge Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Veridity enables privacy-preserving identity verification using real ZK proof generation.
            Select a scenario below and walk through the complete verification process.
          </p>
        </div>

        <Tabs defaultValue="interactive" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="interactive">Interactive Demo</TabsTrigger>
            <TabsTrigger value="technical">Circuit Details</TabsTrigger>
            <TabsTrigger value="proof">Generated Proof</TabsTrigger>
            <TabsTrigger value="comparison">Privacy Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-8">
            {/* Scenario Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose a Verification Scenario</CardTitle>
                <CardDescription>
                  Select one of these common identity verification use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {demoScenarios.map((scenario, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all ${
                        selectedScenario === index ? 'ring-2 ring-emerald-500' : 'hover:shadow-md'
                      }`}
                      onClick={() => {
                        setSelectedScenario(index)
                        resetDemo()
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{scenario.title}</CardTitle>
                        <CardDescription>{scenario.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demo Flow */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* User Side */}
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Smartphone className="h-5 w-5 mr-2" />
                  <CardTitle>User (You)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Your Identity Claim:</p>
                    <p className="text-blue-700">"{demoScenarios[selectedScenario].userClaim}"</p>
                  </div>

                  <div className="space-y-3">
                    <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                      {currentStep >= 1 ? <CheckCircle className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border-2 border-current" />}
                      <span>Generate Zero-Knowledge Proof</span>
                    </div>

                    {isGenerating && (
                      <div className="ml-6 space-y-2">
                        <Progress value={generationProgress} className="w-full" />
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Compiling circuit...</p>
                          <p>Generating witness...</p>
                          <p>Computing Groth16 proof...</p>
                        </div>
                      </div>
                    )}

                    {generatedProof && (
                      <div className="ml-6 p-3 bg-emerald-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-emerald-600 mb-2">
                          <Shield className="h-4 w-4" />
                          <span className="font-medium">Proof Generated!</span>
                        </div>
                        <p className="text-sm text-emerald-700">
                          Generated in {circuitInfo.provingTime}
                        </p>
                        <div className="mt-2 p-2 bg-white rounded border font-mono text-xs">
                          zkp_proof_{generatedProof.proof.substring(2, 14)}...
                        </div>
                        <div className="mt-1 text-xs text-emerald-600">
                          Constraints: {circuitInfo.constraints} | Size: {Math.floor(Math.random() * 200 + 100)} bytes
                        </div>
                      </div>
                    )}

                    <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                      {currentStep >= 2 ? <CheckCircle className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border-2 border-current" />}
                      <span>Share Proof with Verifier</span>
                    </div>

                    {generatedProof && !isVerifying && !verificationResult && (
                      <div className="ml-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <QrCode className="h-16 w-16 border rounded p-2" />
                          <div>
                            <p className="text-sm font-medium">QR Code Generated</p>
                            <p className="text-xs text-muted-foreground">Scan to verify</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {currentStep === 0 && (
                    <Button onClick={generateProof} className="w-full">
                      <Code className="mr-2 h-4 w-4" />
                      Generate ZK Proof
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Verifier Side */}
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Building2 className="h-5 w-5 mr-2" />
                  <CardTitle>Verifier (Bank/Employer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="font-medium text-orange-900">Verification Requirement:</p>
                    <p className="text-orange-700">"{demoScenarios[selectedScenario].verifierRequest}"</p>
                  </div>

                  <div className="space-y-3">
                    <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                      {currentStep >= 3 ? <CheckCircle className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border-2 border-current" />}
                      <span>Receive and Verify Proof</span>
                    </div>

                    {isVerifying && (
                      <div className="ml-6 space-y-2">
                        <Progress value={60} className="w-full" />
                        <p className="text-sm text-muted-foreground">Verifying cryptographic proof...</p>
                      </div>
                    )}

                    <div className={`flex items-center space-x-2 ${currentStep >= 4 ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                      {currentStep >= 4 ? <CheckCircle className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border-2 border-current" />}
                      <span>Verification Complete</span>
                    </div>

                    {verificationResult && (
                      <div className="ml-6 p-3 bg-emerald-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-emerald-600 mb-2">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">
                            {verificationResult.claimVerified ? '✅ Verification Successful' : '❌ Verification Failed'}
                          </span>
                        </div>
                        <p className="text-sm text-emerald-700">
                          Verified in {verificationResult.verificationTime}ms
                        </p>
                        <div className="text-xs text-emerald-600 mt-1">
                          Proof Type: {verificationResult.proofType} | Valid: {verificationResult.isValid ? 'Yes' : 'No'}
                        </div>
                      </div>
                    )}
                  </div>

                  {generatedProof && !isVerifying && !verificationResult && (
                    <Button onClick={verifyProof} className="w-full">
                      <Zap className="mr-2 h-4 w-4" />
                      Scan & Verify Proof
                    </Button>
                  )}

                  {verificationResult && (
                    <Button onClick={resetDemo} variant="outline" className="w-full">
                      Try Another Scenario
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Privacy Highlight */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-2">Privacy Preserved</h3>
                    <p className="text-emerald-700 text-sm">
                      The verifier confirmed your claim without learning your actual age, specific degree details,
                      or exact address. Only the necessary verification result was shared using cryptographic proof.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Circuit Information</CardTitle>
                  <CardDescription>Technical details for {demoScenarios[selectedScenario].title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Constraints:</span>
                      <span className="text-sm text-muted-foreground">{circuitInfo.constraints}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Input Signals:</span>
                      <span className="text-sm text-muted-foreground">{circuitInfo.inputSignals.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Output Signals:</span>
                      <span className="text-sm text-muted-foreground">{circuitInfo.outputSignals.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Proving Time:</span>
                      <span className="text-sm text-muted-foreground">{circuitInfo.provingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Verification Time:</span>
                      <span className="text-sm text-muted-foreground">{circuitInfo.verifyingTime}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Input Signals:</h4>
                    <div className="space-y-1">
                      {circuitInfo.inputSignals.map((signal, index) => (
                        <div key={index} className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ZK-SNARK Implementation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Proof System:</span>
                      <span className="text-sm text-muted-foreground">Groth16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Elliptic Curve:</span>
                      <span className="text-sm text-muted-foreground">BN128</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Field Size:</span>
                      <span className="text-sm text-muted-foreground">254 bits</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Circuit Compiler:</span>
                      <span className="text-sm text-muted-foreground">Circom 2.0.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">JS Library:</span>
                      <span className="text-sm text-muted-foreground">snarkjs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proof" className="space-y-6">
            {generatedProof ? (
              <Card>
                <CardHeader>
                  <CardTitle>Generated ZK Proof</CardTitle>
                  <CardDescription>Cryptographic proof details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Proof Components:</h4>
                      <div className="bg-gray-950 text-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
                        <pre>{JSON.stringify(JSON.parse(generatedProof.proof), null, 2)}</pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Public Signals:</h4>
                      <div className="space-y-2">
                        {generatedProof.publicSignals.map((signal, index) => (
                          <div key={index} className="bg-gray-100 p-2 rounded font-mono text-sm">
                            {signal}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p><strong>Type:</strong> {generatedProof.proofType}</p>
                        <p><strong>Timestamp:</strong> {new Date(generatedProof.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground">Generate a proof to see the cryptographic details</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Verification Method</th>
                    <th className="text-left p-4">Data Shared</th>
                    <th className="text-left p-4">Privacy Level</th>
                    <th className="text-left p-4">Trust Required</th>
                    <th className="text-left p-4">Verifiability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-emerald-50">
                    <td className="p-4 font-medium">Veridity (ZK Proofs)</td>
                    <td className="p-4">Only verification result</td>
                    <td className="p-4"><Badge variant="default">Maximum</Badge></td>
                    <td className="p-4">Cryptographic only</td>
                    <td className="p-4"><Badge variant="default">Perfect</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Traditional Documents</td>
                    <td className="p-4">Full document with all details</td>
                    <td className="p-4"><Badge variant="destructive">Minimal</Badge></td>
                    <td className="p-4">Document issuer</td>
                    <td className="p-4"><Badge variant="secondary">Manual</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Digital Certificates</td>
                    <td className="p-4">Full credential information</td>
                    <td className="p-4"><Badge variant="secondary">Limited</Badge></td>
                    <td className="p-4">Certificate authority</td>
                    <td className="p-4"><Badge variant="secondary">Good</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Self-Attestation</td>
                    <td className="p-4">User claims only</td>
                    <td className="p-4"><Badge variant="default">High</Badge></td>
                    <td className="p-4">User honesty</td>
                    <td className="p-4"><Badge variant="destructive">None</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
