import { useEffect, useState } from "react";
import { DashboardMetricCard } from "@/components/ui/users/dashboard-metric-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import UserItem, { User } from "@/components/ui/users/user-item";
import { users as mockUsers } from "@/mocks/users";
import { Pagination } from "@/components/ui/users/pagination";
import { UserModalForm } from "@/components/ui/users/user-modal-form";

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      await new Promise((res) => setTimeout(res, 300));

      const usersWithInitials: User[] = mockUsers.map((user) => {
        const initials = user.name
          .split(" ")
          .filter(Boolean)
          .map((n) => n[0])
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

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl font-normal">Usuários</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full h-[40px] font-medium font-sans text-sm flex items-center gap-2"
        >
          <Plus size={12} />
          Adicionar
        </Button>
      </div>

      <UserModalForm
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={(newUser) => {
          const initials = newUser.name
            .split(" ")
            .filter(Boolean)
            .map((n) => n[0])
            .join("")
            .substring(0, 2)
            .toUpperCase();

          const userToAdd: User = {
            ...newUser,
            id: users.length + 1,
            initials,
            createdAt: new Date().toISOString(),
            sessionTime: "38m22s",
            status: newUser.status ? "Ativo" : "Inativo",
          };

          setUsers((prev) => [userToAdd, ...prev]);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <DashboardMetricCard title="Usuários" value={String(users.length)} />
        <DashboardMetricCard title="Tempo de sessão" value="31m 20s" />
        <DashboardMetricCard
          title="Ativos"
          value={String(users.filter((u) => u.status === "Ativo").length)}
        />
        <DashboardMetricCard
          title="Inativos"
          value={String(users.filter((u) => u.status === "Inativo").length)}
        />
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
