
import { Program, Project, BoardMember, SecretariatMember, NewsItem, MetricData, Partner } from './types';

export const FRA_KNOWLEDGE_BASE = `
# Food Rights Alliance (FRA) Uganda - Knowledge Base

## Overview
- Founded: 1999 (initially as a network to address WTO talks in Seattle).
- Evolution: Transitioned from a reactionary coalition to a proactive, rights-based vanguard for agrifood system governance.
- Core Philosophy: Grounded in the Human Right to Adequate Food.
- Legal Basis: The right to food is the only human right explicitly recognized as fundamental within the International Bill of Rights.
- Principles (PANTEE): Participation, Accountability, Non-discrimination, Transparency, Equity, and Equality.

## Institutional Identity
- Vision: A world free from hunger and malnutrition (Aligned with SDG 2).
- Mission: To promote sustainable access and consumption of adequate, safe, and nutritious Food For All.
- Theme: Secure spaces, mobilize voices, and power food producers and consumers to shape policy.
- Core Values:
  1. Food first, everything later.
  2. Food sovereignty (Right to healthy, culturally acceptable food).
  3. Food is the most precious and valuable item (Reduction of loss/waste).
  4. Sustainable means of production (Equitable access and climate adaptation).

## Leadership
- Executive Director: Agnes Kirabo.
- Board Chairperson: Pamela Ebanyat.
- Board Vice Chairperson: Eustace Sajjabi.
- Secretariat: Includes specialists in food governance, communications, finance, and MEL (Monitoring, Evaluation, and Learning).

## Programs & Workstreams (2022-2026 Strategic Plan)
1. Sustainable Access and Consumption of Safe and Healthy Diets: Focus on urban food systems, maternal/child nutrition, and food safety.
2. Sustainable and Equitable Production and Marketing Systems: Focus on climate-smart tech and fair trade.
3. FRA Food Governance and Justice: Advocacy for an "Apex Food Law" in Uganda and budget tracking.
4. Program Quality: Evidence-based planning and HRBA (Human Rights Based Approach) integration.
5. Sustainability: Institutional capacity and community ownership.

## Targeted Initiatives (TFIs)
- Women’s Food Rights Empowerment: Supporting women's leadership in farming.
- Youth in Food Systems: Engaging youth (80% of East African pop) as innovators.
- Climate Resilience and Adaptation: Communities withstanding climate risks.
- Nutrition Security and Healthy Diets: Addressing stunting through education.

## Hunger Metrics (2024-2025)
- National Food Insecurity: 46% of Ugandans.
- Child Stunting: 26% of children under 5 (Nationally).
- Regional Insecurity: Karamoja (63%), Bukedi (50%), West Nile (48%).
- Karamoja Stunting: 43.8%.

## Membership Details
- Eligibility: Legally registered entities supporting the right to food.
- Entry Fee: UGX 50,000 (one-time).
- Annual Subscription: UGX 100,000.
- Requirements: Copy of constitution, certificate of incorporation, and strategic plan.
- Obligations: Attend AGM (held in August), knowledge sharing.

## Contact Information
- Address: Plot 82 Mutesa I Road - Namirembe, P.O. Box 5796, Kampala, Uganda.
- Phone/WhatsApp: +256-706-535-222.
- Email: fra@frauganda.org.
- Business Hours: Mon-Fri (8:00 AM – 5:00 PM), Sat (9:00 AM – 12:00 PM).
`;

