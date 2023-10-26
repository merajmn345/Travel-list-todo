function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          "You got everything Ready to go ✈️"
        ) : (
          <em>
            {`You have ${numItems} item in your list, and you alredy packed
            ${packedItem} (${percentage}%)`}
          </em>
        )}
      </em>
    </footer>
  );
}

export default Stats;
