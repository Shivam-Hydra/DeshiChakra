(function () {
  const navItems = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "ecosystem", label: "Ecosystem", href: "ecosystem.html" },
    { key: "investment", label: "Investment", href: "investment.html" },
    { key: "impact", label: "Impact & Technology", href: "impact-technology.html" },
    { key: "founder", label: "Founder", href: "founder.html" },
    { key: "contact", label: "Contact / Partners", href: "contact.html" }
  ];

  const iconSvg = {
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 21c7 0 14-7 14-14V3h-4C8 3 3 8 3 15c0 2 1 4 2 6Z"/><path d="M3 21c4-5 8-8 14-10"/></svg>',
    recycle: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m7 19-4-7 4-7"/><path d="M3 12h12"/><path d="m17 5 4 7-4 7"/><path d="M21 12H9"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M8 6a4 4 0 0 1 8 0"/><path d="M9 18a4 4 0 0 1-4-4V9a3 3 0 0 1 3-3"/><path d="M15 18a4 4 0 0 0 4-4V9a3 3 0 0 0-3-3"/><path d="M9 10h6M9 14h6"/><path d="M12 6v12"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 20V4"/><path d="M4 20h16"/><path d="m7 15 4-4 3 3 5-7"/><path d="M17 7h2v2"/></svg>',
    cow: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 10h11a4 4 0 0 1 4 4v4"/><path d="M5 10V7l3 2 3-2 3 2 3-2v3"/><path d="M7 18v-4M15 18v-4"/><path d="M3 11v5a2 2 0 0 0 2 2h2"/><path d="M20 14h1"/><circle cx="11" cy="13" r="1"/></svg>',
    dome: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 12a8 8 0 0 1 16 0"/><path d="M3 12h18"/><path d="M5 12v7M9 12v7M15 12v7M19 12v7"/><path d="M3 19h18"/></svg>',
    fish: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 12s4-6 10-6 8 6 8 6-2 6-8 6-10-6-10-6Z"/><path d="m16 9 5-4v14l-5-4"/><circle cx="9" cy="12" r="1"/></svg>',
    greenhouse: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 20V10l9-6 9 6v10"/><path d="M7 20v-8h10v8"/><path d="M12 4v16"/><path d="M7 15h10"/></svg>',
    sensor: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
    energy: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z"/></svg>',
    market: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 10h16l-2-5H6l-2 5Z"/><path d="M5 10v9h14v-9"/><path d="M9 19v-5h6v5"/></svg>',
    gate: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 20V8l8-4 8 4v12"/><path d="M8 20v-8h8v8"/><path d="M4 12h4M16 12h4"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 21V9l6 4V9l6 4V8h6v13H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/><path d="M17 8V3h3v5"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 7h11v10H3z"/><path d="M14 11h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    rupee: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 5h12M6 9h12"/><path d="M7 5h5a4 4 0 0 1 0 8H7l9 8"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    expand: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><path d="M3 3l7 7M21 3l-7 7M3 21l7-7M21 21l-7-7"/></svg>',
    asset: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m7 12 3-3 2 2 4-5"/></svg>',
    drone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M10 12h4M12 10v4"/><path d="M5 5l5 5M19 5l-5 5M5 19l5-5M19 19l-5-5"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>',
    water: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 2s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z"/><path d="M9 15a3 3 0 0 0 5 2"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M2 21v-2a4 4 0 0 1 3-3.87"/><path d="M8 3.13a4 4 0 0 0 0 7.75"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 10h18L12 4 3 10Z"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M3 18h18M2 21h20"/></svg>',
    franchise: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 10h16l-2-5H6l-2 5Z"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/><path d="M8 5V3h8v2"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    press: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>'
  };

  function icon(name) {
    return iconSvg[name] || iconSvg.leaf;
  }

  const homeMetrics = [
    { icon: "cow", title: "250+", text: "Cattle Capacity", image: "assets/cow-metric.png" },
    { icon: "dome", title: "Biogas", text: "Renewable Energy", image: "assets/dome-metric.png" },
    { icon: "fish", title: "Fisheries", text: "Solar Water Channels", image: "assets/fish-metric.png" },
    { icon: "greenhouse", title: "Greenhouse", text: "Smart Farming", image: "assets/greenhouse-seedling.png" },
    { icon: "brain", title: "AI Command", text: "Real-time Intelligence", image: "assets/ai-metric.png" },
    { icon: "leaf", title: "Eco Tourism", text: "Experience & Learn", image: "assets/eco-tourism-metric.png" },
    { icon: "energy", title: "Energy", text: "Augmentation", image: "assets/energy-bolt.jpg" },
    { icon: "market", title: "Direct Market", text: "Farm to Consumer", image: "assets/market-shop.png" }
  ];

  const revenueStreams = [
    { icon: "cow", title: "Dairy & Milk Production", text: "High-quality milk, animal health and managed dairy output.", visual: "linear-gradient(135deg,#d8d2be,#8b6f4d)", image: "assets/tiles/tile-smart-dairy-shed.jpg" },
    { icon: "fish", title: "Fisheries & Aquaculture", text: "Solar water channels, oxygenated water flow and fish farming.", visual: "linear-gradient(135deg,#28747c,#8bc0b4)", image: "assets/tiles/tile-fish-channel.jpg" },
    { icon: "greenhouse", title: "Greenhouse Produce", text: "Climate-controlled vegetables and premium produce.", visual: "linear-gradient(135deg,#2e7b43,#b1c85a)", image: "assets/tiles/tile-greenhouse.jpg" },
    { icon: "leaf", title: "Fruit Orchards & Agro Produce", text: "Seasonal fruit, orchards and crop diversity.", visual: "linear-gradient(135deg,#715b22,#d6a337)", image: "assets/tiles/tile-fruit-belt.jpg" },
    { icon: "factory", title: "Value Added Products", text: "Processing, packaging and local product development.", visual: "linear-gradient(135deg,#a46d43,#ecd4a1)", image: "assets/tiles/tile-dairy-processing.jpg" },
    { icon: "market", title: "Retail & Farm Store", text: "On-site retail, direct pricing and consumer access.", visual: "linear-gradient(135deg,#94462c,#e2a24a)", image: "assets/tiles/tile-market.jpg" },
    { icon: "truck", title: "E-Commerce & Delivery", text: "Transparent ordering, cold-chain movement and traceability.", visual: "linear-gradient(135deg,#3b5f63,#b8d4ca)", image: "assets/tiles/tile-ecommerce-delivery.jpg" },
    { icon: "leaf", title: "Eco Tourism & Experience", text: "Learning visits, rural experiences and ecosystem tours.", visual: "linear-gradient(135deg,#4e7b3d,#d2c46a)", image: "assets/tiles/tile-eco-tourism.jpg" }
  ];

  const impactStats = [
    { icon: "people", value: "200+", label: "Jobs by Unit" },
    { icon: "energy", value: "100%", label: "Energy Generated On Site" },
    { icon: "recycle", value: "95%", label: "Waste Recycled" },
    { icon: "leaf", value: "95%", label: "Healthy Food for Communities" },
    { icon: "chart", value: "Higher", label: "Profits for Farmers" }
  ];

  const pages = {
    home: {
      number: "1",
      label: "Home",
      pageDoes: [
        "Positions Deshi Chakra as a complete rural ecosystem",
        "Shows the main benefits at a glance",
        "Explains the circular working model",
        "Highlights multiple revenue streams and impact"
      ],
      cta: ["Watch Vision Film", "Explore Ecosystem"]
    },
    ecosystem: {
      number: "2",
      label: "Ecosystem",
      title: "Explore The Deshi Chakra Ecosystem",
      subtitle: "Every Element is Connected. Every Resource is Utilised.",
      pageDoes: [
        "Detailed walkthrough of the entire ecosystem",
        "Shows how each unit works and connects",
        "Highlights resource flow and circular economy",
        "Builds confidence in sustainability model"
      ],
      cta: ["Book a Visit", "Download Ecosystem Brochure"],
      steps: [
        { title: "Entry & Infrastructure", items: ["Smart Entry Gate", "Parking & EV Charging", "Security & Green Landscaping"] },
        { title: "Dairy Ecosystem", items: ["250+ Cattle Capacity", "Automated Milking", "Health Monitoring", "Guided Movement"] },
        { title: "Biogas Plant", items: ["Bio-gas for clean energy", "Organic fertilizer output", "Nutrient recycling", "Water conservation"] },
        { title: "Greenhouse Farming", items: ["Climate Controlled", "Hydroponic / Organic", "High Value Crops", "Year Round Production"] },
        { title: "Solar Channels", items: ["Solar Energy Integration", "Milk & Water Sterilisation", "Oxygenated Water Flow", "Sustainable Aquaculture"] },
        { title: "Farm Marketplace", items: ["Farm to Consumer", "Fresh Produce", "Direct Pricing", "Better Returns"] },
        { title: "Processing Unit", items: ["Hygienic Processing", "Value Added Products", "Decentralised Centres", "Outlet Alliance"] },
        { title: "E-Commerce & Delivery", items: ["Online Ordering", "Cold Chain Delivery", "Transparent", "Traceable"] }
      ]
    },
    investment: {
      number: "3",
      label: "Investment Opportunity",
      title: "Invest in a Sustainable Future",
      subtitle: "High Impact. Multiple Revenue Streams. Scalable Across India.",
      pageDoes: [
        "Presents the investment case clearly",
        "Explains revenue, ROI, scalability and expansion",
        "Builds trust with financial overview",
        "Strong lead generation page",
        "Designed for investors and government stakeholders"
      ],
      cta: ["Download Investor Deck", "Schedule Meeting"],
      highlights: [
        { icon: "rupee", title: "8+ Revenue Streams" },
        { icon: "chart", title: "Attractive ROI" },
        { icon: "clock", title: "3-5 Years Payback Period" },
        { icon: "expand", title: "Highly Scalable" },
        { icon: "asset", title: "Asset Light Expansion" }
      ],
      finance: [
        { value: "18-24%", label: "Projected ROI" },
        { value: "3-5 Years", label: "Payback Period" },
        { value: "High", label: "Net Margins" },
        { value: "Year Round", label: "Revenue" },
        { value: "Low", label: "Operating Cost" }
      ]
    },
    impact: {
      number: "4",
      label: "Impact & Technology",
      title: "Technology That Creates Impact",
      subtitle: "Smart. Sustainable. Measurable.",
      pageDoes: [
        "Shows how technology powers operations",
        "Highlights environmental and social impact",
        "Aligns with government goals and SDGs",
        "Builds credibility and long-term vision"
      ],
      cta: ["Partner With Us", "Explore Technology"],
      technologies: [
        { icon: "monitor", title: "AI Command Center", text: "Real-time monitoring of livestock, energy, crops and operations.", visual: "linear-gradient(135deg,#062332,#18707d)", image: "assets/tiles/tile-ai-command-center.jpg" },
        { icon: "sensor", title: "IoT Sensors", text: "Monitor livestock, water, fields, tanks and energy usage.", visual: "linear-gradient(135deg,#345c47,#9bc26e)", image: "assets/tiles/tile-impact-dashboard.jpg" },
        { icon: "drone", title: "Drones", text: "Precision farming, crop health monitoring and mapping.", visual: "linear-gradient(135deg,#62859d,#d5e3d8)", image: "assets/tiles/tile-drone-farming.jpg" },
        { icon: "water", title: "Smart Irrigation", text: "AI-based irrigation scheduling for water optimisation.", visual: "linear-gradient(135deg,#2f7379,#9ad1be)", image: "assets/tiles/tile-rainwater-harvesting.jpg" }
      ],
      groups: [
        { title: "Environmental Impact", items: [{ icon: "recycle", label: "Zero Waste Circular Economy" }, { icon: "leaf", label: "Low Carbon Footprint" }, { icon: "water", label: "Water Conservation" }, { icon: "shield", label: "Biodiversity Protection" }] },
        { title: "Social Impact", items: [{ icon: "people", label: "Empowering Farmers" }, { icon: "brain", label: "Skill Development" }, { icon: "sensor", label: "Rural Employment" }, { icon: "market", label: "Rural Prosperity" }] },
        { title: "Government Alignment", items: [{ icon: "leaf", label: "Atmanirbhar Bharat" }, { icon: "cow", label: "Make in India" }, { icon: "asset", label: "Doubling Farmers Income" }, { icon: "globe", label: "Digital India" }] }
      ]
    },
    founder: {
      number: "5",
      label: "Founder",
      title: "Meet Our Founder",
      subtitle: "Founder and Visionary behind the Deshi Chakra rural ecosystem.",
      pageDoes: [
        "Introduces the founder and his leadership journey",
        "Builds confidence through experience and purpose",
        "Connects the ecosystem vision to rural self-reliance",
        "Creates a human trust point for partners and investors"
      ],
      cta: ["Connect With Founder", "Partner With Us"],
      name: "Sudheesh Nandan Singh",
      role: "Founder & Visionary, Deshi Chakra",
      intro: "Engineer. Industrialist. Author. Nation Builder.",
      copy: [
        "With more than three decades of experience across engineering, infrastructure, manufacturing, and entrepreneurship, Sudheesh Nandan Singh has dedicated his life to creating systems that generate long-term value for society.",
        "From building successful engineering and steel enterprises to representing industrial interests in Bihar, his journey has been defined by discipline, innovation, and purposeful leadership.",
        "Inspired by India's rural strength and entrepreneurial spirit, he founded Deshi Chakra with a mission to connect farmers, artisans, dairy producers, fisheries, and local businesses through a unified ecosystem that creates sustainable growth and market access.",
        "His vision is to empower grassroots communities, promote self-reliance, and build a stronger economic future rooted in Indian values."
      ],
      quote: "The future of India lies in strengthening its villages, empowering its producers, and creating opportunities that allow local communities to thrive. Deshi Chakra is a step towards that vision."
    },
    contact: {
      number: "6",
      label: "Contact / Partners",
      title: "Let's Build The Future Together",
      subtitle: "Partner. Invest. Collaborate.",
      pageDoes: [
        "Single point of contact for all stakeholders",
        "Investor, government, franchise, media and operations",
        "Encourages collaboration and partnerships",
        "Simple, clean and action oriented"
      ],
      cta: ["Get In Touch", "Become a Partner"],
      contacts: [
        { icon: "rupee", title: "Investor Relations", text: "For investment opportunities and financial partnership.", email: "invest@deshichakra.in", phone: "+91 96765 43210" },
        { icon: "bank", title: "Government Partnerships", text: "For policy collaboration and rural development projects.", email: "partnership@deshichakra.in", phone: "+91 96765 43211" },
        { icon: "franchise", title: "Franchise / FOCO Partnership", text: "Join our FOCO network and expand together.", email: "franchise@deshichakra.in", phone: "+91 96765 43212" },
        { icon: "user", title: "Farm Operations", text: "For operational queries and farm visits.", email: "operations@deshichakra.in", phone: "+91 96765 43213" },
        { icon: "press", title: "Media & Press", text: "For media inquiries and press releases.", email: "media@deshichakra.in", phone: "+91 96765 43214" }
      ]
    }
  };

  const footerReasons = [
    { icon: "chart", text: "Easy to navigate & remember" },
    { icon: "leaf", text: "Focuses on what matters most" },
    { icon: "asset", text: "Better user experience" },
    { icon: "user", text: "Higher engagement & conversions" },
    { icon: "shield", text: "Easy to update & maintain" }
  ];

  const audiences = [
    { icon: "people", title: "Investors", text: "ROI, Growth, Returns" },
    { icon: "bank", title: "Government", text: "Impact, Development" },
    { icon: "sensor", title: "Partners", text: "FOCO, Collaboration" },
    { icon: "market", title: "Consumers", text: "Fresh, Healthy, Traceable" }
  ];

  function init() {
    const pageKey = document.body.dataset.page || "home";
    renderHeader(pageKey);
    renderPage(pageKey);
    renderFooter();
    bindNav();
    bindForms();
  }

  function renderHeader(activeKey) {
    const header = document.getElementById("site-header");
    header.innerHTML = `
      <header class="site-header">
        <div class="site-shell topbar">
          <a class="brand" href="index.html" aria-label="Deshi Chakra home">
            <img src="assets/logo.svg" alt="">
            <span>
              <span class="brand-title">DESHI<br>CHAKRA</span>
              <span class="brand-kicker">A Self-Sustaining,<br>AI-Powered Agri Ecosystem</span>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation">${icon("menu")}</button>
          <nav class="site-nav" id="main-nav" aria-label="Main navigation">
            ${navItems.map(item => `<a class="${item.key === activeKey ? "is-active" : ""}" href="${item.href}">${item.label}</a>`).join("")}
          </nav>
          <div class="proof-badges" aria-label="Core strengths">
            <div class="proof-badge">${icon("leaf")}Sustainable</div>
            <div class="proof-badge">${icon("recycle")}Circular</div>
            <div class="proof-badge">${icon("brain")}AI Powered</div>
            <div class="proof-badge">${icon("chart")}Profitable</div>
          </div>
        </div>
      </header>
    `;
  }

  function renderPage(pageKey) {
    const app = document.getElementById("app");
    if (pageKey === "home") {
      app.innerHTML = renderHome();
      return;
    }
    if (pageKey === "ecosystem") {
      app.innerHTML = renderEcosystem();
      return;
    }
    if (pageKey === "investment") {
      app.innerHTML = renderInvestment();
      return;
    }
    if (pageKey === "impact") {
      app.innerHTML = renderImpact();
      return;
    }
    if (pageKey === "founder") {
      app.innerHTML = renderFounder();
      return;
    }
    if (pageKey === "contact") {
      app.innerHTML = renderContact();
    }
  }

  function renderHome() {
    const page = pages.home;
    return `
      <section class="home-hero">
        <div class="site-shell hero-content">
          <span class="hero-eyebrow">One Ecosystem. Multiple Benefits. Sustainable Today. Profitable Tomorrow.</span>
          <h1>DESHI CHAKRA</h1>
          <p class="hero-lead">AI Powered Self-Sustaining Rural Ecosystem</p>
          <div class="hero-lines">
            <span>Integrated Dairy - Renewable Energy - Fisheries - Farming</span>
            <span>Direct Market Access - Franchising</span>
          </div>
          <div class="button-row">
            <a class="btn" href="#vision">${icon("play")}Watch Vision Film</a>
            <a class="btn secondary" href="ecosystem.html">Explore Ecosystem</a>
          </div>
        </div>
      </section>
      <section class="section tight" id="vision">
        <div class="site-shell">
          ${sectionTitle("Deshi Chakra At A Glance", "A complete self-sustaining rural ecosystem built around production, renewable energy, technology and market access.")}
          <div class="grid four">
            ${homeMetrics.map(metricCard).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("How Deshi Chakra Works", "A circular model where every unit supports the next.")}
          <div class="working-layout">
            <figure class="diagram-card">
              <img src="assets/deshi-chakra-circular-logo.png" alt="Deshi Chakra circular ecosystem diagram">
            </figure>
            <div class="flow-band">
              <div class="flow-list">
                ${[
                  { label: "Dairy", icon: "cow", img: "assets/cow-metric.png" },
                  { label: "Biogas", icon: "dome", img: "assets/dome-metric.png" },
                  { label: "Energy", icon: "energy", img: "assets/energy-bolt.jpg" },
                  { label: "Fishery", icon: "fish", img: "assets/fish-metric.png" },
                  { label: "Greenhouse", icon: "greenhouse", img: "assets/greenhouse-seedling.png" },
                  { label: "Market", icon: "market", img: "assets/market-shop.png" }
                ].map(item => flowNode(item.label, item.icon, item.img)).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Multiple Revenue Streams", "Income is diversified across production, processing, retail, delivery and experience-led models.")}
          <div class="revenue-gallery">
            ${revenueStreams.map(revenueCard).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Our Impact", "Designed to create local income, clean energy, food security and measurable community value.")}
          ${renderImpactStrip()}
        </div>
      </section>

    `;
  }

  function renderEcosystem() {
    const page = pages.ecosystem;
    return `
      ${renderPageHero(page)}
      <section class="section">
        <div class="site-shell split-layout">
          <div class="feature-art">
            <img src="assets/ecosystem-masterplan.jpeg" alt="Deshi Chakra integrated smart gaushala master plan">
            <div class="caption-row">
              <span>Integrated smart gaushala master plan</span>
              <span>Every resource is utilised</span>
            </div>
          </div>
          <div class="steps-grid">
            ${page.steps.map((step, index) => stepCard(step, index + 1)).join("")}
          </div>
        </div>
      </section>

    `;
  }

  function renderInvestment() {
    const page = pages.investment;
    return `
      ${renderPageHero(page)}
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Investor Snapshot", "High impact, multiple revenue streams and scalable growth across India.")}
          <div class="mini-card-grid">
            ${page.highlights.map(item => `<article class="mini-card"><span class="icon-round">${icon(item.icon)}</span><strong>${item.title}</strong></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Multiple Revenue Streams", "A diversified business model reduces dependency on a single source of income.")}
          <div class="grid four">
            ${revenueStreams.map(item => `<article class="metric-card"><span class="icon-round">${icon(item.icon)}</span><strong>${item.title}</strong><span>${item.text}</span></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Financial Overview", "Indicative investment view for early-stage planning and partner discussions.")}
          <div class="finance-grid">
            ${page.finance.map(item => `<article class="finance-card"><strong>${item.value}</strong><span>${item.label}</span></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell investor-download">
          <div class="feature-art">
            <img src="assets/investment-opportunity.jpeg" alt="Deshi Chakra investment opportunity overview">
            <div class="caption-row">
              <span>Investment opportunity overview</span>
              <span>Scalable, AI-powered, self-sustaining</span>
            </div>
          </div>
          <form class="form-card js-investor-form">
            <h3>Download Investor Deck</h3>
            <p>Get detailed financials, projections and partnership models.</p>
            <div class="form-grid">
              <input type="text" name="name" placeholder="Full Name" aria-label="Full name" required>
              <input type="email" name="email" placeholder="Email Address" aria-label="Email address" required>
              <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" required>
              <input type="text" name="organisation" placeholder="Organisation" aria-label="Organisation">
              <button class="btn" type="submit">Download Now ${icon("download")}</button>
              <div class="form-message" role="status"></div>
            </div>
          </form>
        </div>
      </section>

    `;
  }

  function renderImpact() {
    const page = pages.impact;
    return `
      ${renderPageHero(page)}
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Technology That Powers Operations", "AI, sensors, drones and irrigation systems keep the ecosystem measurable and efficient.")}
          <div class="feature-art feature-art-wide">
            <img src="assets/impact-technology-panel.jpeg" alt="Deshi Chakra impact and technology dashboard">
            <div class="caption-row">
              <span>Impact & technology dashboard</span>
              <span>AI-powered, IoT-enabled, sustainable</span>
            </div>
          </div>
          <div class="tech-grid">
            ${page.technologies.map(techCard).join("")}
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          ${sectionTitle("Our Impact", "Measurable benefits across jobs, energy, water, waste and farmer income.")}
          ${renderImpactStrip()}
        </div>
      </section>
      <section class="section tight">
        <div class="site-shell">
          <div class="impact-groups">
            ${page.groups.map(group => `
              <article class="impact-card">
                <h3>${group.title}</h3>
                <div class="pill-list">
                  ${group.items.map(item => `<div class="impact-pill">${icon(item.icon)}<span>${item.label}</span></div>`).join("")}
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

    `;
  }

  function renderFounder() {
    const page = pages.founder;
    return `
      ${renderPageHero(page)}
      <section class="section">
        <div class="site-shell founder-layout">
          <aside class="portrait-panel">
            <img src="assets/founder-sudheesh.png" alt="Sudheesh Nandan Singh">
            <div class="portrait-caption">
              <strong>${page.name}</strong>
              <span>${page.role}</span>
            </div>
          </aside>
          <div>
            <article class="bio-copy">
              <h2>${page.name}</h2>
              <p class="role">${page.intro}</p>
              ${page.copy.map(paragraph => `<p>${paragraph}</p>`).join("")}
            </article>
            <section class="quote-panel">
              <h3>Founder's Vision</h3>
              <blockquote>${page.quote}</blockquote>
              <cite>- ${page.name}</cite>
            </section>
          </div>
        </div>
      </section>

    `;
  }

  function renderContact() {
    const page = pages.contact;
    return `
      ${renderPageHero(page)}
      <section class="section">
        <div class="site-shell contact-layout">
          <div class="contact-list">
            ${page.contacts.map(contact => `
              <article class="contact-card">
                <span class="icon-round">${icon(contact.icon)}</span>
                <div>
                  <h3>${contact.title}</h3>
                  <p>${contact.text}</p>
                  <a href="mailto:${contact.email}">${contact.email}</a>
                  <a href="tel:${contact.phone.replace(/\s/g, "")}">${contact.phone}</a>
                </div>
              </article>
            `).join("")}
          </div>
          <aside class="location-panel">
            <h2>Our Location</h2>
            <div class="address-lines">
              <span>Deshi Chakra Ecosystem Pvt. Ltd.</span>
              <span>Village ______ District ______ State ______</span>
              <span>India</span>
            </div>
            <img src="assets/tiles/tile-smart-entry.jpg" alt="Deshi Chakra smart entry gate">
            <div class="social-panel">
              <h2>Follow Us</h2>
              <div class="social-icons" aria-label="Social links">
                <a href="#" aria-label="Facebook">${icon("globe")}</a>
                <a href="#" aria-label="Instagram">${icon("leaf")}</a>
                <a href="#" aria-label="LinkedIn">${icon("user")}</a>
                <a href="#" aria-label="YouTube">${icon("play")}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

    `;
  }

  function renderPageHero(page) {
    return `
      <section class="page-hero">
        <div class="site-shell page-hero-inner">
          <div>
            <span class="page-eyebrow">${page.label}</span>
            <h1>${page.title}</h1>
            <p>${page.subtitle}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderImpactStrip() {
    return `
      <div class="impact-strip">
        ${impactStats.map(item => `<article class="impact-stat">${icon(item.icon)}<strong>${item.value}</strong><span>${item.label}</span></article>`).join("")}
      </div>
    `;
  }



  function renderFooter() {
    const footer = document.getElementById("site-footer");
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="site-shell footer-grid">
          <section class="closing-cta">
            <strong>Together, Let's Build A Self-Reliant Rural India.</strong>
            ${icon("leaf")}
          </section>
        </div>
      </footer>
    `;
  }

  function sectionTitle(title, subtitle) {
    return `<div class="section-title"><h2>${title}</h2><p>${subtitle}</p></div>`;
  }

  function metricCard(item) {
    const visual = item.image 
      ? `<span class="icon-round has-img"><img src="${item.image}" alt="${item.text}"></span>` 
      : `<span class="icon-round">${icon(item.icon)}</span>`;
    return `<article class="metric-card">${visual}<strong>${item.title}</strong><span>${item.text}</span></article>`;
  }

  function flowNode(label, iconName, image) {
    const visual = image 
      ? `<span class="icon-round has-img"><img src="${image}" alt="${label}"></span>` 
      : `<span class="icon-round">${icon(iconName)}</span>`;
    return `<div class="flow-node">${visual}<span>${label}</span></div>`;
  }

  function revenueCard(item) {
    const visualClass = item.image ? "revenue-visual has-image" : "revenue-visual";
    const imageStyle = item.image ? `--visual-bg:${item.visual}; --visual-image:url('${item.image}')` : `--visual-bg:${item.visual}`;
    return `
      <article class="revenue-card">
        <div class="${visualClass}" style="${imageStyle}"></div>
        <div class="body">
          <strong>${item.title}</strong>
          <span>${item.text}</span>
        </div>
      </article>
    `;
  }

  function stepCard(step, index) {
    return `
      <article class="step-card">
        <div class="step-title"><span class="step-number">${index}</span><span>${step.title}</span></div>
        <ul class="plain-list">
          ${step.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `;
  }

  function techCard(item) {
    const visualClass = item.image ? "tech-visual has-image" : "tech-visual";
    const imageStyle = item.image ? `--visual-bg:${item.visual}; --visual-image:url('${item.image}')` : `--visual-bg:${item.visual}`;
    return `
      <article class="tech-card">
        <div class="${visualClass}" style="${imageStyle}">${item.image ? "" : icon(item.icon)}</div>
        <div class="body">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `;
  }

  function ctaHref(label) {
    const normalized = label.toLowerCase();
    if (normalized.includes("ecosystem")) return "ecosystem.html";
    if (normalized.includes("investor") || normalized.includes("meeting")) return "investment.html";
    if (normalized.includes("technology")) return "impact-technology.html";
    if (normalized.includes("founder")) return "founder.html";
    if (normalized.includes("partner") || normalized.includes("touch") || normalized.includes("visit")) return "contact.html";
    return "#";
  }

  function bindNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  function bindForms() {
    const form = document.querySelector(".js-investor-form");
    if (!form) return;
    form.addEventListener("submit", event => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      message.textContent = "Thank you. The investor deck request is ready to be processed.";
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