export const PROGRAMS: Program[] = [
  {
    id: 'healthy-diets',
    title: 'Sustainable Access and Consumption of Safe and Healthy Diets',
    focus: 'Nutrition Literacy & Safety',
    objective: 'Enhance capacity for stakeholders to handle and consume safe food.',
    description: 'This program focuses on bridging the gap between producers and consumers, particularly in urban food systems and vulnerable populations.',
    subAreas: ['Urban Food Systems', 'Maternal and Child Nutrition', 'Food Safety', 'Refugees and Host Communities'],
    details: 'Through our Nutrition Literacy initiative, we target the reduction of food-borne illnesses and stunting. We work with market vendors in Kampala to improve hygiene standards and provide training on the OPERA framework. Key targets include 10,000 households reached with nutrition education and the establishment of 50 "Safe Food Hubs" across urban centers by 2026. This work directly supports Uganda\'s Nutrition Action Plan (UNAP II).'
  },
  {
    id: 'equitable-production',
    title: 'Sustainable and Equitable Production and Marketing Systems',
    focus: 'Resilience & Fair Trade',
    objective: 'Increase food system adaptability to climate shocks.',
    description: 'Committed to building systems that allow farmers and food producers to thrive through fair trade and sustainable practices.',
    subAreas: ['Climate-smart technologies', 'Resilience planning', 'Fair trade advocacy'],
    details: 'This workstream focuses on the "hardware" of the food system. We facilitate the adoption of regenerative agriculture techniques that improve soil health and carbon sequestration. Our fair trade advocacy ensures that smallholder farmers receive a living wage, protecting them from market volatility. We are currently piloting a Climate-Resilience Fund to provide micro-grants for local water harvesting and irrigation systems in the cattle corridor.'
  },
  {
    id: 'food-governance',
    title: 'FRA Food Governance and Justice',
    focus: 'Accountability & Rights',
    objective: 'Integrate the Right to Food into national planning and laws.',
    description: 'Focuses on the laws, policies, and power structures that determine who benefits from food systems.',
    subAreas: ['Policy Advocacy and Reform', 'Research and Evidence Generation', 'Civic Engagement and Accountability'],
    details: 'The centerpiece of this program is our push for an "Apex Food Law" in Uganda. We work closely with the Parliamentary Alliance on Food and Nutrition Security to draft legislation that recognizes the human right to adequate food as a justiciable right. We conduct annual "Right to Food" audits and publish the "Shadow report" on the implementation of the National Development Plan (NDP IV) agrifood commitments.'
  },
  {
    id: 'quality-impact',
    title: 'Program Quality and Sustainability',
    focus: 'MEL & Accountability',
    objective: 'Ensure evidence-based planning and HRBA integration.',
    description: 'Focuses on internal and external mechanisms that ensure the FRA\'s work is effective and enduring.',
    subAreas: ['Monitoring and Evaluation', 'Institutional capacity building', 'Regenerative agriculture'],
    details: 'This program ensures that the Human Rights Based Approach (HRBA) is mainstreamed across all FRA activities. We utilize sophisticated Monitoring, Evaluation, and Learning (MEL) frameworks to track impact and ensure financial transparency. It also focuses on the growth of the African Food Policy Center, our internal research wing that provides data-driven evidence for all our advocacy efforts.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'water-natural-resource-rights',
    title: 'Water and Natural Resource Rights',
    category: 'Equitable Production',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/VLkvXnYC/images-(2)ghgj.jpg',
    summary: 'Building an integrated water and land resource system for sustainable development across regional networks.',
    impact: 'Integrated resource management systems established in 4 regional hubs.',
    location: 'Central, Western (Rwenzori), and Eastern Uganda',
    duration: '2023 - 2026',
    partners: ['Ministry of Water and Environment', 'Local Government Councils'],
    fullDescription: 'This project aims to build an integrated water and land resource system that serves as a cornerstone for sustainable agricultural development. By securing natural resource rights, we empower local communities to manage water catchments and land use in a way that ensures long-term food sovereignty. The initiative works through individuals in four regional food security networks to ensure grassroots implementation meets national policy standards.'
  },
  {
    id: 'equitable-resource-governance',
    title: 'Enhanced Equitable Resource Use and Governance',
    category: 'Food Governance',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/MKpH1VWj/images-(2)fhfhf.jpg',
    summary: 'Enhancing women\'s resilience to shocks of exclusion and poverty through targeted community empowerment.',
    impact: 'Over 1,200 women engaged in active resource governance roles.',
    location: 'Multi-Regional Coverage',
    duration: '2024 - 2027',
    partners: ['UN Women', 'District Land Boards'],
    fullDescription: 'This programme is specifically aimed at enhancing women’s resilience to shocks of exclusion and poverty. Through intensive community empowerment and legal literacy training, we are changing the governance structures that previously marginalized women in resource allocation. We focus on transforming local leadership to be inclusive and responsive to the needs of female food producers.'
  },
  {
    id: 'agri-extensions-finance',
    title: 'Agricultural Extensions Finance Reform',
    category: 'Food Governance',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/vZ1mNygv/sdsdadsad.jpg',
    summary: 'Advocating for policy reforms in agricultural extension services through partnership and community engagement.',
    impact: 'Influenced the inclusion of UGX 333 Billion target in national budget advocacy.',
    location: 'National Focus',
    duration: '2022 - 2026',
    partners: ['Parliamentary Alliance on Food Security', 'MAAIF'],
    fullDescription: 'FRA has been a leading voice in policy reforms for agricultural extension services. This project focuses on the "hardware" of the food system—ensuring that government finance is allocated to the frontline extension workers who support smallholder farmers. Through partnership support and community engagement, we ensure that the voices of the producers reach the floors of Parliament.'
  },
  {
    id: 'land-seed-rights',
    title: 'Alliance Work on Land and Seed Rights',
    category: 'Equitable Production',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/Wb1z0g2V/images-(2)cgdgd.jpg',
    summary: 'Implementing frameworks for securing seed and land rights for sustainable farming and food sovereignty.',
    impact: 'Community-led seed banks established in 12 districts.',
    location: 'Eastern and Western Uganda',
    duration: '2023 - 2025',
    partners: ['PELUM Uganda', 'National Agricultural Research Organisation'],
    fullDescription: 'The Food Rights Alliance works tirelessly on the implementation and securing of seed and land rights. This project ensures that farmers maintain control over their genetic heritage and have secure tenure to the land they till. By protecting these fundamental rights, we create a stable environment for sustainable farming and climate-smart adaptation.'
  },
  {
    id: 'women-gender-empowerment',
    title: 'Women, Gender and Economic Empowerment',
    category: 'Target Initiatives',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/QxYtmCty/imagesffgg.jpg',
    summary: 'Giving due recognition to rural women’s contribution to the agricultural sector and food security.',
    impact: 'Recognized by the National Planning Authority for gender mainstreaming excellence.',
    location: 'National',
    duration: 'Integrated Strategic Workstream',
    partners: ['Ministry of Gender, Labour and Social Development'],
    fullDescription: 'Gender equality through women empowerment is central in the programming of all our programs. We\'re conscious of the fact that despite the enormous contribution of rural women to the agricultural sector and their contribution to food production and security, they have not been given due recognition in economic development. This project works to institutionalize this recognition through policy advocacy and targeted economic support programs.'
  },
  {
    id: 'ending-hunger-projects',
    title: 'Ending Hunger: Community Resilience',
    category: 'Target Initiatives',
    status: 'Ongoing',
    image: 'https://i.postimg.cc/MpcGFwfz/Screenshot-2026-01-06-215648.png',
    summary: 'Integrated community-based solutions aimed at the goal of a world free from hunger.',
    impact: 'Reduced household-level hunger gap in target pilot districts by 20%.',
    location: 'Central and Eastern Uganda',
    duration: '2023 - 2026',
    partners: ['WFP', 'FAO'],
    fullDescription: 'Our Ending Hunger projects save the lives of families by deploying proven, scalable solutions. This initiative combines emergency nutritional support with long-term resilience building, ensuring that communities can withstand the recurring shocks of climate change and economic instability. It serves as the operational tip of the spear for our goal of a World Free from Hunger.'
  }
];

