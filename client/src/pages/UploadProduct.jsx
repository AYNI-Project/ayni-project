import { useState } from "react";
import { View, LeftContent, RightContent } from "../../src/styles/auth";
import Footer from "../../src/components/footer/Footer";

export default function UploadProduct() {

  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);

  function handleChange(i, e) {
    e.preventDefault();

    setInput((values) =>
      values.map((value, index) => (index === i ? e.target.value : value))
    );
  }

  function handleAddInput() {
    setInput((input) => input.concat(""));
  }

  const saveHandler = (e) => {
    e.preventDefault();

    // Map all existing form field values
    setData((data) => data.map((_, i) => e.target[i].value));

    // If there are any input values, add these and clear inputs
    if (input.length) {
      setData((data) => data.concat(input));
      setInput([]);
    }
  };

  // const [title, setTitle] = useState("");
  // const [file, setFile] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState("");
  // const [category, setCategory] = useState("");

  // async function addProduct() {
  //   console.warn(title, file, description, status, category)
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('title', title);
  //   formData.append('status', status);
  //   formData.append('category', category);
  //   formData.append('description', description);

  //   let result = await fetch("http://localhost:3000/upload-product", {
  //     method: 'POST',
  //     body: formData
  //   });
  //   alert("Data has been uploaded successfully.")
  // }

  return (
    <>
      <View>
        <LeftContent>
          <button type="button" className="btn" onClick={handleAddInput}>
            Add Input fields
          </button>
          {input.map((input, idx) => {
            return (<div key={idx}>
              <input
                type="text"
                placeholder="Enter text"
                onChange={(e) => handleChange(idx, e)}
                value={input.value}
              />
            </div>
            );
          })}

          <form onSubmit={saveHandler}>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <input id={i} defaultValue={item} />
                </div>
              );
            })}
            <button className="btn" type="submit">
              Guardar
            </button>
          </form>
        </LeftContent>
        <RightContent>
          <div className="App">
            <h2>Display Added Fields and Edit</h2>

            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px"
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </RightContent>
      </View>
      <Footer />
    </>)
}


{/* <View>
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
              </option> */}
{/* {options?.map((category) => ( */ }
{/* <option key={category.value} value={category.value}>
              {category.label}
            </option> */}
{/* } */ }
{/* </select>
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
    </> */}