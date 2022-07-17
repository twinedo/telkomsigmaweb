import "./App.scss";
import { Spacer } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/damaryosaaji/freeapi/main/user.json"
      );

      const data = await response.json();
      console.log("data", data);
      setData(data);
    };

    fetchData();
  }, []);

  const randomRGB = () => Math.floor(Math.random() * 255);

  return (
    <div className="App">
      <header className="App-header">
        <div className="card-container">
          <div className="tab-bar">
            <div
              className={selectedTab === "tab1" ? "active-tab" : "unactive-tab"}
              onClick={() => setSelectedTab("tab1")}
            >
              Profile
            </div>
            <Spacer width={15} />
            <div
              className={selectedTab === "tab2" ? "active-tab" : "unactive-tab"}
              onClick={() => setSelectedTab("tab2")}
            >
              Settings
            </div>
          </div>
          {selectedTab === "tab1" && (
            <div className="tab1-container">
              <div className="tab1-section">
                <Spacer height={20} />
                <div
                  style={{ display: "flex", flex: 1, flexDirection: "column" }}
                >
                  <div className="justify-center">
                    <img
                      src="https://randomuser.me/api/portraits/lego/7.jpg"
                      className="avatar"
                      alt="profile-pict"
                    />
                  </div>
                  <Spacer height={50} />
                  <div className="title-section">Username</div>
                  <div className="value-section">{data?.username}</div>
                  <Spacer height={10} />
                  <div className="title-section">Fullname</div>
                  <div className="value-section">{data?.fullname}</div>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className="btn-outlined"
                    style={{ position: "absolute", right: 0, bottom: 0 }}
                  >
                    Edit
                  </div>
                </div>
              </div>
              <div className="divider-line" />
              <div className="tab2-section">
                <h3>Applications</h3>
                <Spacer height={15} />
                <div className="list">
                  {data?.aplikasi?.map((val) => (
                    <div key={val?.id_aplikasi}>
                      <div className="card-item">
                        <div>
                          <img
                            src={`https://picsum.photos/id/${val?.id_aplikasi}/300/200`}
                            alt="random"
                            style={{ borderRadius: 5 }}
                          />
                        </div>
                        <div>{val?.nama_aplikasi}</div>
                        <Spacer height={20} />
                        <div className="role-list">
                          {val?.roles?.map((o, i) => (
                            <div key={o.id_role} style={{ margin: 4 }}>
                              <div
                                className="role-item"
                                style={{
                                  backgroundColor: `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`,
                                }}
                              >
                                {o.nama_role}
                              </div>
                              {i < val?.roles?.length - 1 && (
                                <Spacer width={10} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Spacer width={15} />
                </div>
                <Spacer height={25} />
              </div>
            </div>
          )}
          {selectedTab === "tab2" && (
            <div className="coming-soon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/C%C3%B4ne_orange_-_under_construction.png"
                alt="under"
                style={{ height: 300 }}
              />
              <h3>Twin Edo Nugraha | ReactJS | 2022</h3>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
