import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const userSchema = z.object({
  name: z.string().min(3, "Digite ao menos 3 letras"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Telefone incompleto")
    .max(15, "Telefone muito longo"),
  whatsapp: z.boolean(),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
  rg: z.string().min(5, "RG inválido"),
  age: z
    .number({ invalid_type_error: "Idade obrigatória" })
    .int()
    .positive("Idade deve ser positiva")
    .max(120, "Idade inválida"),
  gender: z.enum(["Homem", "Mulher", "Outro"]),
  role: z.string().min(3, "Informe a função"),
  status: z.boolean(),
});

type UserFormData = z.infer<typeof userSchema>;

type UserModalFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormData) => void;
  defaultValues?: Partial<UserFormData> | null;
};

export function UserModalForm({
  open,
  onOpenChange,
  onSubmit,
  defaultValues,
}: UserModalFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      whatsapp: false,
      status: true,
      ...(defaultValues ?? {}),
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        whatsapp: false,
        status: true,
        ...(defaultValues ?? {}),
      });
    }
  }, [defaultValues, open, reset]);

  const isActive = watch("status");

  const submit: SubmitHandler<UserFormData> = (data) => {
    onSubmit(data);

    const { dismiss } = toast({
      title: "Usuário adicionado com sucesso!",
      duration: 4000,
      action: (
        <Button
          variant="ghost"
          size="sm"
          className="border border-[#E4E4E7] rounded-full h-[40px] font-normal"
          onClick={() => dismiss()}
        >
          Fechar
        </Button>
      ),
    });

    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed top-0 right-0 h-full w-full max-w-md !rounded-none border-l bg-white shadow-xl sm:max-w-[500px] !left-auto !translate-x-0 !translate-y-0">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal text-left">
            Adicionar usuário
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-4 absolute top-[120px] left-10 right-10 h-[-webkit-fill-available]"
        >
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite o nome"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              placeholder="Digite o e-mail"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              placeholder="Informe o telefone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>

          <Controller
            control={control}
            name="whatsapp"
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="whatsapp"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label htmlFor="whatsapp">WhatsApp</Label>
              </div>
            )}
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                placeholder="Informe o CPF"
                {...register("cpf")}
              />
              {errors.cpf && (
                <p className="text-red-500 text-xs">{errors.cpf.message}</p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" placeholder="Informe o RG" {...register("rg")} />
              {errors.rg && (
                <p className="text-red-500 text-xs">{errors.rg.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                type="number"
                placeholder="Ex: 30"
                {...register("age", { valueAsNumber: true })}
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age.message}</p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="gender">Gênero</Label>
              <Input
                id="gender"
                placeholder="Homem ou Mulher"
                {...register("gender")}
              />
              {errors.gender && (
                <p className="text-red-500 text-xs">{errors.gender.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="role">Função</Label>
            <Input
              id="role"
              placeholder="Ex: Usuário padrão"
              {...register("role")}
            />
            {errors.role && (
              <p className="text-red-500 text-xs">{errors.role.message}</p>
            )}
          </div>

          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <div className="rounded-md border p-4 bg-[#FAFAFA]">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <p className="text-xs text-muted-foreground">
                      Defina se o usuário estará ativo ao ser adicionado.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      id="status"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <p className="text-sm">{isActive ? "Ativo" : "Inativo"}</p>
                  </div>
                </div>
              </div>
            )}
          />

          <DialogFooter className="flex justify-end gap-2 pt-2 absolute bottom-10 right-0">
            <Button
              type="button"
              variant="outline"
              className="rounded-full h-[40px] font-normal"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full h-[40px] font-normal"
            >
              {isSubmitting ? "Salvando..." : "Adicionar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
