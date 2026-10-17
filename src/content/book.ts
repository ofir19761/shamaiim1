export const BOOK_TITLE = "ערך מוסף";
export const BOOK_SUBTITLE = "כשערכים ועסקים נפגשים בהצלחה";

export const bookNav = [
  { to: "/book/preface", label: "פתח דבר" },
  { to: "/book/chapter-1", label: "פרק ראשון · מתחילים בערכים", part: "חלק א׳ — ערכים ואידיאולוגיה" },
  { to: "/book/chapter-2", label: "פרק שני · הסביבה העסקית שלכם" },
  { to: "/book/chapter-3", label: "פרק שלישי · מוכנים להקים עסק?", part: "חלק ב׳ — מהלכה למעשה" },
  { to: "/book/chapter-4", label: "פרק רביעי · ניהול פיננסי" },
  { to: "/book/resume", label: "הרזומה שלי בקצרה" },
] as const;