export const BOARD_MEMBERS: BoardMember[] = [
  { 
    name: 'Pamela Ebanyat', 
    designation: 'Chairperson BOD', 
    function: 'Strategic leadership and organizational direction.',
    image: 'https://i.postimg.cc/6q70dn78/Pamela-Ebanyat.png'
  },
  { 
    name: 'Eustace Sajjabi', 
    designation: 'Vice Chairperson BOD', 
    function: 'Oversight of board functionality and policy adherence.',
    image: 'https://i.postimg.cc/7hCVg0CY/Eustace-Sajjabi.png'
  },
  { 
    name: 'Aggrey Nshekanabo', 
    designation: 'Treasurer BOD', 
    function: 'Financial oversight, audit compliance, and resource management.',
    image: 'https://i.postimg.cc/VvSRjnS8/Aggrey-Nshekanabo.png'
  },
  { 
    name: 'Nakibuuka Noor Musisi', 
    designation: 'General Secretary BOD', 
    function: 'Legal documentation, compliance, and board communications.',
    image: 'https://i.postimg.cc/hvJr9TJc/Nakibuuka-Noor-Musisi.png'
  },
  { 
    name: 'Gerald Tushabe', 
    designation: 'Member BOD', 
    function: 'Programmatic review and strategic advisory.',
    image: 'https://i.postimg.cc/DZp6JBzm/Gearald-Tushabe.png'
  },
  { 
    name: 'Mujuni Benard', 
    designation: 'Member BOD', 
    function: 'Stakeholder engagement and policy advocacy.',
    image: 'https://i.postimg.cc/76t9GmLk/Mujuni-Benard.png'
  },
  { 
    name: 'Specioza Namwebe Kiwanuka', 
    designation: 'Honorary Member BOD', 
    function: 'Institutional memory and external relations.',
    image: 'https://i.postimg.cc/50KgYntJ/Specioza-Namwebe-Kiwanuka.png'
  },
  { 
    name: 'Kimera Henry Richard', 
    designation: 'Founder Member', 
    function: 'Visionary guidance and founding principles.',
    image: 'https://i.postimg.cc/rmZj0QpL/Henry-Kimera.png'
  },
  { 
    name: 'Dr Sarah Nahalamba Birungi', 
    designation: 'Member BOD', 
    function: 'Scientific research and evidence-based policy review.',
    image: 'https://i.postimg.cc/XqZ8wdZk/Dr-Sarah-Nahalamba-Birungi.png'
  },
  { 
    name: 'Agnes Kirabo', 
    designation: 'ED Ex-Official', 
    function: 'Operational execution and secretariat management.',
    image: 'https://i.postimg.cc/d37B8r7R/Agnes-Kirabo.png'
  },
  { 
    name: 'Stella R. Akutui', 
    designation: 'Youth Representative BOD', 
    function: 'Youth inclusivity and intergenerational leadership strategies.',
    image: 'https://i.postimg.cc/QtYm90M8/Stella-R-Akutui.png'
  }
];

