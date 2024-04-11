import AddProductForm from "@/components/forms/AddProductForm";

const AddProductSection = () => {
  return (
    <div className="w-full min-h-[calc(100vh-9rem)]">
      <h1 className="text-2xl font-bold font-kobe">Add new Product</h1>
      <hr className="w-11/12 h-[2px] mt-2 bg-white"></hr>
      <AddProductForm />
    </div>
  );
};

export default AddProductSection;
