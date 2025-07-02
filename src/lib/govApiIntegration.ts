// Simulated Government API Integration for Nepal
// This demonstrates how Veridity would integrate with real government systems
import { sanitizeInput, validateCitizenshipNumber, checkRateLimit } from './security';

export interface GovernmentAPI {
  name: string;
  endpoint: string;
  description: string;
  status: 'active' | 'testing' | 'proposed';
  credentials: string[];
  dataProtection: 'full' | 'partial' | 'minimal';
}

export interface CitizenshipRecord {
  citizenshipNumber: string;
  fullName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  fatherName: string;
  motherName: string;
  permanentAddress: string;
  issuedDate: string;
  issuedBy: string;
  status: 'active' | 'expired' | 'cancelled';
}

export interface EducationRecord {
  degreeId: string;
  studentName: string;
  degreeName: string;
  institution: string;
  graduationDate: string;
  grade: string;
  verified: boolean;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
  requestId: string;
}

export interface CredentialIssuanceData {
  credentialId: string;
  status: 'issued' | 'pending' | 'rejected';
  issuedDate?: string;
}

export interface APIHealthData {
  status: 'healthy' | 'unhealthy' | 'error';
  responseTime?: number;
  uptime?: number;
  error?: string;
}

export interface BatchVerificationData {
  results: Array<{
    identifier: string;
    type: string;
    verified: boolean;
    details?: string;
  }>;
  summary: {
    total: number;
    verified: number;
    failed: number;
  };
}

export interface ZKProofData {
  proof: string;
  publicSignals: string[];
  verificationKey: string;
  claims: Record<string, boolean | number | string>;
}

// Simulated Government APIs
export const governmentAPIs: GovernmentAPI[] = [
  {
    name: "Ministry of Home Affairs - Citizenship API",
    endpoint: "https://api.moha.gov.np/v1/citizenship",
    description: "Verify citizenship certificates and national ID cards",
    status: 'active',
    credentials: ['Citizenship Certificate', 'National ID Card'],
    dataProtection: 'full'
  },
  {
    name: "Tribhuvan University - Academic Records",
    endpoint: "https://api.tu.edu.np/v1/academic",
    description: "Verify academic degrees and transcripts",
    status: 'active',
    credentials: ['Bachelor Degree', 'Master Degree', 'PhD', 'Diploma'],
    dataProtection: 'full'
  },
  {
    name: "Nepal Rastra Bank - Banking Records",
    endpoint: "https://api.nrb.org.np/v1/banking",
    description: "Verify banking history and credit records",
    status: 'testing',
    credentials: ['Bank Account', 'Credit History', 'Loan Records'],
    dataProtection: 'partial'
  },
  {
    name: "Department of Transport - Driving License",
    endpoint: "https://api.dotm.gov.np/v1/license",
    description: "Verify driving licenses and vehicle registrations",
    status: 'proposed',
    credentials: ['Driving License', 'Vehicle Registration'],
    dataProtection: 'full'
  },
  {
    name: "Ministry of Labor - Employment Records",
    endpoint: "https://api.mol.gov.np/v1/employment",
    description: "Verify employment history and work permits",
    status: 'proposed',
    credentials: ['Work Permit', 'Employment Certificate'],
    dataProtection: 'partial'
  }
];

class GovernmentAPIIntegration {
  private static instance: GovernmentAPIIntegration;

  static getInstance(): GovernmentAPIIntegration {
    if (!GovernmentAPIIntegration.instance) {
      GovernmentAPIIntegration.instance = new GovernmentAPIIntegration();
    }
    return GovernmentAPIIntegration.instance;
  }

  // Simulate citizenship verification with MoHA
  async verifyCitizenship(citizenshipNumber: string): Promise<APIResponse<CitizenshipRecord>> {
    // Security validation
    try {
      // Input sanitization
      const sanitizedInput = sanitizeInput(citizenshipNumber);

      if (!sanitizedInput) {
        return {
          success: false,
          error: 'Invalid input provided',
          timestamp: Date.now(),
          requestId: this.generateRequestId()
        };
      }

      const sanitizedCitizenshipNumber = sanitizedInput;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        success: false,
        error: errorMessage,
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };
    }

    if (!validateCitizenshipNumber(citizenshipNumber)) {
      return {
        success: false,
        error: 'Invalid citizenship number format',
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };
    }

    // Rate limiting check
    if (!checkRateLimit('citizenship-verification')) {
      return {
        success: false,
        error: 'Rate limit exceeded. Please try again later.',
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };
    }

    // Simulate API delay
    await this.delay(1200);

    // Mock successful verification for demo citizenship number
    if (citizenshipNumber === '12-34-56-78901') {
      const citizenshipData: CitizenshipRecord = {
        citizenshipNumber: '12-34-56-78901',
        fullName: 'राम बहादुर शाह (Ram Bahadur Shah)',
        dateOfBirth: '1990-05-15',
        placeOfBirth: 'काठमाडौं, नेपाल (Kathmandu, Nepal)',
        fatherName: 'हरि बहादुर शाह (Hari Bahadur Shah)',
        motherName: 'सीता देवी शाह (Sita Devi Shah)',
        permanentAddress: 'काठमाडौं-१०, बागमती प्रदेश (Kathmandu-10, Bagmati Pradesh)',
        issuedDate: '2015-08-20',
        issuedBy: 'गृह मन्त्रालय, नेपाल सरकार (Ministry of Home Affairs, Nepal)',
        status: 'active'
      };

      return {
        success: true,
        data: citizenshipData,
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };
    }

