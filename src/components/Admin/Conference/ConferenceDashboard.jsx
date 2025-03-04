import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllConferences,
  deleteConference,
} from "../../../services/conference";
export function ConferenceDashboard() {
  const [confList, setConfList] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function getAllConfs() {
    try {
      const res = await getAllConferences();
      setConfList(res);
    } catch (err) {
      console.error("Can't get conferences", err);
    }
  }

  async function deleteConf(id) {
    try {
      const res = await deleteConference(id, token);
      if (res.status === 200) {
        getAllConfs();
      }
    } catch (err) {
      console.error("Can't delete:", err);
    }
  }

  useEffect(() => {
    getAllConfs();
  }, [confList]);

  return (
    <>
      <main className="conference">
        <h1>Liste des conférences</h1>

        <button className="save" onClick={() =>{navigate("/admin/conference/add")}}>+ Ajouter</button>
        <table>
          <thead>
          <tr>
            <th>Titre</th>
            <th>Actions</th>
          </tr>
          </thead>
          <>
            <tbody>
            {confList.map((conf) => (
              <tr key={conf.id}>
                <td>{conf.title}</td>
                <td className="buttons">
                  <>
                    <button
                      className="default"
                      onClick={() => {
                        navigate(`/conference/${conf.id}`);
                      }}
                    >
                      Détails
                    </button>

                    <button
                      className="edit"
                      onClick={() => {
                        navigate(`/conference/${conf.id}`, {
                          state: { edit: true },
                        });
                      }}
                    >
                      Modifier
                    </button>

                    <button
                      className="delete"
                      onClick={() => {
                        deleteConf(conf.id, token);
                      }}
                    >
                      Supprimer
                    </button>
                  </>
                </td>
              </tr>
            ))}
            </tbody>
          </>
        </table>
      </main>
    </>
  );
}
