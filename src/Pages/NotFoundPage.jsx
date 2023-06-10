

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ik9tl9M1iYU-nuvvGP9CRjc0RaIHPkxUrQ&usqp=CAU"
        alt=" "
        style={styles.errorImage}
      />
      <h1 style={styles.notFoundHeading}>Oops! Page Not Found</h1>
      <p style={styles.notFoundText}>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
    fontFamily: "Arial, sans-serif",
  },
  errorImage: {
    maxWidth: "400px",
    marginBottom: "24px",
  },
  notFoundHeading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  },
  notFoundText: {
    fontSize: "18px",
    color: "#666",
  },
};

export default NotFoundPage;
