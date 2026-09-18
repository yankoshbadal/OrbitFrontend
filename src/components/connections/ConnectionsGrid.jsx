import ConnectionCard from "./ConnectionCard";

const ConnectionsGrid = ({ connections, onBlock, onRemove }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
    {connections.map((connection) => (
      <ConnectionCard
        key={connection.id}
        connection={connection}
        onBlock={onBlock}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export default ConnectionsGrid;
