import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import getFormValues from "@/functions/getFormValues.ts";
import FileInput from "../ui/fileInput";
import { useState } from "react";

import useCalcDiscount from "@/hooks/useCalcDiscount";

const AddProductForm = () => {
  const [discount, setDiscount] = useState(true); //<- discount switch state

  const {
    price,
    discountPrice,
    finalPrice,
    handlePriceChange,
    handleDiscountChange
  } = useCalcDiscount(); //<- discount calculation hook

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = getFormValues(form);
    console.log(data);
  };

  return (
    <form
      action=""
      className="mt-12 font-poppins"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col-reverse md:flex-row  w-full gap-5 ">
        <section className="relative w-full flex flex-col gap-8 md:gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-white/70">
              Product Name
            </label>
            <Input
              className="bg-transparent border-white/50 placeholder:text-white/50"
              placeholder="Enter product name"
              type="text"
              name="productName"
              id="email"
              autoComplete="off"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-white/70">
              Category
            </label>
            <Select name="category">
              <SelectTrigger className="w-full border-white/50 h-10">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-customPrimary border border-white/50">
                <SelectGroup className="">
                  <SelectItem value="Neon Light">Neon Light</SelectItem>
                  <SelectItem value="Glow Text Display">
                    Glow Text Display
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <section className="flex lg:flex-row flex-col  items-center w-full  gap-8 justify-between">
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="price">Price</label>
              <Input
                className="bg-transparent border-white/50 placeholder:text-white/50"
                placeholder="Enter product price"
                type="number"
                name="price"
                id="price"
                autoComplete="off"
                required={true}
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="flex mt-0 lg:mt-10 items-center gap-4 w-full lg:w-auto whitespace-nowrap">
              <label htmlFor="hasDiscount">Apply Discount</label>
              <Switch
                id="hasDiscount"
                className="data-[state=unchecked]:bg-white/20"
                onClick={() => {
                  setDiscount(!discount);
                }}
              />
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="discount" className="text-white/70">
                Discount
              </label>
              <Input
                className="bg-transparent border-white/50 placeholder:text-white/50"
                placeholder="eg: 20 -> 20% "
                type="number"
                name="discount"
                id="discount"
                autoComplete="off"
                required={true}
                disabled={discount}
                value={discountPrice}
                onChange={handleDiscountChange}
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="finalPrice" className="text-white/70">
                Final Price
              </label>
              <Input
                className="bg-transparent border-white/50 placeholder:text-white/50"
                placeholder="Calculating ..."
                type="number"
                name="finalPrice"
                id="finalPrice"
                autoComplete="off"
                required={true}
                disabled={true}
                value={finalPrice}
              />
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-4">
              <label htmlFor="description" className="text-white/70">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="bg-transparent border border-white/50 p-2 rounded-md resize-none"
                placeholder="Enter product description"
                required={true}
              ></textarea>
            </div>
          </section>
        </section>
        <FileInput name="productImage" />
      </div>
      <div className="mt-8 md:mt-2 w-full"></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
