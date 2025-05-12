export default function Geral() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Configurações Gerais</h1>
      <p className="text-sm text-gray-500">
        Aqui você pode configurar as opções gerais do sistema.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Configurações de Sistema</h2>
        <p className="text-sm text-gray-500">
          Ajuste as configurações do sistema conforme necessário.
        </p>
      </div>
    </div>
  );
}
