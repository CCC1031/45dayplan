import { jsPDF } from "jspdf";

interface ContractData {
  companyName: string;
  address: string;
  contactName: string;
  phone: string;
  email: string;
  date: string;
}

export function generateContractPdf(data: ContractData) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "letter",
  });

  const companyName = data.companyName || "[COMPANY NAME]";
  const address = data.address || "[FACILITY ADDRESS]";
  const contactName = data.contactName || "[CONTACT PERSON]";
  const phone = data.phone || "[PHONE NUMBER]";
  const email = data.email || "[EMAIL ADDRESS]";
  const date = data.date || new Date().toISOString().split("T")[0];

  // Helper to draw horizontal line
  const drawLine = (y: number) => {
    doc.setDrawColor(226, 181, 62); // gold accent
    doc.setLineWidth(0.5);
    doc.line(20, y, 195, y);
  };

  // Helper to add footer
  const addFooter = (pageNum: number, totalPages: number) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text("Snaxology Vending Systems - 90-Day Trial Agreement", 20, 265);
    doc.text(`Page ${pageNum} of ${totalPages}`, 180, 265, { align: "right" });
  };

  // ==========================================
  // PAGE 1: TITLE & PARTY INFORMATION
  // ==========================================
  
  // Header / Branding
  doc.setFillColor(9, 9, 11); // obsidian background
  doc.rect(0, 0, 216, 45, "F");
  
  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.setTextColor(226, 181, 62); // liquid gold
  doc.text("SNAXOLOGY VENDING SYSTEMS", 20, 20);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("PREMIUM REFRESHMENT SERVICES • 90-DAY TRIAL AGREEMENT", 20, 30);
  
  // Title
  doc.setFont("times", "bold");
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("VENDING MACHINE PLACEMENT AGREEMENT", 20, 60);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text("No-Cost, Full-Service 90-Day Trial Period", 20, 66);
  
  drawLine(72);
  
  // Intro Text
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85); // slate-700
  const introText = `This Vending Machine Placement Agreement ("Agreement") is entered into and made effective as of ${date} ("Effective Date"), by and between Snaxology Vending Systems ("Operator") and the client identified below ("Client").`;
  doc.text(doc.splitTextToSize(introText, 175), 20, 80);

  // Client Details Box
  doc.setFillColor(248, 250, 252); // zinc-50
  doc.setDrawColor(226, 226, 226);
  doc.rect(20, 98, 175, 55, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("CLIENT & FACILITY INFORMATION", 25, 106);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  
  doc.text(`Company Name:   ${companyName}`, 25, 115);
  doc.text(`Facility Address:  ${address}`, 25, 122);
  doc.text(`Contact Person:   ${contactName}`, 25, 129);
  doc.text(`Phone Number:     ${phone}`, 25, 136);
  doc.text(`Contact Email:    ${email}`, 25, 143);

  // Section 1: Scope of Service
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("1. SCOPE OF SERVICE", 20, 168);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const sec1Text = `Operator agrees to install, stock, service, and maintain vending machine equipment ("Equipment") at the Client's facility located at the address above. All services, including initial installation, weekly restocking, maintenance, and technical repairs, shall be provided at absolutely ZERO COST to the Client.`;
  doc.text(doc.splitTextToSize(sec1Text, 175), 20, 174);

  // Section 2: Equipment & Inventory
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("2. EQUIPMENT & INVENTORY SELECTION", 20, 198);
  
  const sec2Text = `The initial placement shall consist of high-end, MDB-compliant combo vending machinery fitted with modern telemetry cashless credit card readers. Operator shall have exclusive rights to select, supply, and price snacks, cold beverages, and healthy alternatives. Client may request specific inventory modifications to accommodate employee feedback.`;
  doc.text(doc.splitTextToSize(sec2Text, 175), 20, 204);

  // Section 3: Revenue & Utilities
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("3. UTILITIES & PLACEMENT ACCESS", 20, 228);
  
  const sec3Text = `Client agrees to provide a dedicated 115V AC, 60Hz standard electrical outlet within 6 feet of the designated installation space. Client shall grant Operator's service personnel reasonable access to the facility during standard business hours for maintenance, sanitation, and restocking runs.`;
  doc.text(doc.splitTextToSize(sec3Text, 175), 20, 234);

  addFooter(1, 2);

  // ==========================================
  // PAGE 2: TERMS, CONDITIONS & SIGNATURES
  // ==========================================
  doc.addPage();

  // Header banner on page 2 (thinner)
  doc.setFillColor(9, 9, 11);
  doc.rect(0, 0, 216, 20, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("4. 90-DAY TRIAL PERIOD & TERM", 20, 35);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const sec4Text = `The parties agree to a ninety (90) day trial period beginning on the installation date. This trial period allows both parties to evaluate route volume and service quality. At any point during or at the end of the 90-day trial, either party may terminate this Agreement with ten (10) days written notice, in which case Operator will remove the Equipment at no cost to Client. If not terminated, this Agreement automatically renews for a standard twelve (12) month term.`;
  doc.text(doc.splitTextToSize(sec4Text, 175), 20, 41);

  // Section 5: Ownership & Liability
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("5. OWNERSHIP, MAINTENANCE & LIABILITY", 20, 72);
  
  const sec5Text = `The Equipment shall remain the sole and exclusive property of the Operator. Operator is responsible for all general maintenance, cleaning, product inventory loss, and technical repairs. Client agrees to take reasonable measures to prevent vandalism or theft of the Equipment and shall notify Operator immediately of any machine malfunction, error code, or physical damage. Operator holds full liability insurance covering product liability and equipment operations.`;
  doc.text(doc.splitTextToSize(sec5Text, 175), 20, 78);

  // Section 6: Exclusivity
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("6. EXCLUSIVITY", 20, 108);
  
  const sec6Text = `Client agrees that Operator shall be the exclusive provider of vending, snack, and beverage retail services within the designated facility during the active term of this Agreement. No other vending equipment or commercial snack sales stations shall be permitted without prior written consent from Operator.`;
  doc.text(doc.splitTextToSize(sec6Text, 175), 20, 114);

  drawLine(135);

  // Signatures Section
  doc.setFont("times", "bold");
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text("EXECUTION & SIGNATURES", 20, 148);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  doc.text("IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date.", 20, 154);

  // Operator Signature Column
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("OPERATOR:", 20, 172);
  doc.setFont("helvetica", "normal");
  doc.text("Snaxology Vending Systems", 20, 178);
  
  doc.line(20, 205, 95, 205); // Signature Line
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Authorized Signature (Snaxology Operator)", 20, 210);
  
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`Date: ${date}`, 20, 218);

  // Client Signature Column
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("CLIENT:", 115, 172);
  doc.setFont("helvetica", "normal");
  doc.text(companyName, 115, 178);
  
  doc.line(115, 205, 190, 205); // Signature Line
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Authorized Signature (${contactName})`, 115, 210);
  
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`Date: ________________________`, 115, 218);

  // Small note at the bottom
  doc.setFillColor(254, 243, 199); // amber-100
  doc.setDrawColor(245, 158, 11); // amber-500
  doc.rect(20, 232, 175, 15, "FD");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text("OPERATIONAL NOTE:", 24, 238);
  doc.setFont("helvetica", "normal");
  doc.text("This agreement secures your 90-day trial slot. Please sign and return to lock in installation.", 24, 243);

  addFooter(2, 2);

  // Trigger Save/Download
  const safeFileName = companyName.toLowerCase().replace(/[^a-z0-9]/g, "_");
  doc.save(`snaxology_vending_agreement_${safeFileName}.pdf`);
}
