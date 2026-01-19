import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";

interface FormFieldProps<TForm extends FieldValues> {
  name: Path<TForm>;
  control: UseFormReturn<TForm>["control"];
  placeholder: string;
  label: string;
  type?: string;
  hideError?: boolean;
}

function FormField<TForm extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  hideError = false,
}: FormFieldProps<TForm>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="grid">
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Input
            {...field}
            type={type}
            id={name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
          />
          {fieldState.invalid && !hideError && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}

export default FormField;
