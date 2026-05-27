/**
 * FEC compliance constants and helpers for federal candidate contributions.
 *
 * IMPORTANT: Verify the per-election individual contribution limit against
 * fec.gov before each cycle — it's indexed for inflation every two years.
 * https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits-candidates/
 */

export const FEC = {
  // Individual contribution limit per election, 2025-2026 cycle (verify)
  individualLimitPerElection: 3500,

  // Threshold above which employer + occupation must be itemized in FEC reports
  itemizationThreshold: 200,

  // Disclaimers and attestations
  attestation: `I am a US citizen or lawfully admitted permanent resident, at least 18 years old. This contribution is made from my own funds, not from a corporation, labor organization, federal contractor, or foreign national. This contribution is not made on the credit card of another person and is not from funds held in a corporate or business entity account.`,

  prohibitedSources: [
    "Foreign nationals (other than lawful permanent residents)",
    "Federal government contractors",
    "Corporations and labor unions (direct treasury funds)",
    "National banks",
    "Anyone else's funds passed through your account",
  ],

  // For a recurring monthly donation, the total annual amount must respect the limit.
  // We cap recurring at limit / 12 to be safe (or the user picks Custom and we validate).
  maxMonthlyRecurring(): number {
    return Math.floor(this.individualLimitPerElection / 12);
  },
} as const;

export function isValidContribution(
  amount: number,
  recurring: boolean
): { ok: true } | { ok: false; reason: string } {
  if (!Number.isFinite(amount) || amount <= 0) {
    return { ok: false, reason: "Enter a positive amount." };
  }
  if (amount < 1) {
    return { ok: false, reason: "Minimum contribution is $1." };
  }
  if (!recurring && amount > FEC.individualLimitPerElection) {
    return {
      ok: false,
      reason: `Federal law limits contributions to $${FEC.individualLimitPerElection.toLocaleString()} per election.`,
    };
  }
  if (recurring && amount > FEC.maxMonthlyRecurring()) {
    return {
      ok: false,
      reason: `Monthly contributions are capped at $${FEC.maxMonthlyRecurring()} so total annual contributions stay within the federal limit.`,
    };
  }
  return { ok: true };
}

export function feeCoverAmount(amount: number, feePercent: number): number {
  return +(amount * (feePercent / 100)).toFixed(2);
}

export const US_STATES = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
] as const;
