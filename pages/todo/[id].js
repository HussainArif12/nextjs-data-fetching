export default function TodoInfo({ todo }) {
  console.log(todo);
  return (
    <>
      <h1>{todo.title}</h1>
      <input type="checkbox" readOnly checked={todo.completed}></input>
      <label for="completed">Completed</label>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
  );
  const todo = await res.json();

  return {
    props: {
      todo,
    },
  };
};
