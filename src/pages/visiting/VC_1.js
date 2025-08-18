//Shraddha Verma
import image1 from "../../assets/Shraddha Verma.jpg";
import image2 from "../../assets/common.png";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "500px", // fixed width
    height: "300px", // fixed height
    objectFit: "cover", // ensures image fits the box neatly
  },
};

const ImageLayout = () => {
  return (
    <div style={styles.wrapper}>
      <img src={image1} alt="Top" style={styles.image} />
      <img src={image2} alt="Bottom" style={styles.image} />
    </div>
  );
};

export default ImageLayout;
