function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const itemCount = items.length;
  const packedItemCount = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemCount / itemCount) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${itemCount} items on your list, and you already packed ${packedItemCount} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
