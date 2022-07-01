export const Input = (props) => {

    return (
      <div>
        <input
          value={props.text}
          onChange={({ target }) => props.setText(target.value)}
          type="text"
          placeholder="Поиск товара..."
        />
      </div>
    );
  };