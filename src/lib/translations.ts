export interface Translation {
  // Navigation
  nav: {
    home: string;
    tryDemo: string;
    adminDashboard: string;
    userApp: string;
    investorPitch: string;
    apiDocs: string;
    onboarding: string;
    caseStudies: string;
  };
  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    continue: string;
    back: string;
    next: string;
    submit: string;
    cancel: string;
    close: string;
    save: string;
    edit: string;
    delete: string;
    view: string;
    download: string;
    upload: string;
  };
  // Home page
  home: {
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      tryDemo: string;
      viewPitch: string;
    };
    stats: {
      unbankedCitizens: string;
      ruralPopulation: string;
      proofGeneration: string;
      costPerVerification: string;
    };
    features: {
      title: string;
      subtitle: string;
      zkProofs: {
        title: string;
        description: string;
      };
      mobileFirst: {
        title: string;
        description: string;
      };
      privacyPreserving: {
        title: string;
        description: string;
      };
      instantVerification: {
        title: string;
        description: string;
      };
      crossPlatform: {
        title: string;
        description: string;
      };
      financialInclusion: {
        title: string;
        description: string;
      };
    };
    useCases: {
      title: string;
      subtitle: string;
      ageVerification: {
        title: string;
        description: string;
        example: string;
      };
      educationalCredentials: {
        title: string;
        description: string;
        example: string;
      };
      residencyProof: {
        title: string;
        description: string;
        example: string;
      };
      incomeVerification: {
        title: string;
        description: string;
        example: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      tryDemo: string;
      startOnboarding: string;
    };
    explore: {
      title: string;
      subtitle: string;
      forCitizens: {
        title: string;
        description: string;
        button: string;
      };
      forOrganizations: {
        title: string;
        description: string;
        button: string;
      };
      forDevelopers: {
        title: string;
        description: string;
        button: string;
      };
    };
  };
  // Demo page
  demo: {
    title: string;
    subtitle: string;
    scenarios: {
      choose: string;
      ageVerification: {
        title: string;
        description: string;
      };
      educationVerification: {
        title: string;
        description: string;
      };
      residencyVerification: {
        title: string;
        description: string;
      };
      incomeVerification: {
        title: string;
        description: string;
      };
      compositeVerification: {
        title: string;
        description: string;
      };
      batchVerification: {
        title: string;
        description: string;
      };
    };
    steps: {
      user: string;
      verifier: string;
      generateProof: string;
      shareProof: string;
      verifyProof: string;
      complete: string;
    };
    tabs: {
      interactive: string;
      technical: string;
      proof: string;
      privacy: string;
      optimization: string;
    };
    proofGeneration: {
      title: string;
      description: string;
      generating: string;
      generatingCircuit: string;
      computingWitness: string;
      creatingProof: string;
      optimizing: string;
      complete: string;
    };
    verification: {
      title: string;
      description: string;
      verifying: string;
      success: string;
      failed: string;
    };
    errors: {
      proofGenerationFailed: string;
      verificationFailed: string;
      networkError: string;
      retry: string;
    };
  };
}

