interface TitleTextBlockProps {
  title?: string;
  label: string | number;
}
export function TitleTextBlock({ title, label }: TitleTextBlockProps) {
  return (
    <>
      {title && <label className="font-medium">{title}&nbsp;</label>}

      <label
        className={`block w-full sm:text-sm px-2 placeholder:text-gray-500 text-gray-900 `}
      >
        {label}
      </label>
    </>
  );
}
