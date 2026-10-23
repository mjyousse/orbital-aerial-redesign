// Field record data for the industrial side of the site.
//
// STATS are real, confirmed figures from our own flight operations:
//   - about 560 acres mapped every month
//   - for the past 2 years of continuous operations
//   - total derived conservatively: 560 acres x 24 months = about 13,440, written as 13,000+
// Do not add a mission count or any figure that has not been confirmed.
export const SHOW_STATS = true;

// The case-study card is built but hidden. Everything inside CASE_STUDY is PLACEHOLDER text, not fact.
// Turn it on only after it has been replaced with a real, client-approved case study.
export const SHOW_CASE_STUDY = false;

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

export const STATS: Stat[] = [
  { value: 560, label: 'acres mapped every month' },
  { value: 2, suffix: '+', label: 'years of continuous operations' },
  { value: 13000, suffix: '+', label: 'acres mapped in total' },
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