const englishTranslations: Translation = {
  nav: {
    home: "Home",
    tryDemo: "Try Demo",
    adminDashboard: "Admin Dashboard",
    userApp: "User App",
    investorPitch: "Investor Pitch",
    apiDocs: "API Docs",
    onboarding: "Onboarding",
    caseStudies: "Case Studies"
  },
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    continue: "Continue",
    back: "Back",
    next: "Next",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    download: "Download",
    upload: "Upload"
  },
  home: {
    hero: {
      badge: "Zero-Knowledge Identity Verification",
      title: "Privacy-First Digital Identity for",
      titleHighlight: "Nepal",
      subtitle: "Veridity empowers Nepali citizens to prove their identity and credentials without revealing sensitive personal data, using advanced zero-knowledge proofs.",
      tryDemo: "Try Live Demo",
      viewPitch: "View Investor Deck"
    },
    stats: {
      unbankedCitizens: "Unbanked Citizens",
      ruralPopulation: "Rural Population",
      proofGeneration: "Proof Generation",
      costPerVerification: "Cost per Verification"
    },
    features: {
      title: "Why Choose Veridity?",
      subtitle: "Built specifically for Nepal's unique challenges with privacy, accessibility, and trust at the core.",
      zkProofs: {
        title: "Zero-Knowledge Proofs",
        description: "Prove your identity without revealing sensitive data using cutting-edge cryptography"
      },
      mobileFirst: {
        title: "Mobile-First Design",
        description: "Works offline on any Android device, perfect for rural and low-connectivity areas"
      },
      privacyPreserving: {
        title: "Privacy-Preserving",
        description: "Your personal data stays with you. Only prove what you need to prove"
      },
      instantVerification: {
        title: "Instant Verification",
        description: "Generate proofs in under 3 seconds, verify instantly via QR codes"
      },
      crossPlatform: {
        title: "Cross-Platform API",
        description: "Easy integration for banks, NGOs, employers, and government agencies"
      },
      financialInclusion: {
        title: "Financial Inclusion",
        description: "Bring digital identity to Nepal's 10M+ unbanked population"
      }
    },
    useCases: {
      title: "Real-World Applications",
      subtitle: "See how Veridity solves everyday identity verification challenges",
      ageVerification: {
        title: "Age Verification",
        description: "Prove you're over 18 without revealing your exact birth date",
        example: "Register for digital wallet, voting, employment"
      },
      educationalCredentials: {
        title: "Educational Credentials",
        description: "Verify your degree from Tribhuvan University",
        example: "Job applications, further education, professional licensing"
      },
      residencyProof: {
        title: "Residency Proof",
        description: "Confirm you're a Nepali citizen for government services",
        example: "Banking, benefits, official documents"
      },
      incomeVerification: {
        title: "Income Verification",
        description: "Prove income range without disclosing exact salary",
        example: "Loan applications, insurance, rental agreements"
      }
    },
    cta: {
      title: "Ready to Experience Privacy-First Identity?",
      subtitle: "Join thousands of Nepali citizens already using Veridity for secure, private identity verification.",
      tryDemo: "Try Demo Now",
      startOnboarding: "Start Onboarding"
    },
    explore: {
      title: "Explore Veridity",
      subtitle: "Dive deeper into our platform with these interactive demos and resources",
      forCitizens: {
        title: "For Citizens",
        description: "Experience the user app interface",
        button: "User App Demo"
      },
      forOrganizations: {
        title: "For Organizations",
        description: "See the admin dashboard in action",
        button: "Admin Dashboard"
      },
      forDevelopers: {
        title: "For Developers",
        description: "Integrate with our verification APIs",
        button: "API Documentation"
      }
    }
  },
  demo: {
    title: "Experience Zero-Knowledge Verification",
    subtitle: "See how Veridity enables privacy-preserving identity verification. Select a scenario below and walk through the complete verification process.",
    scenarios: {
      choose: "Choose a Verification Scenario",
      ageVerification: {
        title: "Age Verification",
        description: "Prove you're over 18 without revealing your birth date"
      },
      educationVerification: {
        title: "Education Verification",
        description: "Prove you have a university degree"
      },
      residencyVerification: {
        title: "Residency Verification",
        description: "Prove you're a Nepali citizen"
      },
      incomeVerification: {
        title: "Income Verification",
        description: "Prove your income range without exact amount"
      },
      compositeVerification: {
        title: "Composite Verification",
        description: "Prove multiple claims simultaneously"
      },
      batchVerification: {
        title: "Batch Verification",
        description: "Generate multiple proofs efficiently"
      }
    },
    steps: {
      user: "User",
      verifier: "Verifier",
      generateProof: "Generate Proof",
      shareProof: "Share Proof",
      verifyProof: "Verify Proof",
      complete: "Complete"
    },
    tabs: {
      interactive: "Interactive Demo",
      technical: "Technical Details",
      proof: "Generated Proof",
      privacy: "Privacy Comparison",
      optimization: "Size Optimization"
    },
    proofGeneration: {
      title: "Generating Zero-Knowledge Proof",
      description: "Creating cryptographic proof without revealing private data",
      generating: "Generating proof...",
      generatingCircuit: "Generating circuit constraints",
      computingWitness: "Computing witness values",
      creatingProof: "Creating cryptographic proof",
      optimizing: "Optimizing proof size",
      complete: "Proof generation complete"
    },
    verification: {
      title: "Verifying Proof",
      description: "Cryptographically verifying the proof validity",
      verifying: "Verifying proof...",
      success: "Proof verified successfully",
      failed: "Proof verification failed"
    },
    errors: {
      proofGenerationFailed: "Failed to generate proof. Please try again.",
      verificationFailed: "Failed to verify proof. Please check your inputs.",
      networkError: "Network error occurred. Please check your connection.",
      retry: "Retry"
    }
  }
};

