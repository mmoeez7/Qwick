/**
 * Services Content Configuration
 * 
 * This file contains all the content for each service page.
 * To add or update content for a service:
 * 1. Find the service by its slug (e.g., "commercial-hood-cleaning")
 * 2. Update the mainHeading, subHeading, and paragraphs fields
 * 3. You can add multiple paragraphs by adding more strings to the paragraphs array
 * 
 * Service slugs match the folder names in /app/services/
 */

export interface ServiceContent {
  mainHeading: string;
  subHeading: {
    gradientText: string;
  };
  paragraphs: string[];
}

export const servicesContent: Record<string, ServiceContent> = {
  // Commercial Hood Cleaning
  "commercial-hood-cleaning": {
    mainHeading: "Qwick Services and Solutions LLC provides full-service commercial kitchen exhaust cleaning to remove grease, smoke residue, and combustible buildup from your hoods, ducts, and fans. Our technicians follow NFPA 96 standards so your kitchen stays safe, efficient, and inspection‑ready",
    subHeading: {
      gradientText: "Get Full services of commercial Cleaning",
    },
    paragraphs: [
      "Grease accumulation in exhaust systems is one of the leading causes of commercial kitchen fires, which is why a thorough, scheduled cleaning program is essential.Our team starts with a detailed pre‑inspection of your entire exhaust path from canopy hoods and filters to vertical and horizontal ductwork, fans, and exhaust outlets to identify problem areas that need special attention.We then apply professional degreasers and mechanical agitation to break down hardened grease deposits that simple surface wiping cannot reach.",
      "All accessible duct surfaces are scraped or brushed as needed and followed by hot‑water, high‑pressure rinsing for a deep clean that meets code and insurer expectations. Equipment, cooking lines, and sensitive areas are carefully masked and protected to prevent overspray or chemical exposure, and floors are cleaned before we leave. After service, you receive time‑stamped photos and a detailed report documenting the work completed for your records, landlords, and fire inspectors."
    ]
  },

  // Grease Trap and Line Jetting
  "grease-trap-line-jetting": {
    mainHeading: "Qwick Services and Solutions LLC specializes in deep cleaning of commercial kitchen hoods and ductwork to improve airflow, reduce fire hazards, and keep your operation compliant with local codes and insurance requirements.",
    subHeading: {
      gradientText: "Get Full services of Hood & Duct Cleaning",
    },
    paragraphs: [
      "Over time, grease vapors and airborne particles cling to the inside of your hoods and ducts, forming a sticky, flammable layer that standard nightly cleaning cannot remove. Our hood and duct service targets these hidden areas using a combination of access panels, scraping tools, and high‑temperature washing to reach the sections of your system you do not see but inspectors will. We clean hood canopies, filters, plenum areas, horizontal and vertical duct runs, and transitions to ensure a continuous, clean exhaust path.",
      "Technicians carefully remove baffles and filters for separate degreasing and cleaning, then restore them to proper position to maintain design airflow and capture efficiency. By restoring clear duct interiors, your fans do not have to work as hard, helping extend motor life and reduce noise. Each service closes with a professional polish of exposed hood surfaces, cleanup of the work area, and service documentation you can show to management, landlords, and AHJs."
    ]
  },

  // Fire Suppression Service
  "fire-suppression": {
    mainHeading: "Qwick Services and Solutions LLC provides inspection, testing, and maintenance for commercial kitchen fire suppression systems so they activate quickly and reliably when you need them most.",
    subHeading: {
      gradientText: "Get Full services of Fire Suppression Service",
    },
    paragraphs: [
      "Kitchen fire suppression systems are your last line of defense when a flare‑up or grease fire occurs on the cooking line. Our certified technicians perform routine inspections to verify that nozzles are correctly aimed, fusible links and detection lines are in good condition, and cylinders are properly pressurized and within code date ranges. We review your system against manufacturer specifications and NFPA standards, making adjustments or recommendations where coverage has changed due to new appliances or layout shifts.",
      "When required, we perform system tests to verify proper detection and discharge, ensuring that shut‑offs and interlocks for gas and electric equipment function as designed. If deficiencies are found, Qwick Services and Solutions LLC can repair, recharge, or coordinate replacement components to restore your system to full readiness. Upon completion, you receive updated tags, documentation, and clear notes you can present to your fire marshal, insurer, and corporate safety team"
    ]
  },

  // HVAC & Make-Up Air
  "hvac-makeup-air": {
    mainHeading: "Qwick Services and Solutions LLC services rooftop units and make‑up air systems that work alongside your kitchen exhaust to balance airflow, improve comfort, and help your equipment perform as designed.",
    subHeading: {
      gradientText: "Get Full services of HVAC & Make‑Up Air",
    },
    paragraphs: [
      "Unbalanced air in a commercial kitchen can lead to drafts, hot and cold spots, negative pressure, and doors that are hard to open or close. Our technicians evaluate your exhaust and make‑up air system as a whole, checking filters, belts, motors, and control settings to ensure your kitchen is receiving the right volume of tempered outside air. We inspect rooftop units, fans, and diffusers, cleaning components where necessary to support efficient airflow and energy performance.",
      "Properly configured make‑up air helps your hood systems capture smoke and steam more effectively, reducing lingering odors in dining areas and ack‑of‑house spaces. It also contributes to staff comfort, which can improve productivity and reduce complaints during peak hours. After service, we provide practical recommendations for filter change schedules, monitoring, and follow‑up visits so your system continues to support a safe, comfortable working environment"
    ]
  },

  // Pollution Control Unit (PCU) Service
  "pollution-control-unit": {
    mainHeading: "Standard hood cleaning is not enough for modern Pollution Control Units. These sophisticated systems require specialized maintenance to effectively remove grease, smoke, and odors before air is released into the environment. Qwick Solutions provides expert servicing for multi‑stage filtration systems—including units from CaptiveAire, Halton, Accurex, and other leading manufacturers—so your PCU continues to perform as designed. Whether you use  electrostatic Precipitators (ESP) or media‑based filtration, our technicians are trained to keep your equipment efficient, compliant, and protected.",
    subHeading: {
      gradientText: "Why PCU Maintenance Matters",
    },
    paragraphs: [
      "Pollution Control Units sit between your kitchen exhaust and the outdoors, capturing fine grease, smoke, and odor that traditional hoods and ducts do not remove. Over time, ESP cells, filters, and carbon modules load with contaminants, increasing static pressure, reducing capture efficiency, and stressing fans and controls.",
      "Neglected PCUs can lead to nuisance odor complaints, visible discharge, tripped safeties, burnt‑out fan motors, and enforcement actions from landlords or local authorities. Regular, specialized maintenance helps you avoid breakdowns, keep emissions under control, and extend the life of high‑value equipment."
    ]
  },

  // Mechanical Preventive Maintenance
  "mechanical-preventive-maintenance": {
    mainHeading: "Your kitchen ventilation system works harder than any other equipment in your building. Neglected maintenance leads to catastrophic failure, emergency shutdowns, and increased fire risk due to poor airflow.",
    subHeading: {
      gradientText: "Get Full services of HVAC & Make‑Up Air",
    },
    paragraphs: [
      "Unbalanced air in a commercial kitchen can lead to drafts, hot and cold spots, negative pressure, and doors that are hard to open or close. Our technicians evaluate your exhaust and make‑up air system as a whole, checking filters, belts, motors, and control settings to ensure your kitchen is receiving the right volume of tempered outside air. We inspect rooftop units, fans, and diffusers, cleaning components where necessary to support efficient airflow and energy performance.",
      "AProperly configured make‑up air helps your hood systems capture smoke and steam more effectively, reducing lingering odors in dining areas and ack‑of‑house spaces. It also contributes to staff comfort, which can improve productivity and reduce complaints during peak hours. After service, we provide practical recommendations for filter change schedules, monitoring, and follow‑up visits so your system continues to support a safe, comfortable working environment"
    ]
  },

  // Emergency Service
  "emergency-service": {
    mainHeading: "Qwick Services and Solutions LLC provides 24/7 emergency response for urgent cleanings, post‑incident recovery, and last‑minute inspection preparation so your kitchen can get back to operating safely as quickly as possible",
    subHeading: {
      gradientText: "Emergency",
    },
    paragraphs: [
      "Unexpected issues like grease‑related shutdowns, failed inspections, or equipment problems can put your entire operation at risk. When that happens, you need a partner who can mobilize quickly, assess the situation, and perform the work required to satisfy inspectors and reopen safely. Our on‑call technicians respond to emergency requests for heavy‑duty exhaust and hood cleaning, targeted duct and fan work, and post‑fire cleanup in affected areas, following safety protocols at every step.",
      "Emergency service visits focus on resolving the immediate safety and compliance concerns first, then outlining any additional follow‑up work recommended to stabilize your maintenance routine. We coordinate with your management team, landlords, and inspectors when needed to confirm what has been completed and what documentation is available. Service reports and photos are provided promptly to support your internal records and insurance communication."
    ]
  },

  // Default/General Services page
  "default": {
    mainHeading: "Qwick Services and Solutions LLC provides inspection, testing, and maintenance for commercial kitchen fire suppression systems so they activate quickly and reliably when you need them most.",
    subHeading: {
      gradientText: "Get Full services of Fire",
    },
    paragraphs: [
      "Kitchen fire suppression systems are your last line of defense when a flare‑up or grease fire occurs on the cooking line. Our certified technicians perform routine inspections to verify that nozzles are correctly aimed, fusible links and detection lines are in good condition, and cylinders are properly pressurized and within code date ranges. We review your system against manufacturer specifications and NFPA standards, making adjustments or recommendations where coverage has changed due to new appliances or layout shifts.",
      "When required, we perform system tests to verify proper detection and discharge, ensuring that shut‑offs and interlocks for gas and electric equipment function as designed. If deficiencies are found, Qwick Services and Solutions LLC can repair, recharge, or coordinate replacement components to restore your system to full readiness. Upon completion, you receive updated tags, documentation, and clear notes you can present to your fire marshal, insurer, and corporate safety team"
    ]
  }
};

