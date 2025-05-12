import { useEffect, useState } from "react";
import { DashboardMetricCard } from "@/components/ui/users/dashboard-metric-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import UserItem, { User } from "@/components/ui/users/user-item";
import { users as mockUsers } from "@/mocks/users";
import { Pagination } from "@/components/ui/users/pagination";

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchUsers = async () => {
      await new Promise((res) => setTimeout(res, 300));

      const usersWithInitials: User[] = mockUsers.map((user) => {
        const initials = user.name
          .split(" ")
          .filter((part) => part.length > 0)
          .map((part) => part[0])
          .join("")
          .substring(0, 2)
          .toUpperCase();

        return {
          ...user,
          initials,
          status: user.status as "Ativo" | "Inativo",
        };
      });

      setUsers(usersWithInitials);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl font-normal">Usuários</h1>
        <Button className="rounded-full h-[40px] font-medium font-sans text-sm flex items-center gap-2">
          <Plus size={12} />
          Adicionar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <DashboardMetricCard title="Usuários" value="294" />
        <DashboardMetricCard title="Tempo de sessão" value="31m 20s" />
        <DashboardMetricCard title="Ativos" value="203" />
        <DashboardMetricCard title="Inativos" value="127" />
      </div>

      <div className="space-y-2">
        {paginatedUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>

      <Pagination
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(val) => {
          setItemsPerPage(val);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
