import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../App";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const api = "http://localhost:3001";

const ListMahasiswa = () => {
    
    useEffect(() => {
      fetchData();
    }, []);

  const [mahasiswa, setMahasiswa] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      return <Redirect to={"/login"}></Redirect>;
    }

  function fetchData () {
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    };

    axios
      .get(api + "/auth/tampilmahasiswa", config)
      .then((res) => {
        setMahasiswa(res.data.values);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="body mt-3">
      <h2>Daftar Mahasiswa</h2>
      <hr />
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nim</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Opsi</th>
            </tr>
          </thead>
          {mahasiswa.map((mahasiswa) => (
            <tbody>
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.id_mahasiswa}</td>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button variant="danger">Hapus</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ListMahasiswa;
