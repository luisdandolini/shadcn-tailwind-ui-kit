import { Card, CardContent } from "@/components/ui/card";

interface DashboardMetricCardProps {
  title: string;
  value: string;
}

export function DashboardMetricCard({
  title,
  value,
}: DashboardMetricCardProps) {
  return (
    <Card className="bg-[#F9F9F9] rounded-xl shadow-none flex flex-col items-start justify-center border-none">
      <CardContent className="p-6 h-[100px]">
        <p className="text-xs text-muted-foreground font-sans">{title}</p>
        <p className="text-2xl font-serif font-normal">{value}</p>
      </CardContent>
    </Card>
  );
}
