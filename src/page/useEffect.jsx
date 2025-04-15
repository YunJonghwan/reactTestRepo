const [count, setCount] = useState(0);

function test() {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
    </div>
  )
}

export default test