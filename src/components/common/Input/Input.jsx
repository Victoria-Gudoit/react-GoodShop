export const Input = ({setText, text}) => {

    return (
      <div>
        <input
          value={text}
          onChange={({ target }) => setText(target.value)}
          type="text"
          placeholder="Поиск товара..."
        />
      </div>
    );
  };