    // Mock error for other numbers
    return {
      success: false,
      error: 'Citizenship number not found in government database',
      timestamp: Date.now(),
      requestId: this.generateRequestId()
    };
  }

  // Create privacy-preserving credential request
  async requestCredentialIssuance(
    citizenshipNumber: string,
    credentialType: string,
    consentSignature: string
  ): Promise<APIResponse<CredentialIssuanceData>> {
    // Security validation
    try {
      const sanitizedCitizenshipNumber = sanitizeInput(citizenshipNumber);
      const sanitizedCredentialType = sanitizeInput(credentialType);
      const sanitizedConsentSignature = sanitizeInput(consentSignature);

      if (!validateCitizenshipNumber(sanitizedCitizenshipNumber)) {
        return {
          success: false,
          error: 'Invalid citizenship number format',
          timestamp: Date.now(),
          requestId: this.generateRequestId()
        };
      }

      // Rate limiting check
      if (!checkRateLimit('credential-issuance')) {
        return {
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
          timestamp: Date.now(),
          requestId: this.generateRequestId()
        };
      }

      await this.delay(1500);

      const credentialData: CredentialIssuanceData = {
        credentialId: this.generateCredentialId(),
        status: 'issued',
        issuedDate: new Date().toISOString()
      };

      return {
        success: true,
        data: credentialData,
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        success: false,
        error: errorMessage,
        timestamp: Date.now(),
        requestId: this.generateRequestId()
      };
    }
  }

  // Simulate API health check
  async checkAPIHealth(apiEndpoint: string): Promise<APIResponse<APIHealthData>> {
    await this.delay(300);

    const healthData: APIHealthData = {
      status: Math.random() > 0.1 ? 'healthy' : 'unhealthy',
      responseTime: Math.floor(Math.random() * 1000) + 100,
      uptime: 99.8
    };

    return {
      success: true,
      data: healthData,
      timestamp: Date.now(),
      requestId: this.generateRequestId()
    };
  }

  async batchVerifyCredentials(
    records: Array<{type: string, identifier: string}>
  ): Promise<APIResponse<BatchVerificationData>> {
    await this.delay(2000);

    const results = records.map(record => ({
      identifier: record.identifier,
      type: record.type,
      verified: Math.random() > 0.2,
      details: 'Verification completed via government API'
    }));

    const verifiedCount = results.filter(r => r.verified).length;

    const batchData: BatchVerificationData = {
      results,
      summary: {
        total: records.length,
        verified: verifiedCount,
        failed: records.length - verifiedCount
      }
    };

    return {
      success: true,
      data: batchData,
      timestamp: Date.now(),
      requestId: this.generateRequestId()
    };
  }

  async generatePrivacyPreservingProof(
    citizenshipNumber: string,
    requiredClaims: string[]
  ): Promise<APIResponse<ZKProofData>> {
    await this.delay(800);

    // Only extract minimal required data for proof generation
    const claims: Record<string, boolean | number | string> = {};

    for (const claim of requiredClaims) {
      switch(claim) {
        case 'age_over_18':
          claims[claim] = true;
          break;
        case 'nepali_citizen':
          claims[claim] = true;
          break;
        case 'province':
          claims[claim] = 'Bagmati';
          break;
        case 'education_level':
          claims[claim] = 'bachelors';
          break;
        default:
          claims[claim] = false;
      }
    }

    const proofData: ZKProofData = {
      proof: "0x" + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
      publicSignals: Object.values(claims).map(v => v.toString()),
      verificationKey: "vk_" + Math.random().toString(36).substring(2, 15),
      claims
    };

    return {
      success: true,
      data: proofData,
      timestamp: Date.now(),
      requestId: this.generateRequestId()
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }

  private generateCredentialId(): string {
    return `cred_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }

  getIntegrationStats() {
    return {
      activeAPIs: 2,
      totalCredentialTypes: 8,
      dataProtectionLevels: {
        full: 3,
        partial: 2,
        minimal: 0
      }
    };
  }
}

// Export singleton instance
export const govAPI = GovernmentAPIIntegration.getInstance();

// Sample integration data for demos
export const sampleIntegrationData = {
  successfulVerifications: [
    {
      type: "Citizenship Verification",
      result: "Valid Nepal Citizen",
      verificationTime: "1.2s"
    },
    {
      type: "Academic Degree",
      result: "Masters in Computer Science",
      verificationTime: "0.8s"
    },
    {
      type: "Banking History",
      result: "Active Account Holder",
      verificationTime: "1.5s"
    }
  ],
  apiEndpoints: [
    {
      name: "MoHA Citizenship API",
      method: "POST",
      url: "/v1/citizenship/verify",
      rateLimit: "100 req/min",
      authentication: "OAuth 2.0 + JWT"
    },
    {
      name: "TU Academic Records",
      method: "GET",
      url: "/v1/academic/verify",
      rateLimit: "50 req/min",
      authentication: "API Key + mTLS"
    },
    {
      name: "NRB Banking API",
      method: "POST",
      url: "/v1/banking/verify",
      rateLimit: "30 req/min",
      authentication: "OAuth 2.0 + Consent"
    }
  ],
  complianceFeatures: [
    "GDPR-equivalent data protection",
    "Zero-knowledge proof generation",
    "Selective disclosure of claims",
    "Audit trail for all verifications",
    "End-to-end encryption",
    "Consent management system",
    "Data minimization principles",
    "Right to be forgotten"
  ]
};
