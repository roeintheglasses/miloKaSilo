export type Disease = {
  name: string;
  definition: string;
  affectedSystems: string;
  development: string;
  symptoms: string;
  prevention: string;
};

export type AgeGroup = {
  id: string;
  name: string;
  range: string;
  description: string;
  diseases: Disease[];
};

export const ageGroups: AgeGroup[] = [
  {
    id: "neonatal",
    name: "Neonatal Period",
    range: "Birth to 2 Weeks",
    description:
      "The earliest stage, where kittens are highly dependent and vulnerable.",
    diseases: [
      {
        name: "Congenital Defects",
        definition:
          "Structural or functional abnormalities present at birth, resulting from genetic mutations or environmental factors during pregnancy.",
        affectedSystems:
          "Can impact any body part, including the palate, heart, limbs, eyes, and reproductive organs.",
        development:
          "Occurs during fetal development, potentially influenced by maternal health or exposure to toxins.",
        symptoms:
          "Vary widely; examples include difficulty nursing with cleft palate, heart murmurs with cardiac defects, abnormal gait with limb deformities, cloudy eyes with eye abnormalities, undescended testicles with cryptorchidism, and abdominal bulging with hernias.",
        prevention:
          "Select breeders who screen for genetic defects, ensure proper prenatal care for the mother cat, and avoid exposure to teratogenic substances like certain medications or chemicals.",
      },
      {
        name: "Fading Kitten Syndrome",
        definition:
          "A term for kittens that appear healthy at birth but fail to thrive, often leading to death within the first few weeks.",
        affectedSystems:
          "The entire kitten, with impacts on growth and vitality.",
        development:
          "Can result from infections, congenital defects, nutritional deficiencies, or environmental stressors like cold temperatures.",
        symptoms:
          "Failure to gain weight, lethargy, diarrhea, vomiting, hypothermia, and dehydration.",
        prevention:
          "Ensure the mother cat is healthy during pregnancy, provide a warm and clean environment, and seek early veterinary intervention if the kitten shows signs of distress.",
      },
      {
        name: "Hypothermia",
        definition:
          "A condition where the kitten's body temperature drops below normal, typically below 97°F (36°C).",
        affectedSystems: "The entire body, impacting metabolic functions.",
        development:
          "Due to the kitten's inability to regulate body temperature, especially in cold or drafty environments.",
        symptoms:
          "Cold to the touch, pale or blue mucous membranes, lethargy, decreased heart rate, and poor feeding.",
        prevention:
          "Maintain a warm, draft-free environment using heat lamps or pads, ensuring the temperature is at least 85-90°F (29-32°C) for newborns, and monitor to prevent overheating.",
      },
      {
        name: "Neonatal Infections",
        definition:
          "Infections occurring in the first few weeks, often bacterial or viral, transmitted from the mother or environment.",
        affectedSystems:
          "Commonly respiratory (e.g., pneumonia) or gastrointestinal (e.g., enteritis), but can be systemic (septicemia).",
        development:
          "Transmitted transplacentally, through milk, or from a contaminated environment.",
        symptoms:
          "Sneezing, nasal or ocular discharge, diarrhea, vomiting, fever or hypothermia, lethargy, and poor feeding.",
        prevention:
          "Keep the nesting area clean, ensure the mother is vaccinated and healthy, and seek veterinary care at the first sign of infection.",
      },
    ],
  },
  {
    id: "post-neonatal",
    name: "Post-Neonatal Period",
    range: "2 Weeks to 8 Weeks",
    description:
      "Kittens start exploring, with eyes open and increased exposure.",
    diseases: [
      {
        name: "Upper Respiratory Infections (URI)",
        definition:
          "Infections of the upper respiratory tract, often viral (feline herpesvirus, calicivirus) or bacterial, common in shelters and multi-cat environments.",
        affectedSystems:
          "Nose, throat, and eyes, potentially leading to secondary bacterial infections.",
        development:
          "Spread through direct contact, aerosols, or fomites, highly contagious in close quarters.",
        symptoms:
          "Sneezing, nasal discharge (clear or purulent), conjunctivitis, fever, loss of appetite, and coughing.",
        prevention:
          "Vaccinate against feline herpesvirus and calicivirus, isolate infected cats, and maintain good hygiene, such as cleaning shared spaces.",
      },
      {
        name: "Intestinal Parasites",
        definition:
          "Parasitic infections by worms (roundworms, hookworms, tapeworms) or protozoa (coccidia, Giardia), common in young kittens.",
        affectedSystems:
          "Gastrointestinal system, potentially causing anemia or malabsorption.",
        development:
          "Ingested from contaminated soil, prey, or through the mother's milk, with some transmitted in utero.",
        symptoms:
          "Diarrhea (possibly bloody), weight loss, vomiting, poor coat condition, pot-bellied appearance, and anemia in severe cases.",
        prevention:
          "Follow a deworming schedule as recommended by your vet (e.g., every 2 weeks from 2 to 8 weeks), maintain hygiene, and prevent access to areas with feces or infected prey.",
      },
      {
        name: "Ear Mites",
        definition:
          "Infestation by the mite Otodectes cynotis, common in kittens under one year.",
        affectedSystems:
          "Ears, potentially leading to secondary bacterial infections.",
        development:
          "Spread through direct contact with infected cats, highly contagious in close environments.",
        symptoms:
          "Scratching at ears, head shaking, dark, waxy discharge from ears, inflammation, and odor.",
        prevention:
          "Regularly check ears for signs of mites, treat infected cats with vet-prescribed medications, and isolate from infected cats to prevent spread.",
      },
      {
        name: "Feline Panleukopenia",
        definition:
          "A highly contagious viral disease caused by feline panleukopenia virus (FPV), related to canine parvovirus, also known as feline distemper.",
        affectedSystems:
          "Bone marrow and intestines, attacking rapidly dividing cells.",
        development:
          "Spread through direct contact with infected cats, their bodily fluids, or contaminated environments, surviving up to 12 months outside the host.",
        symptoms:
          "Vomiting, severe diarrhea (often bloody), dehydration, fever, lethargy, anorexia, and depression, with high mortality in unvaccinated kittens.",
        prevention:
          "Vaccinate as part of the core kitten series, isolate from infected cats, and maintain strict hygiene, especially in multi-cat settings.",
      },
      {
        name: "Feline Calicivirus",
        definition:
          "A highly contagious virus causing upper respiratory infections and oral disease, part of the core vaccine series.",
        affectedSystems:
          "Respiratory tract and mouth, occasionally causing systemic signs in virulent strains.",
        development:
          "Spread through direct contact, aerosols, or fomites, with infected cats as carriers.",
        symptoms:
          "Sneezing, nasal discharge, oral ulcers, lameness (due to arthritis in some strains), fever, and conjunctivitis, with rare severe systemic disease.",
        prevention:
          "Vaccinate, isolate from infected cats, and practice good hygiene, especially in shelters or breeding colonies.",
      },
      {
        name: "Feline Herpesvirus (Rhinotracheitis)",
        definition:
          "A virus causing upper respiratory infections and ocular disease, part of the core vaccine series, also known as FHV-1.",
        affectedSystems:
          "Respiratory tract and eyes, with potential for chronic or recurrent infections.",
        development:
          "Spread through direct contact or aerosols, can become latent and reactivate under stress.",
        symptoms:
          "Sneezing, nasal discharge, conjunctivitis, corneal ulcers, keratitis, fever, and anorexia, with chronic carriers possible.",
        prevention:
          "Vaccinate, isolate from infected cats, reduce stress (e.g., minimize changes in environment), and consider antiviral treatments for outbreaks.",
      },
    ],
  },
  {
    id: "young",
    name: "Young Kittens",
    range: "8 Weeks to 6 Months",
    description:
      "More independent, with growing activity and environmental interaction.",
    diseases: [
      {
        name: "Feline Leukemia Virus (FeLV)",
        definition:
          "A retrovirus that suppresses the immune system, increasing susceptibility to infections and cancers, part of the non-core vaccine series.",
        affectedSystems:
          "Immune system, with potential impacts on blood, lymph nodes, and various organs.",
        development:
          "Spread through saliva, blood, or milk, most commonly through fighting, grooming, or shared dishes, with kittens at higher risk from infected mothers.",
        symptoms:
          "Weight loss, anemia, recurrent infections, lymphadenopathy, neurological signs, and tumors (e.g., lymphoma).",
        prevention:
          "Vaccinate if at risk (e.g., outdoor cats), test and isolate infected cats, prevent fights by keeping indoors, and avoid contact with known infected cats.",
      },
      {
        name: "Feline Immunodeficiency Virus (FIV)",
        definition:
          "A retrovirus that attacks the immune system, similar to HIV in humans, with no vaccine available in some regions.",
        affectedSystems:
          "Immune system, leading to chronic infections and immune suppression.",
        development:
          "Spread primarily through deep bite wounds from infected cats, less commonly through other bodily fluids, with outdoor cats at higher risk.",
        symptoms:
          "Weight loss, recurrent infections (e.g., respiratory, oral), neurological signs, stomatitis, lymphadenopathy, and anemia.",
        prevention:
          "Keep cats indoors to prevent fights, test and isolate infected cats, and avoid contact with known infected cats, as no vaccine is universally available.",
      },
      {
        name: "Dental Issues",
        definition:
          "Problems with teeth and gums, including periodontal disease, tooth resorption, and stomatitis, becoming more apparent as adult teeth erupt.",
        affectedSystems:
          "Mouth, potentially impacting overall health if untreated.",
        development:
          "Due to poor oral hygiene, genetics, diet (e.g., soft food), or underlying diseases like FeLV or FIV.",
        symptoms:
          "Bad breath, drooling, difficulty eating, pawing at the mouth, visible tartar, red or swollen gums, and loose teeth.",
        prevention:
          "Brush teeth regularly with pet-safe toothpaste, feed a dental-friendly diet (e.g., dry kibble), schedule annual vet checkups including dental exams, and consider professional cleanings if needed.",
      },
      {
        name: "Obesity",
        definition:
          "Excessive body fat, defined as a body condition score of 5 or higher on a 1-5 scale, a growing concern as kittens transition to solid food.",
        affectedSystems:
          "Overall health, with impacts on joints, heart, liver, and respiratory system.",
        development:
          "Results from overfeeding, lack of exercise, or certain medical conditions like hypothyroidism.",
        symptoms:
          "Visible fat deposits, difficulty moving, respiratory issues, heat intolerance, and skin problems.",
        prevention:
          "Feed a balanced, portion-controlled diet, encourage regular play and exercise, monitor weight at vet visits, and avoid free-feeding high-calorie treats.",
      },
      {
        name: "Accidents and Injuries",
        definition:
          "Physical trauma from falls, being hit by vehicles, fights, or ingestion of toxins, increasing as kittens explore more.",
        affectedSystems: "Any body part, depending on the injury.",
        development:
          "Occurs due to increased activity and environmental exposure, especially if unsupervised.",
        symptoms:
          "Vary by injury; examples include limping, bleeding, swelling, difficulty breathing, or neurological signs.",
        prevention:
          "Supervise kittens closely, keep them in safe, enclosed areas, prevent access to dangerous zones (e.g., roads, toxic plants), and ensure a hazard-free home.",
      },
    ],
  },
  {
    id: "older",
    name: "Older Kittens",
    range: "6 Months to 1 Year",
    description:
      "Approaching adulthood, with emerging adult-like health concerns.",
    diseases: [
      {
        name: "Heartworm Disease",
        definition:
          "A parasitic infection caused by Dirofilaria immitis, affecting the heart and lungs, more relevant in mosquito-endemic areas.",
        affectedSystems:
          "Heart and lungs, potentially leading to heart failure if untreated.",
        development:
          "Transmitted by mosquito bites, with larvae taking about 6 months to mature into adults in the host.",
        symptoms:
          "Coughing, lethargy, weight loss, difficulty breathing, exercise intolerance, and collapse in severe cases.",
        prevention:
          "Use preventive medication (monthly chewables or annual injections), control mosquito populations around the home, and test annually if at risk.",
      },
      {
        name: "Certain Cancers",
        definition:
          "Abnormal cell growth leading to tumors, though rare in this age group, with some types linked to viruses like FeLV.",
        affectedSystems:
          "Various organs, depending on the cancer type (e.g., lymphoma, mammary carcinoma, squamous cell carcinoma).",
        development:
          "Can be genetic, environmental (e.g., sun exposure for skin cancers), or virus-related (e.g., FeLV increasing lymphoma risk).",
        symptoms:
          "Vary by type; examples include enlarged lymph nodes for lymphoma, masses in mammary glands, or oral lesions for squamous cell carcinoma.",
        prevention:
          "Schedule regular vet checkups (every 6 months), spay/neuter to prevent mammary and testicular cancers, minimize exposure to carcinogens, and vaccinate against FeLV.",
      },
      {
        name: "Behavioral Issues",
        definition:
          "Abnormal behaviors that affect the cat's well-being or human-cat relationship, such as aggression, anxiety, or house soiling, becoming more apparent as kittens mature.",
        affectedSystems:
          "Mental health and social interactions, potentially impacting quality of life.",
        development:
          "Can stem from genetics, early environment, lack of socialization, past trauma, or medical issues like pain.",
        symptoms:
          "Aggression (e.g., biting, scratching), anxiety (e.g., hiding, excessive vocalization), fearfulness, compulsive behaviors (e.g., over-grooming), and inappropriate elimination.",
        prevention:
          "Socialize kittens from a young age with people and other pets, provide a safe and enriching environment (e.g., toys, scratching posts), train using positive reinforcement, address medical issues promptly, and consult a vet or behaviorist if problems persist.",
      },
    ],
  },
];

