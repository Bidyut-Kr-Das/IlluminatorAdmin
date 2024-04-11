const getFormValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const formElements = form.elements;

  for (let element of formElements as any) {
    if (element.name && element.value) {
      if (element.name === "productImage") continue;
      formData.append(element.name, element.value);
    }
  }

  const fileInput = form.querySelector(
    `input[type="file"]`
  ) as HTMLInputElement;
  if (fileInput && fileInput.files) {
    formData.append(fileInput.name, fileInput.files[0]);
  }

  return formData;
  // const data = Object.fromEntries(formData);
  // // return formData;
  // return data;
};
export default getFormValues;
