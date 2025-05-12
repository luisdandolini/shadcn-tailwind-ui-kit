import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Edit,
  MoreVertical,
  Tag,
  Trash,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/utils/formatDateTime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

export type User = {
  id: number;
  name: string;
  age: number;
  gender: string;
  createdAt: string;
  sessionTime: string;
  role: string;
  status: "Ativo" | "Inativo";
  initials: string;
};

type UserItemProps = {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
};

export default function UserItem({ user, onEdit, onDelete }: UserItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg border bg-white shadow-sm">
      <div className="flex items-start md:items-center gap-4 flex-1">
        <Avatar className="h-14 w-14 shrink-0">
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
            <span className="font-medium text-sm">{user.name}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <User size={12} />
              <p>
                {user.age} anos, {user.gender}
              </p>
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDateTime(user.createdAt)}
            </li>
            <li className="flex items-center gap-1">
              <Clock size={12} /> {user.sessionTime}
            </li>
            <li className="flex items-center gap-1">
              <Tag size={12} /> {user.role}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-end">
        <Badge
          variant={user.status === "Ativo" ? "secondary" : "outline"}
          className={`text-xs px-3 py-0.5 rounded-full ${
            user.status === "Inativo" ? "text-[#71717A]" : ""
          }`}
        >
          {user.status}
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <MoreVertical size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={onEdit}>
              <Edit size={14} className="mr-2" /> Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="text-red-500">
              <Trash size={14} className="mr-2" /> Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
