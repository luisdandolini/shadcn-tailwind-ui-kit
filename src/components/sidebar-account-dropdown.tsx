import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Building2, Plus } from "lucide-react";

export function SidebarAccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full items-center justify-between px-2 pt-4 rounded-md hover:bg-muted">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-muted text-xs font-medium">
              FA
            </div>
            <span className="text-sm font-medium text-[#27272A]">Filial A</span>
          </div>
          <ChevronsUpDown
            className="h-4 w-4 text-muted-foreground"
            color="#3F3F46"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60" align="start">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Equipes
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Building2 className="mr-2 h-4 w-4" />
          Filial A
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Building2 className="mr-2 h-4 w-4" />
          Filial B
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar equipe
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