export const keyPoints = [
  "Research suggests kittens can develop various diseases depending on their age, with specific risks at different stages.",
  "Neonatal kittens (birth to 2 weeks) are prone to congenital defects, fading kitten syndrome, hypothermia, and neonatal infections.",
  "Older kittens (6 months to 1 year) face risks like heartworm disease, certain cancers, and behavioral issues, alongside earlier risks.",
  "Vaccination and proper care can significantly reduce disease risks, but consult a vet for tailored advice.",
];

export const references = [
  {
    name: "Common Cat Diseases ASPCA",
    url: "https://www.aspca.org/pet-care/cat-care/common-cat-diseases",
  },
  {
    name: "Feline Life Stage Definitions AAHA",
    url: "https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/feline-life-stage-definitions/",
  },
  {
    name: "15 Common Kitten Diseases and Disorders",
    url: "https://www.thesprucepets.com/health-threats-to-kittens-555035",
  },
  {
    name: "It's Kitten Season Diseases Often Found in Young Cats Zoetis Petcare",
    url: "https://www.zoetispetcare.com/blog/article/kitten-season-diseases",
  },
  {
    name: "Management of the Neonate in Dogs and Cats MSD Veterinary Manual",
    url: "https://www.msdvetmanual.com/management-and-nutrition/management-of-the-neonate/management-of-the-neonate-in-dogs-and-cats",
  },
];
