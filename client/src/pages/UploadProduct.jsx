import React from 'react';
import { useState } from "react";
import { useForm } from "@pankod/refine-react-hook-form";
import { useSelect, useApiUrl } from "@pankod/refine-core";

export default function UploadProduct() {

  const [isUploading, setIsUploading] = useState(false);

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const apiURL = useApiUrl();

  const { options } = useSelect({
    resource: "categories",
  });

  const onSubmitFile = async () => {
    setIsUploading(true);
    const inputFile = document.getElementById(
      "fileInput",
    );

    const formData = new FormData();
    formData.append("file", inputFile?.files?.item(0));

    const res = await axios
      .post { url } (
        `${apiURL}upload-product`,
        formData,
        {
          withCredentials: false,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        },
        setValue("thumbnail", res.data.url));
    setIsUploading(false);
  };

  return (
    <View>
      <LeftContent>

      </LeftContent>
      <RightContent>
        <form
          onSubmit={handleSubmit(onFinish)}
        >
          <label>Título:</label>
          <input
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
          <br />
          <label>Descripción: </label>
          <br />
          <textarea
            {...register("content", { required: true })}
            rows={10}
            cols={50}
          />
          {errors.content && <span>This field is required</span>}
          <br/>
          <label>Estado: </label>
          <select
            {...register("status")}
          >
            <option value="published">Publicado</option>
            <option value="draft">Borrador</option>
          </select>
          <br />
          <label>Categoria: </label>
          <select
            defaultValue={""}
            {...register("category.id", { required: true })}
          >
            <option value={""} disabled>
              Selecciona:
            </option>
            {options?.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && <span>This field is required</span>}
          <br />

          <br />
          <label>Imagen: </label>
          <input id="fileInput" type="file"
            onChange={onSubmitFile}
          />
          <input
            type="hidden"
            {...register("thumbnail", { required: true })}
          />
          {errors.thumbnail && <span>This field is required</span>}
          <br />
          <br />
          <input type="submit"
            disabled={isUploading}
            value="Submit" />
          {formLoading && <p>Cargando...</p>}
        </form>
      </RightContent>
    </View>
  );
};
