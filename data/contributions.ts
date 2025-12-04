// Whole year data: 3–4 contribution days per week (static)
export const generatedContributionData = (() => {
  const result = [];
  const today = new Date();

  // Go back 52 weeks (1 full year)
  const WEEKS = 52;

  for (let w = 0; w < WEEKS; w++) {
    // Pick 3 or 4 random days in the week
    const contributionDays = 3 + Math.floor(Math.random() * 2); // 3 or 4

    for (let i = 0; i < contributionDays; i++) {
      const d = new Date();
      d.setDate(today.getDate() - w * 7 - Math.floor(Math.random() * 7));

      result.push({
        date: d.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 5), // 0–4
        level: Math.floor(Math.random() * 5), // 0–4
      });
    }
  }

  // Remove duplicates + sort
  const unique = Array.from(
    new Map(result.map((item) => [item.date, item])).values()
  );

  unique.sort((a, b) => a.date.localeCompare(b.date));

  return unique;
})();
