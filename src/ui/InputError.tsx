import { BadgeX } from "lucide-react";

type InputErrorProps = {
  error?: string | null;
};

const InputError = ({ error }: InputErrorProps) => {
  return (
    <div className="text-red-500 flex items-center justify-center gap-1">
      <BadgeX />
      <span>{error}</span>
    </div>
  );
};

export default InputError;
