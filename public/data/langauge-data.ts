// Define Lang type here
export type Lang = "en" | "fr" | "de";

const LanguageData: { id: number; label: string; code: Lang }[] = [
  { id: 1, label: "English", code: "en" },
  { id: 2, label: "Français", code: "fr" },
  { id: 3, label: "Deutsch", code: "de" },
];

export default LanguageData;
