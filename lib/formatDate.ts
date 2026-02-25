import { format } from "date-fns";

export default function formatDate(date: string, short: boolean = false) {
  // Parse as local date to avoid UTC midnight shifting to the previous day
  const [year, month, day] = date.split("-").map(Number);
  return format(new Date(year, month - 1, day), short ? "MMM dd, yyyy" : "MMMM do, yyyy");
}
