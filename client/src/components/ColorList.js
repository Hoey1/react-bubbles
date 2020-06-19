import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { v4 as uuid } from "uuid";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors, handleUpdate }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(initialColor);

  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const onAdd = (event) => {
    event.preventDefault();
    setNewColor({ ...newColor, id: uuid() });
    axiosWithAuth()
      .post(`http://localhost:5000/api/colors`, newColor)
      .then((res) => {
        handleUpdate(res);
      })
      .catch((err) => {
        console.log("youre color blind, you cannot add a color->", err);
      });
  };

  const saveEdit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        console.log(res);
        handleUpdate(colorToEdit);
      })
      .catch((err) => {
        console.log("there was a problem with that color -->", err);
      });
  };

  const deleteColor = (color) => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then((res) => {
        console.log(res);
        handleUpdate(res);
      })
      .catch((err) => {
        console.log("you cannot change the rainbow ->", err);
      });
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={(e) =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={(e) =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value },
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />

      <form>
        <h2>Add a color</h2>
        <label>
          Colorname
          <br />
          <input
            placeholder="solid purple"
            type="text"
            name="color"
            onChange={(e) => {
              setNewColor({ ...newColor, color: e.target.value });
              console.log(newColor);
            }}
          />
        </label>
        <br />
        <label>
          Hexcode
          <br />
          <input
            placeholder="#660c6e"
            type="text"
            name="hex"
            onChange={(e) =>
              setNewColor({
                ...newColor,
                code: { hex: e.target.value },
              })
            }
          />
        </label>
        <button onClick={onAdd}>Add!</button>
      </form>
    </div>
  );
};

export default ColorList;
