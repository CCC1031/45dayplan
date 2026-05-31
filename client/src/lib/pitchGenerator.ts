import { jsPDF } from "jspdf";

export interface PitchData {
  businessName: string;
  tagline: string;
  ownerName: string;
  phone: string;
  email: string;
  colorTheme: string; // "amber" | "emerald" | "blue" | "indigo"
}

export function generatePitchPdf(data: PitchData) {
  // Create a landscape presentation PDF (Letter size, landscape: 279.4mm x 215.9mm)
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "letter",
  });

  const busName = data.businessName || "Snaxology Vending Systems";
  const tagline = data.tagline || "Premium Refreshments, Tailored to Your Workplace";
  const owner = data.ownerName || "Vending Operator";
  const phone = data.phone || "512-555-0192";
  const email = data.email || "hello@snaxology.ai";

  // Color theme mapper
  const getColors = () => {
    switch (data.colorTheme) {
      case "emerald":
        return { primary: [16, 185, 129], primaryHex: "#10B981", accent: [5, 150, 105] };
      case "blue":
        return { primary: [59, 130, 246], primaryHex: "#3B82F6", accent: [37, 99, 235] };
      case "indigo":
        return { primary: [99, 102, 241], primaryHex: "#6366F1", accent: [79, 70, 229] };
      case "amber":
      default:
        return { primary: [226, 181, 62], primaryHex: "#E2B53E", accent: [245, 158, 11] };
    }
  };

  const theme = getColors();

  // Draw elegant slide background (Obsidian dark background)
  const drawSlideBg = () => {
    doc.setFillColor(9, 9, 11); // deep obsidian background
    doc.rect(0, 0, 280, 216, "F");
    
    // Subtle grid/border accent lines
    doc.setDrawColor(255, 255, 255, 0.02);
    doc.setLineWidth(0.3);
    doc.line(15, 0, 15, 216);
    doc.line(265, 0, 265, 216);
    doc.line(0, 15, 280, 15);
    doc.line(0, 201, 280, 201);
  };

  // Draw slide header
  const drawSlideHeader = (title: string) => {
    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
    doc.text(title, 25, 32);

    // Decorative line under header
    doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2]);
    doc.setLineWidth(0.8);
    doc.line(25, 37, 85, 37);
  };

  // Draw slide footer
  const drawSlideFooter = (pageNum: number, totalPages: number) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`${busName}  |  Vending Placement Proposal`, 25, 195);
    doc.text(`Slide ${pageNum} of ${totalPages}`, 255, 195, { align: "right" });
  };

  // ==========================================
  // SLIDE 1: COVER SLIDE
  // ==========================================
  drawSlideBg();

  // Large Branded Logo Badge
  doc.setFillColor(18, 18, 20); // glass card
  doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.3);
  doc.setLineWidth(1);
  doc.rect(25, 45, 230, 125, "FD");

  // Inner decorative border
  doc.rect(28, 48, 224, 119, "D");

  // Logo Mascot Placeholder Icon (Draw an elegant retro Automat / Cup icon)
  doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.setLineWidth(1.5);
  // Drawing a retro vending machine outline
  doc.rect(125, 60, 30, 45); // main body
  doc.line(125, 82, 155, 82); // split line
  doc.rect(130, 66, 20, 10); // screen display
  doc.circle(133, 89, 2); // snack select button 1
  doc.circle(140, 89, 2); // snack select button 2
  doc.circle(147, 89, 2); // snack select button 3
  doc.rect(132, 95, 16, 6); // dispensing tray

  // Typography on Cover
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(busName.toUpperCase(), 140, 120, { align: "center" });

  doc.setFont("helvetica", "italic");
  doc.setFontSize(13);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text(tagline, 140, 128, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text("FREE PLACEMENT & FULL-SERVICE PROPOSAL FOR YOUR FACILITY", 140, 142, { align: "center" });

  drawSlideFooter(1, 5);

  // ==========================================
  // SLIDE 2: THE PROBLEM & OUR SOLUTION
  // ==========================================
  doc.addPage();
  drawSlideBg();
  drawSlideHeader("THE WORKPLACE CHALLENGE");

  // Problem Column
  doc.setFillColor(24, 24, 27, 0.4); // zinc-900/40
  doc.rect(25, 50, 105, 125, "F");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(239, 68, 68); // rose-500
  doc.text("The Problem", 35, 65);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225); // slate-300
  const problems = [
    "• Employees leaving facility for mid-day snacks, reducing productive focus.",
    "• Outdated vending machines that break down frequently and eat cash.",
    "• Messy breakrooms with unhygienic snack setups and expired stock.",
    "• Limited payment options forcing employees to carry physical dollar bills."
  ];
  let problemY = 78;
  problems.forEach(p => {
    doc.text(doc.splitTextToSize(p, 85), 35, problemY);
    problemY += 18;
  });

  // Solution Column
  doc.setFillColor(24, 24, 27, 0.4); // zinc-900/40
  doc.rect(150, 50, 105, 125, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(16, 185, 129); // emerald-500
  doc.text("Our Solution", 160, 65);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225); // slate-300
  const solutions = [
    "• High-end smart vending machinery installed in your breakroom at absolutely $0 cost.",
    "• Fitted with modern telemetry card readers accepting Apple Pay, Google Pay, and major credit cards.",
    "• Weekly restocking schedules ensuring fresh, high-demand inventory at all times.",
    "• Full liability insurance and responsive 24/7 technical repair support."
  ];
  let solutionY = 78;
  solutions.forEach(s => {
    doc.text(doc.splitTextToSize(s, 85), 160, solutionY);
    solutionY += 18;
  });

  drawSlideFooter(2, 5);

  // ==========================================
  // SLIDE 3: SMART VENDING EQUIPMENT
  // ==========================================
  doc.addPage();
  drawSlideBg();
  drawSlideHeader("MODERN SMART MACHINERY");

  // Left Text Column
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(226, 232, 240); // slate-200
  const equipIntro = `We deploy premium, multi-zone combination vending machines designed to deliver both chilled beverages and fresh snacks from a single energy-efficient footprint.`;
  doc.text(doc.splitTextToSize(equipIntro, 110), 25, 55);

  // Features List
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text("KEY EQUIPMENT ADVANTAGES:", 25, 75);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225);
  const equipFeatures = [
    "1. Cashless Convenience: Accepting tap-to-pay, chip cards, and mobile wallets.",
    "2. Energy Star Certified: Advanced insulation and LED lighting reduces utility draw.",
    "3. Sure-Vend Sensor Tech: Guaranteed product delivery or instant automatic refund.",
    "4. Clean & Sleek Design: High-end aesthetics that elevate your employee breakroom."
  ];
  let featureY = 87;
  equipFeatures.forEach(f => {
    doc.text(doc.splitTextToSize(f, 110), 25, featureY);
    featureY += 14;
  });

  // Right Side: Beautiful mockup frame
  doc.setFillColor(18, 18, 20);
  doc.setDrawColor(255, 255, 255, 0.05);
  doc.rect(150, 50, 105, 125, "FD");
  doc.rect(153, 53, 99, 119, "D");

  // Drawing an elegant schematic snack machine inside the frame
  doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.4);
  doc.setLineWidth(1);
  doc.rect(172, 60, 55, 105); // machine outline
  
  // Shelves
  doc.line(172, 80, 227, 80);
  doc.line(172, 95, 227, 95);
  doc.line(172, 110, 227, 110);
  doc.line(172, 125, 227, 125);
  doc.line(172, 140, 227, 140);

  // Little coils / snacks
  doc.setFontSize(7);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.5);
  doc.text("COIL ROW 1", 175, 75);
  doc.text("COIL ROW 2", 175, 90);
  doc.text("COIL ROW 3", 175, 105);
  doc.text("CHILLED CANS", 175, 120);
  doc.text("CHILLED BOTTLES", 175, 135);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text("Sure-Vend Sensors Enabled", 200, 155, { align: "center" });

  drawSlideFooter(3, 5);

  // ==========================================
  // SLIDE 4: THE 3-STEP SETUP TIMELINE
  // ==========================================
  doc.addPage();
  drawSlideBg();
  drawSlideHeader("SEAMLESS 3-STEP DEPLOYMENT");

  // Step 1
  doc.setFillColor(24, 24, 27, 0.4);
  doc.rect(25, 55, 72, 115, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text("01", 35, 85);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("Scouting & Agreement", 35, 97);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(148, 163, 184);
  doc.text(doc.splitTextToSize("We conduct a 10-minute breakroom walk-through, verify electrical outlet access, and sign our risk-free 90-day trial agreement.", 55), 35, 108);

  // Step 2
  doc.setFillColor(24, 24, 27, 0.4);
  doc.rect(104, 55, 72, 115, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text("02", 114, 85);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("Delivery & Setup", 114, 97);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(148, 163, 184);
  doc.text(doc.splitTextToSize("We schedule professional machinery delivery and perform complete configuration, testing, and initial stocking within 14 business days.", 55), 114, 108);

  // Step 3
  doc.setFillColor(24, 24, 27, 0.4);
  doc.rect(183, 55, 72, 115, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text("03", 193, 85);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("Weekly Operations", 193, 97);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(148, 163, 184);
  doc.text(doc.splitTextToSize("We manage restocking, deep cleaning, cash/card telemetry tracking, and routine preventive maintenance completely in the background.", 55), 193, 108);

  drawSlideFooter(4, 5);

  // ==========================================
  // SLIDE 5: CONTACT & NEXT STEPS
  // ==========================================
  doc.addPage();
  drawSlideBg();
  drawSlideHeader("LOCK IN YOUR FREE PLACEMENT");

  // Contact Form Details Left Column
  doc.setFillColor(18, 18, 20);
  doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.2);
  doc.setLineWidth(0.5);
  doc.rect(25, 55, 110, 115, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text("PROPOSAL SUBMITTED BY:", 35, 72);

  doc.setFont("times", "bold");
  doc.setFontSize(18);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text(busName, 35, 84);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225);
  doc.text(`Representative:   ${owner}`, 35, 98);
  doc.text(`Phone Contact:    ${phone}`, 35, 108);
  doc.text(`Email Address:    ${email}`, 35, 118);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(16, 185, 129); // emerald-400
  doc.text("✓ Risk-Free 90-Day Trial Included", 35, 138);
  doc.text("✓ Zero Installation or Service Fees", 35, 146);
  doc.text("✓ Fully Insured & Licensed Operator", 35, 154);

  // Call to Action Right Column
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.05);
  doc.setDrawColor(theme.primary[0], theme.primary[1], theme.primary[2], 0.3);
  doc.rect(150, 55, 105, 115, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text("READY TO PROCEED?", 160, 72);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(203, 213, 225);
  const nextStepsText = `To lock in your free machine installation slot, please contact our team to schedule your 10-minute breakroom walkthrough. We will review spacing, clearances, and stock preferences to customize your vending menu!`;
  doc.text(doc.splitTextToSize(nextStepsText, 85), 160, 84);

  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.rect(160, 135, 85, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(9, 9, 11); // dark text on gold/amber
  doc.text("SCHEDULE WALKTHROUGH", 202.5, 146.5, { align: "center" });

  drawSlideFooter(5, 5);

  // Save the PDF
  const safeFileName = busName.toLowerCase().replace(/[^a-z0-9]/g, "_");
  doc.save(`${safeFileName}_pitch_proposal.pdf`);
}
