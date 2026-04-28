export type Language = 'en' | 'hi';

const translations: Record<Language, any> = {
  en: {
    common: {
      language: 'Language',
      english: 'English',
      hindi: 'हिन्दी',
      learnMore: 'Learn more about our journey',
      sendMessageAlert: 'Thank you for your message! Our team will get back to you shortly.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      spareParts: 'Spare Parts',
      engineeringWorks: 'Engineering Works',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    home: {
      hero: {
        title: 'Sunit Agrico – Trusted Name in Agriculture Machinery Since 1985',
        subtitle: 'Serving farmers with quality agricultural machines, spare parts, and precision engineering solutions for decades.',
        contactCta: 'Contact Us',
        viewProductsCta: 'View Products',
      },
      badges: ['Manufacturers', 'Authorized Dealers', 'Spare Parts Supplier', 'Fabrication Experts'],
      highlights: [
        {
          title: 'Strong Machines for Better Farming',
          description: 'Durable, high-performance machinery built to handle tough agricultural tasks efficiently.',
        },
        {
          title: 'Genuine Spare Parts Available',
          description: 'Extensive inventory of authentic replacement parts to keep your equipment running smoothly.',
        },
        {
          title: 'Precision Engineering Works',
          description: 'Expert fabrication, lathe work, and custom components crafted to your exact specifications.',
        },
      ],
      aboutOverview: {
        title: 'Decades of Trust & Excellence',
        description: 'Established in 1985, Sunit Agrico has proudly served farmers and businesses with dependable agricultural machinery and engineering solutions. Our commitment to quality and customer satisfaction remains unchanged.',
        bullets: [
          'Manufacturing experience since 1985',
          'Strong after-sales service and support',
          'Wide availability of genuine spare parts',
          'Fair pricing and honest guidance',
        ],
      },
    },
    about: {
      headerTitle: 'About Sunit Agrico',
      headerDescription: 'Established in 1985, Sunit Agrico has proudly served farmers and businesses with dependable agricultural machinery and engineering solutions.',
      storyHeading: 'Our Journey',
      storyParagraphs: [
        'Starting as a small fabrication unit over three decades ago, Sunit Agrico has grown into a trusted name in the agricultural sector. We understand that farming is the backbone of our economy, and having the right equipment can make all the difference.',
        'With a deep commitment to excellence, we continually innovate our designs to provide machines that arent just durable, but perfectly suited to the practical needs of modern farmers. Today, we handle manufacturing, spare parts, and custom precision engineering works with the same dedication we had on day one.',
      ],
      valuesHeading: 'Our Core Values',
      valuesSubtitle: 'The principles that drive every machine we build and every service we provide.',
      values: [
        {
          title: 'Durable Machines',
          description: 'Constructed with premium materials to withstand demanding field conditions year after year.',
        },
        {
          title: 'Practical Designs',
          description: 'Engineered specifically for the real-world challenges faced by farmers.',
        },
        {
          title: 'Reliable Service',
          description: 'Consistent, responsive maintenance and support whenever you need it.',
        },
        {
          title: 'Fair Pricing',
          description: 'Honest, transparent pricing that provides exceptional value for your investment.',
        },
        {
          title: 'Long-Term Trust',
          description: 'Building lasting relationships with our community through integrity and mutual respect.',
        },
      ],
    },
    products: {
      headerTitle: 'Agricultural Machines',
      headerDescription: 'Manufactured by us and authorized deals on top industry equipment.',
      manufacturedHeading: 'Manufactured by Us',
      manufacturedSubtitle: 'Built with high-quality materials to maximize your yield.',
      manufacturedSections: [
        {
          label: 'Cultivators',
          items: [
            { title: '5 Tyne Cultivator', description: 'Compact and efficient for smaller holdings and narrow rows.', image: '/image/img-1.jpeg' },
            { title: '7 Tyne Cultivator', description: 'Versatile mid-sized cultivator suitable for a range of soil operations.', image: '/image/img-2.jpeg' },
            { title: '9 Tyne Cultivator', description: 'Heavy-duty model designed for large-scale efficient soil preparation.', image: '/image/img-3.jpeg' },
          ],
        },
        {
          label: 'Seed Drill Machines',
          items: [
            { title: '9 Tyne Seed Drill', description: 'Ensures precise seed placement and optimal spatial distribution.', image: '/image/img-4.jpeg' },
            { title: '11 Tyne Seed Drill', description: 'Higher capacity drill for larger fields, reducing sowing time.', image: '/image/img-5.jpeg' },
          ],
        },
        {
          label: 'Trolleys',
          items: [
            { title: 'Heavy Duty Tractor Trolleys', description: 'Robustly built for transporting heavy loads across rough terrain.', image: '/image/img-1.jpeg' },
            { title: 'Custom Fabricated Trolleys', description: 'Tailored specific to your crop or transport requirements.', image: '/image/img-2.jpeg' },
          ],
        },
      ],
      dealerHeading: 'Authorized Dealer of Leading Brands',
      dealerSubtitle: 'We supply premium modern equipment from top brands.',
      dealerItems: ['Laser Land Leveller', 'KS Straw Reaper', 'Thresher Machines', 'Seed Graders'],
      whyHeading: 'Why Choose Our Products?',
      whyDescription: 'The standard we stand by.',
      whyReasons: ['Strong Material', 'Practical Design', 'Smooth Performance', 'Built for Long Use', 'Farmer Focused'],
      requestPricing: 'Request Pricing',
    },
    spareParts: {
      headerTitle: 'Machine Spare Parts',
      headerDescription: 'Genuine, high-quality replacement components to keep your equipment running efficiently.',
      inventoryHeading: 'Available Parts Inventory',
      inventorySubtitle: 'We stock a comprehensive range of spares for immediate replacement.',
      items: ['Thresher Blades', 'Straw Reaper Parts', 'Transmission Belts', 'Nut Bolts', 'Bearings', 'Pulley Parts', 'Harrow Parts', 'Thresher Jali', 'Other Components'],
      specificTitle: 'Need a Specific Part?',
      specificDescription: "If you don't see what you're looking for, contact our support team. We can source specific parts for older or customized machinery.",
      inquireWhatsApp: 'Inquire Stock on WhatsApp',
    },
    engineeringWorks: {
      headerTitle: 'Precision Engineering & Fabrication Services',
      headerDescription: 'Specialized machine shop services tailored to extend the life of your equipment through precise repair and custom fabrication.',
      servicesHeading: 'Our Fabrication Services',
      servicesSubtitle: 'Equipped with modern machinery and experienced operators to address complex engineering tasks.',
      serviceItems: [
        { title: 'Lathe Machine Jobs', description: 'High-precision turning, threading, and cutting operations for agricultural machinery parts.' },
        { title: 'Shaft Work', description: 'Repairing, aligning, and manufacturing heavy-duty shafts essential for smooth transmission.' },
        { title: 'Bushes & Components', description: 'Custom machining of bushes, bearings, and specialized mechanical components.' },
        { title: 'Repair Works', description: 'Comprehensive diagnostic and repair services for damaged or worn-out agricultural equipment.' },
        { title: 'Fabrication Jobs', description: 'Welding, cutting, and assembling metal structures robustly for agricultural use.' },
        { title: 'Custom Metal Work', description: 'Bespoke engineering solutions engineered specifically to address unique farming requirements.' },
      ],
    },
    contact: {
      headerTitle: 'Contact Sunit Agrico',
      headerDescription: 'We are here to assist you with inquiries, quotes, or support.',
      branchesHeading: 'Our Branches',
      branches: [
        {
          name: 'Guna Branch',
          address: 'Bypass Road, Near Ram Hitech Hospital, Guna (M.P.)',
          phone: '+91 8319395925',
        },
        {
          name: 'Ashoknagar Branch',
          address: 'Chungi Naka, Near Honda Showroom, Ashoknagar (M.P.)',
          phone: '+91 8319395925',
        },
      ],
      emailHeading: 'Email Inquiries',
      emailDescription: 'For corporate orders, dealerships, or feedback email us:',
      email: 'info@sunitagrico.com',
      formHeading: 'Send us a Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+91 XXXXX XXXXX',
      messageLabel: 'Your Message',
      messagePlaceholder: 'How can we help you?',
      sendButton: 'Send Message',
      mapTitle: 'Guna Location Map',
    },
    footer: {
      description: 'Serving farmers with quality agricultural machines, spare parts, and engineering solutions since 1985.',
      quickLinksHeading: 'Quick Links',
      servicesHeading: 'Our Services',
      services: ['Machine Manufacturing', 'Authorized Dealing', 'Spare Parts Supply', 'Custom Fabrication', 'Precision Engineering'],
      contactInfoHeading: 'Contact Info',
      address: 'Bypass Road, Near Ram Hitech Hospital, Guna (M.P.)',
      phone: '+91 8319395925',
      email: 'info@sunitagrico.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      slogan: 'Sunit Agrico – Strong Machines. Trusted Service. Better Farming.',
      copyright: 'All rights reserved.',
    },
  },
  hi: {
    common: {
      language: 'भाषा',
      english: 'English',
      hindi: 'हिन्दी',
      learnMore: 'हमारी यात्रा के बारे में और जानें',
      sendMessageAlert: 'आपके संदेश के लिए धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।',
    },
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      spareParts: 'स्पेयर पार्ट्स',
      engineeringWorks: 'इंजीनियरिंग कार्य',
      contact: 'संपर्क',
      getQuote: 'कोट पूछें',
    },
    home: {
      hero: {
        title: 'सनिट एग्रीको – 1985 से कृषि मशीनरी में एक भरोसेमंद नाम',
        subtitle: 'किसानों को गुणवत्ता वाली कृषि मशीनें, स्पेयर पार्ट्स, और परिश precision इंजीनियरिंग समाधान दशकों से प्रदान कर रहे हैं।',
        contactCta: 'हमसे संपर्क करें',
        viewProductsCta: 'उत्पाद देखें',
      },
      badges: ['निर्माता', 'अधिकृत डीलर', 'स्पेयर पार्ट्स सप्लायर', 'फेब्रिकेशन एक्सपर्ट्स'],
      highlights: [
        {
          title: 'बेहतर खेती के लिए मजबूत मशीनें',
          description: 'मजबूत, उच्च प्रदर्शन मशीनरी जो कठिन कृषि कार्यों को कुशलतापूर्वक संभालती है।',
        },
        {
          title: 'असली स्पेयर पार्ट्स उपलब्ध',
          description: 'आपके उपकरण को सुचारू रूप से चलाने के लिए प्रामाणिक प्रतिस्थापन पुर्जों का व्यापक इन्वेंट्री।',
        },
        {
          title: 'परिश precision इंजीनियरिंग कार्य',
          description: 'विशेषज्ञ फेब्रिकेशन, लेथ वर्क, और कस्टम घटक जो आपकी सटीक आवश्यकताओं के अनुसार तैयार किए गए हैं।',
        },
      ],
      aboutOverview: {
        title: 'वर्षों का विश्वास और उत्कृष्टता',
        description: '1985 में स्थापित, सनिट एग्रीको ने किसानों और व्यवसायों को भरोसेमंद कृषि मशीनरी और इंजीनियरिंग समाधान प्रदान किए हैं। गुणवत्ता और ग्राहक संतुष्टि के प्रति हमारी प्रतिबद्धता अपरिवर्तित है।',
        bullets: [
          '1985 से निर्माण का अनुभव',
          'मजबूत आफ्टर-सेल्स सेवा और सपोर्ट',
          'असली स्पेयर पार्ट्स की व्यापक उपलब्धता',
          'इमानदार मूल्य निर्धारण और निष्पक्ष मार्गदर्शन',
        ],
      },
    },
    about: {
      headerTitle: 'सनिट एग्रीको के बारे में',
      headerDescription: '1985 में स्थापित, सनिट एग्रीको ने किसानों और व्यवसायों को भरोसेमंद कृषि मशीनरी और इंजीनियरिंग समाधान प्रदान किए हैं।',
      storyHeading: 'हमारी यात्रा',
      storyParagraphs: [
        'तीन दशकों पहले एक छोटे फ़ैब्रिकेशन यूनिट के रूप में शुरू होकर, सनिट एग्रीको कृषि क्षेत्र में एक भरोसेमंद नाम बन गया है। हम समझते हैं कि खेती हमारी अर्थव्यवस्था की रीढ़ है, और सही उपकरण होने से बड़ा फर्क पड़ता है।',
        'उत्कृष्टता के प्रति गहरी प्रतिबद्धता के साथ, हम अपने डिज़ाइनों में लगातार नवाचार करते हैं ताकि मशीनें न केवल टिकाऊ हों, बल्कि आधुनिक किसानों की व्यावहारिक आवश्यकताओं के अनुसार पूरी तरह उपयुक्त हों। आज भी, हम निर्माण, स्पेयर पार्ट्स और कस्टम प्रिसीजन इंजीनियरिंग कार्यों को उसी समर्पण के साथ करते हैं जो हमने पहले दिन किया था।',
      ],
      valuesHeading: 'हमारे मुख्य मूल्य',
      valuesSubtitle: 'वे सिद्धांत जो हर मशीन और हर सेवा को आगे बढ़ाते हैं।',
      values: [
        {
          title: 'टिकाऊ मशीनें',
          description: 'उच्च गुणवत्ता वाली सामग्रियों से निर्मित, जो सालों तक चुनौतीपूर्ण मैदान की स्थितियों को झेलती हैं।',
        },
        {
          title: 'व्यावहारिक डिज़ाइन',
          description: 'किसानों की वास्तविक चुनौतियों को ध्यान में रखते हुए इंजीनियर किए गए।',
        },
        {
          title: 'विश्वसनीय सेवा',
          description: 'जब भी आपको आवश्यकता हो, लगातार और उत्तरदायी रखरखाव और समर्थन।',
        },
        {
          title: 'समान्य मूल्य निर्धारण',
          description: 'आपके निवेश के लिए ईमानदार, पारदर्शी मूल्य जो उत्कृष्टता देते हैं।',
        },
        {
          title: 'दीर्घकालिक विश्वास',
          description: 'अपनी समुदाय के साथ ईमानदारी और पारस्परिक सम्मान के माध्यम से स्थायी संबंध बनाना।',
        },
      ],
    },
    products: {
      headerTitle: 'कृषि मशीनें',
      headerDescription: 'हमारे द्वारा निर्मित और शीर्ष उद्योग उपकरणों के अधिकृत डीलर।',
      manufacturedHeading: 'हमारे द्वारा निर्मित',
      manufacturedSubtitle: 'उच्च गुणवत्ता वाली सामग्री के साथ निर्मित ताकि आपकी पैदावार अधिकतम हो।',
      manufacturedSections: [
        {
          label: 'कल्टीवेटर्स',
          items: [
            { title: '5 टाइन कल्टीवेटर', description: 'छोटे खेत और संकरे पंक्तियों के लिए कॉम्पैक्ट और कुशल।', image: '/image/img-1.jpeg' },
            { title: '7 टाइन कल्टीवेटर', description: 'मिट्टी के विभिन्न कार्यों के लिए बहुमुखी मध्यम आकार का मॉडल।', image: '/image/img-2.jpeg' },
            { title: '9 टाइन कल्टीवेटर', description: 'बड़े पैमाने पर कुशल मिट्टी की तैयारी के लिए भारी-शुल्क मॉडल।', image: '/image/img-3.jpeg' },
          ],
        },
        {
          label: 'सीड ड्रिल मशीन',
          items: [
            { title: '9 टाइन सीड ड्रिल', description: 'बीज को सही स्थान पर रखने और इष्टतम वितरण सुनिश्चित करता है।', image: '/image/img-4.jpeg' },
            { title: '11 टाइन सीड ड्रिल', description: 'बड़े खेतों के लिए उच्च क्षमता ड्रिल, बुआई का समय कम करती है।', image: '/image/img-5.jpeg' },
          ],
        },
        {
          label: 'ट्रॉली',
          items: [
            { title: 'हैवी ड्यूटी ट्रैक्टर ट्रॉली', description: 'कठिन रास्तों पर भारी लोड ले जाने के लिए मजबूती से निर्मित।', image: '/image/img-1.jpeg' },
            { title: 'कस्टम फ़ैब्रिकेटेड ट्रॉली', description: 'आपकी फसल या परिवहन आवश्यकताओं के अनुसार तैयार की गई।', image: '/image/img-2.jpeg' },
          ],
        },
      ],
      dealerHeading: 'शीर्ष ब्रैंड्स का अधिकृत डीलर',
      dealerSubtitle: 'हम शीर्ष ब्रांड्स से प्रीमियम आधुनिक उपकरण प्रदान करते हैं।',
      dealerItems: ['लेज़र लैंड लेवेलर', 'KS स्ट्रॉ रीपर', 'थ्रेशर मशीन', 'सीड ग्रेडर'],
      whyHeading: 'हमारे उत्पाद क्यों चुनें?',
      whyDescription: 'वह मानक जिसका हम पालन करते हैं।',
      whyReasons: ['मजबूत सामग्री', 'व्यावहारिक डिज़ाइन', 'मुलायम प्रदर्शन', 'दीर्घकालिक उपयोग के लिए बना', 'किसान केंद्रित'],
      requestPricing: 'मूल्य पूछें',
    },
    spareParts: {
      headerTitle: 'मशीन स्पेयर पार्ट्स',
      headerDescription: 'गुणवत्ता वाले असली प्रतिस्थापन घटक जो आपके उपकरण को कुशलता से चलाते रहते हैं।',
      inventoryHeading: 'उपलब्ध पार्ट्स इन्वेंटरी',
      inventorySubtitle: 'तुरंत प्रतिस्थापन के लिए हमारे पास स्पेयर पार्ट्स की व्यापक श्रृंखला है।',
      items: ['थ्रेशर ब्लेड', 'स्टॉ रीपर पार्ट्स', 'ट्रांसमिशन बेल्ट', 'नट बोल्ट', 'बियरिंग्स', 'पुली पार्ट्स', 'हारो पार्ट्स', 'थ्रेशर जाली', 'अन्य घटक'],
      specificTitle: 'क्या आपको कोई विशिष्ट पार्ट चाहिए?',
      specificDescription: 'यदि आपको वह नहीं मिलता जो आप खोज रहे हैं, तो हमारी सपोर्ट टीम से संपर्क करें। हम पुराने या कस्टम मशीनरी के लिए विशेष पार्ट्स भी ढूंढ सकते हैं।',
      inquireWhatsApp: 'व्हाट्सएप पर स्टॉक पूछताछ करें',
    },
    engineeringWorks: {
      headerTitle: 'प्रिसीजन इंजीनियरिंग और फेब्रिकेशन सेवाएँ',
      headerDescription: 'विशिष्ट मरम्मत और कस्टम फेब्रिकेशन के माध्यम से आपके उपकरण की उम्र बढ़ाने के लिए तैयार मशीन शॉप सेवाएँ।',
      servicesHeading: 'हमारी फेब्रिकेशन सेवाएँ',
      servicesSubtitle: 'जटिल इंजीनियरिंग कार्यों को हल करने के लिए आधुनिक मशीनरी और अनुभवी ऑपरेटर उपलब्ध हैं।',
      serviceItems: [
        { title: 'लेथ मशीन जॉब्स', description: 'कृषि मशीनरी पार्ट्स के लिए उच्च-प्रिसीजन टर्निंग, थ्रेडिंग और कटिंग ऑपरेशन।' },
        { title: 'शाफ्ट वर्क', description: 'स्मूथ ट्रांसमिशन के लिए भारी-शुल्क शाफ्ट की मरम्मत, संरेखन और निर्माण।' },
        { title: 'बुश और घटक', description: 'बुश, बियरिंग और विशेष यांत्रिक घटकों की कस्टम मशीनिंग।' },
        { title: 'मरम्मत कार्य', description: 'नुकसान या घिसे हुए कृषि उपकरणों के लिए व्यापक निदान और मरम्मत सेवाएं।' },
        { title: 'फेब्रिकेशन जॉब्स', description: 'कृषि उपयोग के लिए मजबूत रूप से वेल्डिंग, कटिंग और असेंबलिंग करना।' },
        { title: 'कस्टम मेटल वर्क', description: 'अद्वितीय खेती की आवश्यकताओं को पूरा करने के लिए विशेष इंजीनियरिंग समाधान।' },
      ],
    },
    contact: {
      headerTitle: 'सनिट एग्रीको से संपर्क करें',
      headerDescription: 'हम आपको पूछताछ, कोट या सपोर्ट में सहायता करने के लिए यहां हैं।',
      branchesHeading: 'हमारी शाखाएं',
      branches: [
        {
          name: 'गुना शाखा',
          address: 'बायपास रोड, राम हitech अस्पताल के पास, गुना (म.प्र.)',
          phone: '+91 8319395925',
        },
        {
          name: 'अशोकनगर शाखा',
          address: 'चुंगी नाका, होंडा शोरूम के पास, अशोकनगर (म.प्र.)',
          phone: '+91 8319395925',
        },
      ],
      emailHeading: 'ईमेल पूछताछ',
      emailDescription: 'कॉर्पोरेट ऑर्डर, डीलरशिप या फीडबैक के लिए हमें ईमेल करें:',
      email: 'info@sunitagrico.com',
      formHeading: 'हमें एक संदेश भेजें',
      nameLabel: 'पूरा नाम',
      namePlaceholder: 'राम शर्मा',
      phoneLabel: 'फोन नंबर',
      phonePlaceholder: '+91 XXXXX XXXXX',
      messageLabel: 'आपका संदेश',
      messagePlaceholder: 'हम आपकी कैसे मदद कर सकते हैं?',
      sendButton: 'संदेश भेजें',
      mapTitle: 'गुना स्थान मानचित्र',
    },
    footer: {
      description: '1985 से किसानों को गुणवत्ता वाली कृषि मशीनें, स्पेयर पार्ट्स, और इंजीनियरिंग समाधान प्रदान करना।',
      quickLinksHeading: 'क्विक लिंक',
      servicesHeading: 'हमारी सेवाएँ',
      services: ['मशीन निर्माण', 'अधिकृत डीलिंग', 'स्पेयर पार्ट्स सप्लाई', 'कस्टम फेब्रिकेशन', 'प्रिसीजन इंजीनियरिंग'],
      contactInfoHeading: 'संपर्क जानकारी',
      address: 'बायपास रोड, राम हitech अस्पताल के पास, गुना (म.प्र.)',
      phone: '+91 8319395925',
      email: 'info@sunitagrico.com',
      hours: 'सोम - शनि: 9:00 AM - 7:00 PM',
      slogan: 'सनिट एग्रीको – मजबूत मशीनें। भरोसेमंद सेवा। बेहतर खेती।',
      copyright: 'सभी अधिकार सुरक्षित।',
    },
  },
};

export default translations;
