import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

function LeftCard(props) {
  const { data, setData, isChecked } = props;
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
        {data.map((item) => (
          <div>
            <h2>{item.group}</h2>
            <List>
              {item.items.map((element) => (
                <ListItem
                  style={{ cursor: "pointer" }}
                  onClick={() => setData(item.groupid, element.itemid)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={isChecked(item.groupid, element.itemid)}
                      color={"primary"}
                    />
                  </ListItemIcon>
                  <ListItemText>{element.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default LeftCard;
