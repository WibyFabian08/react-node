import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from "axios"
import { AuthContext } from '../App';

const api = "http://localhost:3001";

const ListMahasiswa = () => {
    
    useEffect(() => {
      fetchData();
      // timeOut();
    }, []);


    // var timeOut = () => {
    //   setTimeout(() => {
    //     console.log('Token kadaluarsa');
    //     dispatch({
    //       type: "LOGOUT"
    //     })
    //   }, state.tokenExpires)
    // }

  const [mahasiswa, setMahasiswa] = useState([]);

  const {state, dispatch} = useContext(AuthContext);

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