const nepaliTranslations: Translation = {
  nav: {
    home: "गृहपृष्ठ",
    tryDemo: "डेमो हेर्नुहोस्",
    adminDashboard: "प्रशासक ड्यासबोर्ड",
    userApp: "प्रयोगकर्ता एप",
    investorPitch: "लगानीकर्ता प्रस्तुति",
    apiDocs: "API कागजात",
    onboarding: "सुरुवात",
    caseStudies: "केस स्टडी"
  },
  common: {
    loading: "लोड हुँदैछ...",
    error: "त्रुटि",
    success: "सफल",
    continue: "जारी राख्नुहोस्",
    back: "फिर्ता",
    next: "अर्को",
    submit: "पेश गर्नुहोस्",
    cancel: "रद्द गर्नुहोस्",
    close: "बन्द गर्नुहोस्",
    save: "सेभ गर्नुहोस्",
    edit: "सम्पादन गर्नुहोस्",
    delete: "मेट्नुहोस्",
    view: "हेर्नुहोस्",
    download: "डाउनलोड गर्नुहोस्",
    upload: "अपलोड गर्नुहोस्"
  },
  home: {
    hero: {
      badge: "शून्य-ज्ञान पहिचान प्रमाणिकरण",
      title: "नेपालका लागि गोपनीयता-प्राथमिकता डिजिटल पहिचान",
      titleHighlight: "नेपाल",
      subtitle: "भेरिडिटीले नेपाली नागरिकहरूलाई उन्नत शून्य-ज्ञान प्रमाणहरू प्रयोग गरेर संवेदनशील व्यक्तिगत डेटा प्रकट नगरी आफ्नो पहिचान र प्रमाणपत्रहरू प्रमाणित गर्न अधिकार दिन्छ।",
      tryDemo: "लाइभ डेमो हेर्नुहोस्",
      viewPitch: "लगानीकर्ता डेक हेर्नुहोस्"
    },
    stats: {
      unbankedCitizens: "बैंकिङ सेवाबाट वञ्चित नागरिकहरू",
      ruralPopulation: "ग्रामीण जनसङ्ख्या",
      proofGeneration: "प्रमाण उत्पादन",
      costPerVerification: "प्रति प्रमाणिकरण लागत"
    },
    features: {
      title: "भेरिडिटी किन छान्ने?",
      subtitle: "गोपनीयता, पहुँच, र विश्वासलाई केन्द्रमा राखेर नेपालका अनोखा चुनौतीहरूका लागि विशेष रूपमा निर्मित।",
      zkProofs: {
        title: "शून्य-ज्ञान प्रमाणहरू",
        description: "अत्याधुनिक क्रिप्टोग्राफी प्रयोग गरेर संवेदनशील डेटा प्रकट नगरी आफ्नो पहिचान प्रमाणित गर्नुहोस्"
      },
      mobileFirst: {
        title: "मोबाइल-प्राथमिकता डिजाइन",
        description: "कुनै पनि एन्ड्रोइड उपकरणमा अफलाइन काम गर्छ, ग्रामीण र कम-जडान क्षेत्रहरूका लागि उत्तम"
      },
      privacyPreserving: {
        title: "गोपनीयता-संरक्षण",
        description: "तपाईंको व्यक्तिगत डेटा तपाईंसँग रहन्छ। केवल आवश्यक कुरा मात्र प्रमाणित गर्नुहोस्"
      },
      instantVerification: {
        title: "तत्काल प्रमाणिकरण",
        description: "३ सेकेन्डभन्दा कममा प्रमाण उत्पादन गर्नुहोस्, QR कोडहरू मार्फत तत्काल प्रमाणित गर्नुहोस्"
      },
      crossPlatform: {
        title: "क्रस-प्लेटफर्म API",
        description: "बैंकहरू, गैरसरकारी संस्थाहरू, नियोक्ताहरू, र सरकारी निकायहरूका लागि सजिलो एकीकरण"
      },
      financialInclusion: {
        title: "वित्तीय समावेशीकरण",
        description: "नेपालका १० मिलियन+ बैंकिङ सेवाबाट वञ्चित जनसङ्ख्यालाई डिजिटल पहिचान ल्याउनुहोस्"
      }
    },
    useCases: {
      title: "वास्तविक-विश्व अनुप्रयोगहरू",
      subtitle: "भेरिडिटीले दैनिक पहिचान प्रमाणिकरण चुनौतीहरू कसरी समाधान गर्छ हेर्नुहोस्",
      ageVerification: {
        title: "उमेर प्रमाणिकरण",
        description: "तपाईंको सटीक जन्म मिति प्रकट नगरी १८ वर्ष माथि भएको प्रमाणित गर्नुहोस्",
        example: "डिजिटल वालेटका लागि दर्ता, मतदान, रोजगारी"
      },
      educationalCredentials: {
        title: "शैक्षणिक प्रमाणपत्रहरू",
        description: "त्रिभुवन विश्वविद्यालयबाट आफ्नो डिग्री प्रमाणित गर्नुहोस्",
        example: "जागिरका लागि आवेदन, थप शिक्षा, व्यावसायिक इजाजतपत्र"
      },
      residencyProof: {
        title: "बसाइ प्रमाण",
        description: "सरकारी सेवाहरूका लागि तपाईं नेपाली नागरिक हुनुहुन्छ भनी पुष्टि गर्नुहोस्",
        example: "बैंकिङ, सुविधाहरू, आधिकारिक कागजातहरू"
      },
      incomeVerification: {
        title: "आय प्रमाणिकरण",
        description: "सटीक तलब प्रकट नगरी आय दायरा प्रमाणित गर्नुहोस्",
        example: "ऋण आवेदनहरू, बीमा, भाडा सम्झौताहरू"
      }
    },
    cta: {
      title: "गोपनीयता-प्राथमिकता पहिचान अनुभव गर्न तयार हुनुहुन्छ?",
      subtitle: "सुरक्षित, निजी पहिचान प्रमाणिकरणका लागि भेरिडिटी प्रयोग गरिरहेका हजारौं नेपाली नागरिकहरूमा सामेल हुनुहोस्।",
      tryDemo: "अहिले डेमो हेर्नुहोस्",
      startOnboarding: "सुरुवात गर्नुहोस्"
    },
    explore: {
      title: "भेरिडिटी अन्वेषण गर्नुहोस्",
      subtitle: "यी अन्तरक्रियात्मक डेमो र स्रोतहरूसँग हाम्रो प्लेटफर्ममा गहिरो जानुहोस्",
      forCitizens: {
        title: "नागरिकहरूका लागि",
        description: "प्रयोगकर्ता एप इन्टरफेसको अनुभव गर्नुहोस्",
        button: "प्रयोगकर्ता एप डेमो"
      },
      forOrganizations: {
        title: "संस्थाहरूका लागि",
        description: "प्रशासक ड्यासबोर्डलाई कार्यमा हेर्नुहोस्",
        button: "प्रशासक ड्यासबोर्ड"
      },
      forDevelopers: {
        title: "विकासकर्ताहरूका लागि",
        description: "हाम्रो प्रमाणिकरण APIs सँग एकीकरण गर्नुहोस्",
        button: "API कागजात"
      }
    }
  },
  demo: {
    title: "शून्य-ज्ञान प्रमाणिकरण अनुभव गर्नुहोस्",
    subtitle: "भेरिडिटीले कसरी गोपनीयता-संरक्षण पहिचान प्रमाणिकरण सक्षम गर्छ हेर्नुहोस्। तलको परिदृश्य छान्नुहोस् र पूर्ण प्रमाणिकरण प्रक्रियामा हिंड्नुहोस्।",
    scenarios: {
      choose: "प्रमाणिकरण परिदृश्य छान्नुहोस्",
      ageVerification: {
        title: "उमेर प्रमाणिकरण",
        description: "तपाईंको जन्म मिति प्रकट नगरी १८ वर्ष माथि भएको प्रमाणित गर्नुहोस्"
      },
      educationVerification: {
        title: "शिक्षा प्रमाणिकरण",
        description: "तपाईंसँग विश्वविद्यालयको डिग्री छ भनी प्रमाणित गर्नुहोस्"
      },
      residencyVerification: {
        title: "बसाइ प्रमाणिकरण",
        description: "तपाईं नेपाली नागरिक हुनुहुन्छ भनी प्रमाणित गर्नुहोस्"
      },
      incomeVerification: {
        title: "आय प्रमाणिकरण",
        description: "सटीक रकम बिना आफ्नो आय दायरा प्रमाणित गर्नुहोस्"
      },
      compositeVerification: {
        title: "संयुक्त प्रमाणिकरण",
        description: "एकैसाथ धेरै दाबीहरू प्रमाणित गर्नुहोस्"
      },
      batchVerification: {
        title: "ब्याच प्रमाणिकरण",
        description: "धेरै प्रमाणहरू कुशलतापूर्वक उत्पादन गर्नुहोस्"
      }
    },
    steps: {
      user: "प्रयोगकर्ता",
      verifier: "प्रमाणकर्ता",
      generateProof: "प्रमाण उत्पादन गर्नुहोस्",
      shareProof: "प्रमाण साझा गर्नुहोस्",
      verifyProof: "प्रमाण प्रमाणित गर्नुहोस्",
      complete: "पूर्ण"
    },
    tabs: {
      interactive: "अन्तरक्रियात्मक डेमो",
      technical: "प्राविधिक विवरणहरू",
      proof: "उत्पादित प्रमाण",
      privacy: "गोपनीयता तुलना",
      optimization: "आकार अनुकूलन"
    },
    proofGeneration: {
      title: "शून्य-ज्ञान प्रमाण उत्पादन गर्दै",
      description: "निजी डेटा प्रकट नगरी क्रिप्टोग्राफिक प्रमाण सिर्जना गर्दै",
      generating: "प्रमाण उत्पादन गर्दै...",
      generatingCircuit: "सर्किट अवरोधहरू उत्पादन गर्दै",
      computingWitness: "साक्षी मानहरू गणना गर्दै",
      creatingProof: "क्रिप्टोग्राफिक प्रमाण सिर्जना गर्दै",
      optimizing: "प्रमाण आकार अनुकूलन गर्दै",
      complete: "प्रमाण उत्पादन सम्पन्न"
    },
    verification: {
      title: "प्रमाण प्रमाणित गर्दै",
      description: "प्रमाणको वैधता क्रिप्टोग्राफिक रूपमा प्रमाणित गर्दै",
      verifying: "प्रमाण प्रमाणित गर्दै...",
      success: "प्रमाण सफलतापूर्वक प्रमाणित भयो",
      failed: "प्रमाण प्रमाणिकरण असफल भयो"
    },
    errors: {
      proofGenerationFailed: "प्रमाण उत्पादन गर्न असफल भयो। कृपया फेरि प्रयास गर्नुहोस्।",
      verificationFailed: "प्रमाण प्रमाणित गर्न असफल भयो। कृपया आफ्ना इनपुटहरू जाँच गर्नुहोस्।",
      networkError: "नेटवर्क त्रुटि भयो। कृपया आफ्नो जडान जाँच गर्नुहोस्।",
      retry: "फेरि प्रयास गर्नुहोस्"
    }
  }
};

export const translations = {
  en: englishTranslations,
  ne: nepaliTranslations
};
