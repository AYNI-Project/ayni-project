import { useState } from "react";
import { View, LeftContent, RightContent } from "../../src/styles/auth";
import Footer from "../../src/components/footer/Footer";

export default function UploadProduct() {

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  async function addProduct() {
    console.warn(title, file, description, status, category)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('status', status);
    formData.append('category', category);
    formData.append('description', description);

    let result = await fetch("http://localhost:3000/upload-product", {
      method: 'POST',
      body: formData
    });
    alert("Data has been uploaded successfully.")
  }

  return (
    <>
      <View>
        <LeftContent>
          ADD PRODUCT
        </LeftContent>
        <RightContent>
          <form>
            <label>Título:</label>
            <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label>Descripción:</label>
            <br />
            <textarea type="text" className="form-control" onChange={(e) => setDescription(e.target.value)}
            />
            <label>Estado:</label>
            <select type="text" className="form-control" onChange={(e) => setStatus(e.target.value)}>
              <option value="published">Publicado</option>
              <option value="draft">Borrador</option>
            </select>
            <br />
            <label>Categoria:</label>
            <select type="text" className="form-control" onChange={(e) => setCategory(e.target.value)}>
              <option value={""} disabled>
                Selecciona:
              </option>
              {/* {options?.map((category) => ( */}
              {/* <option key={category.value} value={category.value}>
              {category.label}
            </option> */}
              {/* } */}
            </select>
            <br />
            <br />
            <label>Imagen: </label>
            <input id="fileInput" type="file"
              onChange={(e) => setFile(e.target.files[0])} placeholder="File"
            />
            <br />
            <br />
            <button onClick={UploadProduct}></button>
          </form>
        </RightContent>
      </View >
      <Footer />
    </>
  );
};
