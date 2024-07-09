// /app/week-4/page.js
import NewItem from './new-item';

export default function Week4() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Item</h1>
      <NewItem />
    </div>
  );
}
