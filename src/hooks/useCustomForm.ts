import React, { useState } from "react";

export default function useCustomForm(initialState: any) {
  const [formData, setFormData] = useState(initialState);

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return [formData, onChangeInput];
}
