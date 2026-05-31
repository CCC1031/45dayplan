export interface DayLesson {
  day: number;
  title: string;
  shortDesc: string;
  detailedGuide: string;
  milestones: string[];
}

export interface Phase {
  id: number;
  title: string;
  daysRange: string;
  description: string;
  color: string;
  lessons: DayLesson[];
}

export const curriculumData: Phase[] = [
  {
    id: 1,
    title: "Business Foundation",
    daysRange: "Days 1–7",
    description: "Understand the vending business model, select your target niche, choose your geographical operational territory, and establish your corporate entity.",
    color: "from-amber-500/20 to-yellow-600/10 border-amber-500/30",
    lessons: [
      {
        day: 1,
        title: "The Vending Business Model & Economics",
        shortDesc: "Master the cash-flow economics, margins, and operating expenses of a modern vending route.",
        detailedGuide: `Welcome to Day 1 of your 45-day vending journey! Today, we break down the core mechanics of how vending operations make money. 

### Key Economics of Vending:
1. **Gross Margin**: Standard vending inventory (snacks, drinks) has a **50% to 70% gross margin**. For example, a can of soda purchased wholesale for $0.40 is sold in the machine for $1.25 to $1.50.
2. **Telemetry & Credit Card Fees**: Cashless readers (like Nayax) are essential. They charge a monthly telemetry fee (~$10/month per machine) plus a transaction fee (~2.5% to 5.5%). Despite the fees, cashless readers increase sales by **35% to 40%**.
3. **Commissions**: High-traffic locations may request a commission (typically **5% to 10% of gross sales**). Avoid paying commissions on locations doing less than $500/month.
4. **Depreciation**: Vending machines are physical assets that can be depreciated on your taxes (Section 179), offsetting operational income.

### Action Plan for Today:
Analyze your local retail prices for common vending items. Visit a local convenience store and note down the prices of standard 12oz cans, 20oz bottles, and standard potato chip bags. This establishes your local pricing ceiling.`,
        milestones: [
          "Review the gross margin formulas and cashless transaction fee structures",
          "Conduct a local pricing audit at a nearby convenience store",
          "Define your target monthly revenue goal per machine (e.g., $400/month)"
        ]
      },
      {
        day: 2,
        title: "Choosing Your Vending Niche",
        shortDesc: "Select between traditional snack/soda, healthy vending, coffee, or specialty micro-markets.",
        detailedGuide: `Not all vending routes are created equal. Choosing the right niche determines your inventory sourcing, machine types, and ideal target locations.

### Vending Niches Compared:
*   **Traditional Snack & Soda**: The highest volume and easiest to source. Best for blue-collar environments (warehouses, auto shops).
*   **Healthy Vending**: Premium items (organic bars, coconut water, fruit chips) sold at a premium price point. Best for high-end office suites, gyms, and private schools.
*   **Specialty/Micro-Markets**: Open-rack self-checkout kiosks. Best for secure office environments with 100+ employees.
*   **Bulk Vending**: Gumball and toy machines. Low capital entry, but very low transaction sizes.

### Action Plan for Today:
Evaluate your local market demographics. If your area has a high concentration of industrial parks, traditional snack and soda is your winner. If it is highly corporate or fitness-focused, healthy vending or micro-markets are more appropriate.`,
        milestones: [
          "Compare the 4 primary vending niches against your local market",
          "Select your primary vending niche (e.g., Cold Drinks & Snacks Combo)",
          "Identify 3 local competitors operating in your target niche"
        ]
      },
      {
        day: 3,
        title: "Geographical Territory Mapping",
        shortDesc: "Define a tight operational radius to minimize driving time and fuel expenses.",
        detailedGuide: `The biggest killer of vending profitability is **windshield time**—the hours spent driving between far-flung machines. A profitable route is a tight, dense route.

### The 20-Minute Golden Rule:
Your initial target locations should be located within a **20-minute driving radius** of your home or warehouse. If a machine is 45 minutes away, a single coin jam or service call will wipe out that day's profits in fuel and lost time.

### Sizing Your Territory:
1. Draw a circle on a map centered around your home base with a 15-mile radius.
2. Identify industrial parks, office corridors, and commercial hubs within this circle.
3. This is your **Primary Scouting Zone (PSZ)**. Focus 100% of your prospecting efforts here.`,
        milestones: [
          "Establish your home-base address as the center of your territory",
          "Define your maximum driving radius (recommended: 15-20 miles)",
          "Locate and list at least 3 major commercial or industrial parks within your zone"
        ]
      },
      {
        day: 4,
        title: "Naming & Brand Identity",
        shortDesc: "Create a professional, trustworthy business name and basic brand presence.",
        detailedGuide: `When pitching to professional property managers or corporate executives, a Gmail address and a generic name will get you ignored. You must present yourself as a legitimate, reliable local utility provider.

### Naming Guidelines:
*   **Professional & Clean**: Use words like *Vending, Services, Systems, Refreshments, Snax, Solutions*. (e.g., "Apex Refreshment Systems", "Snaxology Vending").
*   **Local Connection**: Including your city or region name builds trust (e.g., "Miami Metro Vending").
*   **Avoid Silly Names**: Avoid names that sound like a hobby. Property managers want professional partners.

### Brand Checklist:
1. **Domain Name**: Register a '.com' domain matching your name (e.g., 'apexvending.com').
2. **Professional Email**: Set up Google Workspace or Microsoft 365 (e.g., 'info@apexvending.com' or 'sales@apexvending.com').
3. **Logo**: Design a simple, clean, high-resolution logo using modern typography. Keep it professional.`,
        milestones: [
          "Brainstorm 3 potential business names",
          "Check domain availability and register your business domain",
          "Set up a professional business email address"
        ]
      },
      {
        day: 5,
        title: "Corporate Entity Formation (LLC)",
        shortDesc: "Register your business entity to protect your personal assets from liability.",
        detailedGuide: `Operating as a sole proprietor exposes your personal assets (home, car, savings) to extreme risk. If a vending machine tips over or a customer has an allergic reaction, your business entity must act as a legal shield.

### Steps to Form an LLC:
1. **Select Your State**: File in the state where you live and will operate.
2. **Articles of Organization**: File these with your state's Secretary of State office. Fees range from $50 to $300 depending on the state.
3. **Operating Agreement**: Draft a simple single-member Operating Agreement outlining that you own and govern the entity.
4. **Registered Agent**: Appoint yourself or a professional service to receive legal correspondence.

### Today's Action:
Visit your state's Secretary of State website, search for your chosen business name to ensure it is unique, and review the online filing steps for a Limited Liability Company.`,
        milestones: [
          "Perform a business name availability search on your state's Secretary of State website",
          "File your Articles of Organization online (or prepare the filing documents)",
          "Draft a basic single-member LLC Operating Agreement"
        ]
      },
      {
        day: 6,
        title: "EIN & Business Banking Setup",
        shortDesc: "Obtain your Federal Tax ID and open a dedicated business checking account.",
        detailedGuide: `Co-mingling personal and business funds is the fastest way to pierce your corporate veil, destroying your LLC's liability protection. Today, we separate your finances completely.

### 1. Get an EIN (Employer Identification Number):
An EIN is a free, 9-digit tax ID issued by the IRS. It acts as the Social Security Number for your business.
*   **How to apply**: Go directly to IRS.gov. Do NOT pay third-party services; the online application takes 10 minutes and issues your EIN instantly.

### 2. Open a Business Checking Account:
Take your LLC Articles of Organization, Operating Agreement, and EIN letter to a local bank or online business bank (like Mercury or Novo).
*   **What to ask for**: A business checking account with zero monthly maintenance fees and a low minimum balance.
*   **Get a Debit Card**: You will use this card exclusively for purchasing inventory and machine parts.`,
        milestones: [
          "Apply for and receive your free EIN from IRS.gov",
          "Select a business bank and open a dedicated business checking account",
          "Deposit your initial startup capital into the business account"
        ]
      },
      {
        day: 7,
        title: "Liability Insurance & Licenses",
        shortDesc: "Secure general liability insurance and research local retail licenses.",
        detailedGuide: `Before a property manager allows you to roll a 700-pound machine onto their polished tile floors, they will demand a **Certificate of Insurance (COI)**.

### Vending Insurance Requirements:
*   **General Liability**: You need a standard **$1,000,000 / $2,000,000** General Liability policy. This covers bodily injury (e.g., food poisoning) and property damage (e.g., a machine leaking water and damaging floors).
*   **Cost**: Standard vending policies are very affordable, typically costing between **$30 and $50 per month**.
*   **Where to quote**: Check online brokers specializing in small business insurance (like Next Insurance, Hiscox, or Progressive Commercial).

### Local Licenses:
Research if your city or county requires a general business license or a specific "Vending Machine Operator" permit. Many jurisdictions require a small annual decal/sticker per machine.`,
        milestones: [
          "Get at least 2 online quotes for $1,000,000 General Liability Insurance",
          "Bind your commercial liability policy and download your Certificate of Insurance (COI)",
          "Check city/county website for local business license and vending permit requirements"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Location Research",
    daysRange: "Days 8–15",
    description: "Learn how to spot high-performance vending locations, build a highly targeted list of local prospects, and map them in your CRM.",
    color: "from-blue-500/20 to-indigo-600/10 border-blue-500/30",
    lessons: [
      {
        day: 8,
        title: "Anatomy of a 10/10 Vending Location",
        shortDesc: "Learn the exact metrics that separate profitable locations from low-revenue traps.",
        detailedGuide: `The golden rule of vending is: **Foot Traffic & Dwell Time equal Revenue**. A machine in a location with 100 people who stay for 8 hours will outperform a location with 1,000 people who walk past it in 5 seconds.

### The Three Golden Metrics:
1. **Dwell Time**: How long do people stay in the building? High-dwell-time locations (warehouses, break rooms, auto repair waiting bays) are highly profitable because people get hungry and thirsty over hours.
2. **Blue-Collar vs. White-Collar**: Blue-collar environments (manufacturing, construction, logistics) generate **3x to 4x higher vending sales** than white-collar office suites. Physical labor drives hunger and thirst.
3. **Competition Proximity**: Is there a convenience store or fast-food joint next door? If a worker has to walk 10 minutes to get a soda, they will buy from your machine. If there is a 7-Eleven across the street, your sales will suffer.

### The Minimum Foot Traffic Thresholds:
*   **Snack/Soda Combo**: Minimum of **40+ full-time employees** (or daily visitors with high dwell time).
*   **Separate Snack & Soda Machines**: Minimum of **75+ full-time employees**.`,
        milestones: [
          "Review the Foot Traffic vs. Dwell Time matrix",
          "Identify the nearest major blue-collar industrial park in your territory",
          "Memorize the '40-employee rule' for combo machines"
        ]
      },
      {
        day: 9,
        title: "The Target Category Cheat Sheet",
        shortDesc: "Understand the top 6 business categories that welcome and sustain vending routes.",
        detailedGuide: `To build your prospecting pipeline, you must focus on specific business categories that are proven winners. Do not waste time pitching retail stores or small offices.

### Top 6 Vending Location Categories:
1. **Warehouses & Logistics Centers**: 10/10. High employee counts, physical labor, strict break times, 24/7 shifts.
2. **Manufacturing & Auto Body Shops**: 9/10. Hot environments, greasy hands, heavy physical labor. Highly receptive to cold drinks.
3. **Medical Centers & Nursing Homes**: 8/10. 24/7 staff, highly stressed visitors, night shifts with closed cafeterias.
4. **Large Apartment Complexes**: 7/10. Placed in central laundry rooms, main lobbies, or pool areas. Best for high-density, lower-income complexes.
5. **Gyms & Fitness Centers**: 7/10. Placed near the entrance. Excellent for premium sports drinks, protein bars, and water.
6. **Office Suites (100+ staff)**: 6/10. Clean environment, but lower snack volume. Good for premium coffee and healthy snacks.`,
        milestones: [
          "Rank the 6 target categories based on proximity to your home base",
          "Select 2 primary categories to focus on for your first route",
          "Draft a list of 5 local auto shops and 5 local warehouses in your area"
        ]
      },
      {
        day: 10,
        title: "Digital Scouting & Lead Harvesting",
        shortDesc: "Use digital mapping tools to harvest 30+ highly qualified local business leads.",
        detailedGuide: `You do not need to drive around aimlessly to find prospects. You can harvest dozens of qualified leads right from your desk using online mapping tools.

### Step-by-Step Harvesting Protocol:
1. Open Google Maps and zoom in on your **Primary Scouting Zone**.
2. Search for keywords matching our target categories:
   *   '"manufacturing"'
   *   '"logistics"'
   *   '"distribution"'
   *   '"auto repair"'
   *   '"nursing home"'
3. Look for businesses that appear to have medium-to-large physical facilities (large building footprints on satellite view indicate high employee counts).
4. Extract: Business Name, Address, Phone Number, and Website.
5. **Add them to your Vending CRM Prospecting Tracker** under the "New Prospect" column.`,
        milestones: [
          "Execute 3 targeted searches on Google Maps in your territory",
          "Harvest at least 20 qualified business leads with addresses and phone numbers",
          "Log your first 20 harvested leads into the Vending CRM Prospecting Board"
        ]
      },
      {
        day: 11,
        title: "In-Person Scouting (The Drive-By)",
        shortDesc: "Conduct physical drive-by inspections of your top leads to verify facility size.",
        detailedGuide: `Digital scouting is highly efficient, but physical verification prevents wasted outreach. A business might look massive online but only have 5 employees on-site.

### What to Look for During a Drive-By:
*   **Employee Parking Lot**: Count the cars. 30+ cars parked outside is a fantastic indicator of a strong employee base.
*   **Shift Overlaps**: Are there multiple shifts? Look for cars parked at 6:00 PM or 6:00 AM.
*   **Physical Break Area**: Can you see an outdoor patio, picnic tables, or a smoking area? If workers are sitting outside on buckets, they lack a comfortable break room—and likely lack a vending machine.
*   **Existing Machines**: Peek through glass windows or open bay doors. Do you see an competitor's vending machine? If yes, note down the competitor's name.

### Today's Action:
Choose 5 of your harvested leads that are close together. Drive to their locations, observe their parking lots, and update their notes in your CRM.`,
        milestones: [
          "Select 5 high-priority harvested prospects from your CRM",
          "Conduct a physical drive-by of all 5 locations",
          "Log parking lot car counts and break-area observations in the CRM notes"
        ]
      },
      {
        day: 12,
        title: "Bypassing Gatekeepers & Finding Decision Makers",
        shortDesc: "Identify the exact job titles of the people who hold the keys to the break room.",
        detailedGuide: `If you ask a front-desk receptionist or a security guard for permission to place a vending machine, they will say "No" because they do not have the authority to say "Yes." You must find the actual decision-maker.

### Who is the Decision Maker?
Depending on the size and type of the business, the decision-maker is almost always one of the following:
*   **Small/Medium Businesses (under 100 staff)**: The **Owner**, **General Manager (GM)**, or **Operations Manager**.
*   **Large Warehouses & Manufacturing Plants**: The **Plant Manager**, **Facility Manager**, or **Human Resources (HR) Director**.
*   **Office Complexes & Corporate Suites**: The **Office Manager**, **Property Manager**, or **HR Manager**.

### How to Find Their Names:
1. **LinkedIn**: Search the company name + '"Facility Manager"', '"Operations Manager"', or '"Human Resources"'.
2. **Cold Call Verification**: Call the main line and use this script:
   *"Hi, I'm preparing a local business services proposal. Who is the person in charge of managing your employee break room and facility services?"* Write down the name they give you.`,
        milestones: [
          "Identify the target decision-maker job titles for your top 5 prospects",
          "Use LinkedIn or phone verification to find the exact names of 3 decision-makers",
          "Update the Contact Manager in your CRM with decision-maker names and direct emails"
        ]
      },
      {
        day: 13,
        title: "The Location Scorecard Protocol",
        shortDesc: "Score your top 10 prospects mathematically to focus your energy on high-value spots.",
        detailedGuide: `Before you spend hours pitching, use a standardized scoring system to evaluate if a location is worth your time. Today, we implement the **Location Scorecard**.

### The 5-Point Scoring System:
1. **Employee Count (1-5 pts)**: <20 (1pt), 20-40 (2pts), 41-60 (3pts), 61-100 (4pts), 100+ (5pts).
2. **Dwell Time / Shift Structure (1-5 pts)**: Single short shift (1pt), standard 8-hour day (3pts), 24/7 multiple shifts (5pts).
3. **Competitor Proximity (1-5 pts)**: Convenience store within 1 block (1pt), store within 3 blocks (3pts), no food/drink within 1 mile (5pts).
4. **Vending Access (1-5 pts)**: Restricted security access (1pt), standard lobby access (3pts), open-bay/high-traffic common area (5pts).
5. **Blue-Collar Density (1-5 pts)**: 100% white-collar (1pt), mixed (3pts), 100% blue-collar labor (5pts).

### Scoring Thresholds:
*   **20-25 Points**: **Ultra-Premium**. Stop everything and pitch this location immediately.
*   **15-19 Points**: **Strong Target**. Highly profitable combo location.
*   **Under 12 Points**: **Pass**. Do not waste your time pitching; focus elsewhere.`,
        milestones: [
          "Review the 5-point Location Scorecard system",
          "Select your top 5 harvested prospects in the CRM",
          "Score all 5 prospects and transition those with 15+ points to 'Priority Targets'"
        ]
      },
      {
        day: 14,
        title: "Mapping Your CRM Pipeline",
        shortDesc: "Organize your pipeline so you have 30+ warm prospects plotted on your Route Map.",
        detailedGuide: `A scattered list of leads is useless. Today, we consolidate all scouting data into a visual, structured sales pipeline. 

### Pipeline Hygiene:
A healthy vending pipeline has a classic funnel shape:
*   **New Prospects**: 30+ locations harvested from maps and drive-bys.
*   **Contacted**: 15+ locations where you have sent an email, made a call, or dropped in.
*   **Meeting Scheduled**: 3-5 locations where a manager has agreed to sit down or look at a machine catalog.
*   **Signed**: Your first secured location!

### Action Plan for Today:
Ensure every prospect in your CRM has a complete address. When you view your **Route Map**, all prospects will be plotted. This allows you to plan highly efficient "outreach loops" where you can visit 5 or 6 prospects in a single driving route.`,
        milestones: [
          "Verify that all 30 CRM prospects have complete addresses",
          "Review your Route Map to see the geographical clusters of your prospects",
          "Group your prospects into 2 distinct geographical scouting routes"
        ]
      },
      {
        day: 15,
        title: "Milestone Review: Pipeline Complete",
        shortDesc: "Audit your business setup and pipeline to ensure 100% readiness for outreach.",
        detailedGuide: `Congratulations! You have completed the first 15 days of your business launch. You have built a solid legal foundation, defined your territory, and harvested a highly vetted pipeline of local business prospects.

### Operational Audit:
Before we launch into cold outreach tomorrow, we must ensure there are no gaps in your setup. 
*   *Is your LLC filed?* Yes.
*   *Is your business bank account open?* Yes.
*   *Do you have your General Liability Insurance bound?* Yes.
*   *Do you have 30+ qualified, scored prospects in your CRM?* Yes.

If you can answer "Yes" to these, you are ready to begin the most exciting phase of the starter kit: **The Close**.`,
        milestones: [
          "Verify LLC, EIN, Bank, and Insurance are fully operational",
          "Confirm your CRM contains at least 30 active, scored prospects",
          "Prepare your physical notepad, business cards, and outfit for next week's outreach"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "The Close",
    daysRange: "Days 16–25",
    description: "Execute professional cold outreach, pitch your services to decision-makers, handle objections, and secure signed location agreements.",
    color: "from-emerald-500/20 to-teal-600/10 border-emerald-500/30",
    lessons: [
      {
        day: 16,
        title: "The Zero-Cost Vending Pitch",
        shortDesc: "Understand the psychological trigger of the 'free service' offer.",
        detailedGuide: `The absolute best part of the vending business model is that **your service is 100% free to the location**. You are not trying to sell them a subscription, a software, or a cleaning service. You are offering to install, stock, and maintain a premium amenity for their employees at **zero cost** to their budget.

### The Pitch Framework:
*   **The Problem**: Employees leaving the facility during short 15-minute breaks to get snacks/drinks, leading to late return times, lower productivity, and low morale.
*   **The Solution**: A state-of-the-art, energy-efficient vending machine installed in their break room, stocked with their employees' favorite snacks and ice-cold drinks, equipped with modern credit card readers.
*   **The Cost**: **$0.00**. You handle delivery, installation, stock, service, and maintenance. They provide 4 square feet of space and a standard 110V electrical outlet.

### Today's Action:
Practice saying your core pitch aloud: *"We provide state-of-the-art, credit-card-enabled vending machines to local businesses completely free of charge. We handle 100% of the delivery, stocking, and maintenance so you can keep your employees happy, hydrated, and on-site."*`,
        milestones: [
          "Memorize the 'Zero-Cost Vending Pitch' framework",
          "Identify the primary employee benefit (hydration, convenience, morale) for auto shops vs. offices",
          "Set up your outreach tracking status in the CRM"
        ]
      },
      {
        day: 17,
        title: "Cold Email Outreach Strategy",
        shortDesc: "Send highly customized, high-converting outreach emails to decision makers.",
        detailedGuide: `Cold email is a highly efficient way to secure meetings with office managers and HR directors. The key is to keep it short, professional, and completely focused on **their employees' convenience**.

### The Anatomy of a High-Converting Email:
1. **Subject Line**: Must be low-friction and relevant. (e.g., *"Quick question regarding the break room at [Company Name]"*).
2. **The Hook**: Mention that you are a local, family-owned business operating right down the street.
3. **The Offer**: Offer to place a modern, cashless snack/soda combo machine in their break room at zero cost.
4. **The Social Proof**: Emphasize that you handle everything (delivery, stocking, 24/7 service) and carry a $1M insurance policy.
5. **The Call to Action (CTA)**: Ask for a quick 2-minute phone call or a brief meeting to look at their break room layout.

### Today's Action:
Use the **Pitch Helper & Email Generator** in your CRM to draft and send 5 custom outreach emails to your top prospects.`,
        milestones: [
          "Draft a standard cold outreach email template",
          "Use the CRM Pitch Helper to customize emails for 5 specific prospects",
          "Send 5 outreach emails and update their CRM status to 'Contacted'"
        ]
      },
      {
        day: 18,
        title: "Cold Calling Protocol",
        shortDesc: "Learn the exact phone script to bypass gatekeepers and schedule break-room walk-throughs.",
        detailedGuide: `Cold calling is highly effective for industrial parks, manufacturing plants, and auto body shops where managers are rarely sitting in front of a computer checking emails.

### The Phone Script:
*   **Gatekeeper**: *"Thank you for calling Apex Logistics, how can I help you?"*
*   **You**: *"Hi, my name is [Your Name] with Apex Vending. I'm looking to speak with the person who handles your employee break room services and facility amenities. Would that be the facility manager or HR?"*
*   **Gatekeeper**: *"That would be John, the Plant Manager. Let me transfer you."*
*   **You (to John)**: *"Hi John, this is [Your Name] with Apex Vending, we're a local family-owned service operating right here in the industrial park. I was driving past your facility and noticed your team has a pretty active operation. We specialize in placing brand-new, cashless snack and drink combo machines in break rooms completely free of charge. I'm going to be in your park this Thursday meeting with another manager—do you have 2 minutes for me to swing by, look at your break room space, and see if we can set up a free machine for your team?"*

### Today's Action:
Practice this script. Dial 5 of your harvested auto shop or manufacturing leads. Log the results in your CRM.`,
        milestones: [
          "Practice the phone script aloud 3 times to build confidence",
          "Make 5 cold calls to local logistics or auto body shops",
          "Log call notes and follow-up tasks in the CRM for all 5 calls"
        ]
      },
      {
        day: 19,
        title: "In-Person Drop-Ins (The Power Move)",
        shortDesc: "Execute highly effective physical walk-ins at local industrial parks.",
        detailedGuide: `For blue-collar warehouses, auto repair shops, and local manufacturing facilities, **nothing beats walking through the front door with a professional attitude and a smile**. 

### The Walk-In Protocol:
1. **Dress Code**: Clean, professional polo shirt with your business name/logo (or a solid dark color), clean dark jeans, and professional work boots or clean sneakers. Avoid suits (too formal for industrial spots) and avoid t-shirts (too casual).
2. **The Approach**: Walk into the main office/lobby. Be extremely polite to the receptionist.
3. **The Opener**: *"Hi there! My name is [Your Name] with Apex Vending. We're a local business located right down the street. I was swinging by to drop off a quick 1-page break room catalog for your facility manager. Is the facility manager or HR director on-site today?"*
4. **The Deliverable**: If they are on-site, present your pitch. If they are busy or away, ask for their business card and leave your professional flyer.

### Today's Action:
Select 5 prospects located in a tight cluster. Dress in your polo, drive to their facilities, and execute 5 in-person drop-ins.`,
        milestones: [
          "Prepare 5 printed 1-page vending catalogs or professional flyers",
          "Execute 5 physical in-person drop-ins in your target industrial park",
          "Collect at least 2 business cards or direct contact emails from decision-makers"
        ]
      },
      {
        day: 20,
        title: "Handling the Top 3 Objections",
        shortDesc: "Master the scripts to instantly neutralize manager hesitation.",
        detailedGuide: `When pitching vending, managers will occasionally hesitate. This is rarely a hard "No"—it is simply a request for more information. Today, we master objection handling.

### Objection 1: \"We don't have enough space.\"
*   **The Neutralizer**: *"I completely understand; space is premium. Our modern snack and drink combo machines are highly compact, taking up only 3 feet of width—about the same footprint as a standard office water cooler. As long as we have a standard wall outlet, we can fit it easily."*

### Objection 2: \"We already have a machine, but it's always empty/broken.\"
*   **The Neutralizer**: *"That is exactly why we're reaching out. Many national operators ignore local accounts. We are located 10 minutes away, which means we restock weekly and offer a 24-hour service guarantee. If a machine has an issue, we're here same-day to fix it. We can replace your current operator with zero downtime for your staff."*

### Objection 3: \"Is there a contract? Are we locked in?\"
*   **The Neutralizer**: *"We offer a completely risk-free **90-day trial agreement**. If you aren't absolutely thrilled with our stocking frequency, machine cleanliness, or product selection, you can cancel with a simple 30-day notice and we will roll the machine out at zero cost to you. We let our service keep us in, not a restrictive contract."*`,
        milestones: [
          "Review the 3 primary vending objections and their neutralizing scripts",
          "Practice delivering objection responses smoothly",
          "Log any objections encountered during your calls/visits in the CRM"
        ]
      },
      {
        day: 21,
        title: "The Break Room Walk-Through",
        shortDesc: "Conduct a professional on-site inspection to seal the deal.",
        detailedGuide: `When a manager says, *"Sure, you can swing by and look at the space,"* you have completed 80% of the sales process. The walk-through is your opportunity to finalize the placement details.

### The Walk-Through Checklist:
1. **Electrical Outlet**: Verify there is a standard 110V three-prong outlet within 6 feet of the proposed machine location. Vending machines must plug directly into the wall—**never use extension cords** (fire hazard and code violation).
2. **Doorway Clearance**: Measure the doorways, hallways, and elevators leading to the break room. Standard combo machines are **72\" tall, 36\" wide, and 33\" deep**. Ensure a machine can physically fit through the path.
3. **Floor Surface**: Ensure the floor is level and solid (concrete, tile, or commercial carpet). Avoid soft, uneven flooring.
4. **Product Preferences**: Ask the manager what their employees like to eat and drink. This immediately builds excitement and buy-in. *"Do your guys prefer Coke or Pepsi? Energy drinks or water? Salty chips or sweet chocolates?"*`,
        milestones: [
          "Secure a physical tape measure for your scouting kit",
          "Conduct your first physical break-room walk-through (or simulate one)",
          "Note down electrical outlet proximity and doorway clearance measurements"
        ]
      },
      {
        day: 22,
        title: "The 90-Day Trial Agreement",
        shortDesc: "Understand and customize your standard, non-restrictive vending contract.",
        detailedGuide: `Never place a multi-thousand dollar machine on a property without a signed piece of paper. You need a simple, clear **Vending Location Agreement** to protect your equipment and define your operational rights.

### Key Clauses of a Vending Agreement:
*   **Exclusivity**: Granting your business the exclusive right to provide vending services on the property. This prevents another operator from rolling in a machine next to yours.
*   **Term & Termination**: A 1-year standard term, starting with a **90-day trial period**. Either party can terminate with a 30-day written notice.
*   **Ownership of Equipment**: Explicitly stating that all machines, card readers, and inventory remain the sole property of your business. The location cannot seize or hold your machines for any reason.
*   **Utility & Access**: The location agrees to provide continuous electricity at no cost to you, and grants your staff access to the facility during standard business hours for restocking.

### Today's Action:
Review a standard vending agreement template. Draft a customized version containing your LLC name, logo, and contact info.`,
        milestones: [
          "Review the core clauses of a standard Vending Location Agreement",
          "Customize a standard agreement template with your business name and LLC details",
          "Save the customized contract draft as a PDF ready for signature"
        ]
      },
      {
        day: 23,
        title: "Closing the Deal & Getting the Signature",
        shortDesc: "Present your agreement professionally and secure the manager's signature.",
        detailedGuide: `Today is the day we close. When presenting the agreement to the manager, keep it extremely low-friction. 

### The Closing Script:
*"John, I appreciate you showing me the break room yesterday. I've drafted our standard, simple 1-page trial agreement. It basically outlines that we will place our brand-new combo machine in the break room at zero cost to you, we'll carry the insurance, and we'll keep it fully stocked. It starts with a risk-free 90-day trial, so if you aren't absolutely thrilled with our service, you can cancel anytime. I've already signed my side—if you can sign here, I'll go ahead and lock in our machine delivery date for next week so we can get your guys taken care of!"*

### Today's Action:
Send your agreement to a warm lead via an electronic signature platform (like DocuSign or HelloSign), or print two copies and schedule a quick 2-minute drop-in to get it signed in person.`,
        milestones: [
          "Present your Vending Location Agreement to a warm prospect",
          "Follow up on outstanding agreement signatures",
          "Secure your first signed Vending Location Agreement!"
        ]
      },
      {
        day: 24,
        title: "Transitioning Signed Locations in CRM",
        shortDesc: "Update your CRM to celebrate your win and trigger placement logistics.",
        detailedGuide: `A signed contract is a massive milestone! Today, we transition your secured location from the "Meeting Scheduled" or "Contacted" column to the **"Signed"** column in your CRM Prospecting Board.

### CRM Logistics Trigger:
When a location is signed, several downstream operational tasks are automatically triggered:
1. **Machine Allocation**: You must assign a physical machine to this location.
2. **Install Date**: Coordinate with the manager to set a specific installation date (typically 7 to 14 days out).
3. **Telemetry Assignment**: Order a cashless card reader and link its serial number to this location in your records.
4. **Initial Inventory Sourcing**: Plan your first wholesale order based on the product preferences you noted during the walk-through.`,
        milestones: [
          "Move your signed prospect to the 'Signed' column in the CRM Prospecting Board",
          "Create a new record in the 'Machine & Active Location Tracker' for this location",
          "Set a target installation date with the manager and log it in the CRM"
        ]
      },
      {
        day: 25,
        title: "Milestone Review: First Location Secured",
        shortDesc: "Celebrate securing your first location and prepare for equipment logistics.",
        detailedGuide: `Incredible work! You have successfully crossed the most challenging barrier in the vending industry: **Securing an exclusive, high-traffic location**. 

You now have a legally protected, signed agreement in your hands. This physical location is now a "secured asset" that will generate passive cash flow for years to come.

Take today to celebrate your win, thank the manager of your new location with a quick email, and prepare your mindset for the next phase of the starter kit: **Sourcing your machine and setting up supplier logistics**.`,
        milestones: [
          "Send a professional 'Thank You & Confirmation' email to your signed location manager",
          "Verify all contract files are stored securely in your business Google Drive",
          "Prepare your budget for machine acquisition"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Sourcing & Logistics",
    daysRange: "Days 26–35",
    description: "Source premium refurbished or new equipment, select telemetry card readers, establish wholesale supplier accounts, and inspect machinery.",
    color: "from-purple-500/20 to-pink-600/10 border-purple-500/30",
    lessons: [
      {
        day: 26,
        title: "Sourcing Your First Machine",
        shortDesc: "Compare refurbished, used, and new machines to find the best value.",
        detailedGuide: `Now that you have a signed location, you must acquire the machine. **Never buy a brand-new machine for your first location**. New machines cost $4,000 to $7,000 and depreciate instantly. Instead, buy a high-quality used or refurbished machine.

### Machine Sourcing Options:
*   **Refurbished (Recommended)**: Cost: **$1,500 to $2,500**. Sourced from local vending distributors. These machines are thoroughly cleaned, tested, painted, and come with a 90-day parts warranty. They look and operate like new.
*   **Used (Private Party)**: Cost: **$800 to $1,500**. Sourced from Facebook Marketplace, Craigslist, or eBay. Higher risk, no warranty, but incredible deals can be found.
*   **New**: Cost: **$4,000+**. Only buy new if a location is doing $1,000+/month in gross sales and explicitly requires a brand-new machine.

### Trusted Brands to Look For:
*   **Crane National / Crane Merchandising Systems (CMS)**: The gold standard. Extremely reliable, parts are widely available.
*   **AP (Automatic Products)**: Bulletproof construction, highly reliable.
*   **USI / Wittern**: Excellent combo machines, American-made, parts are very easy to find.`,
        milestones: [
          "Compare refurbished vs. used machine pricing in your local area",
          "Search Facebook Marketplace and Craigslist for 'vending machine' in your radius",
          "Locate the nearest professional vending machine distributor"
        ]
      },
      {
        day: 27,
        title: "The 10-Point Machine Inspection Protocol",
        shortDesc: "Conduct a bulletproof physical inspection of any used machine before buying.",
        detailedGuide: `If buying a machine from a private seller, you must inspect it thoroughly. A cheap machine with a broken compressor is a multi-hundred dollar paperweight. Use this **10-Point Inspection Protocol**.

### The Inspection Checklist:
1. **Cooling/Compressor**: Turn the machine on. The compressor should kick on within 5 minutes. Feel the evaporator coils; they should be ice-cold.
2. **Bill Acceptor**: Insert three $1 bills. It should accept them smoothly on the first try.
3. **Coin Mechanism**: Insert $2 in mixed coins. Ensure it registers the correct amount and dispenses correct change when you press the coin return.
4. **Key & Lock**: Ensure the T-handle lock operates smoothly and the seller has at least two copies of the key.
5. **Control Board / MDB**: Verify the machine is **MDB-compliant** (Multi-Drop Bus). This is critical; if a machine is not MDB, you **cannot** install a credit card reader. (Almost all machines built after 1995 are MDB).
6. **Delivery Motors**: Test run a few selections. Ensure the spiral coils rotate a full 360 degrees and stop.
7. **Gaskets & Seals**: Inspect the rubber door gaskets. They must be soft, pliable, and free of cracks to keep cold air in.
8. **LED Lights**: Ensure the internal lighting works.
9. **Physical Rust**: Check the bottom corners and under the refrigeration deck for structural rust.
10. **Pricing Configuration**: Ask the seller to show you how to change item prices on the digital control panel.`,
        milestones: [
          "Memorize the 'MDB compliance' requirement for credit card readers",
          "Review the 10-point machine inspection checklist",
          "Save a copy of the inspection checklist to your phone for on-site visits"
        ]
      },
      {
        day: 28,
        title: "Selecting Telemetry & Cashless Readers",
        shortDesc: "Order and configure your cashless payment terminal (Nayax vs. Cantaloupe).",
        detailedGuide: `Cash is dead. Over **75% of modern vending sales are cashless** (credit cards, debit cards, Apple Pay, Google Pay). If your machine only accepts cash, you are leaving thousands of dollars on the table.

### The Two Industry Giants:
1. **Nayax (Recommended)**: The global leader. The **Nayax Onyx** or **VPOS Touch** are incredibly reliable. They feature a sleek touch-screen, accept mobile payments, and include powerful remote inventory telemetry software (Nayax Core / MoMa app).
   *   *Cost*: ~$250 to $300 upfront, plus ~$10/month telemetry fee and ~5.5% transaction fee.
2. **Cantaloupe (formerly USA Technologies)**: Highly popular in North America. The **ePort Engaged** is an excellent cashless terminal.
   *   *Cost*: Similar to Nayax.

### Today's Action:
Contact Nayax or Cantaloupe, set up your operator merchant account, and order your first cashless terminal reader.`,
        milestones: [
          "Compare Nayax and Cantaloupe pricing and telemetry features",
          "Submit your merchant processing account application to Nayax or Cantaloupe",
          "Order your first cashless card reader terminal (e.g., Nayax Onyx)"
        ]
      },
      {
        day: 29,
        title: "Establishing Wholesale Supplier Accounts",
        shortDesc: "Set up tax-exempt wholesale accounts at Costco, Sam's Club, or BJ's.",
        detailedGuide: `Never buy vending inventory at standard retail grocery stores. Your margins will be wiped out. You must buy in bulk from wholesale clubs or specialized vending distributors.

### Sourcing Slabs:
*   **Wholesale Clubs (Costco, Sam's Club, BJ's)**: Best for beginners. They have dedicated vending aisles with bulk cases of chips, candy, chocolates, sodas, and water.
*   **Specialty Distributors (Vistar)**: Best for scaled routes. They deliver wholesale pallets directly to your warehouse, but require minimum order volumes.

### The Tax-Exempt Reseller Permit:
Because you are purchasing inventory to resell it to the end consumer (who will pay sales tax at the machine), you do not have to pay sales tax when buying inventory from wholesale clubs.
1. Take your LLC Articles of Organization and your State Sales Tax ID to the customer service desk at Costco or Sam's Club.
2. Fill out their tax-exempt form.
3. This saves you **5% to 10% instantly** on every inventory purchase!`,
        milestones: [
          "Apply for a State Sales Tax ID / Reseller Permit online",
          "Visit Costco or Sam's Club customer service desk with your LLC docs and Sales Tax ID",
          "Register your wholesale membership account as a tax-exempt business reseller"
        ]
      },
      {
        day: 30,
        title: "Sourcing Inventory & Planogram Design",
        shortDesc: "Design a high-margin planogram and purchase your first batch of stock.",
        detailedGuide: `A **planogram** is a visual map of where products are placed inside your vending machine. A well-designed planogram maximizes eye-appeal and profits.

### The Planogram Golden Rules:
1. **Eye-Level is Buy-Level**: Place your highest-margin items (typically chips and chocolates) at eye-level (the top 2 snack shelves).
2. **Heavy Items at the Bottom**: Place heavy items like bottled water, energy drinks, and canned sodas on the bottom beverage shelves. This prevents machine strain and product damage during delivery drops.
3. **Product Alternation**: Alternate colors and product types (e.g., do not place 3 rows of brown chocolate bars next to each other; place a yellow bag of peanut M&Ms between them to create visual contrast).
4. **The 80/20 Rule**: 80% of your sales will come from 20% of your products. Always stock the classics: Coca-Cola, Pepsi, Monster Energy, Sprite, Doritos Nacho Cheese, Lays Classic, Snickers, and Reese's Peanut Butter Cups.

### Today's Action:
Draft a visual layout of your machine's coils. List the exact product assigned to each coil number (e.g., A1: Doritos, A2: Lays, B1: Snickers).`,
        milestones: [
          "Draft a complete visual planogram for your snack/drink combo machine",
          "Compile your initial inventory shopping list based on the planogram",
          "Log your machine configuration details in the CRM Machine Tracker"
        ]
      },
      {
        day: 31,
        title: "Machine Transportation Logistics",
        shortDesc: "Hire professional movers or secure the correct equipment to transport your machine.",
        detailedGuide: `Vending machines are incredibly heavy physical assets, weighing between **600 and 900 pounds** empty. They are top-heavy and dangerous to move without the correct equipment. **Never try to move a vending machine with a standard pickup truck and a regular hand truck**.

### Moving Options:
*   **Professional Vending Movers (Highly Recommended)**: Cost: **$150 to $300**. Search for local heavy equipment movers, safe movers, or specialized vending machine movers. They have specialized trailers, hydraulic lifts, and stair-climbers. This is the safest route and prevents damage to your machine and the location's floors.
*   **DIY (Rental)**: If you must move it yourself:
    1. Rent an appliance utility trailer with a ramp from U-Haul.
    2. Rent specialized **vending machine pallet jacks** or a heavy-duty 1,000-lb rated appliance hand truck with safety straps.
    3. Secure at least 2 strong helpers.

### Today's Action:
Contact 2 local moving companies, explain that you need a 700-lb vending machine transported from your seller's address to your signed location, and secure quotes.`,
        milestones: [
          "Get quotes from 2 professional heavy equipment or vending machine movers",
          "Secure a target delivery date and time that works for both the seller and the location manager",
          "Update your CRM Machine Tracker with delivery details and contact info"
        ]
      },
      {
        day: 32,
        title: "Testing & Configuring Your Machine",
        shortDesc: "Set up your pricing, test coin drops, and configure your telemetry reader.",
        detailedGuide: `Before rolling your machine into its final location, you must test it thoroughly at your home base or garage. It is highly unprofessional to spend hours troubleshooting a broken coil in front of a client's employees.

### Setup & Testing Protocol:
1. **Clean the Machine**: Wipe down the interior, clean the glass, and vacuum the refrigeration condenser coils (dusty coils cause compressors to overheat and fail).
2. **Configure Prices**: Enter the machine's programming menu and set the prices for each coil to match your planogram (e.g., Chips: $1.50, Sodas: $1.75).
3. **Install the Card Reader**: Mount the cashless terminal reader on the front of the door (usually over the bill acceptor or in a dedicated cutout) and plug the MDB cable into the main control board.
4. **Test the Vend Cycles**: Insert a coin or swipe a credit card and test-vend every single coil. Ensure the spirals turn smoothly, drop the product, and do not double-vend or get stuck.
5. **Refrigeration Check**: Leave the machine plugged in overnight. Check the internal temperature the next morning; it should be between **35°F and 38°F** for drinks, or around **60°F** for a temperature-controlled snack machine.`,
        milestones: [
          "Mount and plug in your cashless telemetry card reader",
          "Program your prices into the machine's digital control panel",
          "Test-vend every single coil with both cash and credit card to ensure 100% functionality"
        ]
      },
      {
        day: 33,
        title: "The Pre-Install Coordination",
        shortDesc: "Confirm delivery times, power access, and route paths with the location manager.",
        detailedGuide: `A smooth installation day builds incredible trust with your client. Do not just show up with a massive machine without warning. Today, we coordinate the final details.

### The Coordination Checklist:
1. **Confirm the Time**: Call or email the manager to confirm the exact delivery window. Ensure it is during a low-traffic time (e.g., 9:30 AM, after the morning rush but before lunch).
2. **Clear the Path**: Ask the manager to ensure the hallways, doorways, and delivery bays are clear of boxes or pallets.
3. **Staff Introduction**: Let the manager know who will be on-site (you and your movers) so they can alert security or front-desk staff.
4. **Review Electrical**: Confirm the wall outlet is clear and ready for the machine.

### Today's Action:
Send a professional confirmation email to your location manager outlining the delivery schedule and logistics.`,
        milestones: [
          "Send an installation confirmation email to your location manager",
          "Verify that your movers have the correct delivery address and contact name",
          "Confirm your commercial liability insurance Certificate of Insurance (COI) has been sent to the manager"
        ]
      },
      {
        day: 34,
        title: "Wholesale Inventory Procurement",
        shortDesc: "Execute your first bulk inventory purchase at your wholesale club.",
        detailedGuide: `Today is shopping day! Take your business debit card, your tax-exempt reseller card, and your planogram shopping list to your wholesale club.

### Shopping Tips:
*   **Check Expiration Dates**: Always look at the expiration dates on bulk boxes. Ensure snack items have at least **60+ days of shelf life** remaining, and chocolates have even longer.
*   **Handle Chocolates with Care**: If it is hot outside, place chocolates in insulated cooler bags or a cooler with ice packs during transport. Melted chocolate bars are unsellable.
*   **Buy the Classics**: Stick strictly to your planogram list. Do not buy weird or experimental flavors on your first run. Stick to proven best-sellers.
*   **Store Inventory Safely**: Store your purchased inventory in a cool, dry, pest-free environment (like a climate-controlled garage or spare room). Never leave snacks in a hot car.`,
        milestones: [
          "Execute your first bulk inventory purchase at Costco or Sam's Club",
          "Verify that all purchased inventory is tax-exempted at checkout",
          "Store your inventory in a cool, dry, secure location ready for installation day"
        ]
      },
      {
        day: 35,
        title: "Milestone Review: Sourcing & Inventory Complete",
        shortDesc: "Audit your machine readiness, telemetry, and inventory stock for installation day.",
        detailedGuide: `You are fully prepared! You have sourced a premium, MDB-compliant machine, configured its prices, installed a cashless card reader, established wholesale accounts, purchased tax-exempt inventory, and coordinated professional transportation.

Take today to review your planogram one last time, organize your stocking bins (use clean, plastic storage tubs to transport snacks), and get a good night's sleep. 

Tomorrow, we execute the grand opening of your first active, revenue-generating vending location!`,
        milestones: [
          "Verify all stocking bins and plastic tubs are clean and organized",
          "Confirm your machine keys are on a dedicated, labeled business keychain",
          "Double-check delivery time and coordinates with your movers"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Operations & Growth",
    daysRange: "Days 36–45",
    description: "Coordinate machine delivery, execute the initial inventory stock, set up remote telemetry alerts, log restocks, and establish a route-management workflow.",
    color: "from-rose-500/20 to-red-600/10 border-rose-500/30",
    lessons: [
      {
        day: 36,
        title: "Installation Day & Grand Opening",
        shortDesc: "Supervise machine placement, plug it in, and stock your first inventory load.",
        detailedGuide: `Today is the day! Your business officially goes live. Today, we execute the installation and initial stocking.

### Installation Protocol:
1. **Supervise the Movers**: Ensure the movers place the machine exactly where agreed. Use a level to ensure the machine is perfectly level (vending machines have adjustable leveling legs; an unlevel machine can cause coin jams or vending errors).
2. **Plug It In**: Plug the machine directly into the wall. Ensure the internal lights turn on and the refrigeration compressor hums to life.
3. **The First Stocking**: Load your snacks and drinks into their designated coils according to your planogram.
   *   *Coil Loading*: Ensure products are loaded straight and are not pinched by the spirals. Push the spirals back slightly if needed so the front product is resting perfectly against the delivery gate.
4. **Test Vend (On-Site)**: Insert a dollar bill and buy a drink. Swipe a credit card and buy a bag of chips. This ensures the machine is communicating perfectly with the cellular network and dispensing smoothly.
5. **Clean the Exterior**: Wipe down the outside of the machine with glass cleaner. A sparkling clean machine attracts 50% more sales.

### Today's Action:
Log the successful installation in your CRM. Record the machine serial number and installation date.`,
        milestones: [
          "Supervise the physical placement and leveling of your machine",
          "Load the entire machine with your wholesale inventory according to the planogram",
          "Execute a successful on-site cash and credit card test vend to launch operations"
        ]
      },
      {
        day: 37,
        title: "Setting Up Telemetry & Inventory Alerts",
        shortDesc: "Configure remote inventory tracking via your Nayax or Cantaloupe dashboard.",
        detailedGuide: `Welcome to modern vending! You do not need to drive to your machine to see what has been sold. Today, we configure your remote telemetry dashboard.

### How Telemetry Works:
Your cashless card reader has a built-in cellular SIM card that transmits real-time sales data to your operator portal (e.g., Nayax Core or Cantaloupe Go).

### Today's Action:
1. Log into your telemetry portal on your computer or mobile app (Nayax MoMa).
2. Map your planogram digitally. Tell the software exactly what product is in each coil and how many items are loaded (e.g., Coil 10: Doritos Nacho Cheese, capacity 10, current stock 10).
3. Set up **Low-Stock Alerts**: Configure the system to send an email or push notification when any high-volume coil drops below 3 items, or when the overall machine capacity drops below 40%.
4. This allows you to pre-pack your stocking bins with the exact items sold before you even leave your house!`,
        milestones: [
          "Log into your cashless telemetry operator portal (Nayax Core or Cantaloupe Go)",
          "Digitally map your machine's planogram and stock capacities in the software",
          "Enable low-stock alerts and push notifications on your mobile device"
        ]
      },
      {
        day: 38,
        title: "The First 48-Hour Check-In",
        shortDesc: "Analyze your initial sales data and conduct a physical inspection.",
        detailedGuide: `Two days after installation, we conduct our first official operational review. This check-in ensures everything is running smoothly and catches any early teething issues.

### The Check-In Protocol:
1. **Check Telemetry Sales**: Log into your portal. Review your first 48 hours of sales. What are the best-selling items? Are there any coils that haven't sold a single item?
2. **Physical Site Visit**: Swing by the location. 
3. **Wipe Down & Clean**: Wipe any fingerprints off the glass and touchpads.
4. **Gather Feedback**: If you see employees in the break room, introduce yourself politely and ask: *"How do you guys like the new machine? Is there any specific snack or drink you'd like me to add on my next restock?"* Write down their suggestions! This builds incredible customer loyalty.`,
        milestones: [
          "Analyze your first 48 hours of real-time sales data in your telemetry portal",
          "Conduct a physical 48-hour site visit to inspect machine cleanliness and operation",
          "Collect at least 2 product feedback suggestions from on-site employees"
        ]
      },
      {
        day: 39,
        title: "Establishing the Restock Ledger",
        shortDesc: "Learn how to log machine visits, products added, and revenue collected.",
        detailedGuide: `To run a highly profitable route, you must track your numbers meticulously. Today, we establish your **Restock & Visit Log** inside your CRM.

### What to Record on Every Visit:
*   **Date & Time**: Helps track sales velocity and plan optimal visiting intervals.
*   **Cash Collected**: Count the dollar bills in the stacker and the coins in the cash box. Log this cash revenue.
*   **Card Revenue (from Telemetry)**: Record the cashless sales since your last visit.
*   **Inventory Added**: Record exactly how many units of each product category (chips, candy, sodas, water) you added to the machine. This helps calculate your exact Cost of Goods Sold (COGS).
*   **Machine Status**: Note down any issues found (e.g., coin jam, stuck spiral, dirty glass) and confirm they were resolved.

### Today's Action:
Familiarize yourself with the **Restock & Visit Log** in your CRM. This is the exact tool you will use on every single route run.`,
        milestones: [
          "Review the key fields of the Restock & Visit Log",
          "Execute a practice restock log entry in the CRM",
          "Set up a physical cash-counting bin or envelope for your route run cash collections"
        ]
      },
      {
        day: 40,
        title: "The Weekly Restock Routine",
        shortDesc: "Execute your first full weekly restocking run with professional efficiency.",
        detailedGuide: `Today is route day! We transition from a single machine check-in to a structured, repeatable restocking routine.

### The Route Run Protocol:
1. **Pre-Pack Bins**: Log into your telemetry portal. Check what has been sold. Go to your inventory storage and pack the exact number of chips, candy, and drinks needed into your plastic bins. This prevents carrying heavy bulk boxes back and forth from your car.
2. **Collect the Cash**: Pull the cash bag out of the bill validator and empty the coin box. Place the cash in a secure, zippered cash bag.
3. **Refill & Restock**: Load the fresh inventory. Rotate older stock to the front of the coils and place fresh stock in the back (FIFO - First In, First Out). This prevents stale inventory.
4. **Service the Coin Mech**: Ensure the coin mechanism has plenty of quarters, dimes, and nickels to dispense change. A machine that runs out of change will stop accepting cash.
5. **Log the Visit**: Complete your CRM Restock Log entry before leaving the facility.`,
        milestones: [
          "Pre-pack your stocking bins based on telemetry data",
          "Execute your first full weekly restocking run",
          "Collect, count, and secure cash revenue, and log the entire visit in the CRM Restock Log"
        ]
      },
      {
        day: 41,
        title: "Telemetry Data & Route Optimization",
        shortDesc: "Use sales velocity to optimize your restocking frequency and save fuel.",
        detailedGuide: `Driving to a machine that is 90% full is a waste of time, fuel, and energy. Conversely, leaving a machine empty for days loses massive revenue. Today, we optimize your restocking frequency.

### The Optimization Rules:
*   **High-Velocity Coils**: If energy drinks or Doritos sell out in 3 days, do not visit the machine twice a week. Instead, **double-allocate** those items. Assign them to two separate coils (e.g., coils 10 and 11 both stock Doritos). This doubles your capacity for best-sellers and extends your visiting interval.
*   **Optimal Visiting Threshold**: Schedule a restocking run only when the machine has sold enough product to justify the drive (typically when it drops below **70% capacity**, or when gross sales reach **$100+** since the last visit).

### Today's Action:
Review your weekly sales velocity. Identify your top 3 best-selling items and plan to double-allocate them on your next restocking run.`,
        milestones: [
          "Identify your top 3 best-selling items from your weekly sales logs",
          "Plan a double-allocation layout for your best-sellers in your planogram",
          "Establish your optimal restocking interval (e.g., every 7 days, 10 days, or 14 days)"
        ]
      },
      {
        day: 42,
        title: "Basic Preventative Maintenance",
        shortDesc: "Execute simple monthly maintenance to prevent costly machine breakdowns.",
        detailedGuide: `A vending machine is a physical machine with moving parts. Simple, regular preventative maintenance prevents 95% of common service calls and extends the life of your machine by a decade.

### Monthly Maintenance Checklist:
1. **Condenser Coil Cleaning**: Vacuum the dust and lint off the refrigeration condenser coils (located under or behind the machine). Clean coils keep the compressor running cool and reduce electricity bills by 20%.
2. **Validator Cleaning**: Open the bill acceptor and wipe the rubber intake rollers and optical sensors with a damp cloth or a specialized cleaning card. Dusty sensors cause bill rejections.
3. **Coin Mech Flush**: Flush the coin validator pathways with a damp cloth to remove sticky soda residue.
4. **Check Coin Return Lever**: Ensure the coin return mechanism moves freely and returns coins smoothly.
5. **Wipe Interior Spills**: Wipe down the interior shelves to remove any sticky soda residue or chip crumbs.

### Today's Action:
Execute a quick maintenance run on your active machine. Vacuum the condenser and clean the bill validator rollers.`,
        milestones: [
          "Clean the refrigeration condenser coils of your active machine",
          "Wipe and clean the bill acceptor rollers and coin pathways",
          "Create a recurring monthly maintenance task in your CRM Task System"
        ]
      },
      {
        day: 43,
        title: "Analyzing Profit Margins & Cash Flow",
        shortDesc: "Calculate your exact monthly net profit, gross margins, and return on investment.",
        detailedGuide: `Now that you have been operating for several weeks, it is time to analyze your financial health. Today, we calculate your true profitability.

### The Profit Formula:
1. **Gross Sales**: Total Cash Collected + Total Card Sales.
2. **Cost of Goods Sold (COGS)**: The wholesale cost of the items sold. (e.g., if you sold 100 sodas that cost $0.40 each, your COGS is $40.00).
3. **Gross Profit**: Gross Sales - COGS.
4. **Operating Expenses (OPEX)**: Telemetry fees ($10/month), fuel, insurance, bank fees, commissions.
5. **Net Profit**: Gross Profit - OPEX.

### The Margin Targets:
*   **Gross Margin**: Should be **60% to 70%**.
*   **Net Margin**: Should be **35% to 50%** after all expenses.

### Today's Action:
Compile your receipts and sales logs. Calculate your exact gross profit margin for your first month of operations.`,
        milestones: [
          "Compile all inventory receipts and sales logs from your first weeks",
          "Calculate your true Cost of Goods Sold (COGS) and Gross Profit Margin",
          "Review your operational expenses (OPEX) and calculate your Net Profit"
        ]
      },
      {
        day: 44,
        title: "Scaling Your Route (Securing Location #2)",
        shortDesc: "Use your active machine as a powerful live portfolio asset to secure your next location.",
        detailedGuide: `Securing your first location is the hardest part of vending. Securing your second, third, and tenth locations is infinitely easier because **you now have a live, successful operation to show off**.

### The Portfolio Pitch:
When pitching new managers, you are no longer a "beginner." You are an active, professional local operator.
*   **The Script**: *"Hi [Manager Name], we operate Apex Vending right down the street. We recently installed a modern, cashless combo machine at [Signed Location Name] and their staff absolutely loves it. The plant manager, John, has been thrilled with our weekly stocking frequency and clean machines. I was looking at your facility and noticed your team doesn't have a modern card-enabled setup. I'd love to bring that same high-end service to your team completely free of charge. Do you have 2 minutes for us to look at your break room?"*

### Today's Action:
Select 3 high-priority prospects from your CRM and execute outreach using your new "Live Portfolio Pitch."`,
        milestones: [
          "Draft your customized 'Live Portfolio Pitch' template referencing your active location",
          "Identify 3 high-value prospects close to your active machine's route path",
          "Send outreach emails or make calls to all 3 prospects using your portfolio pitch"
        ]
      },
      {
        day: 45,
        title: "Your Vending Empire: Launch Complete",
        shortDesc: "Celebrate completing the 45-day program and review your growth roadmap.",
        detailedGuide: `Congratulations! You have officially completed the **45-Day Vending Machine Business Starter Kit + CRM System** program.

### What You Have Accomplished:
*   **Days 1-7**: Established a legally protected LLC, EIN, business bank account, and commercial liability insurance.
*   **Days 8-15**: Conducted digital and physical scouting, harvested 30+ leads, and plotted them in your CRM.
*   **Days 16-25**: Mastered outreach and pitches, handled objections, and secured an exclusive signed location agreement.
*   **Days 26-35**: Sourced a premium MDB machine, installed cashless telemetry, set up wholesale tax-exempt supplier accounts, and configured pricing.
*   **Days 36-45**: Successfully installed and stocked your machine, set up remote inventory tracking, logged restocks, and established a highly optimized, repeatable route-management workflow.

You are no longer an aspiring entrepreneur—**you are an active vending machine business owner generating real passive cash flow**. 

Keep using this CRM system daily to track your prospects, manage your clients, monitor your physical machines, log your restocks, and stay on top of your follow-up tasks. Your vending empire starts here.`,
        milestones: [
          "Conduct a complete review of your 45-day journey and achievements",
          "Verify that your CRM data is fully up-to-date and organized",
          "Set a scaling goal for your business (e.g., 5 active machines in the next 6 months)"
        ]
      }
    ]
  }
];
