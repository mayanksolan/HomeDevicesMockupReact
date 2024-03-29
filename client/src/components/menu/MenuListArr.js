import lamp from "../../assets/images/lamp.png";
import ac from "../../assets/images/ac.png";
import lock from "../../assets/images/lock.png";
import tv from "../../assets/images/tv.png";
import thermostat from "../../assets/images/thermostat.png";

const menuArr = [
  { id: 1, name: "BED LAMP", where: "Bedroom", src: lamp },
  { id: 2, name: "NORIA AC", where: "Bedroom", src: ac },
  {
    id: 3,
    name: "DOOR LOCK",
    where: "Home Office",
    src: lock
  },
  { id: 4, name: "LG TV", where: "Living Room", src: tv },
  {
    id: 5,
    name: "THERMOSTAT",
    where: "Bedroom",
    src: thermostat
  }
];

export default menuArr;
