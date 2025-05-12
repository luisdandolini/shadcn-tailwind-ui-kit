export function formatDateTime(dateString: string) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("pt-BR");

  const formattedTime = date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  return `${formattedDate} - ${formattedTime}`;
}
