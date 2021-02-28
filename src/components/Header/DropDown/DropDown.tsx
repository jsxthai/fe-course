import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const DropDown = () => {
  return (
    <div>
      <Menu open={false} id="simple-menu">
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropDown;
