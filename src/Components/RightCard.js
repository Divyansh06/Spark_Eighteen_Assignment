import { Card, CardContent, List, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function LeftCard(props) {
  const { data, setData } = props;
  return (
    <Card
      style={{
        margin: 20,
        padding: 20,
        height: window.innerHeight / 1.3,
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <CardContent>
        {data.length > 0 ? (
          data.map((item) => (
            <div>
              <h2>{item.group}</h2>
              <List>
                {item.items.map((element) =>
                  element.selected ? (
                    <div
                      style={{
                        backgroundColor: "#eee",
                        margin: 10,
                        padding: 1,
                        borderRadius: 5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p style={{ marginLeft: 20 }}>{element.name}</p>
                      </div>
                      <div>
                        <IconButton
                          style={{ marginTop: 2 }}
                          onClick={() => setData(item.groupid, element.itemid)}
                        >
                          <Close />
                        </IconButton>
                      </div>
                    </div>
                  ) : null
                )}
              </List>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: window.innerHeight / 4,
            }}
          >
            <h2 style={{ color: "grey" }}>No Value Selected</h2>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default LeftCard;