export const SECRETARIAT_MEMBERS: SecretariatMember[] = [
  {
    name: 'Agnes Kirabo',
    designation: 'Executive Director',
    image: 'https://i.postimg.cc/KY9Fjkd7/Agnes-kirabo-Executive-Director.jpg'
  },
  {
    name: 'Robinah Nakafeero',
    designation: 'Head of Systems',
    image: 'https://i.postimg.cc/6qnDry1C/Robinah-Nakafeero-Head-of-systems.jpg'
  },
  {
    name: 'Freda Laura Orochi',
    designation: 'Head of Programs',
    image: 'https://i.postimg.cc/kGKkQBh2/Freda-Laura-Orachi-Head-of-Programs.jpg'
  },
  {
    name: 'Lucky Brian Wamboka',
    designation: 'Head of Program Quality and Partnerships',
    image: 'https://i.postimg.cc/x8DZ19TG/Lucky-Brian-Wamboka-Head-of-program-and-Partnerships.png'
  },
  {
    name: 'Claire Atukunda',
    designation: 'Program Manager, Food Governance',
    image: 'https://i.postimg.cc/BbHdTXwN/Claire-Atukunda-Program-Manager-Food-Governace.jpg'
  },
  {
    name: 'Victoria Namuddu',
    designation: 'Program Finance Officer',
    image: 'https://i.postimg.cc/KjPHKCRP/Victoria-Namuddu-Program-Finance-Officer.png'
  },
  {
    name: 'Modesta Hope Maria',
    designation: 'Programs Officer Communications and Advocacy',
    image: 'https://i.postimg.cc/Ls5wyybp/Modesta-Hope-Maria-Programs-Officer-Communications.png'
  },
  {
    name: 'Margaret Maria Nabukenya',
    designation: 'Program Assistant, Food Governance',
    image: 'https://i.postimg.cc/0NjFttBk/Margaret-Nabukenya-Program-Assitant-Food-Governace.png'
  },
  {
    name: 'Amanya Julian',
    designation: 'Program Assistant, Women in Agri-Food Systems',
    image: 'https://i.postimg.cc/3wNVLLc7/Amanya-Julian-Program-Assistant-Women-In-Agri-Food-Systems.png'
  },
  {
    name: 'Sandra Berinda Nandege',
    designation: 'Program Assistant – MEAL',
    image: 'https://i.postimg.cc/K8JCDXJX/Sandra-Berinda-Nandege-Program-Assitant-MEAL.png'
  },
  {
    name: 'Kato Paul Munyagwa',
    designation: 'Program Driver',
    image: 'https://i.postimg.cc/Qt9LM6gx/Kato-Paul-Munyagwa-Program-Driver.png'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  { 
    id: 'nat-health-conf-2025',
    date: '2025-09-15', 
    title: 'Uganda National Health Conference', 
    description: 'ED Agnes Kirabo addressed contaminated food links to national disease burden.',
    category: 'Events',
    fullContent: 'At the recently concluded Uganda National Health Conference, the Executive Director of the Food Rights Alliance, Agnes Kirabo, delivered a powerful keynote address focusing on the intersection of food safety and national health. She highlighted alarming data linking contaminated food to a significant portion of Uganda\'s non-communicable disease burden. "We cannot talk about universal health coverage without addressing what our people are putting on their plates," she stated. The Alliance called for stricter regulation of hazardous agrochemicals and enhanced nutrition literacy as foundational pillars of the national health strategy.'
  },
  { 
    id: 'ndp-iv-consult-2024',
    date: '2024-09-10', 
    title: 'NDP IV Consultations', 
    description: 'Workshops in Tooro region to identify priorities for the Fourth National Development Plan.',
    category: 'Policy',
    fullContent: 'Food Rights Alliance successfully concluded a series of regional stakeholder workshops in the Tooro sub-region as part of the consultations for the Fourth National Development Plan (NDP IV). Participants, including smallholder farmers, local government officials, and civil society representatives, identified key priorities such as climate-resilient agricultural infrastructure and the institutionalization of land rights for women. These findings will be compiled into a position paper to be presented to the National Planning Authority, ensuring that grassroots voices shape the future of Uganda\'s agrifood systems.'
  },
  { 
    id: 'agri-chem-act-2024',
    date: '2024-07-22', 
    title: 'Agriculture Chemical Control Act', 
    description: 'Celebrated presidential assent to legislation regulating hazardous agrochemicals.',
    category: 'Advocacy',
    fullContent: 'In a major victory for food safety advocacy, the Food Rights Alliance celebrates the presidential assent to the Agriculture Chemical Control Act 2024. For over five years, the Alliance, in collaboration with the Parliamentary Alliance on Food and Nutrition Security, has lobbied for more robust regulation of pesticides and herbicides that pose risks to human health and the environment. This new law provides the legal framework needed to phase out highly hazardous chemicals and mandates clearer labeling and training for agro-input dealers.'
  },
  { 
    id: 'agrifood-summit-2025',
    date: '2025-06-05', 
    title: 'Agri-food Systems Summit', 
    description: 'Showcasing innovative financing models for Ugandan agri-food value chains.',
    category: 'Events',
    fullContent: 'The 2025 Agri-food Systems Summit brought together investors, policy experts, and farmer cooperatives to discuss "Financing the Transformation." FRA presented a case study on the Climate-Resilience Fund, demonstrating how micro-grants for local water harvesting can significantly de-risk smallholder farming. The summit ended with a call for the government to increase the agricultural budget allocation to at least 10% of the national budget, in line with the Malabo Declaration commitments.'
  },
  { 
    id: 'we-are-able-2025',
    date: '2025-09-28', 
    title: '"We are Able!" Closing Event', 
    description: 'Celebrating achievements in disability-inclusive food security in Kampala.',
    category: 'Institutional',
    fullContent: 'The "We are Able!" project concluded with a celebration of its impact on disability-inclusive food security in Kampala and surrounding districts. Over the past three years, the project has empowered over 2,000 persons with disabilities to engage in urban farming and advocacy for inclusive service delivery. "Food rights are universal, yet people with disabilities are often the last to be considered in food policy," noted the project lead. The closing event showcased kitchen garden innovations and success stories of economic independence.'
  }
];

export const HUNGER_METRICS: MetricData[] = [
  { region: 'Karamoja (General)', population: '408,000 (30%)', driver: 'Dry spells, migration', outlook: 'Improvement from lean season' },
  { region: 'Karamoja (Emergency)', population: '27,000 (2%)', driver: 'Pasture reduction', outlook: 'High concern for Phase 4' },
  { region: 'Refugee Settlements', population: '712,000 (37%)', driver: 'Resource stress', outlook: 'Continued dependency on aid' },
  { region: 'Host Districts', population: '797,000 (17%)', driver: 'Competitive resource use', outlook: 'Stressed (Phase 2)' }
];

export const PARTNERS: Partner[] = [
  { type: 'UN Agencies', organizations: 'FAO, WFP, UNICEF, IFAD', function: 'Technical assistance, global alignment' },
  { type: 'International NGOs', organizations: 'Oxfam, Rikolto, World Vision, Action Aid', function: 'Joint programming, funding' },
  { type: 'Regional Research', organizations: 'IFPRI, CGIAR, ASARECA', function: 'Evidence-based policy, climate research' },
  { type: 'National Government', organizations: 'MAAIF, Ministry of Health, OPM', function: 'Policy implementation, planning' }
];
