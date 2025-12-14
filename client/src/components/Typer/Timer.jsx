export default function Timer({ time }) {
  return (
    <div className="fs-6 text-end mb-1">
      <i className="bi bi-stopwatch-fill"></i>
      {time}s
    </div>
  );
}
