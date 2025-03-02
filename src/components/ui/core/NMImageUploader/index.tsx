"use client";
import { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import { cn } from "@/lib/utils";

type IImageUploaderProps = {
  setImageFiles: Dispatch<SetStateAction<File[] | []>>;
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
  label?: string;
  className?: string;
};

const NMImageUploader = ({
  setImageFiles,
  setImagePreview,
  label = "Upload Images",
  className,
}: IImageUploaderProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const loader = new FileReader();
      loader.onloadend = () => {
        setImagePreview((prev) => [...prev, loader.result as string]);
      };
      loader.readAsDataURL(file);

      event.target.value = "";
    }
  };

  return (
    <div className={cn("flex flex-col items-center w-full gap-4", className)}>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        {label}
      </label>
      {/* <div>
        {imagePreview.map((preview, idx) => (
          <Image
            key={idx}
            src={preview}
            alt="images"
            height={500}
            width={500}
          />
        ))}
      </div> */}
    </div>
  );
};

export default NMImageUploader;
