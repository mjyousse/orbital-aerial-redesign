// Field record data for the industrial side of the site.
//
// STATS are real, confirmed figures from our own flight operations:
//   - 1,120 acres mapped every month
//   - 3+ years of continuous operations
//   - 130,000+ acres mapped in total, as supplied by the owner. This is cumulative: a site
//     surveyed every week counts each time it is flown. It is not a count of unique acres.
// Do not add a mission count or any figure that has not been confirmed.
export const SHOW_STATS = true;

// The case-study card is built but hidden. Everything inside CASE_STUDY is PLACEHOLDER text, not fact.
// Turn it on only after it has been replaced with a real, client-approved case study.
export const SHOW_CASE_STUDY = false;

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

export const STATS: Stat[] = [
  { value: 1120, label: 'acres mapped every month' },
  { value: 3, suffix: '+', label: 'years of continuous operations' },
  { value: 130000, suffix: '+', label: 'acres mapped, cumulative (repeat surveys count)' },
];

export const CASE_STUDY = {
  placeholder: true,
  tag: '[PLACEHOLDER] Industrial case study',
  title: '[PLACEHOLDER] Case study title',
  steps: [
    { k: 'Site challenge', v: '[PLACEHOLDER] What the site needed measured, and by when.' },
    { k: 'Capture approach', v: '[PLACEHOLDER] How we flew and controlled the site.' },
    { k: 'Deliverables', v: '[PLACEHOLDER] The datasets and reports handed over.' },
    { k: 'Measured outcome', v: '[PLACEHOLDER] Time, cost or risk reduced, in confirmed figures.' },
  ],
  outcomes: [
    { value: 0, suffix: '', label: '[PLACEHOLDER] outcome figure' },
  ] as Stat[],
};
