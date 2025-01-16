function Error() {
  return (
    <div class="error">
      <div class="error__title">
        <h2 class="heading-secondary heading-secondary--error">
          Uh oh! Something went wrong!{" "}
        </h2>
        <h2 class="error__emoji">😢 🤯</h2>
      </div>
      <div class="error__msg"></div>
    </div>
  );
}

export default Error;
