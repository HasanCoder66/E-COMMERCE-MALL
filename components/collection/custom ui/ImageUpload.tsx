import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {

  // console.log(value, 'value is here ===============================')

  const onUpload = (result: any) => {
    // console.log(result);
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4 ">
        {/* <Image src="https://res.cloudinary.com/dc5escxz1/image/upload/v1734015224/hxyvc5pizmxtw9kp9mir.jpg" width={200} height={200} alt="Image"/> */}
        {value.map((url,i) => (
          <Image
            src={url}
            alt="collection"
            key={i}
            width={200}
            height={200}
            className="object-cover rounded-lg "
          />
        ))}
      </div>
      <CldUploadWidget uploadPreset="ecommerceadmin" onUploadAdded={onUpload}>
        {({ open }) => {
          return (
            <Button className="bg-grey-1 text-white" onClick={() => open()}>
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
