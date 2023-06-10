

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <img
        src="/path/to/error-image.gif"
        alt="404 Error"
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
